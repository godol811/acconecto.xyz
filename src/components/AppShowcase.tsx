import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { PortfolioCopy } from "@/content/types";

type AppShowcaseProps = {
  readonly copy: PortfolioCopy;
};

export function AppShowcase({ copy }: AppShowcaseProps) {
  return (
    <section className="apps-section" id="apps">
      <div className="section-heading center">
        <p className="eyebrow">{copy.apps.eyebrow}</p>
        <h2>{copy.apps.title}</h2>
        <p>{copy.apps.intro}</p>
      </div>
      <div className="apps-grid">
        {copy.apps.items.map((app) => (
          <a className="app-card" href={app.url} key={app.name} rel="noreferrer" target="_blank">
            <Image
              className="app-icon"
              src={app.icon}
              alt={`${app.name} app icon`}
              width={120}
              height={120}
            />
            <div className="app-body">
              <h3>{app.name}</h3>
              <p>{app.tagline}</p>
              <span className="app-meta">{app.meta}</span>
            </div>
            <ArrowUpRight className="app-arrow" aria-hidden="true" size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
