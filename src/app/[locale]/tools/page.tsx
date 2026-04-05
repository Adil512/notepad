import Link from "next/link";
import type { Metadata } from "next";
import {
  WRITING_TOOL_CATEGORY_ORDER,
  WRITING_TOOL_IDS,
  writingToolCategoryCopy,
  writingToolCategoryAccent,
  writingToolsMeta,
  toolsInCategory,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Writing Tools | Notepad.is",
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
  const toolCount = WRITING_TOOL_IDS.length;

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(124_58_237/0.14),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(139_92_246/0.22),transparent_68%)]" />
        <div className="absolute top-24 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-400/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <header className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md dark:bg-background/40">
            <Sparkles className="h-3.5 w-3.5" />
            Toolkit
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Writing Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            Find all the professional writing tools that you can use for free,
            unlimited.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/90 px-4 py-2.5 text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="tabular-nums text-2xl font-bold text-foreground">
                {toolCount}
              </span>
              <span className="text-muted-foreground">specialized tools</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2.5 text-sm text-emerald-800 dark:text-emerald-200/90">
              <Shield className="h-4 w-4 shrink-0" />
              Privacy-first · local storage
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              Notepad Online
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link
              href={L("/distraction-free-writer")}
              className="rounded-xl border border-border bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-primary/30 hover:bg-muted/50"
            >
              Distraction-free
            </Link>
            <Link
              href={L("/quick-notes")}
              className="rounded-xl border border-border bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-primary/30 hover:bg-muted/50"
            >
              Quick notes
            </Link>
          </div>
        </header>

        <div className="mt-16 space-y-16 sm:mt-20">
          {WRITING_TOOL_CATEGORY_ORDER.map((cat) => {
            const ids = toolsInCategory(cat);
            if (ids.length === 0) return null;
            const copy = writingToolCategoryCopy[cat];
            const accent = writingToolCategoryAccent[cat];

            return (
              <section key={cat} aria-labelledby={`cat-${cat}`}>
                <div className="mb-6 flex flex-col gap-2 border-b border-border/60 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div
                      className={`mb-2 inline-flex h-1 w-12 rounded-full bg-gradient-to-r ${accent}`}
                      aria-hidden
                    />
                    <h2
                      id={`cat-${cat}`}
                      className="font-display text-2xl font-bold tracking-tight text-foreground"
                    >
                      {copy.title}
                    </h2>
                    <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                      {copy.description}
                    </p>
                  </div>
                  <span className="text-xs font-medium tabular-nums text-muted-foreground">
                    {ids.length} tool{ids.length === 1 ? "" : "s"}
                  </span>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  {ids.map((id) => (
                    <ToolHubCard key={id} id={id} href={L(`/tools/${id}`)} accent={accent} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <footer className="mt-20 rounded-2xl border border-dashed border-border/80 bg-muted/20 px-6 py-8 text-center dark:bg-muted/10 sm:text-left">
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

function ToolHubCard({
  id,
  href,
  accent,
}: {
  id: WritingToolId;
  href: string;
  accent: string;
}) {
  const m = writingToolsMeta[id];
  return (
    <li>
      <Link
        href={href}
        className="group relative flex h-full gap-4 rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] transition duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5 dark:bg-card/60 dark:ring-white/[0.04] dark:hover:shadow-primary/10 sm:p-6"
      >
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-md transition group-hover:scale-[1.03] group-hover:shadow-lg`}
        >
          <ToolIcon id={id} className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition group-hover:text-primary">
              {m.h1}
            </h3>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {m.tagline}
          </p>
        </div>
      </Link>
    </li>
  );
}
