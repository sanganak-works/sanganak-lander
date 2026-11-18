import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AuditsPage, { metadata } from "./page";
import { CALL_REQUEST_URL, auditsContent } from "./content";

vi.mock("next/navigation", () => ({ usePathname: () => "/audits" }));

describe("AI Audits route", () => {
  it("uses the site's title format", () => {
    expect(metadata.title).toBe("AI Audits · Sanganak");
  });

  it("renders every section, the limits, and the contact links", () => {
    render(<AuditsPage />);

    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(within(main).getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      within(main).getByRole("heading", { level: 1, name: auditsContent.hero.headline }),
    ).toBeInTheDocument();

    for (const heading of [
      auditsContent.whatYouGet.heading,
      auditsContent.limits.heading,
      auditsContent.audience.heading,
      auditsContent.engagement.heading,
      auditsContent.cta.heading,
    ]) {
      expect(within(main).getByRole("heading", { level: 2, name: heading })).toBeInTheDocument();
    }

    for (const item of auditsContent.limits.items) {
      expect(within(main).getByText(item.text)).toBeInTheDocument();
    }

    const callLinks = within(main).getAllByRole("link", { name: "Ask for a short call →" });
    expect(callLinks).toHaveLength(2);
    callLinks.forEach((link) => expect(link).toHaveAttribute("href", CALL_REQUEST_URL));
    expect(CALL_REQUEST_URL.startsWith("mailto:contact@sanganak.ai?subject=")).toBe(true);
    expect(within(main).getByRole("link", { name: "contact@sanganak.ai →" })).toHaveAttribute(
      "href",
      "mailto:contact@sanganak.ai",
    );
  });

  it("keeps prices, guarantees, certifications and audit targets off the page", () => {
    const { container } = render(<AuditsPage />);
    const text = container.textContent ?? "";

    for (const banned of [
      /guarantee/i,
      /certif/i,
      /\bofficial partner\b/i,
      /nivesh/i,
      /invest up/i,
      /draft/i,
      /[$₹€£]\s?\d/,
    ]) {
      expect(text).not.toMatch(banned);
    }
  });
});
