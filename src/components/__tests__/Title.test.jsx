import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import Title from "../Title";

describe("Title Component", () => {
    beforeEach(() => {
        document.title = "Initial Title";
    });

    it("sets document title with prefix when title prop is provided", () => {
        render(<Title title="Home" />);
        expect(document.title).toBe("©BBS - Home");
    });

    it("sets default document title when title prop is not provided", () => {
        render(<Title />);
        expect(document.title).toBe("©Big Brain Studio");
    });

    it("resets document title to default on unmount", () => {
        const { unmount } = render(<Title title="Custom Page" />);
        expect(document.title).toBe("©BBS - Custom Page");

        unmount();
        expect(document.title).toBe("©Big Brain Studio");
    });
});
