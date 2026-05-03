import Link from "next/link";
import type { Metadata } from "next";
import { Shield, Zap, Globe, Heart } from "lucide-react";
import { getAboutPageSeo } from "@/lib/about-page-seo";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = getAboutPageSeo(locale);
  const canonical = canonicalUrlForPage(locale, "/about");
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { url: canonical, title, description },
  };
}

const pillars = [
  {
    icon: Shield,
    title: "Privacy first",
    body: "Your notes stay in the browser by default. Local storage keeps drafts on your device so everyday writing does not depend on our servers.",
  },
  {
    icon: Zap,
    title: "Speed you feel",
    body: "No installers, no project files for a quick thought. Open a tab, type, and move on. The interface stays quiet so your words stay loud.",
  },
  {
    icon: Globe,
    title: "Works everywhere",
    body: "If you have a modern browser, you have your notepad. Use it for lists, snippets, journaling, or the messy first pass before you polish elsewhere.",
  },
  {
    icon: Heart,
    title: "Built for real use",
    body: "We care about typography, keyboard flow, and small details that add up. The goal is simple: a dependable place to think in text.",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const home = localizedPath(locale, "/");
  const tools = localizedPath(locale, "/tools");
  const blog = localizedPath(locale, "/blog");

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-primary/[0.04] dark:from-primary/[0.12] dark:to-primary/[0.05]"
          aria-hidden
        />
        <div className="container relative max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            About us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Writing should feel effortless
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Notepad.is is a calm, fast online notepad for people who want to
            capture ideas without fighting the tool. We believe the best
            software gets out of the way.
          </p>
          <div className="mt-10">
            <Link
              href={home}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Try the notepad
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-5xl mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why we built this
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Heavy apps are great for long projects, but most notes are small:
            a paragraph, a URL, a reminder. We wanted one place that opens
            instantly, saves automatically, and respects your attention. That
            is Notepad.is.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
            You can explore our{" "}
            <Link
              href={tools}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Writing tools
            </Link>{" "}
            directory, follow product notes on the{" "}
            <Link
              href={blog}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Blog
            </Link>
            , or start typing in the notepad anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <Icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 dark:bg-muted/10">
        <div className="container max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Ready when you are
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            No account required to start. Bookmark the page, keep a tab pinned,
            and use it the way that fits your day.
          </p>
          <Link
            href={home}
            className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Open Notepad.is
          </Link>
        </div>
      </section>
    </div>
  );
}
