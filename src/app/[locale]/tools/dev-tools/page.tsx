import Link from "next/link";
import type { Metadata } from "next";
import {
  DEV_TOOLS_HUB_TOOL_IDS,
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
  const canonical = canonicalUrlForPage(locale, "/tools/dev-tools");
  return {
    title: "Developer tools | Notepad.is",
    description:
      "JSON and XML formatters, HTML minifier, CSS beautifier, Base64 and URL codecs, regex tester—free utilities that run in your browser.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function DevToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const visibleIds = DEV_TOOLS_HUB_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(99_102_241/0.1),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(129_140_248/0.14),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Developer tools
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Developer tools give you essential utilities for web development,
              programming, and technical SEO—without installing desktop software.
              Format and inspect JSON with the{" "}
              <Link
                href={L("/tools/dev-tools/json-formatter")}
                className="font-semibold text-primary hover:underline"
              >
                JSON formatter
              </Link>
              , tighten markup using the{" "}
              <Link
                href={L("/tools/dev-tools/html-minifier")}
                className="font-semibold text-primary hover:underline"
              >
                HTML minifier
              </Link>
              , tidy styles with the{" "}
              <Link
                href={L("/tools/dev-tools/css-beautifier")}
                className="font-semibold text-primary hover:underline"
              >
                CSS beautifier
              </Link>
              , encode or decode with{" "}
              <Link
                href={L("/tools/dev-tools/base64-codec")}
                className="font-semibold text-primary hover:underline"
              >
                Base64
              </Link>{" "}
              and{" "}
              <Link
                href={L("/tools/dev-tools/url-codec")}
                className="font-semibold text-primary hover:underline"
              >
                URL
              </Link>{" "}
              tools, validate patterns in the{" "}
              <Link
                href={L("/tools/dev-tools/regex-tester")}
                className="font-semibold text-primary hover:underline"
              >
                regex tester
              </Link>
              , and structure XML in the{" "}
              <Link
                href={L("/tools/dev-tools/xml-formatter")}
                className="font-semibold text-primary hover:underline"
              >
                XML formatter
              </Link>
              . Everything runs locally in your browser where supported.
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
              href={L("/tools/editors")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Editor tools
            </Link>
            <Link
              href={L("/tools/text")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Text analysis
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

        <section className="mt-14" aria-labelledby="dev-tools-grid-heading">
          <h2
            id="dev-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Utilities
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <DevToolCard key={id} id={id} href={L(`/tools/dev-tools/${id}`)} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function DevToolCard({
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
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-indigo-200/80 bg-indigo-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-indigo-50/90 hover:shadow-md dark:border-indigo-900/45 dark:bg-indigo-950/25 dark:hover:bg-indigo-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-primary dark:from-indigo-400/15 dark:to-violet-400/10">
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
