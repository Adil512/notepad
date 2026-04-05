import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import {
  WRITING_TOOL_IDS,
  writingToolsMeta,
  writingToolCategoryAccent,
  isWritingToolId,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { WritingToolView } from "@/components/tools/WritingToolView";
import { defaultLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";
import { ToolIcon } from "@/components/tools/ToolIcon";

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
  if (!isWritingToolId(tool)) {
    return { title: "Tool" };
  }
  const m = writingToolsMeta[tool];
  const canonical = canonicalUrlForPage(locale, `/tools/${tool}`);
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function WritingToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isWritingToolId(tool)) notFound();

  const id = tool as WritingToolId;
  const m = writingToolsMeta[id];
  const hub = localizedPath(locale, "/tools");
  const accent = writingToolCategoryAccent[m.category];

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="relative border-b border-border/60 bg-gradient-to-b from-muted/50 via-background to-background dark:from-muted/10 dark:via-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
          aria-hidden
        >
          <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgb(124_58_237/0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgb(139_92_246/0.2),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
          <Link
            href={hub}
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-sm backdrop-blur-sm transition hover:border-primary/30 hover:text-primary"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Toolkit
          </Link>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/10 dark:shadow-black/30 sm:h-20 sm:w-20`}
            >
              <ToolIcon id={id} className="h-9 w-9 sm:h-10 sm:w-10" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {m.h1}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {m.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <WritingToolView id={id} />
      </div>
    </div>
  );
}
