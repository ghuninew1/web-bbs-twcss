import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component", () => {
    it("renders copyright and address information", () => {
        render(<Footer />);

        expect(
            screen.getByText(/Copyright ©Big Brain Studio/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Plan House Bangkok Building/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/contact@bigbrain-studio.com/i)
        ).toBeInTheDocument();
    });

    it("renders social media links", () => {
        render(<Footer />);

        const facebookImg = screen.getByAltText("Facebook");
        const youtubeImg = screen.getByAltText("Youtube");
        const instagramImg = screen.getByAltText("Instagram");

        expect(facebookImg).toBeInTheDocument();
        expect(youtubeImg).toBeInTheDocument();
        expect(instagramImg).toBeInTheDocument();
    });
});
