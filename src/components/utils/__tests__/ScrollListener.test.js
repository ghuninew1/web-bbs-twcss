import { afterEach, describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import ScrollListener from "../ScrollListener";

describe("ScrollListener", () => {
    const originalWidth = window.innerWidth;
    const originalScrollY = window.scrollY;

    afterEach(() => {
        window.innerWidth = originalWidth;
        window.scrollY = originalScrollY;
    });

    it("skips mobile updates only when desktopOnly is enabled", () => {
        window.innerWidth = 375;
        const layout = renderHook(() => ScrollListener({ desktopOnly: true }));
        const progress = renderHook(() => ScrollListener());

        act(() => {
            window.scrollY = 100;
            window.dispatchEvent(new Event("scroll"));
        });

        expect(layout.result.current.y).toBe(0);
        expect(progress.result.current.y).toBe(100);

        act(() => {
            window.innerWidth = 1024;
            window.scrollY = 200;
            window.dispatchEvent(new Event("scroll"));
        });

        expect(layout.result.current.y).toBe(200);
        expect(progress.result.current.y).toBe(200);
    });
});
