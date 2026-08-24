import {
  writingToolsMeta,
  type WritingToolCategory,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { WritingToolView } from "@/components/tools/WritingToolView";
import { RelatedToolsSection } from "@/components/tools/RelatedToolsSection";
import { ToolPageBreadcrumbs } from "@/components/tools/ToolPageBreadcrumbs";
import { getRelatedToolIds } from "@/lib/related-tools";
import { getWritingToolHero } from "@/lib/writing-tool-page-shared";
import { ToolPageEducation } from "@/components/tools/ToolPageEducation";
import {
  formatToolNameForHeading,
  getToolFaqSchema,
  getToolPageEducation,
  getToolWebAppSchema,
} from "@/lib/tool-page-education-content";

export function WritingToolPageView({
  locale,
  id,
  breadcrumbs,
}: {
  locale: string;
  id: WritingToolId;
  breadcrumbs?: { href: string; label: string }[];
}) {
  const m = writingToolsMeta[id];
  const hero = getWritingToolHero(id, locale);
  const education = getToolPageEducation(id, locale);
  const faqSchema = getToolFaqSchema(id, locale);
  const webAppSchema = getToolWebAppSchema(id, locale);
  const educationToolName = formatToolNameForHeading(hero.h1);
  const relatedToolIds = getRelatedToolIds(id, locale);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <section
        className={`w-full border-b ${toolHeroBannerClass(m.category)}`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {breadcrumbs?.length ? (
            <ToolPageBreadcrumbs items={breadcrumbs} />
          ) : null}
          <div className="mt-4 max-w-3xl space-y-3 sm:mt-5">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {hero.h1}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <WritingToolView id={id} />

        <div className="my-8 flex justify-center">
          <div google-add-preferred-source-btn="" className="flex shrink-0">
            <a
              href="https://www.google.com/preferences/source?q=notepad.is"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[20px] px-6 py-3.5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <svg className="w-6.5 h-6.5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-sm sm:text-base font-normal text-gray-700 dark:text-gray-300 leading-tight text-left">
                Add <strong className="font-semibold text-gray-900 dark:text-white">Notepad.is</strong> as a preferred source on <strong className="font-semibold text-gray-900 dark:text-white">Google</strong>
              </span>
            </a>
          </div>
        </div>

        {education ? (
          <ToolPageEducation
            toolName={educationToolName}
            content={education}
          />
        ) : null}
        <RelatedToolsSection locale={locale} toolIds={relatedToolIds} />
      </div>

      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      {webAppSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
      ) : null}
    </div>
  );
}

function toolHeroBannerClass(cat: WritingToolCategory): string {
  switch (cat) {
    case "analysis":
      return "border-rose-200/80 bg-orange-50/70 dark:border-rose-900/40 dark:bg-rose-950/30";
    case "devtools":
      return "border-indigo-200/80 bg-indigo-50/75 dark:border-indigo-900/45 dark:bg-indigo-950/30";
    default:
      return "border-violet-200/80 bg-violet-50/75 dark:border-violet-900/45 dark:bg-violet-950/30";
  }
}
