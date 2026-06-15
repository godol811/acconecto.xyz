import { ArrowDown, Mail } from "lucide-react";
import { contactHref } from "@/content/locales";
import type { Locale, PortfolioCopy } from "@/content/types";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type HeroWorkbenchProps = {
  readonly copy: PortfolioCopy;
  readonly locale: Locale;
};

function heroTitleParts(locale: Locale): readonly [string, string] {
  return locale === "ko" ? ["Jongchan Ko", "아코넥토"] : ["Jongchan Ko", "Aconecto"];
}

export function HeroWorkbench({ copy, locale }: HeroWorkbenchProps) {
  const [person, studio] = heroTitleParts(locale);

  return (
    <section className="hero-section" id="top">
      <div className="topbar">
        <a className="brand-mark" href={locale === "ko" ? "/" : `/${locale}/`}>
          Aconecto
        </a>
        <div className="topbar-actions">
          <ThemeToggle label={copy.nav.themeLabel} />
          <LanguageToggle current={locale} label={copy.nav.languageLabel} />
        </div>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>
            <span>{person}</span>
            <span className="hero-studio">{studio}</span>
          </h1>
          <p className="hero-subtitle">{copy.hero.subtitle}</p>
          <p className="hero-availability">{copy.hero.availability}</p>
          <div className="hero-actions">
            <a className="primary-action" href={contactHref}>
              <Mail aria-hidden="true" size={18} />
              {copy.nav.contact}
            </a>
            <a className="secondary-action" href="#work">
              <ArrowDown aria-hidden="true" size={18} />
              {copy.nav.viewWork}
            </a>
          </div>
          <ul className="proof-strip">
            {copy.hero.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="business-proof">
            <div>
              <span>{copy.business.badge}</span>
              <strong>{copy.business.legal}</strong>
            </div>
            <div>
              <span>{copy.business.industry}</span>
              <strong>{copy.business.since}</strong>
            </div>
          </div>
        </div>
        <div className="workbench">
          <div className="snapshot-card" aria-hidden="true">
            <div className="snapshot-head">
              <span className="snapshot-dot" />
              <span className="snapshot-dot" />
              <span className="snapshot-dot" />
              <span className="snapshot-title">delivery snapshot</span>
            </div>
            <div className="snapshot-ring">
              <div className="ring-dial">
                <span>VIV</span>
              </div>
              <div className="ring-meta">
                <strong>Wearable platform</strong>
                <small>app · api · cloud · release</small>
              </div>
            </div>
            <div className="snapshot-rows">
              <div className="snapshot-row">
                <span>mobile</span>
                <strong>iOS · TestFlight</strong>
              </div>
              <div className="snapshot-row">
                <span>backend</span>
                <strong>NestJS · MySQL</strong>
              </div>
              <div className="snapshot-row">
                <span>contracts</span>
                <strong>OpenAPI · gRPC</strong>
              </div>
              <div className="snapshot-row">
                <span>status</span>
                <span className="snapshot-tag">shipped end-to-end</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
