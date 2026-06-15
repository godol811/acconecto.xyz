import { Mail } from "lucide-react";
import { contactEmail, contactHref } from "@/content/locales";
import type { PortfolioCopy } from "@/content/types";

type ContactPanelProps = {
  readonly copy: PortfolioCopy;
};

export function ContactPanel({ copy }: ContactPanelProps) {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">contact</p>
        <h2>{copy.sections.contactTitle}</h2>
        <p>{copy.sections.contactIntro}</p>
      </div>
      <div className="contact-card">
        <a className="primary-action" href={contactHref}>
          <Mail aria-hidden="true" size={18} />
          {contactEmail}
        </a>
        <ul>
          {copy.contactPrompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
