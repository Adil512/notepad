import Link from "next/link";
import { HomeBlogSection, type HomeBlogPost } from "@/components/HomeBlogSection";
import {
  Check,
  X,
  Save,
  Download,
  Maximize2,
  ZoomIn,
  LayoutGrid,
  Heading,
  Type,
  Palette,
  Mic,
  Share2,
  History,
  Globe,
  PenLine,
  Upload,
  Sparkles,
} from "lucide-react";
import { getHomeFaqs } from "@/lib/faq-data";
import { localizedPath } from "@/lib/i18n";
import {
  getHomeSeoCopy,
  getHomeFeaturesCopy,
  getHomeHowToCopy,
  homeSeoRtlLocales,
} from "@/lib/home-seo-content";

export type BlogTeaserItem = HomeBlogPost;

/** English copy links “online notepad” to the homepage. */
function WhatFirstParagraph({
  locale,
  text,
}: {
  locale: string;
  text: string;
}) {
  const href = localizedPath(locale, "/");
  const needle = "online notepad";
  if (locale === "en") {
    const idx = text.indexOf(needle);
    if (idx === -1) return <p>{text}</p>;
    return (
      <p>
        {text.slice(0, idx)}
        <Link
          href={href}
          className="text-primary hover:underline font-medium underline-offset-2"
        >
          {needle}
        </Link>
        {text.slice(idx + needle.length)}
      </p>
    );
  }
  return <p>{text}</p>;
}

/** English copy links “distraction-free writing” to the distraction-free writer tool. */
function WhatSecondParagraph({
  locale,
  text,
}: {
  locale: string;
  text: string;
}) {
  const href = localizedPath(locale, "/distraction-free-writer");
  const needle = "distraction-free writing";
  if (locale === "en") {
    const idx = text.indexOf(needle);
    if (idx === -1) return <p>{text}</p>;
    return (
      <p>
        {text.slice(0, idx)}
        <Link
          href={href}
          className="text-primary hover:underline font-medium underline-offset-2"
        >
          {needle}
        </Link>
        {text.slice(idx + needle.length)}
      </p>
    );
  }
  return <p>{text}</p>;
}

/** English FAQ answers link “Notepad Online” to notepad.is. */
function FaqAnswer({ locale, text }: { locale: string; text: string }) {
  const needle = "Notepad Online";
  if (locale === "en") {
    const idx = text.indexOf(needle);
    if (idx === -1) return <p>{text}</p>;
    return (
      <p>
        {text.slice(0, idx)}
        <Link
          href="https://notepad.is/"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
        >
          {needle}
        </Link>
        {text.slice(idx + needle.length)}
      </p>
    );
  }
  return <p>{text}</p>;
}

export function SEOContent({
  locale,
  latestBlogPosts = [],
}: {
  locale: string;
  latestBlogPosts?: BlogTeaserItem[];
}) {
  const seo = getHomeSeoCopy(locale);
  const featuresCopy = getHomeFeaturesCopy(locale);
  const howToCopy = getHomeHowToCopy(locale);
  const faqs = getHomeFaqs(locale);
  const dir = homeSeoRtlLocales.has(locale) ? "rtl" : "ltr";
  const featureIcons = [
    Save,
    Download,
    Maximize2,
    ZoomIn,
    LayoutGrid,
    Heading,
    Type,
    Palette,
    Mic,
    Share2,
    History,
  ];
  const howToIcons = [Globe, PenLine, Upload, Share2, Sparkles];

  return (
    <div
      className="w-full bg-background pt-16 pb-24 border-t"
      dir={dir}
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: What is an online notepad? */}
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
            {seo.whatTitle}
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <WhatFirstParagraph locale={locale} text={seo.whatParagraphs[0]} />
            <WhatSecondParagraph locale={locale} text={seo.whatParagraphs[1]} />
          </div>
        </section>

        {/* Section 2: Why Use notepad.is? */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              {seo.whyTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {seo.whyIntro}
            </p>
          </div>

          <div
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            dir="ltr"
          >
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-foreground border-l border-border bg-primary/5 text-primary text-center">notepad.is</th>
                  <th className="p-4 font-semibold text-foreground border-l border-border text-center">Desktop Notepad</th>
                  <th className="p-4 font-semibold text-foreground border-l border-border text-center">Google Docs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "No login required", us: true, desktop: true, docs: false },
                  { feature: "Works on all devices", us: true, desktop: false, docs: true },
                  { feature: "Instant load", us: true, desktop: true, docs: false },
                  { feature: "Dark mode", us: true, desktop: false, docs: true },
                  { feature: "Distraction-free", us: true, desktop: true, docs: false },
                  { feature: "Auto-save to browser", us: true, desktop: false, docs: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 border-l border-border bg-primary/5 text-center">
                      {row.us ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                    <td className="p-4 border-l border-border text-center">
                      {row.desktop ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                    <td className="p-4 border-l border-border text-center">
                      {row.docs ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: How to Use This Notepad.is */}
        <section className="max-w-4xl mx-auto space-y-10" dir={dir}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              {howToCopy.title}
            </h2>
          </div>

          <ol className="relative space-y-5">
            <div
              className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block"
              aria-hidden
            />
            {howToCopy.steps.map((step, i) => {
              const Icon = howToIcons[i] ?? PenLine;
              return (
                <li
                  key={i}
                  className="group relative flex gap-4 sm:gap-6 items-start"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 ring-4 ring-background transition-transform group-hover:scale-105">
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-base leading-relaxed text-muted-foreground pt-1">
                        {step}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Section: Key Features of Notepad Online */}
        <section className="max-w-6xl mx-auto space-y-12" dir={dir}>
          <div className="text-center space-y-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              {featuresCopy.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {featuresCopy.features.map(({ title, desc }, i) => {
              const Icon = featureIcons[i] ?? Save;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            {featuresCopy.outro}
          </p>
        </section>

        <HomeBlogSection locale={locale} posts={latestBlogPosts} />

        {/* Section 3: FAQ */}
        <section className="max-w-3xl mx-auto space-y-8" dir={dir}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              FAQs
            </h2>
          </div>

          <div className="divide-y divide-border border-t border-b">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-lg text-foreground hover:text-primary transition-colors focus:outline-none">
                  <h3>{faq.q}</h3>
                  <span className="shrink-0 rounded-full bg-muted p-1.5 text-muted-foreground group-open:bg-primary/10 group-open:text-primary group-open:-rotate-180 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 leading-relaxed text-muted-foreground pr-8">
                  <FaqAnswer locale={locale} text={faq.a} />
                </div>
              </details>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
