import { localizedPath } from "@/lib/i18n";

/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://notepad.is";
}

/**
 * Absolute URL for a site path, with a trailing slash (matches `trailingSlash: true`).
 * Root is `https://example.com/`.
 */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const raw = (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "") || "/";
  if (raw === "/") return `${base}/`;
  return `${base}${raw}/`;
}

/** Self-referencing canonical URL for the current locale and app path (e.g. `/about`, `/blog`). */
export function canonicalUrlForPage(
  locale: string,
  pathWithoutLocale: string
): string {
  const normalized =
    pathWithoutLocale === "/"
      ? "/"
      : pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`;
  return absoluteUrl(localizedPath(locale, normalized));
}
