import { Globe2 } from "lucide-react";
import { localeLabels } from "@/content/locales";
import type { Locale } from "@/content/types";

type LanguageToggleProps = {
  readonly current: Locale;
  readonly label: string;
};

const nextLocale: Record<Locale, Locale> = {
  ko: "en",
  en: "ko",
};

export function LanguageToggle({ current, label }: LanguageToggleProps) {
  const next = nextLocale[current];

  return (
    <a aria-label={label} className="language-toggle" href={`/${next}/`}>
      <Globe2 aria-hidden="true" size={16} />
      <span>{localeLabels[current]}</span>
      <span aria-hidden="true">/</span>
      <span>{localeLabels[next]}</span>
    </a>
  );
}
