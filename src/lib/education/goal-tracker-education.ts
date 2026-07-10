import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for goal-tracker below-the-tool SEO (richSections + FAQs). */
export const goalTrackerEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        heading: "Skryfdoelwitte-naspoorder",
        paragraphs: [
          "Met ons gratis skryfdoelwitte-naspoorder kan jy ’n daaglikse of maandelikse [woordtelling](https://notepad.is/af/tools/text/word-counter/)-doelwit stel en jou skryfvordering met werklike syfers volg. Teken elke skryfsessie aan om te sien hoeveel jy geskryf het, hoeveel oor is, en gemotiveerd te bly om jou teiken te bereik.",
          "Met hierdie hulpmiddel kan jy woorde en karakters op dieselfde bladsy naspoor. Stel jou skryfdoelwit een keer in en begin [skryf](https://notepad.is/af/tools/writing/) en naspoor.",
        ],
      },
      {
        heading: "Hoe die Skryfdoelwitte-naspoorder Werk",
        paragraphs: [
          "Die skryfdoelwitte-naspoorder is baie eenvoudig en maklik om te gebruik, maar kragtig om jou skryfdoelwitte te volg. Al wat jy moet doen, is om jou skryfteiken in te stel. Dateer die syferveld op die bladsy by.",
          "Jy kan dit op woorde of karakters stel en begin skryf. Dis al.",
        ],
      },
    ],
    faqs: [],
  },
};

export function getGoalTrackerEducation(
  locale: string
): ToolEducationContent | null {
  return goalTrackerEducationByLocale[locale] ?? null;
}
