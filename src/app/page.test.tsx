import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the Paper homepage copy and replacement computer artwork", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Frontier technology, for the rest of the world.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "We advise about and build outcome-oriented agents for those outside the tech bubble",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("01 / BUILD + WRITE + ADVISE")).toBeInTheDocument();
    expect(screen.getByText("COMPUTE / CULTURE")).toBeInTheDocument();
    expect(screen.getByText("sanganak.ai")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Sanganak mascot" })).toHaveAttribute(
      "src",
      expect.stringContaining("logo-crop.png"),
    );
  });

  it("links the world headline word to the manifesto", () => {
    render(<Home />);

    expect(screen.queryByText(/enter the manifesto/i)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "world" })).toHaveAttribute(
      "href",
      "/manifesto",
    );
  });

  it("provides a skip-link target", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });
});
