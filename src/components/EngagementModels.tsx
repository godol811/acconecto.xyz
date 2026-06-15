import { Check } from "lucide-react";
import type { PortfolioCopy } from "@/content/types";

type EngagementModelsProps = {
  readonly copy: PortfolioCopy;
};

export function EngagementModels({ copy }: EngagementModelsProps) {
  return (
    <section className="engagement-section" id="pricing">
      <div className="section-heading center">
        <p className="eyebrow">{copy.engagement.eyebrow}</p>
        <h2>{copy.engagement.title}</h2>
        <p>{copy.engagement.intro}</p>
      </div>
      <div className="engagement-grid">
        {copy.engagement.tiers.map((tier) => (
          <article className="engagement-card" key={tier.name}>
            <p className="engagement-cadence">{tier.cadence}</p>
            <h3>{tier.name}</h3>
            <p className="engagement-bestfor">{tier.bestFor}</p>
            <ul className="engagement-list">
              {tier.includes.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="engagement-note">{copy.engagement.note}</p>
    </section>
  );
}
