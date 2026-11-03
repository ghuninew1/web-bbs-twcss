import { Activity } from "react";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Ourwork from "../pages/ourwork/Ourwork";

describe("Ourwork entrance animation", () => {
    it("does not replay after the animation finishes and the page is shown again", () => {
        vi.useFakeTimers();
        const page = (active) => (
            <MemoryRouter>
                <Activity mode={active ? "visible" : "hidden"}>
                    <Ourwork active={active} />
                </Activity>
            </MemoryRouter>
        );
        const { rerender } = render(page(true));
        const card = screen.getAllByRole("link")[0].parentElement;
        expect(card).toHaveClass("animate-fadeInUp");
        act(() => vi.advanceTimersByTime(800));
        expect(card).not.toHaveClass("animate-fadeInUp");
        vi.useRealTimers();
        rerender(page(false));
        rerender(page(true));
        expect(screen.getAllByRole("link")[0].parentElement).toBe(card);
        expect(card).not.toHaveClass("animate-fadeInUp");
    });
});
