import { describe, expect, it } from "vitest";
import manifest from "../../public/assets/cases/asset-manifest.json";
import { contactEmail, contactHref, portfolioCopy } from "./locales";

const forbiddenStrings = [
  "admin1234",
  "basarajiny",
  "dev.uxbiztech.com",
  "api-docs",
  "openapi.json",
  "kr.arkhc.sanvel",
  "SANVEL.xcodeproj",
  "302-06-28847",
  "900811",
  "8677-273-8453-969",
  "504434004192",
  "컨벤시아대로",
  "드림시티",
  "509-J447",
  "QENTIX_ALLOW_PROD_RBD_NOOP",
  ".env",
  "SSM",
  "SSM command",
  "godol811@naver.com",
];

describe("portfolio public content", () => {
  it("keeps contact on the requested Aconecto email", () => {
    expect(contactEmail).toBe("jongchanko@gmail.com");
    expect(contactHref).toContain("mailto:jongchanko@gmail.com");
    expect(contactHref).toContain("Project%20inquiry%20for%20Aconecto");
  });

  it("does not include private denylist strings", () => {
    const publicText = JSON.stringify({ manifest, portfolioCopy });

    for (const forbidden of forbiddenStrings) {
      expect(publicText).not.toContain(forbidden);
    }
  });

  it("positions VIV/vivring as the primary wearable case", () => {
    const koreanCase = portfolioCopy.ko.cases.find((item) => item.id === "vivring");
    const englishCase = portfolioCopy.en.cases.find((item) => item.id === "vivring");

    expect(koreanCase?.name).toBe("VIV / vivring");
    expect(englishCase?.publicName).toContain("VIV Ring");
    expect(JSON.stringify(portfolioCopy)).not.toContain("SANVEL / VIV");
  });

  it("includes only public-safe Aconecto business registration copy", () => {
    const publicText = JSON.stringify(portfolioCopy);

    expect(publicText).toContain("registered Korean software business");
    expect(publicText).toContain("응용 소프트웨어 개발 및 공급업");
    expect(publicText).toContain("2025");
  });

  it("keeps case-study labels focused on project identity, not work source", () => {
    const casesText = JSON.stringify({ en: portfolioCopy.en.cases, ko: portfolioCopy.ko.cases });

    expect(casesText).not.toMatch(/프리랜스|회사 프로젝트|Freelance|Company work/);
  });

  it("documents provenance for every shipped case-study visual", () => {
    expect(manifest.length).toBeGreaterThanOrEqual(5);

    for (const asset of manifest) {
      expect(asset.path).toMatch(/^\/assets\/cases\/[a-z-]+\.(svg|png)$/);
      expect(asset.sourceType).toMatch(/^(recreated|generated|approved-screenshot)$/);
      expect(asset.publicSafeScope.length).toBeGreaterThan(8);
      expect(asset.redactionNotes.length).toBeGreaterThan(20);
      expect(asset.reviewer).toBe("Codex");
      expect(asset.reviewDate).toBe("2026-06-15");
      expect(asset.metadataStripped).toBe(true);
    }
  });
});
