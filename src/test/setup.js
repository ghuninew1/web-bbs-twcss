import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock IntersectionObserver
class MockIntersectionObserver {
    constructor(callback, options) {
        this.callback = callback;
        this.options = options;
    }
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
}

window.IntersectionObserver = MockIntersectionObserver;
global.IntersectionObserver = MockIntersectionObserver;
