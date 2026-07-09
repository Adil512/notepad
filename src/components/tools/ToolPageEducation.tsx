import {
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  Download,
  Eye,
  FileCode,
  FileInput,
  HelpCircle,
  Image,
  ListOrdered,
  Paintbrush,
  Shield,
  Sparkles,
  Table2,
  Type,
  UserCheck,
} from "lucide-react";
import type {
  ToolEducationContent,
  ToolRichSection,
  ToolRichSubsection,
} from "@/lib/tool-page-education-content";

const FEATURE_ICONS: Record<string, typeof Eye> = {
  "Real-time Preview": Eye,
  "Export Options": Download,
  "No Registration Required": UserCheck,
  "Secure & Private": Shield,
  "Syntax Highlighting": Code2,
  "Import Documents": FileInput,
  "Styling and Formatting": Paintbrush,
  "Copy Formatting": Type,
  "Removing Text Formatting": Type,
  Autoformatting: Sparkles,
  "Block-Level Text Formats": ListOrdered,
  Tables: Table2,
  "Inserting Images": Image,
  "Code Snippets": FileCode,
};

export function ToolPageEducation({
  toolName,
  content,
}: {
  toolName: string;
  content: ToolEducationContent;
}) {
  const useRichSections =
    content.richSections && content.richSections.length > 0;
  const isSimple = content.layout === "simple";
  const trustBadges =
    content.trustBadges?.length ? (
      <TrustBadgesBlock
        badges={content.trustBadges}
        className="mt-12 mb-0 sm:mt-14"
      />
    ) : null;

  if (isSimple) {
    return (
      <>
        {trustBadges}
        <section
          className={`${trustBadges ? "mt-8" : "mt-12 sm:mt-14"} border-t border-border`}
          aria-label={`About ${toolName}`}
        >
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            {useRichSections ? (
              <SimpleRichSections sections={content.richSections!} />
            ) : (
              <SimpleDefaultBlock content={content} />
            )}
            <SimpleFaqBlock faqs={content.faqs} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {trustBadges}
      <section
        className={`relative overflow-hidden border-t border-border/50 ${
          trustBadges ? "mt-8" : "mt-12 sm:mt-14"
        }`}
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
          {useRichSections ? (
            <RichSectionsBlock sections={content.richSections!} />
          ) : (
            <DefaultEducationBlock toolName={toolName} content={content} />
          )}

          <FaqBlock faqs={content.faqs} />

          {content.testimonials && content.testimonials.length > 0 ? (
            <article className="relative mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md sm:mt-8 sm:p-8">
              <div className="space-y-5">
                <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  User Testimonials
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {content.testimonials.map((item, i) => (
                    <blockquote
                      key={`${item.name}-${i}`}
                      className="rounded-xl border border-border/60 bg-background/60 p-4"
                    >
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <footer className="mt-3 text-xs">
                        <span className="font-semibold text-foreground">
                          {item.name}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          - {item.role}
                        </span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </section>
    </>
  );
}

function RichSectionsBlock({ sections }: { sections: ToolRichSection[] }) {
  type Chunk =
    | { type: "prose"; sections: ToolRichSection[] }
    | { type: "section"; section: ToolRichSection };

  const chunks: Chunk[] = [];
  let proseBuffer: ToolRichSection[] = [];

  for (const section of sections) {
    if (!section.subsections?.length) {
      proseBuffer.push(section);
    } else {
      if (proseBuffer.length) {
        chunks.push({ type: "prose", sections: [...proseBuffer] });
        proseBuffer = [];
      }
      chunks.push({ type: "section", section });
    }
  }
  if (proseBuffer.length) {
    chunks.push({ type: "prose", sections: proseBuffer });
  }

  return (
    <div className="space-y-6">
      {chunks.map((chunk, i) => {
        if (chunk.type === "prose") {
          return (
            <div
              key={`prose-${i}`}
              className={`grid gap-6 ${chunk.sections.length > 1 ? "lg:grid-cols-2 lg:gap-8" : ""}`}
            >
              {chunk.sections.map((section) => (
                <RichProseCard key={section.heading} section={section} />
              ))}
            </div>
          );
        }

        const { section } = chunk;
        const isSyntax = section.subsections!.some((s) => s.listItems?.length);

        if (isSyntax) {
          return (
            <RichSyntaxCard key={section.heading} section={section} />
          );
        }

        return (
          <RichFeaturesCard key={section.heading} section={section} />
        );
      })}
    </div>
  );
}

function RichSyntaxCard({ section }: { section: ToolRichSection }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md dark:bg-card/40 sm:p-8">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-80"
        aria-hidden
      />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10">
          <Code2 className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1 space-y-6">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {section.heading}
          </h2>
          {section.subsections?.map((sub) => (
            <div key={sub.heading} className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {sub.heading}
              </h3>
              {sub.listItems ? (
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {sub.listItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-xl border border-border/50 bg-muted/25 px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-muted/10"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <RichParagraph text={item} as="span" />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function RichFeaturesCard({ section }: { section: ToolRichSection }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_0_rgb(0_0_0/0.03),0_12px_32px_-8px_rgb(0_0_0/0.08)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/25 dark:bg-card/40 dark:shadow-[0_1px_0_0_rgb(255_255_255/0.04),0_12px_40px_-12px_rgb(0_0_0/0.45)] sm:p-8">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-80"
        aria-hidden
      />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10">
          <Sparkles className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1 space-y-6">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {section.heading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.subsections?.map((sub) => (
              <RichFeatureTile key={sub.heading} subsection={sub} />
            ))}
          </div>
          {section.footerParagraphs?.map((p, i) => (
            <p
              key={i}
              className="border-t border-border/60 pt-5 text-sm text-muted-foreground"
            >
              <RichParagraph text={p} as="span" />
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

function RichFeatureTile({ subsection }: { subsection: ToolRichSubsection }) {
  const Icon = FEATURE_ICONS[subsection.heading] ?? Sparkles;
  return (
    <div className="flex flex-col rounded-xl border border-border/60 bg-background/60 p-5 shadow-sm transition hover:border-primary/25 hover:bg-background/90 dark:bg-background/20 dark:hover:bg-background/35">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/15 to-primary/10 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-base font-semibold text-foreground">
        {subsection.heading}
      </h3>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {subsection.paragraphs?.map((p, i) => (
          <RichParagraph key={i} text={p} />
        ))}
      </div>
    </div>
  );
}

function RichProseCard({ section }: { section: ToolRichSection }) {
  return (
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
            {section.heading}
          </h2>
          <div className="space-y-3.5 text-[15px] leading-relaxed text-muted-foreground">
            {section.paragraphs?.map((p, i) => (
              <RichParagraph key={i} text={p} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function RichParagraph({
  text,
  as = "p",
}: {
  text: string;
  as?: "p" | "span";
}) {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  const inner = parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });

  if (as === "span") return <>{inner}</>;
  return <p>{inner}</p>;
}

function DefaultEducationBlock({
  toolName,
  content,
}: {
  toolName: string;
  content: ToolEducationContent;
}) {
  return (
    <>
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
                {content.whatIs?.map((p, i) => (
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
                {content.howToUse?.map((step, i) => (
                  <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < (content.howToUse?.length ?? 0) - 1 ? (
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
              {content.whyUse?.map((item, i) => (
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
    </>
  );
}

function FaqBlock({
  faqs,
}: {
  faqs: ToolEducationContent["faqs"];
}) {
  return (
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
            FAQs
          </h2>
          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
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
  );
}

function TrustBadgesBlock({
  badges,
  className = "mb-12",
}: {
  badges: string[];
  className?: string;
}) {
  return (
    <ul
      className={[
        "grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      ].join(" ")}
    >
      {badges.map((label) => (
        <li
          key={label}
          className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/90 px-3.5 py-2.5 text-sm font-medium text-foreground shadow-sm dark:bg-card/70"
        >
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600/12 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-400"
            aria-hidden
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}

function SimpleRichSections({ sections }: { sections: ToolRichSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.heading ?? section.paragraphs?.[0]} className="space-y-4">
          {section.heading ? (
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {section.heading}
            </h2>
          ) : null}
          {section.paragraphs?.length ? (
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {section.paragraphs.map((p, i) => (
                <RichParagraph key={i} text={p} />
              ))}
            </div>
          ) : null}
          {section.listItems?.length ? (
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground">
              {section.listItems.map((item, i) => (
                <li key={i}>
                  <RichParagraph text={item} as="span" />
                </li>
              ))}
            </ul>
          ) : null}
          {section.subsections?.map((sub) => (
            <div key={sub.heading} className="space-y-2">
              <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                {sub.heading}
              </h3>
              {sub.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-muted-foreground"
                >
                  <RichParagraph text={p} as="span" />
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SimpleDefaultBlock({
  content,
}: {
  content: ToolEducationContent;
}) {
  return (
    <div className="space-y-10">
      {content.whatIs?.length ? (
        <div className="space-y-4">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {content.whatIs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      ) : null}
      {content.howToUse?.length ? (
        <ol className="list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground">
          {content.howToUse.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      ) : null}
      {content.whyUse?.length ? (
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground">
          {content.whyUse.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function SimpleFaqBlock({
  faqs,
}: {
  faqs: ToolEducationContent["faqs"];
}) {
  if (!faqs.length) return null;

  return (
    <div className="mt-12 space-y-6 border-t border-border pt-10">
      <h4 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">FAQs</h4>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="space-y-2">
            <p className="font-medium text-foreground">{faq.question}</p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              <RichParagraph text={faq.answer} as="span" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
