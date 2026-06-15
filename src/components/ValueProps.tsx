import { Hammer, Layers, ShieldCheck, UserCheck } from "lucide-react";
import type { PortfolioCopy } from "@/content/types";

type ValuePropsProps = {
  readonly copy: PortfolioCopy;
};

const icons = [Hammer, UserCheck, Layers, ShieldCheck] as const;

export function ValueProps({ copy }: ValuePropsProps) {
  return (
    <section className="trust-section" id="why">
      <div className="section-heading center">
        <p className="eyebrow">{copy.trust.eyebrow}</p>
        <h2>{copy.trust.title}</h2>
        <p>{copy.trust.intro}</p>
      </div>
      <div className="trust-grid">
        {copy.trust.points.map((point, index) => {
          const Icon = icons[index] ?? UserCheck;
          return (
            <article className="trust-card" key={point.title}>
              <span className="trust-index">
                <Icon aria-hidden="true" size={22} />
              </span>
              <h3>{point.title}</h3>
              <p>{point.summary}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
