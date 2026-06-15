"use client";

import { useEffect, useMemo, useState } from "react";
import { portfolioCopy } from "@/content/locales";
import type { CapabilityId, Locale } from "@/content/types";
import { AppShowcase } from "./AppShowcase";
import { BackendSpotlight } from "./BackendSpotlight";
import { CapabilityRail } from "./CapabilityRail";
import { CaseStudyStage } from "./CaseStudyStage";
import { ClosingCta } from "./ClosingCta";
import { ContactPanel } from "./ContactPanel";
import { EngagementModels } from "./EngagementModels";
import { Faq } from "./Faq";
import { HeroWorkbench } from "./HeroWorkbench";
import { ProcessTimeline } from "./ProcessTimeline";
import { ServiceModels } from "./ServiceModels";
import { SiteFooter } from "./SiteFooter";
import { ValueProps } from "./ValueProps";

type PortfolioPageProps = {
  readonly locale: Locale;
};

function isCapabilityId(ids: ReadonlySet<string>, value: string): value is CapabilityId {
  return ids.has(value);
}

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const copy = portfolioCopy[locale];
  const capabilityIds = useMemo(
    () => new Set(copy.capabilities.map((capability) => capability.id)),
    [copy.capabilities],
  );
  const initialActive = copy.capabilities[0]?.id ?? "frontend";
  const [activeId, setActiveId] = useState<CapabilityId>(initialActive);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-capability]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        const targetId = visible?.target.getAttribute("data-capability");

        if (targetId && isCapabilityId(capabilityIds, targetId)) {
          setActiveId(targetId);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    for (const panel of panels) {
      observer.observe(panel);
    }

    return () => observer.disconnect();
  }, [capabilityIds]);

  function handleSelect(id: CapabilityId) {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="portfolio-shell">
      <HeroWorkbench copy={copy} locale={locale} />
      <ValueProps copy={copy} />
      <CapabilityRail
        capabilities={copy.capabilities}
        activeId={activeId}
        onSelect={handleSelect}
      />
      <CaseStudyStage copy={copy} onSelectCapability={setActiveId} />
      <AppShowcase copy={copy} />
      <BackendSpotlight copy={copy} />
      <ProcessTimeline copy={copy} />
      <ServiceModels copy={copy} />
      <EngagementModels copy={copy} />
      <Faq copy={copy} />
      <ContactPanel copy={copy} />
      <ClosingCta copy={copy} />
      <SiteFooter copy={copy} />
    </main>
  );
}
