import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  TEXT_ANALYSIS_HUB_TOOL_IDS,
  isTextAnalysisHubToolId,
  isToolVisibleInLocale,
  writingToolsMeta,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n";
import { buildWritingToolPageMetadata } from "@/lib/writing-tool-page-shared";
import { WritingToolPageView } from "@/components/tools/WritingToolPageView";

export const dynamicParams = true;

export function generateStaticParams() {
  return TEXT_ANALYSIS_HUB_TOOL_IDS.map((tool) => ({
    locale: defaultLocale,
    tool,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}): Promise<Metadata> {
  const { locale, tool } = await params;
  if (!isTextAnalysisHubToolId(tool)) {
    return { title: "Not found" };
  }
  return buildWritingToolPageMetadata({
    locale,
    tool,
    canonicalPath: `/tools/text/${tool}`,
  });
}

export default async function TextAnalysisCategoryToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isTextAnalysisHubToolId(tool)) notFound();

  const id = tool;
  if (!isToolVisibleInLocale(id, locale)) notFound();

  const L = (p: string) => localizedPath(locale, p);
  const hub = L("/tools/text");
  const breadcrumbs = [
    { href: L("/"), label: "Home" },
    { href: L("/tools"), label: "Tools" },
    { href: hub, label: "Text analysis" },
    { href: L(`/tools/text/${id}`), label: writingToolsMeta[id].h1 },
  ];

  return (
    <WritingToolPageView
      locale={locale}
      id={id}
      hubHref={hub}
      hubLabel="Text analysis tools"
      breadcrumbs={breadcrumbs}
      categoryHub={{ href: hub, label: "Browse all text analysis tools" }}
    />
  );
}
