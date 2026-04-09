import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  EXCEL_SPREADSHEET_TOOL_IDS,
  isExcelHubToolId,
  isToolVisibleInLocale,
  writingToolsMeta,
} from "@/lib/writing-tools-registry";
import { localizedPath, defaultLocale } from "@/lib/i18n";
import { buildWritingToolPageMetadata } from "@/lib/writing-tool-page-shared";
import { WritingToolPageView } from "@/components/tools/WritingToolPageView";

export const dynamicParams = true;

export function generateStaticParams() {
  return EXCEL_SPREADSHEET_TOOL_IDS.map((tool) => ({
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
  if (!isExcelHubToolId(tool)) {
    return { title: "Not found" };
  }
  return buildWritingToolPageMetadata({
    locale,
    tool,
    canonicalPath: `/tools/excel/${tool}`,
  });
}

export default async function ExcelCategoryToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isExcelHubToolId(tool)) notFound();

  const id = tool;
  if (!isToolVisibleInLocale(id, locale)) notFound();

  const L = (p: string) => localizedPath(locale, p);
  const hub = L("/tools/excel");
  const breadcrumbs = [
    { href: L("/"), label: "Home" },
    { href: L("/tools"), label: "Tools" },
    { href: hub, label: "Excel" },
    { href: L(`/tools/excel/${id}`), label: writingToolsMeta[id].h1 },
  ];

  return (
    <WritingToolPageView
      locale={locale}
      id={id}
      hubHref={hub}
      hubLabel="Excel converter tools"
      breadcrumbs={breadcrumbs}
      categoryHub={{ href: hub, label: "Browse all Excel converter tools" }}
    />
  );
}
