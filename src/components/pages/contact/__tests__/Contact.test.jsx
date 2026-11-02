import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

vi.mock("../../../index", () => ({ Title: () => null }));
vi.mock("../../../Iframe", () => ({ GoogleMapEmbed: () => null }));

beforeEach(() => {
    const portal = document.createElement("div");
    portal.id = "portal";
    document.body.appendChild(portal);
});
afterEach(() => { vi.unstubAllGlobals(); document.getElementById("portal")?.remove(); });

async function fill(user) {
    await user.type(screen.getByRole("textbox", { name: "Name" }), "Jane Doe");
    await user.type(screen.getByRole("textbox", { name: "Email" }), "jane@example.com");
    await user.type(screen.getByRole("textbox", { name: "Subject" }), "Project inquiry");
    await user.type(screen.getByRole("textbox", { name: "Message" }), "Hello!");
}

describe("Contact form", () => {
    it("sends four fields once, disables submission while waiting and resets after success", async () => {
        let resolve;
        const fetchMock = vi.fn(() => new Promise((done) => { resolve = done; }));
        vi.stubGlobal("fetch", fetchMock);
        const user = userEvent.setup();
        render(<Contact />);
        await fill(user);
        const button = screen.getByRole("button", { name: "Send" });
        await user.click(button);
        expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
        fireEvent.submit(button.closest("form"));
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith("https://issuedesk.bigbrain-studio.com/api/resend", expect.objectContaining({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Jane Doe", email: "jane@example.com", subject: "Project inquiry", message: "Hello!" }) }));
        expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue("Hello!");
        resolve({ ok: true, json: async () => ({ success: true }) });
        await screen.findByRole("dialog", { name: "Message sent" });
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
        await user.keyboard("{Escape}");
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Send" })).toHaveFocus();
        for (const name of ["Name", "Email", "Subject", "Message"]) expect(screen.getByRole("textbox", { name })).toHaveValue("");
    });

    it("preserves fields and permits retry after failure", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce({ ok: false, json: async () => ({ success: false, message: "sensitive detail" }) }).mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) }));
        const user = userEvent.setup();
        render(<Contact />);
        await fill(user);
        await user.click(screen.getByRole("button", { name: "Send" }));
        await screen.findByRole("dialog", { name: "Unable to send" });
        expect(screen.getByText(/couldn't send/)).toBeInTheDocument();
        await user.tab();
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
        await user.click(screen.getByRole("button", { name: "Close" }));
        expect(screen.queryByText("sensitive detail")).not.toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue("Hello!");
        await user.click(screen.getByRole("button", { name: "Send" }));
        await screen.findByText(/Your message has been sent/);
    });

    it("blocks empty, malformed email and whitespace-only values", async () => {
        const fetchMock = vi.fn();
        vi.stubGlobal("fetch", fetchMock);
        const user = userEvent.setup();
        render(<Contact />);
        await user.click(screen.getByRole("button", { name: "Send" }));
        expect(fetchMock).not.toHaveBeenCalled();
        await fill(user);
        await user.clear(screen.getByRole("textbox", { name: "Email" }));
        await user.type(screen.getByRole("textbox", { name: "Email" }), "bad-email");
        await user.click(screen.getByRole("button", { name: "Send" }));
        expect(fetchMock).not.toHaveBeenCalled();
        await user.clear(screen.getByRole("textbox", { name: "Email" }));
        await user.type(screen.getByRole("textbox", { name: "Email" }), "jane@example.com");
        await user.clear(screen.getByRole("textbox", { name: "Name" }));
        await user.type(screen.getByRole("textbox", { name: "Name" }), "   ");
        await user.click(screen.getByRole("button", { name: "Send" }));
        await waitFor(() => expect(screen.getByText("Please fill in all fields.")).toBeInTheDocument());
        expect(fetchMock).not.toHaveBeenCalled();
    });
});
