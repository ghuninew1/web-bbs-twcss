import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cx, scrollTo, wait } from "../index";

describe("Utils - index.js", () => {
    describe("cx", () => {
        it("joins classes correctly", () => {
            expect(cx("btn", "btn-primary")).toBe("btn btn-primary");
        });

        it("filters out falsy values like false, null, undefined, and empty strings", () => {
            expect(cx("a", false, null, undefined, "", "b")).toBe("a b");
        });

        it("returns empty string if no valid classes provided", () => {
            expect(cx(null, false, undefined)).toBe("");
            expect(cx()).toBe("");
        });
    });

    describe("scrollTo", () => {
        beforeEach(() => {
            window.scrollTo = vi.fn();
        });

        it("calls window.scrollTo with default top: 0 and smooth behavior", () => {
            scrollTo();
            expect(window.scrollTo).toHaveBeenCalledWith({
                top: 0,
                behavior: "smooth",
            });
        });

        it("calls window.scrollTo with specified top value", () => {
            scrollTo(500);
            expect(window.scrollTo).toHaveBeenCalledWith({
                top: 500,
                behavior: "smooth",
            });
        });
    });

    describe("wait", () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it("resolves after the specified amount of time", async () => {
            const promise = wait(1000);
            vi.advanceTimersByTime(1000);
            await expect(promise).resolves.toBeUndefined();
        });
    });
});
