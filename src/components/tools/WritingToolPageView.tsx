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
  const education = getToolPageEducation(id);
  const faqSchema = getToolFaqSchema(id);
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
