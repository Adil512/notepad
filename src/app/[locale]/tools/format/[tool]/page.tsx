import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
  isFormatHubToolId,
  isToolVisibleInLocale,
  writingToolsMeta,
} from "@/lib/writing-tools-registry";
import { localizedPath, locales } from "@/lib/i18n";
import { buildWritingToolPageMetadata } from "@/lib/writing-tool-page-shared";
import { WritingToolPageView } from "@/components/tools/WritingToolPageView";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    TEXT_FORMAT_CONVERTER_TOOL_IDS
      .filter((tool) => isToolVisibleInLocale(tool, locale))
      .map((tool) => ({ locale, tool }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}): Promise<Metadata> {
  const { locale, tool } = await params;
  if (!isFormatHubToolId(tool)) {
    return { title: "Not found" };
  }
  return buildWritingToolPageMetadata({
    locale,
    tool,
    canonicalPath: `/tools/format/${tool}/`,
  });
}

export default async function FormatCategoryToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isFormatHubToolId(tool)) notFound();

  const id = tool;
  if (!isToolVisibleInLocale(id, locale)) notFound();

  const L = (p: string) => localizedPath(locale, p);
  const hub = L("/tools/format");
  const breadcrumbs = [
    { href: L("/"), label: "Home" },
    { href: L("/tools"), label: "Tools" },
    { href: hub, label: "Format" },
    { href: L(`/tools/format/${id}/`), label: writingToolsMeta[id].h1 },
  ];

  return (
    <WritingToolPageView
      locale={locale}
      id={id}
      breadcrumbs={breadcrumbs}
    />
  );
}
