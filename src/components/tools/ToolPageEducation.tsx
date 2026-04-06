import {
  BookOpen,
  ChevronDown,
  HelpCircle,
  ListOrdered,
  Sparkles,
} from "lucide-react";
import type { ToolEducationContent } from "@/lib/tool-page-education-content";

export function ToolPageEducation({
  toolName,
  content,
}: {
  toolName: string;
  content: ToolEducationContent;
}) {
  return (
    <section
      className="relative mt-12 overflow-hidden border-t border-border/50 sm:mt-14"
      aria-label={`About ${toolName}`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-muted/30 to-background dark:from-primary/[0.08] dark:via-muted/10 dark:to-background" />
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
        <div className="absolute -right-24 bottom-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-400/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(228_228_231/0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgb(228_228_231/0.55)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-[linear-gradient(to_right,rgb(63_63_70/0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgb(63_63_70/0.45)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_1px_0_0_rgb(0_0_0/0.04),0_20px_48px_-12px_rgb(124_58_237/0.12)] dark:bg-card/40 dark:shadow-[0_1px_0_0_rgb(255_255_255/0.04),0_12px_40px_-12px_rgb(0_0_0/0.45)] dark:hover:shadow-[0_20px_56px_-16px_rgb(139_92_246/0.18)] sm:p-8">
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-80"
              aria-hidden
            />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10">
                <BookOpen className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 space-y-4">
                <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  What Is {toolName}?
                </h2>
                <div className="space-y-3.5 text-[15px] leading-relaxed text-muted-foreground">
                  {content.whatIs.map((p, i) => (
                    <p key={i} className="first:mt-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_1px_0_0_rgb(0_0_0/0.04),0_20px_48px_-12px_rgb(124_58_237/0.12)] dark:bg-card/40 dark:shadow-[0_1px_0_0_rgb(255_255_255/0.04),0_12px_40px_-12px_rgb(0_0_0/0.45)] dark:hover:shadow-[0_20px_56px_-16px_rgb(139_92_246/0.18)] sm:p-8">
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-80"
              aria-hidden
            />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10">
                <ListOrdered className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 space-y-5">
                <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  How To Use This {toolName}?
                </h2>
                <ol className="list-none space-y-0">
                  {content.howToUse.map((step, i) => (
                    <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < content.howToUse.length - 1 ? (
                        <span
                          className="absolute left-[15px] top-9 bottom-0 w-px bg-gradient-to-b from-primary/35 to-transparent dark:from-primary/40"
                          aria-hidden
                        />
                      ) : null}
                      <span className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground shadow-md shadow-primary/25 ring-4 ring-background dark:ring-card">
                        {i + 1}
                      </span>
                      <p className="min-w-0 pt-0.5 text-[15px] leading-relaxed text-muted-foreground">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        </div>

        <article className="relative mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_1px_0_0_rgb(0_0_0/0.04),0_20px_48px_-12px_rgb(124_58_237/0.12)] dark:bg-card/40 dark:shadow-[0_1px_0_0_rgb(255_255_255/0.04),0_12px_40px_-12px_rgb(0_0_0/0.45)] dark:hover:shadow-[0_20px_56px_-16px_rgb(139_92_246/0.18)] sm:mt-8 sm:p-8 lg:mt-8">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-80"
            aria-hidden
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10">
              <Sparkles className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1 space-y-5">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Why To Use This {toolName}?
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {content.whyUse.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl border border-border/50 bg-muted/30 px-4 py-3.5 text-[15px] leading-relaxed text-muted-foreground dark:bg-muted/15"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-violet-500 shadow-sm ring-2 ring-primary/20"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="relative mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/25 sm:mt-8 sm:p-8 lg:mt-8">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-80"
            aria-hidden
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10">
              <HelpCircle className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1 space-y-5">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Relevant FAQs For {toolName}
              </h2>
              <div className="space-y-2.5">
                {content.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group overflow-hidden rounded-xl border border-border/60 bg-background/60 transition-[border-color,box-shadow] open:border-primary/30 open:bg-background/90 open:shadow-[0_8px_30px_-12px_rgb(124_58_237/0.2)] dark:bg-background/20 dark:open:bg-background/35 dark:open:shadow-[0_8px_30px_-12px_rgb(139_92_246/0.25)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left font-medium text-foreground transition-colors hover:bg-muted/40 [&::-webkit-details-marker]:hidden sm:px-5 sm:py-4">
                      <span className="min-w-0 flex-1 text-[15px] leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </summary>
                    <div className="border-t border-border/50 px-4 pb-4 pt-0 text-[15px] leading-relaxed text-muted-foreground sm:px-5 sm:pb-5">
                      <p className="border-l-2 border-primary/30 pl-4 pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
