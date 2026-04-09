import Link from "next/link";
import type { Metadata } from "next";
import {
  DATA_CODE_CONVERTER_TOOL_IDS,
  DEV_TOOLS_HUB_TOOL_IDS,
  DOCUMENT_CONVERTER_TOOL_IDS,
  EDITOR_HUB_TOOL_IDS,
  EXCEL_SPREADSHEET_TOOL_IDS,
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
  TEXT_ANALYSIS_HUB_TOOL_IDS,
  WRITING_PRODUCTIVITY_TOOL_IDS,
  isToolVisibleInLocale,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { ArrowRight, Sparkles } from "lucide-react";
import { canonicalUrlForPage } from "@/lib/site";

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
  const categories = [
    {
      href: "/tools/writing",
      title: "Writing Tools",
      description:
        "Distraction-free writing, quick notes, focus sessions, goals, dictation, templates, snippets, and workflow helpers.",
      count: WRITING_PRODUCTIVITY_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-violet-200/80 bg-violet-50/65 dark:border-violet-900/45 dark:bg-violet-950/25",
    },
    {
      href: "/tools/editors",
      title: "Editor Tools",
      description:
        "Markdown, code, JSON, and HTML editors for technical writing and structured content work.",
      count: EDITOR_HUB_TOOL_IDS.filter((id) => isToolVisibleInLocale(id, locale))
        .length,
      accent:
        "border-indigo-200/80 bg-indigo-50/65 dark:border-indigo-900/45 dark:bg-indigo-950/25",
    },
    {
      href: "/tools/text",
      title: "Text Analysis Tools",
      description:
        "Word, character, sentence, and paragraph counters with readability and comparison utilities.",
      count: TEXT_ANALYSIS_HUB_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-rose-200/80 bg-orange-50/60 dark:border-rose-900/40 dark:bg-rose-950/20",
    },
    {
      href: "/tools/dev-tools",
      title: "Developer Tools",
      description:
        "Formatters, minifiers, encoders, and regex utilities for day-to-day web development.",
      count: DEV_TOOLS_HUB_TOOL_IDS.filter((id) => isToolVisibleInLocale(id, locale))
        .length,
      accent:
        "border-slate-200/80 bg-slate-50/70 dark:border-slate-800/80 dark:bg-slate-900/40",
    },
    {
      href: "/tools/excel",
      title: "Excel Converter Tools",
      description:
        "Convert between Excel and CSV, JSON, XML, PDF, ODS, Google Sheets, and more spreadsheet formats.",
      count: EXCEL_SPREADSHEET_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-blue-200/80 bg-blue-50/65 dark:border-blue-900/45 dark:bg-blue-950/25",
    },
    {
      href: "/tools/documents",
      title: "Document Converter Tools",
      description:
        "Transform PDF, Word, TXT, Markdown, HTML, RTF, and PowerPoint files for editing and publishing.",
      count: DOCUMENT_CONVERTER_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-cyan-200/80 bg-cyan-50/65 dark:border-cyan-900/45 dark:bg-cyan-950/25",
    },
    {
      href: "/tools/data",
      title: "Data & Code Converter Tools",
      description:
        "Move data between JSON, CSV, XML, YAML, SQL, and plain text formats for API and data workflows.",
      count: DATA_CODE_CONVERTER_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-sky-200/80 bg-sky-50/65 dark:border-sky-900/45 dark:bg-sky-950/25",
    },
    {
      href: "/tools/format",
      title: "Text Utility Tools",
      description:
        "Case conversion, line operations, text cleanup, and compact formatting tools for quick text transformations.",
      count: TEXT_FORMAT_CONVERTER_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-teal-200/80 bg-teal-50/65 dark:border-teal-900/45 dark:bg-teal-950/25",
    },
  ];

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(124_58_237/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(139_92_246/0.18),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md dark:bg-background/40">
            <Sparkles className="h-3.5 w-3.5" />
            Tools
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
              href={L("/tools/writing")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Writing tools
            </Link>
            <Link
              href={L("/tools/editors")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Editor tools
            </Link>
            <Link
              href={L("/tools/text")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Text analysis
            </Link>
            <Link
              href={L("/tools/dev-tools")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Developer tools
            </Link>
            <Link
              href={L("/tools/excel")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Excel converters
            </Link>
          </div>
        </header>

        <section
          className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Tool categories"
        >
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={L(cat.href)}
              className={`group rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md sm:p-6 ${cat.accent}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Category
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                {cat.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open category
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {cat.count} tools
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-border/70 bg-muted/20 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About Uur Free Online Tools
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
            Welcome to our complete collection of free online tools designed to
            simplify text editing, data conversion, document processing, and
            developer workflows.
          </p>
        </section>

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
