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
  sq: {
    layout: "simple",
    richSections: [
      {
        heading: "Ndjekës i Objektivave të Shkrimit",
        paragraphs: [
          "Me Ndjekësin tonë Falas të Objektivave të Shkrimit, mund të vendosni një objektiv ditor ose mujor të [numrit të fjalëve](https://notepad.is/sq/tools/text/word-counter/) dhe të ndiqni progresin tuaj të shkrimit me numra realë. Regjistroni çdo seancë shkrimi për të parë se sa keni shkruar, sa ka mbetur dhe të qëndroni të motivuar për të arritur synimin tuaj.",
          "Me këtë mjet, ju mund të ndiqni fjalët dhe karakteret në të njëjtën faqe. Vendosni objektivin tuaj të shkrimit një herë dhe filloni të [shkruani](https://notepad.is/sq/tools/writing/) dhe të ndiqni.",
        ],
      },
      {
        heading: "Si Funksionon Ndjekësi i Objektivave të Shkrimit",
        paragraphs: [
          "Ndjekësi i objektivave të shkrimit është shumë i thjeshtë dhe i lehtë për t'u përdorur, por i fuqishëm për ndjekjen e synimeve tuaja të shkrimit. Gjithçka që duhet të bëni është të vendosni synimin tuaj të shkrimit. Përditësoni fushën e numrit të dhënë në faqe.",
          "Mund ta vendosni atë në fjalë ose karaktere dhe të filloni të shkruani. Kjo është e gjitha.",
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
