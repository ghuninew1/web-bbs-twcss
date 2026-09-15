import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToTop from "../ToTop";

describe("ToTop Component", () => {
    beforeEach(() => {
        window.scrollTo = vi.fn();
    });

    it("renders progress bar and to top button", () => {
        render(<ToTop />);

        const button = screen.getByRole("button", { name: /to top/i });
        expect(button).toBeInTheDocument();
    });

    it("triggers window.scrollTo to top when button is clicked", async () => {
        const user = userEvent.setup();
        render(<ToTop />);

        const button = screen.getByRole("button", { name: /to top/i });
        await user.click(button);

        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });
});
