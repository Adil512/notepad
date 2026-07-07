import {
  writingToolsMeta,
  writingToolCategoryAccent,
  type WritingToolCategory,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { WritingToolView } from "@/components/tools/WritingToolView";
import { ToolIcon } from "@/components/tools/ToolIcon";
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
  categoryHub,
}: {
  locale: string;
  id: WritingToolId;
  breadcrumbs?: { href: string; label: string }[];
  categoryHub?: { href: string; label: string };
}) {
  const m = writingToolsMeta[id];
  const hero = getWritingToolHero(id, locale);
  const education = getToolPageEducation(id);
  const faqSchema = getToolFaqSchema(id);
  const educationToolName = formatToolNameForHeading(hero.h1);
  const heroPanel = toolHeroPanelClass(m.category);
  const relatedToolIds = getRelatedToolIds(id, locale);
  const accent = writingToolCategoryAccent[m.category];

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div
          className={`rounded-2xl border p-6 shadow-sm sm:p-8 ${heroPanel}`}
        >
          {breadcrumbs?.length ? (
            <ToolPageBreadcrumbs items={breadcrumbs} />
          ) : null}

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/10 dark:shadow-black/30 sm:h-20 sm:w-20`}
            >
              <ToolIcon id={id} className="h-9 w-9 sm:h-10 sm:w-10" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {hero.h1}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <WritingToolView id={id} />
        {education ? (
          <ToolPageEducation
            toolName={educationToolName}
            content={education}
          />
        ) : null}
        <RelatedToolsSection
          locale={locale}
          toolIds={relatedToolIds}
          categoryHub={categoryHub}
        />
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

function toolHeroPanelClass(cat: WritingToolCategory): string {
  switch (cat) {
    case "analysis":
      return "border-rose-200/80 bg-orange-50/60 dark:border-rose-900/40 dark:bg-rose-950/20";
    case "devtools":
      return "border-indigo-200/80 bg-indigo-50/65 dark:border-indigo-900/45 dark:bg-indigo-950/25";
    default:
      return "border-violet-200/80 bg-violet-50/65 dark:border-violet-900/45 dark:bg-violet-950/25";
  }
}
