import { defaultLocale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

/** Public path for a blog post (matches localizedPath semantics). */
export function blogPostPath(locale: string, slug: string): string {
  if (locale === defaultLocale) return `/blog/${slug}`;
  return `/${locale}/blog/${slug}`;
}

export function blogPostAbsoluteUrl(locale: string, slug: string): string {
  return absoluteUrl(blogPostPath(locale, slug));
}

/**
 * Resolve stored canonical: full URL as-is; path-only joined to site origin.
 */
export function resolveCanonicalUrl(
  stored: string | null | undefined,
  fallbackAbsolute: string
): string {
  const t = stored?.trim();
  if (!t) return fallbackAbsolute;
  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  const path = t.startsWith("/") ? t : `/${t}`;
  return absoluteUrl(path);
}
