import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
    it("renders studio title and subtitle correctly", () => {
        render(<Header />);

        expect(screen.getByText(/BIG BRAIN/i)).toBeInTheDocument();
        expect(screen.getByText(/STUDIO/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Animation Intellectual Properties/i)
        ).toBeInTheDocument();
    });
});
