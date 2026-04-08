import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

export const sentenceCounterSeo = Object.fromEntries(
  Object.entries(jsonFormatterSeo).map(([locale, seo]) => [
    locale,
    {
      title: seo.title.replaceAll("JSON", "Sentence"),
      description: seo.description.replaceAll("JSON", "sentence"),
    },
  ])
) as Record<string, { title: string; description: string }>;

sentenceCounterSeo.ar = {
  title: "عداد الجمل عبر الإنترنت – أداة مجانية لعد الجمل في النص",
  description:
    "احسب عدد الجمل في النص فورًا باستخدام هذه الأداة المجانية عبر الإنترنت. سريعة ودقيقة ومفيدة للكتّاب والطلاب وصناع المحتوى.",
};

const baseMeta = writingToolsMeta["sentence-counter"];

export function sentenceCounterHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getSentenceCounterSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = sentenceCounterSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getSentenceCounterHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getSentenceCounterSeo(locale);
  return {
    h1: sentenceCounterHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
