import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsItem from "../pages/news/NewsItem";

describe("NewsItem", () => {
    it("opens the same news item with keyboard and mouse", async () => {
        const user = userEvent.setup();
        const onReadMore = vi.fn();
        render(<NewsItem item={{ id: "News image", src: "/news.avif", to: "news" }} index={1} onReadMore={onReadMore} />);

        const image = screen.getByRole("button", { name: "News image" });
        image.focus();
        await user.keyboard("{Enter} ");
        await user.click(image);
        await user.click(screen.getByRole("button", { name: "read more" }));

        expect(onReadMore).toHaveBeenCalledTimes(4);
        for (const call of onReadMore.mock.calls) {
            expect(call).toEqual(["news", 2, image]);
        }
    });
});
