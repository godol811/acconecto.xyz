import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PortfolioPage } from "./PortfolioPage";

describe("PortfolioPage", () => {
  it("renders Korean identity, contact CTA, and required case studies", () => {
    render(<PortfolioPage locale="ko" />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jongchan Ko");
    expect(screen.getByRole("link", { name: /jongchanko@gmail.com/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:jongchanko@gmail.com"),
    );
    expect(
      screen.getAllByText("Smart Device Charging Compatibility Automation").length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText("VIV Ring Intelligence Platform").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("NextPros — Voice AI Back Office for Trades").length,
    ).toBeGreaterThan(0);
    expect(screen.getByText(/응용 소프트웨어 개발 및 공급업/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /스웻퀴즈/i })).toHaveAttribute(
      "href",
      "https://sweat-quiz.com",
    );
  });

  it("changes selected capability tab when clicked", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage locale="en" />);

    const backendTab = screen.getByRole("tab", { name: /Backend/i });
    await user.click(backendTab);

    expect(backendTab).toHaveAttribute("aria-selected", "true");
  });

  it("opens case-level specs when a portfolio project is selected", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage locale="ko" />);

    await user.click(screen.getByRole("button", { name: /VIV Ring Intelligence Platform/ }));

    expect(screen.getAllByText("상세 스펙").length).toBeGreaterThan(0);
    expect(screen.getByText("NestJS API 경계")).toBeInTheDocument();
    expect(screen.getByText("TestFlight 준비")).toBeInTheDocument();
  });
});
