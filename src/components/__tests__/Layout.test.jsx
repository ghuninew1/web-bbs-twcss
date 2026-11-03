import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import Layout from "../Layout";

const loadingPage = new Promise(() => {});
const PendingPage = () => { throw loadingPage; };

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

const observer = vi.hoisted(() => ({ setVisible: null }));

// Mock IntersectionObserver hook
vi.mock("../../hook/useIntersectionObserver", async () => {
    const { useState } = await import("react");
    return {
        useIntersectionObserver: () => {
            const [visible, setVisible] = useState(true);
            observer.setVisible = setVisible;
            return [vi.fn(), { isIntersecting: visible }];
        },
    };
});

describe("Layout Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
        vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    });

    afterEach(() => vi.restoreAllMocks());

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

    it("pauses the logo when it leaves the screen and resumes when it returns", () => {
        renderLayout();
        expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);

        act(() => observer.setVisible(false));
        expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1);

        act(() => observer.setVisible(true));
        expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
    });

    it("renders Layout without crashing", () => {
        renderLayout();

        expect(screen.getByText("Header")).toBeInTheDocument();
        expect(screen.getByText("Navbar")).toBeInTheDocument();
        expect(screen.getByText("Footer")).toBeInTheDocument();
        expect(screen.getByText("Test Page")).toBeInTheDocument();
    });

    it("keeps the header and footer visible while a page is loading", () => {
        render(
            <MemoryRouter initialEntries={["/ourwork/example"]}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/ourwork/example" element={<PendingPage />} />
                    </Route>
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText("Header")).toBeInTheDocument();
        expect(screen.getByText("Navbar")).toBeInTheDocument();
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("hides the mobile header on downward scroll and reveals it on upward scroll", () => {
        vi.stubGlobal("innerWidth", 390);
        renderLayout();
        const header = screen.getByText("Navbar").closest("header");
        vi.stubGlobal("scrollY", 200);
        fireEvent.scroll(window);
        expect(header).toHaveClass("-translate-y-full");
        vi.stubGlobal("scrollY", 150);
        fireEvent.scroll(window);
        expect(header).toHaveClass("translate-y-0");
        vi.unstubAllGlobals();
    });
});
