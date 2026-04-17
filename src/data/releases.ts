import type { Locale } from '../utils/translations';

export type ReleaseKind = 'app' | 'game';
export type ReleaseAccent = 'red' | 'blue' | 'green' | 'orange';
export type ReleaseSlug = string;
export type ScreenshotOrientation = 'portrait' | 'landscape';

export interface FeatureBullet {
  title: string;
}

export interface ScreenshotRequirement {
  title: string;
  description: string;
  imagePath: string | null;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface ReleaseBase<Slug extends string = string> {
  slug: Slug;
  kind: ReleaseKind;
  featured: boolean;
  accent: ReleaseAccent;
  icon: string;
  googlePlayUrl: string | null;
  websiteUrl: string | null;
  sortOrder: number;
  schemaApplicationCategory: string;
  relatedSlugs: ReleaseSlug[];
  screenshotOrientation: ScreenshotOrientation;
}

interface ReleaseTranslation {
  name: string;
  summary: string;
  longDescription: string[];
  bottomCtaDescription: string;
  category: string;
  platforms: string[];
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  featureBullets: FeatureBullet[];
  screenshotRequirements: ScreenshotRequirement[];
  faqs: FaqItem[];
}

export interface Release
  extends ReleaseBase<ReleaseSlug>,
    ReleaseTranslation {}

interface ReleaseDocument extends ReleaseBase<ReleaseSlug> {
  translations: Record<Locale, ReleaseTranslation>;
}

const releaseModules = import.meta.glob('../../content/releases/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, ReleaseDocument>;

const releaseDocuments = Object.values(releaseModules).sort(
  (left, right) =>
    left.sortOrder - right.sortOrder || left.slug.localeCompare(right.slug),
);

function getReleaseTranslation(
  release: ReleaseDocument,
  locale: Locale,
): ReleaseTranslation {
  const translation = release.translations[locale] ?? release.translations.en;

  return {
    ...translation,
    bottomCtaDescription:
      translation.bottomCtaDescription ||
      translation.longDescription[translation.longDescription.length - 1] ||
      translation.summary,
  };
}

function buildRelease(release: ReleaseDocument, locale: Locale): Release {
  return {
    slug: release.slug,
    kind: release.kind,
    featured: release.featured,
    accent: release.accent,
    icon: release.icon,
    googlePlayUrl: release.googlePlayUrl,
    websiteUrl: release.websiteUrl,
    sortOrder: release.sortOrder,
    schemaApplicationCategory: release.schemaApplicationCategory,
    relatedSlugs: release.relatedSlugs,
    screenshotOrientation: release.screenshotOrientation,
    ...getReleaseTranslation(release, locale),
  };
}

export function getReleases(locale: Locale): Release[] {
  return releaseDocuments.map((release) => buildRelease(release, locale));
}

export function getFeaturedReleases(locale: Locale): Release[] {
  return getReleases(locale).filter((release) => release.featured);
}

export function getReleaseBySlug(
  locale: Locale,
  slug: string,
): Release | undefined {
  const release = releaseDocuments.find((item) => item.slug === slug);

  return release ? buildRelease(release, locale) : undefined;
}
