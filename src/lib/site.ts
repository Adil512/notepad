import { localizedPath } from "@/lib/i18n";

const FALLBACK_SITE = "https://notepad.is";

/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE;
  let base = raw.replace(/\/$/, "");
  if (!/^https?:\/\//i.test(base)) {
    base = `https://${base}`;
  }
  return base;
}

/** Safe for `metadataBase`; never throws on bad env. */
export function getMetadataBase(): URL {
  try {
    return new URL(`${getSiteUrl().replace(/\/$/, "")}/`);
  } catch {
    return new URL(`${FALLBACK_SITE}/`);
  }
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
