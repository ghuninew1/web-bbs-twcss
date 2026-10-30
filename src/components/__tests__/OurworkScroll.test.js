import { afterEach, describe, expect, it, vi } from "vitest";
import { restoreOurworkScroll, saveOurworkScroll } from "../pages/ourwork/scrollPosition";

describe("Ourwork scroll position", () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it("restores and consumes the saved position on mobile", () => {
        vi.stubGlobal("innerWidth", 390);
        vi.stubGlobal("scrollY", 850);
        const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
        saveOurworkScroll();
        restoreOurworkScroll();
        restoreOurworkScroll();
        expect(scrollTo).toHaveBeenCalledOnce();
        expect(scrollTo).toHaveBeenCalledWith({ top: 850, behavior: "instant" });
    });

    it("does not restore a mobile position on desktop", () => {
        vi.stubGlobal("innerWidth", 390);
        saveOurworkScroll();
        vi.stubGlobal("innerWidth", 1024);
        const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
        restoreOurworkScroll();
        expect(scrollTo).not.toHaveBeenCalled();
    });
});
