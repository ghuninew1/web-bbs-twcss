import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Fallback from "../Fallback";

describe("Fallback Component", () => {
    it("renders loading spinner container with svg", () => {
        const { container } = render(<Fallback />);
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("animate-spin");
    });
});
