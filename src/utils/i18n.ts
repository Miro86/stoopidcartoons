import { siteConfig } from '../config/site';
import { localeMeta, locales } from './translations';

export type Locale = (typeof locales)[number];
export type PagePath =
  | ''
  | 'showcase'
  | 'privacy'
  | 'terms'
  | 'contact'
  | `showcase/${string}`;

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function buildPath(lang: Locale, path: PagePath = ''): string {
  return `/${lang}/${path ? `${path}/` : ''}`;
}

export function buildAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function localeLabel(lang: Locale): string {
  return localeMeta[lang].nativeLabel;
}

export function browserLocaleToSupportedLocale(input: string | null | undefined): Locale {
  if (!input) {
    return siteConfig.defaultLocale as Locale;
  }

  const cleaned = input.toLowerCase();

  if (cleaned.startsWith('de')) return 'de';
  if (cleaned.startsWith('sr')) return 'sr';
  if (cleaned.startsWith('en')) return 'en';
  if (cleaned.startsWith('hr')) return 'hr';
  if (cleaned.startsWith('fr')) return 'fr';
  if (cleaned.startsWith('it')) return 'it';
  if (cleaned.startsWith('es')) return 'es';
  if (cleaned.startsWith('pt')) return 'pt';
  if (cleaned.startsWith('nl')) return 'nl';
  if (cleaned.startsWith('pl')) return 'pl';
  if (cleaned.startsWith('ro')) return 'ro';

  return 'en';
}
