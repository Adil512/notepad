import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

const locales = Object.keys(jsonFormatterSeo);

export const regexTesterSeo = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      title: "Regex Tester Online – Test & Debug Regular Expressions Free",
      description:
        "Test and debug regex patterns instantly with this free online regex tester. Validate matches in real time and improve pattern accuracy quickly.",
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["regex-tester"];

export function regexTesterHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getRegexTesterSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = regexTesterSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getRegexTesterHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getRegexTesterSeo(locale);
  return {
    h1: regexTesterHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
