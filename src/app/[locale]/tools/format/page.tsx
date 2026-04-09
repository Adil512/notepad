import Link from "next/link";
import type { Metadata } from "next";
import {
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
  isToolVisibleInLocale,
  writingToolsMeta,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/format");
  return {
    title: "Text Utility Tools | Notepad.is",
    description:
      "Use text utility tools for fast cleaning, formatting, transforming, and comparing text, including case changes, line operations, and minification.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function FormatToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const visibleIds = TEXT_FORMAT_CONVERTER_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(20_184_166/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(45_212_191/0.16),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Text Utility Tools
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Text utility tools provide fast and lightweight operations for
              cleaning, formatting, transforming, and comparing text. This
              includes case conversion, duplicate removal, text sorting, line
              merging, diff checker, and text cleaning utilities.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href={L("/tools")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              All tools
            </Link>
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              Notepad editor
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </header>

        <section className="mt-14" aria-labelledby="format-tools-grid-heading">
          <h2
            id="format-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Text utility tools
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <FormatToolCard key={id} id={id} href={L(`/tools/format/${id}`)} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function FormatToolCard({
  id,
  href,
}: {
  id: WritingToolId;
  href: string;
}) {
  const m = writingToolsMeta[id];
  return (
    <li>
      <Link
        href={href}
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-teal-200/80 bg-teal-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-teal-50/90 hover:shadow-md dark:border-teal-900/45 dark:bg-teal-950/25 dark:hover:bg-teal-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/10 text-primary dark:from-teal-400/15 dark:to-emerald-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{m.h1}</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {m.tagline}
          </span>
        </span>
      </Link>
    </li>
  );
}
