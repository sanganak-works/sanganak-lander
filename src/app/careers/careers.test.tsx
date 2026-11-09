import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CareersPage from "./page";
import AgentEngineerPage from "./agent-engineer/page";
import AiEngineerPage from "./ai-engineer/page";
import DesignLeadPage from "./design-lead/page";
import IntegrationEngineerPage from "./integration-engineer/page";
import PlatformEngineerPage from "./platform-engineer/page";

const listedRoles = [
  ["Agent Engineer", "/careers/agent-engineer"],
  ["Integration Engineer", "/careers/integration-engineer"],
  ["Platform Engineer", "/careers/platform-engineer"],
  ["Lead, Design and Branding", "/careers/design-lead"],
] as const;

const roleRoutes = [
  {
    Page: AgentEngineerPage,
    title: "Agent Engineer (Intern)",
    criticalCopy: "INTERNSHIP",
    product: "Saras",
  },
  {
    Page: IntegrationEngineerPage,
    title: "Integration Engineer",
    criticalCopy: "Keep integrations reliable and observable, so nothing ever fails silently",
    product: "Saras",
  },
  {
    Page: PlatformEngineerPage,
    title: "Platform Engineer",
    criticalCopy: "Keep infrastructure reliable, observable and ready to scale as usage grows",
    product: "Saras",
  },
  {
    Page: AiEngineerPage,
    title: "AI Engineer (Contract)",
    criticalCopy: "3 MONTHS",
    product: "Saras",
  },
  {
    Page: DesignLeadPage,
    title: "Lead, Design and Branding",
    criticalCopy: "AI-NATIVE DESIGN",
    product: "Saras",
  },
] as const;

describe("Careers routes", () => {
  it("renders the four approved index cards and no AI Engineer card", () => {
    render(<CareersPage />);

    const main = screen.getByRole("main");
    expect(screen.getByRole("heading", { level: 1, name: "Beyond the benchmarks" })).toBeInTheDocument();
    expect(
      within(main).getByText(
        "We're building small, ambitious products that bring frontier technology to real people doing real things",
      ),
    ).toBeInTheDocument();
    for (const [name, href] of listedRoles) {
      expect(screen.getByRole("link", { name: new RegExp(`^${name}`) })).toHaveAttribute("href", href);
    }
    expect(screen.queryByRole("link", { name: /AI Engineer/i })).not.toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("filters listed roles by product and clears the active filter", async () => {
    const user = userEvent.setup();
    render(<CareersPage />);

    const filters = screen.getByRole("group", { name: "Filter open roles by product" });
    const sarasFilter = within(filters).getByRole("button", { name: "Saras" });
    const clearFilter = within(filters).getByRole("button", { name: "Clear filters" });

    expect(within(filters).queryByRole("button", { name: "Masala Dew" })).not.toBeInTheDocument();
    expect(sarasFilter).toHaveAttribute("aria-pressed", "false");
    expect(clearFilter).toBeDisabled();

    await user.click(sarasFilter);

    expect(sarasFilter).toHaveAttribute("aria-pressed", "true");
    expect(clearFilter).toBeEnabled();

    await user.click(clearFilter);

    expect(sarasFilter).toHaveAttribute("aria-pressed", "false");
    expect(clearFilter).toBeDisabled();
    for (const [name] of listedRoles) {
      expect(await screen.findByRole("link", { name: new RegExp(`^${name}`) })).toBeInTheDocument();
    }

    await user.click(sarasFilter);

    expect(sarasFilter).toHaveAttribute("aria-pressed", "true");
    for (const [name] of listedRoles) {
      expect(screen.getByRole("link", { name: new RegExp(`^${name}`) })).toBeInTheDocument();
    }
  });

  it.each(roleRoutes)(
    "renders $title with exact shared destinations and critical copy",
    ({ Page, title, criticalCopy, product }) => {
      render(<Page />);

      const main = screen.getByRole("main");
      expect(within(main).getAllByRole("heading", { level: 1 })).toHaveLength(1);
      expect(within(main).getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
      expect(within(main).getByText(criticalCopy)).toBeInTheDocument();
      expect(within(main).getByLabelText(`Product: ${product}`)).toHaveTextContent(product);
      expect(within(main).getByRole("link", { name: "Saras" })).toHaveAttribute(
        "href",
        "https://sarasgmat.com",
      );
      expect(within(main).getByRole("link", { name: "our manifesto" })).toHaveAttribute(
        "href",
        "/manifesto",
      );
      expect(within(main).getByRole("link", { name: "APPLY VIA EMAIL →" })).toHaveAttribute(
        "href",
        "mailto:contact@sanganak.ai",
      );
      expect(main).toHaveAttribute("id", "main-content");
    },
  );

  it("keeps the unlisted AI Engineer route fully available with its agreed terms", () => {
    render(<AiEngineerPage />);

    expect(screen.getByRole("heading", { name: /Three months/ })).toBeInTheDocument();
    expect(screen.getByText(/10% of Saras's gross profit/)).toBeInTheDocument();
  });
});
