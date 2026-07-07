import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  WRITING_TOOL_IDS,
  isWritingToolId,
  isToolVisibleInLocale,
  toolDetailPublicPath,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { defaultLocale } from "@/lib/i18n";
import { buildWritingToolPageMetadata } from "@/lib/writing-tool-page-shared";
import { WritingToolPageView } from "@/components/tools/WritingToolPageView";

export const dynamicParams = true;

export function generateStaticParams() {
  return WRITING_TOOL_IDS.map((tool) => ({
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
  const canonicalPath = isWritingToolId(tool)
    ? toolDetailPublicPath(tool)
    : `/tools/${tool}`;
  return buildWritingToolPageMetadata({
    locale,
    tool,
    canonicalPath,
  });
}

export default async function WritingToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isWritingToolId(tool)) notFound();

  const id = tool as WritingToolId;
  if (!isToolVisibleInLocale(id, locale)) notFound();

  return (
    <WritingToolPageView
      locale={locale}
      id={id}
    />
  );
}
