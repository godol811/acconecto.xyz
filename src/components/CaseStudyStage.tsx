"use client";

import { ArrowRight, Gauge } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Capability, CapabilityId, PortfolioCopy } from "@/content/types";

type CaseStudyStageProps = {
  readonly copy: PortfolioCopy;
  readonly onSelectCapability: (id: CapabilityId) => void;
};

function sectionCases(copy: PortfolioCopy, capabilityId: CapabilityId) {
  return copy.cases.filter((item) => item.capabilityId === capabilityId);
}

function CapabilityPanel({
  activeCaseId,
  capability,
  copy,
  onSelectCase,
}: {
  readonly activeCaseId: string;
  readonly capability: Capability;
  readonly copy: PortfolioCopy;
  readonly onSelectCase: (id: string) => void;
}) {
  const cases = sectionCases(copy, capability.id);
  const hasCases = cases.length > 0;

  return (
    <section
      className="capability-panel"
      data-capability={capability.id}
      id={capability.id}
      role="tabpanel"
      aria-labelledby={`tab-${capability.id}`}
    >
      <div className="panel-copy" id={`panel-${capability.id}`}>
        <p className="eyebrow">{capability.kicker}</p>
        <h3>{capability.title}</h3>
        <p>{capability.summary}</p>
      </div>
      <div className="case-grid">
        {hasCases ? (
          cases.map((item) => (
            <article
              className="case-card"
              data-active={activeCaseId === item.id}
              id={`case-${item.id}`}
              key={item.id}
            >
              <Image
                className="case-visual"
                src={item.asset}
                alt={item.alt}
                loading="eager"
                width={1200}
                height={760}
              />
              <div>
                <p className="case-eyebrow">{item.eyebrow}</p>
                <h4>{item.publicName}</h4>
                <p>{item.summary}</p>
                <ul className="impact-list">
                  {item.impact.map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>
                <div className="stack-row">
                  {item.stack.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
                <button
                  className="case-detail-button"
                  onClick={() => onSelectCase(item.id)}
                  type="button"
                >
                  <Gauge aria-hidden="true" size={16} />
                  {item.detail.label}
                </button>
              </div>
              {activeCaseId === item.id ? (
                <div className="case-detail-dock">
                  <div className="case-detail-copy">
                    <p className="case-detail-kicker">{item.detail.label}</p>
                    <h5>{item.publicName}</h5>
                    <p>{item.detail.overview}</p>
                  </div>
                  <dl className="spec-grid">
                    {item.detail.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt>{spec.label}</dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="delivery-list">
                    {item.detail.delivery.map((delivery) => (
                      <li key={delivery}>{delivery}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))
        ) : (
          <article className="case-card ai-card">
            <Image
              className="case-visual"
              src="/assets/cases/backend-board.svg"
              alt={copy.aiShowcase.title}
              loading="eager"
              width={1200}
              height={760}
            />
            <div>
              <p className="case-eyebrow">{copy.aiShowcase.eyebrow}</p>
              <h4>{copy.aiShowcase.title}</h4>
              <p>{copy.aiShowcase.summary}</p>
              <div className="stack-row">
                {copy.aiShowcase.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export function CaseStudyStage({ copy, onSelectCapability }: CaseStudyStageProps) {
  const initialCaseId = copy.cases[0]?.id ?? "";
  const [activeCaseId, setActiveCaseId] = useState(initialCaseId);

  function handleCaseSelect(id: string) {
    const selectedCase = copy.cases.find((item) => item.id === id);
    setActiveCaseId(id);
    if (selectedCase) {
      onSelectCapability(selectedCase.capabilityId);
    }
    requestAnimationFrame(() => {
      document.getElementById(`case-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>{copy.sections.workTitle}</h2>
        <p>{copy.sections.workIntro}</p>
      </div>
      <div className="case-cockpit">
        {copy.cases.map((item) => (
          <button
            className="case-selector"
            data-active={activeCaseId === item.id}
            key={item.id}
            onClick={() => handleCaseSelect(item.id)}
            type="button"
          >
            <span>{item.name}</span>
            <strong>{item.publicName}</strong>
            <ArrowRight aria-hidden="true" size={16} />
          </button>
        ))}
      </div>
      <div className="panel-stack">
        {copy.capabilities.map((capability) => (
          <CapabilityPanel
            activeCaseId={activeCaseId}
            capability={capability}
            copy={copy}
            key={capability.id}
            onSelectCase={handleCaseSelect}
          />
        ))}
      </div>
    </section>
  );
}
