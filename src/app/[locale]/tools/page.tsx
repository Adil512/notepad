import Link from "next/link";
import type { Metadata } from "next";
import {
  DATA_CODE_CONVERTER_TOOL_IDS,
  DEVTOOLS_TOOL_IDS,
  DOCUMENT_CONVERTER_TOOL_IDS,
  EXCEL_SPREADSHEET_TOOL_IDS,
  PRIMARY_EDITOR_TOOL_IDS,
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
  TEXT_ANALYSIS_TOOL_IDS,
  WRITING_TOOL_IDS,
  isToolVisibleInLocale,
  writingToolsMeta,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight, Sparkles } from "lucide-react";
import { canonicalUrlForPage } from "@/lib/site";

const HUB_TOOL_IDS = new Set<WritingToolId>([
  ...PRIMARY_EDITOR_TOOL_IDS,
  ...TEXT_ANALYSIS_TOOL_IDS,
  ...DEVTOOLS_TOOL_IDS,
]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "All Tools | Notepad.is",
    description:
      "Professional writing tools for free, unlimited: timers, Markdown, goals, dictation, templates, and more.",
    alternates: { canonical: canonicalUrlForPage(locale, "/tools") },
    openGraph: { url: canonicalUrlForPage(locale, "/tools") },
  };
}

export default async function ToolsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const visibleToolIds = WRITING_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );
  const moreToolIds = visibleToolIds.filter((id) => !HUB_TOOL_IDS.has(id));

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(124_58_237/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(139_92_246/0.18),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md dark:bg-background/40">
            <Sparkles className="h-3.5 w-3.5" />
            Toolkit
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            All Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            Find all the professional tools that you can use for free, unlimited.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              Notepad Online
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link
              href={L("/distraction-free-writer")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Distraction-free
            </Link>
            <Link
              href={L("/quick-notes")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Quick notes
            </Link>
          </div>
        </header>

        <div className="mt-12 space-y-6 sm:mt-14">
          <ToolsHubStrip
            title="Online editors"
            titleClass="text-violet-700 dark:text-violet-300"
            panelClass="border-violet-200/80 bg-violet-50/70 dark:border-violet-900/45 dark:bg-violet-950/25"
            ids={[...PRIMARY_EDITOR_TOOL_IDS]}
            L={L}
          />
          <ToolsHubStrip
            title="Text analysis"
            titleClass="text-rose-800 dark:text-rose-300"
            panelClass="border-rose-200/80 bg-orange-50/60 dark:border-rose-900/40 dark:bg-rose-950/20"
            ids={[...TEXT_ANALYSIS_TOOL_IDS]}
            L={L}
          />
          <ToolsHubStrip
            title="Developer utilities"
            titleClass="text-indigo-800 dark:text-indigo-300"
            panelClass="border-indigo-200/80 bg-indigo-50/65 dark:border-indigo-900/45 dark:bg-indigo-950/25"
            ids={[...DEVTOOLS_TOOL_IDS]}
            L={L}
          />
          {locale === "en" ? (
            <>
              <ToolsHubStrip
                title="Excel & Spreadsheet Converters"
                titleClass="text-blue-800 dark:text-blue-300"
                panelClass="border-blue-200/80 bg-blue-50/65 dark:border-blue-900/45 dark:bg-blue-950/25"
                ids={EXCEL_SPREADSHEET_TOOL_IDS}
                L={L}
              />
              <ToolsHubStrip
                title="Document Converters"
                titleClass="text-cyan-800 dark:text-cyan-300"
                panelClass="border-cyan-200/80 bg-cyan-50/65 dark:border-cyan-900/45 dark:bg-cyan-950/25"
                ids={DOCUMENT_CONVERTER_TOOL_IDS}
                L={L}
              />
              <ToolsHubStrip
                title="Data & Code Converters"
                titleClass="text-sky-800 dark:text-sky-300"
                panelClass="border-sky-200/80 bg-sky-50/65 dark:border-sky-900/45 dark:bg-sky-950/25"
                ids={DATA_CODE_CONVERTER_TOOL_IDS}
                L={L}
              />
              <ToolsHubStrip
                title="Text Utilities & Format Converters"
                titleClass="text-teal-800 dark:text-teal-300"
                panelClass="border-teal-200/80 bg-teal-50/65 dark:border-teal-900/45 dark:bg-teal-950/25"
                ids={TEXT_FORMAT_CONVERTER_TOOL_IDS}
                L={L}
              />
            </>
          ) : null}
        </div>

        {moreToolIds.length > 0 ? (
          <section
            className="mt-10 rounded-2xl border border-border/70 bg-muted/25 p-5 dark:bg-muted/10 sm:p-6"
            aria-labelledby="more-tools-heading"
          >
            <h2
              id="more-tools-heading"
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
            >
              More writing tools
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {moreToolIds.map((id) => (
                <ToolHubPill key={id} id={id} href={L(`/tools/${id}`)} />
              ))}
            </ul>
          </section>
        ) : null}

        <footer className="mt-14 rounded-2xl border border-dashed border-border/80 bg-muted/20 px-6 py-8 text-center dark:bg-muted/10 sm:text-left">
          <p className="text-sm text-muted-foreground">
            Looking for the classic canvas? The{" "}
            <Link
              href={L("/")}
              className="font-semibold text-primary hover:underline"
            >
              Notepad Editor
            </Link>{" "}
            is still the full rich-text experience with tables, images, and
            formatting.
          </p>
        </footer>
      </div>
    </div>
  );
}

function ToolsHubStrip({
  title,
  titleClass,
  panelClass,
  ids,
  L,
}: {
  title: string;
  titleClass: string;
  panelClass: string;
  ids: WritingToolId[];
  L: (p: string) => string;
}) {
  return (
    <section
      className={`rounded-2xl border p-5 shadow-sm sm:p-6 ${panelClass}`}
      aria-label={title}
    >
      <h2
        className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${titleClass}`}
      >
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2.5">
        {ids.map((id) => (
          <li key={id}>
            <ToolHubPill id={id} href={L(`/tools/${id}`)} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ToolHubPill({
  id,
  href,
}: {
  id: WritingToolId;
  href: string;
}) {
  const m = writingToolsMeta[id];
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/95 px-3.5 py-2 text-sm font-medium text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.05)] ring-1 ring-black/[0.03] transition hover:-translate-y-px hover:border-primary/35 hover:shadow-md dark:bg-background/90 dark:ring-white/[0.05] dark:hover:shadow-primary/10"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted/80 text-primary dark:bg-muted/50">
        <ToolIcon id={id} className="h-3.5 w-3.5" />
      </span>
      {m.h1}
    </Link>
  );
}
