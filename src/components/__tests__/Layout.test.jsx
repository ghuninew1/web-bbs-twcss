import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";

// Mock child components
vi.mock("../Header", () => ({
    default: () => <div>Header</div>,
}));

vi.mock("../Navbar", () => ({
    default: () => <div>Navbar</div>,
}));

vi.mock("../Footer", () => ({
    default: () => <div>Footer</div>,
}));

// Mock Fallback
vi.mock("../Fallback", () => ({
    default: () => <div>Loading...</div>,
}));

// Mock ScrollListener
vi.mock("../utils/ScrollListener", () => ({
    default: () => ({
        y: 0,
        lastY: 0,
    }),
}));

// Mock IntersectionObserver hook
vi.mock("../../hook/useIntersectionObserver", () => ({
    useIntersectionObserver: () => [
        vi.fn(),
        {
            isIntersecting: true,
        },
    ],
}));

describe("Layout Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    const renderLayout = () => {
        return render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<div>Test Page</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>,
        );
    };

    it("renders Header, Navbar and Footer", () => {
        renderLayout();

        expect(screen.getByText("Header")).toBeInTheDocument();
        expect(screen.getByText("Navbar")).toBeInTheDocument();
        expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("renders Outlet content", () => {
        renderLayout();

        expect(screen.getByText("Test Page")).toBeInTheDocument();
    });

    it("renders logo video", () => {
        renderLayout();

        const video = document.querySelector("video");

        expect(video).toBeInTheDocument();
        expect(video).toHaveAttribute("width", "700");
        expect(video).toHaveAttribute("height", "573");
        expect(video).toHaveAttribute("autoplay");
        expect(video).toHaveAttribute("loop");
        expect(video.muted).toBe(true);
        expect(video).toHaveAttribute("playsinline");
    });

    it("renders Layout without crashing", () => {
        renderLayout();

        expect(screen.getByText("Header")).toBeInTheDocument();
        expect(screen.getByText("Navbar")).toBeInTheDocument();
        expect(screen.getByText("Footer")).toBeInTheDocument();
        expect(screen.getByText("Test Page")).toBeInTheDocument();
    });
});
