import { expect, test } from "@playwright/test";

test.describe("Aconecto static portfolio", () => {
  test("loads Korean, English, tab sync, and contact CTA", async ({ page }) => {
    await page.goto("/ko/");
    await expect(page.getByRole("heading", { name: /Jongchan Ko/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: /아코넥토/ })).toBeVisible();
    await expect(page.getByText(/응용 소프트웨어 개발 및 공급업/)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "VIV Ring Intelligence Platform" }),
    ).toBeVisible();
    await expect(page.getByText("SANVEL / VIV")).toHaveCount(0);
    const koreanCaseLabels = await page.locator(".case-card .case-eyebrow").allTextContents();
    expect(koreanCaseLabels.join(" ")).not.toMatch(/프리랜스|회사 프로젝트/);

    const contact = page.getByRole("link", { name: /jongchanko@gmail.com|Contact/ }).first();
    await expect(contact).toHaveAttribute("href", /mailto:jongchanko@gmail\.com/);

    await page.getByRole("link", { name: "작업 보기" }).click();
    await expect(page.locator("#work")).toBeInViewport();
    await page
      .locator(".case-selector")
      .filter({ hasText: "VIV Ring Intelligence Platform" })
      .click();
    await expect(page.locator("#case-vivring .case-detail-dock")).toBeVisible();
    await expect(page.locator("#case-vivring").getByText("NestJS API 경계")).toBeVisible();

    await page.getByRole("tab", { name: /Backend/ }).click();
    await expect(page.locator("#backend")).toBeInViewport();
    await expect(page.getByRole("tab", { name: /Backend/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    await page.getByLabel("언어 변경").click();
    await expect(page).toHaveURL(/\/en\/$/);
    await expect(page.getByRole("heading", { name: /Aconecto/ })).toBeVisible();
    await expect(page.getByText(/registered Korean software business/)).toBeVisible();
    const englishCaseLabels = await page.locator(".case-card .case-eyebrow").allTextContents();
    expect(englishCaseLabels.join(" ")).not.toMatch(/Freelance|Company work/);
  });

  test("supports root route and keeps unsupported locale static", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Jongchan Ko/ })).toBeVisible();

    const response = await page.goto("/fr/");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: /Page not found/ })).toBeVisible();
  });

  test("keeps reduced-motion content available", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/en/");
    await expect(page.getByText("AI-assisted implementation")).toBeVisible();
    await expect(page.getByRole("tab", { name: /AI-native/ })).toBeVisible();
  });
});
