import { ArrowUpRight } from "lucide-react";
import { contactHref } from "@/content/locales";
import type { PortfolioCopy } from "@/content/types";

type ClosingCtaProps = {
  readonly copy: PortfolioCopy;
};

export function ClosingCta({ copy }: ClosingCtaProps) {
  return (
    <section className="closing-section">
      <div className="closing-inner">
        <p className="eyebrow">{copy.closing.eyebrow}</p>
        <h2>{copy.closing.title}</h2>
        <p>{copy.closing.subtitle}</p>
        <a className="primary-action" href={contactHref}>
          {copy.nav.contact}
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
    </section>
  );
}
