import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-data";
import { WRITING_TOOL_IDS } from "@/lib/writing-tools-registry";
import { defaultLocale, locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { blogPostPath } from "@/lib/blog-urls";
import { getPublishedBlogSlugsForSitemap } from "@/lib/blog-service";

/** Indexed static paths only (no auth, account, or legal utility pages). */
const staticPaths = [
  "",
  "/blog",
  "/about",
  "/tools",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [];
  const now = new Date();

  // 1) Default-locale homepage first (highest priority, trailing slash)
  routes.push({
    url: absoluteUrl("/"),
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
  });

  // 2) Other locale homepages
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    routes.push({
      url: absoluteUrl(`/${locale}`),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    });
  }

  // 3) Remaining static routes (skip ""; already emitted)
  for (const locale of locales) {
    for (const path of staticPaths) {
      if (path === "") continue;
      const url =
        locale === defaultLocale
          ? absoluteUrl(path)
          : absoluteUrl(`/${locale}${path}`);
      routes.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // 4) Writing tools (/tools/:id)
  for (const locale of locales) {
    for (const tool of WRITING_TOOL_IDS) {
      const path = `/tools/${tool}`;
      const url =
        locale === defaultLocale
          ? absoluteUrl(path)
          : absoluteUrl(`/${locale}${path}`);
      routes.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
  }

  // 5) SEO tool / landing slugs
  for (const locale of locales) {
    for (const slug of Object.keys(seoPages)) {
      const url =
        locale === defaultLocale
          ? absoluteUrl(`/${slug}`)
          : absoluteUrl(`/${locale}/${slug}`);
      routes.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  const blogRows = await getPublishedBlogSlugsForSitemap();
  for (const locale of locales) {
    for (const { slug, lastModified } of blogRows) {
      routes.push({
        url: absoluteUrl(blogPostPath(locale, slug)),
        lastModified,
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
  }

  return routes;
}
