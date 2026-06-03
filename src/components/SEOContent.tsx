import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
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
} from "lucide-react";
import { getHomeFaqs } from "@/lib/faq-data";
import { localizedPath } from "@/lib/i18n";
import { getHomeSeoCopy, homeSeoRtlLocales } from "@/lib/home-seo-content";

export type BlogTeaserItem = { slug: string; title: string };

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

export function SEOContent({
  locale,
  latestBlogPosts = [],
}: {
  locale: string;
  latestBlogPosts?: BlogTeaserItem[];
}) {
  const seo = getHomeSeoCopy(locale);
  const faqs = getHomeFaqs(locale);
  const dir = homeSeoRtlLocales.has(locale) ? "rtl" : "ltr";

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
            <p>{seo.whatParagraphs[0]}</p>
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

        {/* Section: Key Features of Notepad Online */}
        <section className="max-w-6xl mx-auto space-y-12" dir="ltr">
          <div className="text-center space-y-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              Key Features of Notepad Online
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {[
              {
                Icon: Save,
                title: "Auto Save Online",
                desc: "Our online notepad automatically saves your work as you type, so you never lose a single word, even if your browser crashes or you accidentally close the tab.",
              },
              {
                Icon: Download,
                title: "Download in TXT and PDF formats",
                desc: "With our notepad, you can export your notes instantly as a clean TXT or PDF file, making it easy to save, print, or share your work offline.",
              },
              {
                Icon: Maximize2,
                title: "Full Screen",
                desc: "Switch to full-screen mode and let this distraction-free notepad give you a clean, edge-to-edge writing canvas perfect for focused drafting sessions.",
              },
              {
                Icon: ZoomIn,
                title: "200% Zoom Feature",
                desc: "This online notepad lets you zoom in up to 200%, making it easier on the eyes for long writing sessions or when working with small text on any screen.",
              },
              {
                Icon: LayoutGrid,
                title: "Insert Images, Table, Auto-Update Dates, Export HTML",
                desc: "From inserting images and structured tables to auto-updating dates and exporting your content as HTML, this notepad goes far beyond basic text editing.",
              },
              {
                Icon: Heading,
                title: "Headings from H1 to H6",
                desc: "Organize your content with a full heading hierarchy, H1 through H6, giving this notepad the structure of a proper document editor right in your browser.",
              },
              {
                Icon: Type,
                title: "Different Font Styles",
                desc: "Choose from a variety of font styles to personalize your writing experience and make your notepad documents more readable, expressive, or professional.",
              },
              {
                Icon: Palette,
                title: "Change Text Color",
                desc: "This online notepad lets you highlight key points and add visual clarity by changing text color, a simple but powerful formatting tool for any writer.",
              },
              {
                Icon: Mic,
                title: "AI-Powered Speech to Text Without Any Error",
                desc: "Speak your thoughts and watch them appear on screen with high accuracy. This notepad's AI-powered speech-to-text feature instantly turns your voice into clean, error-free text. So you can save a lot of time.",
              },
              {
                Icon: Share2,
                title: "Generate Shareable Link After Sign-In",
                desc: "Once signed in, our notepad lets you generate a unique shareable link for any note, making collaboration and quick sharing as simple as copying a URL.",
              },
              {
                Icon: History,
                title: "Create Account to Record History",
                desc: "Create a free account on this notepad to unlock note history so you can revisit, recover, and manage everything you've ever written, all in one place.",
              },
            ].map(({ Icon, title, desc }, i) => (
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
            ))}
          </div>

          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Apart from these, there are a lot of other unique features you can
            use and enjoy for free.
          </p>
        </section>

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
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {latestBlogPosts.length > 0 && (
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <h2 className="text-base font-semibold text-foreground font-display">
                  Our blog
                </h2>
                <Link
                  href={localizedPath(locale, "/blog")}
                  className="text-xs font-medium text-primary hover:underline shrink-0"
                >
                  View all
                </Link>
              </div>
              <ul className="rounded-lg border border-border bg-card divide-y divide-border overflow-hidden">
                {latestBlogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={localizedPath(locale, `/blog/${post.slug}`)}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-muted/40 transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary line-clamp-1 flex-1 min-w-0">
                        {post.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </section>

      </div>
    </div>
  );
}
