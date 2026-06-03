import Link from "next/link";
import type { Metadata } from "next";
import {
  WRITING_PRODUCTIVITY_TOOL_IDS,
  isToolVisibleInLocale,
  isWritingProductivityToolId,
  writingToolsMeta,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight } from "lucide-react";
import {
  getWritingToolsCopy,
  type WritingToolLabel,
} from "@/lib/tools-writing-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/writing");
  const t = getWritingToolsCopy(locale);
  return {
    title: `${t.pageTitle} | Notepad.is`,
    description:
      "Distraction-free workflows, quick notes, dictation, goals, templates, and export utilities—free in your browser.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function WritingToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = getWritingToolsCopy(locale);
  const visibleIds = WRITING_PRODUCTIVITY_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(124_58_237/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(139_92_246/0.18),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.pageTitle}
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              {t.intro.map((seg, i) =>
                "link" in seg ? (
                  <Link
                    key={i}
                    href={L(seg.link)}
                    className="font-semibold text-primary hover:underline"
                  >
                    {seg.label}
                  </Link>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href={L("/tools")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaAllTools}
            </Link>
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              {t.ctaNotepadEditor}
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </header>

        <section
          className="mt-14"
          aria-labelledby="writing-landings-heading"
        >
          <h2
            id="writing-landings-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.experiencesHeading}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            <WritingLandingCard
              href={L("/distraction-free-writer")}
              title={t.landings.distractionFree.title}
              description={t.landings.distractionFree.description}
              openLabel={t.open}
            />
            <WritingLandingCard
              href={L("/quick-notes")}
              title={t.landings.quickNotes.title}
              description={t.landings.quickNotes.description}
              openLabel={t.open}
            />
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="writing-utilities-heading">
          <h2
            id="writing-utilities-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.utilitiesHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <WritingToolCard
                key={id}
                id={id}
                href={L(`/tools/writing/${id}`)}
                label={
                  isWritingProductivityToolId(id)
                    ? t.toolLabels?.[id]
                    : undefined
                }
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function WritingLandingCard({
  href,
  title,
  description,
  openLabel,
}: {
  href: string;
  title: string;
  description: string;
  openLabel: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex h-full flex-col rounded-2xl border border-violet-200/80 bg-violet-50/65 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md dark:border-violet-900/45 dark:bg-violet-950/25 dark:hover:shadow-primary/10 sm:p-6"
      >
        <span className="font-display text-lg font-semibold text-foreground">
          {title}
        </span>
        <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </span>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {openLabel}
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </li>
  );
}

function WritingToolCard({
  id,
  href,
  label,
}: {
  id: WritingToolId;
  href: string;
  label?: WritingToolLabel;
}) {
  const m = writingToolsMeta[id];
  const h1 = label?.h1 ?? m.h1;
  const tagline = label?.tagline ?? m.tagline;
  return (
    <li>
      <Link
        href={href}
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-border/80 bg-card/90 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-muted/20 hover:shadow-md dark:bg-card/60 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-sky-500/10 text-primary dark:from-violet-400/15 dark:to-sky-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{h1}</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {tagline}
          </span>
        </span>
      </Link>
    </li>
  );
}
