import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
    const renderNavbar = () => {
        return render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
    };

    it("renders navigation links", () => {
        renderNavbar();

        expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Studio").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Ourwork").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Service").length).toBeGreaterThan(0);
        expect(screen.getAllByText("News").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Jobs").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Annoucement").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
    });

    it("toggles mobile menu when menu button is clicked", async () => {
        const user = userEvent.setup();
        renderNavbar();

        const menuButton = screen.getByRole("button", { name: /Open Menu/i });
        expect(menuButton).toBeInTheDocument();

        // Click to open
        await user.click(menuButton);
        // Click to close
        await user.click(menuButton);
    });
});
