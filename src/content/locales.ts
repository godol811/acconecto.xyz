import { enCopy } from "./en";
import { koCopy } from "./ko";
import type { Locale, PortfolioCopy } from "./types";

export const locales = ["ko", "en"] as const satisfies readonly Locale[];

export const localeLabels: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
};

export const portfolioCopy: Record<Locale, PortfolioCopy> = {
  ko: koCopy,
  en: enCopy,
};

export const contactEmail = "jongchanko@gmail.com";

export const contactHref = "mailto:jongchanko@gmail.com?subject=Project%20inquiry%20for%20Aconecto";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
