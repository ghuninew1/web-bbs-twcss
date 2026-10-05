import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useObserver from "../useObserver";

describe("useObserver", () => {
    let mockObserve;
    let mockDisconnect;
    let observerCallback;
    let observerOptions;

    beforeEach(() => {
        mockObserve = vi.fn();
        mockDisconnect = vi.fn();
        observerCallback = null;
        observerOptions = null;

        class MockObserver {
            constructor(callback, options) {
                observerCallback = callback;
                observerOptions = options;
            }

            observe = mockObserve;
            disconnect = mockDisconnect;
        }

        window.IntersectionObserver = MockObserver;
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("returns false initially", () => {
        const ref = { current: document.createElement("div") };

        const { result } = renderHook(() => useObserver(ref));

        expect(result.current).toBe(false);
    });

    it("observes the referenced DOM node", () => {
        const div = document.createElement("div");
        const ref = { current: div };

        renderHook(() => useObserver(ref));

        expect(mockObserve).toHaveBeenCalledWith(div);
    });

    it("updates visibility when IntersectionObserver fires", () => {
        const div = document.createElement("div");
        const ref = { current: div };

        const { result } = renderHook(() => useObserver(ref));

        act(() => {
            observerCallback([{ isIntersecting: true }]);
        });

        expect(result.current).toBe(true);

        act(() => {
            observerCallback([{ isIntersecting: false }]);
        });

        expect(result.current).toBe(false);
    });

    it("uses custom rootMargin and threshold", () => {
        const div = document.createElement("div");
        const ref = { current: div };

        renderHook(() =>
            useObserver(ref, "100px", 0.5)
        );

        expect(observerOptions).toEqual({
            threshold: 0.5,
            rootMargin: "100px",
        });
    });

    it("disconnects observer on unmount", () => {
        const div = document.createElement("div");
        const ref = { current: div };

        const { unmount } = renderHook(() => useObserver(ref));

        unmount();

        expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });

    it("returns true when IntersectionObserver is unavailable", () => {
        const div = document.createElement("div");
        const ref = { current: div };

        const originalIntersectionObserver =
            window.IntersectionObserver;

        delete window.IntersectionObserver;

        const { result } = renderHook(() => useObserver(ref));

        expect(result.current).toBe(true);

        window.IntersectionObserver =
            originalIntersectionObserver;
    });

    it("does not create observer when ref has no current element", () => {
        const ref = { current: null };

        renderHook(() => useObserver(ref));

        expect(mockObserve).not.toHaveBeenCalled();
    });
});