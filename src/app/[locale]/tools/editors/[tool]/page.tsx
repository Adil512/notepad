import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  EDITOR_HUB_TOOL_IDS,
  isEditorHubToolId,
  isToolVisibleInLocale,
  writingToolsMeta,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n";
import { buildWritingToolPageMetadata } from "@/lib/writing-tool-page-shared";
import { WritingToolPageView } from "@/components/tools/WritingToolPageView";

export const dynamicParams = true;

export function generateStaticParams() {
  return EDITOR_HUB_TOOL_IDS.map((tool) => ({
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
  if (!isEditorHubToolId(tool)) {
    return { title: "Not found" };
  }
  return buildWritingToolPageMetadata({
    locale,
    tool,
    canonicalPath: `/tools/editors/${tool}`,
  });
}

export default async function EditorCategoryToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isEditorHubToolId(tool)) notFound();

  const id = tool;
  if (!isToolVisibleInLocale(id, locale)) notFound();

  const L = (p: string) => localizedPath(locale, p);
  const hub = L("/tools/editors");
  const breadcrumbs = [
    { href: L("/"), label: "Home" },
    { href: L("/tools"), label: "Tools" },
    { href: hub, label: "Editors" },
    { href: L(`/tools/editors/${id}`), label: writingToolsMeta[id].h1 },
  ];

  return (
    <WritingToolPageView
      locale={locale}
      id={id}
      hubHref={hub}
      hubLabel="Editor tools"
      breadcrumbs={breadcrumbs}
      categoryHub={{ href: hub, label: "Browse all editor tools" }}
    />
  );
}
