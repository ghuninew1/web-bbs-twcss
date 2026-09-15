import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useIntersectionObserver } from "../useIntersectionObserver";

describe("useIntersectionObserver", () => {
    let mockObserve;
    let mockDisconnect;
    let observerCallback;

    beforeEach(() => {
        mockObserve = vi.fn();
        mockDisconnect = vi.fn();
        observerCallback = null;

        class MockObserver {
            constructor(callback, options) {
                observerCallback = callback;
                this.options = options;
            }
            observe = mockObserve;
            disconnect = mockDisconnect;
            unobserve = vi.fn();
        }

        window.IntersectionObserver = MockObserver;
    });

    it("returns a callback ref and initial null entry", () => {
        const { result } = renderHook(() => useIntersectionObserver());
        const [ref, entry] = result.current;

        expect(typeof ref).toBe("function");
        expect(entry).toBeNull();
    });

    it("observes a valid DOM node when attached to ref", () => {
        const { result } = renderHook(() =>
            useIntersectionObserver({ threshold: 0.5 })
        );
        const [ref] = result.current;

        const div = document.createElement("div");
        act(() => {
            ref(div);
        });

        expect(mockObserve).toHaveBeenCalledWith(div);
    });

    it("updates entry state when IntersectionObserver fires", () => {
        const { result } = renderHook(() => useIntersectionObserver());
        const [ref] = result.current;

        const div = document.createElement("div");
        act(() => {
            ref(div);
        });

        const fakeEntry = { isIntersecting: true, intersectionRatio: 1 };
        act(() => {
            observerCallback([fakeEntry]);
        });

        expect(result.current[1]).toEqual(fakeEntry);
    });

    it("disconnects previous observer when node changes or is removed", () => {
        const { result } = renderHook(() => useIntersectionObserver());
        const [ref] = result.current;

        const div1 = document.createElement("div");
        act(() => {
            ref(div1);
        });

        expect(mockObserve).toHaveBeenCalledTimes(1);

        // Detach / change node
        act(() => {
            ref(null);
        });

        expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });
});
