import { Locale, LocalizedString } from "./types";

export const locales: Locale[] = ["en", "lv"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function t(locale: Locale, value: LocalizedString): string {
  return value[locale];
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "en" ? "EN" : "LV";
}
