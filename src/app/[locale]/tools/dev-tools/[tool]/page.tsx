import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  DEV_TOOLS_HUB_TOOL_IDS,
  isDevToolsHubToolId,
  isToolVisibleInLocale,
  writingToolsMeta,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n";
import { buildWritingToolPageMetadata } from "@/lib/writing-tool-page-shared";
import { WritingToolPageView } from "@/components/tools/WritingToolPageView";

export const dynamicParams = true;

export function generateStaticParams() {
  return DEV_TOOLS_HUB_TOOL_IDS.map((tool) => ({
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
  if (!isDevToolsHubToolId(tool)) {
    return { title: "Not found" };
  }
  return buildWritingToolPageMetadata({
    locale,
    tool,
    canonicalPath: `/tools/dev-tools/${tool}`,
  });
}

export default async function DevToolsCategoryToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isDevToolsHubToolId(tool)) notFound();

  const id = tool;
  if (!isToolVisibleInLocale(id, locale)) notFound();

  const L = (p: string) => localizedPath(locale, p);
  const hub = L("/tools/dev-tools");
  const breadcrumbs = [
    { href: L("/"), label: "Home" },
    { href: L("/tools"), label: "Tools" },
    { href: hub, label: "Developer tools" },
    { href: L(`/tools/dev-tools/${id}`), label: writingToolsMeta[id].h1 },
  ];

  return (
    <WritingToolPageView
      locale={locale}
      id={id}
      hubHref={hub}
      hubLabel="Developer tools"
      breadcrumbs={breadcrumbs}
      categoryHub={{ href: hub, label: "Browse all developer tools" }}
    />
  );
}
