import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { NOTEPAD_ONLINE_FAQS } from "@/lib/faq-data";
import { localizedPath } from "@/lib/i18n";
import { getHomeSeoCopy, homeSeoRtlLocales } from "@/lib/home-seo-content";

export type BlogTeaserItem = { slug: string; title: string };

export function SEOContent({
  locale,
  latestBlogPosts = [],
}: {
  locale: string;
  latestBlogPosts?: BlogTeaserItem[];
}) {
  const seo = getHomeSeoCopy(locale);
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
            <p>{seo.whatParagraphs[1]}</p>
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

        {/* Section 3: FAQ (English copy; keep LTR) */}
        <section className="max-w-3xl mx-auto space-y-8" dir="ltr">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              FAQs
            </h2>
          </div>

          <div className="divide-y divide-border border-t border-b">
            {NOTEPAD_ONLINE_FAQS.map((faq, i) => (
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
