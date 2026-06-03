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
import { getToolsHubCopy, toolsHubRtlLocales } from "@/lib/tools-hub-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getToolsHubCopy(locale);
  return {
    title: `${t.pageTitle} | Notepad.is`,
    description: t.intro,
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
  const t = getToolsHubCopy(locale);
  const dir = toolsHubRtlLocales.has(locale) ? "rtl" : "ltr";
  const categories = [
    {
      href: "/tools/writing",
      title: t.categories.writing.title,
      description: t.categories.writing.description,
      count: WRITING_PRODUCTIVITY_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-violet-200/80 bg-violet-50/65 dark:border-violet-900/45 dark:bg-violet-950/25",
    },
    {
      href: "/tools/editors",
      title: t.categories.editors.title,
      description: t.categories.editors.description,
      count: EDITOR_HUB_TOOL_IDS.filter((id) => isToolVisibleInLocale(id, locale))
        .length,
      accent:
        "border-indigo-200/80 bg-indigo-50/65 dark:border-indigo-900/45 dark:bg-indigo-950/25",
    },
    {
      href: "/tools/text",
      title: t.categories.text.title,
      description: t.categories.text.description,
      count: TEXT_ANALYSIS_HUB_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-rose-200/80 bg-orange-50/60 dark:border-rose-900/40 dark:bg-rose-950/20",
    },
    {
      href: "/tools/dev-tools",
      title: t.categories.devTools.title,
      description: t.categories.devTools.description,
      count: DEV_TOOLS_HUB_TOOL_IDS.filter((id) => isToolVisibleInLocale(id, locale))
        .length,
      accent:
        "border-slate-200/80 bg-slate-50/70 dark:border-slate-800/80 dark:bg-slate-900/40",
    },
    {
      href: "/tools/excel",
      title: t.categories.excel.title,
      description: t.categories.excel.description,
      count: EXCEL_SPREADSHEET_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-blue-200/80 bg-blue-50/65 dark:border-blue-900/45 dark:bg-blue-950/25",
    },
    {
      href: "/tools/documents",
      title: t.categories.documents.title,
      description: t.categories.documents.description,
      count: DOCUMENT_CONVERTER_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-cyan-200/80 bg-cyan-50/65 dark:border-cyan-900/45 dark:bg-cyan-950/25",
    },
    {
      href: "/tools/data",
      title: t.categories.data.title,
      description: t.categories.data.description,
      count: DATA_CODE_CONVERTER_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-sky-200/80 bg-sky-50/65 dark:border-sky-900/45 dark:bg-sky-950/25",
    },
    {
      href: "/tools/format",
      title: t.categories.format.title,
      description: t.categories.format.description,
      count: TEXT_FORMAT_CONVERTER_TOOL_IDS.filter((id) =>
        isToolVisibleInLocale(id, locale)
      ).length,
      accent:
        "border-teal-200/80 bg-teal-50/65 dark:border-teal-900/45 dark:bg-teal-950/25",
    },
  ];

  return (
    <div className="relative min-h-full overflow-hidden" dir={dir}>
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
            {t.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            {t.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              {t.ctaNotepad}
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link
              href={L("/tools/writing")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.chips.writing}
            </Link>
            <Link
              href={L("/tools/editors")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.chips.editors}
            </Link>
            <Link
              href={L("/tools/text")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.chips.text}
            </Link>
            <Link
              href={L("/tools/dev-tools")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.chips.devTools}
            </Link>
            <Link
              href={L("/tools/excel")}
              className="rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.chips.excel}
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
                {t.categoryLabel}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                {cat.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {t.openCategory}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t.formatToolsCount
                  ? t.formatToolsCount(cat.count)
                  : t.toolsCountTemplate
                    ? t.toolsCountTemplate.replace("{count}", String(cat.count))
                    : `${cat.count} ${t.toolsCountWord}`}
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-border/70 bg-muted/20 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
            {t.aboutBody}
          </p>
        </section>

        <footer className="mt-14 rounded-2xl border border-dashed border-border/80 bg-muted/20 px-6 py-8 text-center dark:bg-muted/10 sm:text-left">
          <p className="text-sm text-muted-foreground">
            {t.footer.before}
            <Link
              href={L("/")}
              className="font-semibold text-primary hover:underline"
            >
              {t.footer.linkLabel}
            </Link>
            {t.footer.after}
          </p>
        </footer>
      </div>
    </div>
  );
}
