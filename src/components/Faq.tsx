import { Plus } from "lucide-react";
import type { PortfolioCopy } from "@/content/types";

type FaqProps = {
  readonly copy: PortfolioCopy;
};

export function Faq({ copy }: FaqProps) {
  return (
    <section className="faq-section" id="faq">
      <div className="section-heading center">
        <p className="eyebrow">{copy.faq.eyebrow}</p>
        <h2>{copy.faq.title}</h2>
      </div>
      <div className="faq-list">
        {copy.faq.items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <Plus aria-hidden="true" size={18} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
