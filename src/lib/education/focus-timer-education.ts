import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for focus-timer below-the-tool SEO (richSections + FAQs). */
export const focusTimerEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        heading: "Fokus-tydhouer Aanlyn",
        paragraphs: [
          "’n Aanlyn fokus-tydhouer help jou om in jou blaaier met ’n tydhouer te werk. Jy hoef nie aan te meld of enige app te installeer nie. Al wat jy moet doen, is om die tyd in te stel en te begin [skryf](https://notepad.is/af/tools/writing/) in die skryfarea hieronder wat jy wil skryf.",
          "Jy kan hier ook ’n pouse-tyd instel. Wanneer die tyd verstreke is of jy die pouse-tyd bereik wat jy voorheen gestel het, kry jy ’n waarskuwing. Jy kan die fokustyd en pouse-tyd self instel.",
        ],
      },
      {
        heading: "Hoe Verbeter ’n Fokus-tydhouer Jou Produktiwiteit?",
        paragraphs: [
          "Die hoofrede agter die bou van hierdie hulpmiddel, Fokus-tydhouer, is dat die menslike brein die beste werk in kort, gefokusde sessies. Om ure aaneen te werk kan produktiwiteit verminder, en die kans op foute neem toe.",
          "Die beste manier is om die tyd te verdeel en produktiwiteit te verhoog. Hierdie metode staan ook bekend as die Pomodoro-tegniek, waarin ons ons brein oplei om meer in ’n beperkte tydperk te doen.",
        ],
      },
      {
        heading: "Wanneer Moet Jy ’n Aanlyn Fokus-tydhouer Gebruik?",
        paragraphs: [
          "Jy kan ’n aanlyn fokus-tydhouer enige tyd gebruik wanneer jy werk. Dit is egter veral nuttig wanneer jy min tyd het om ’n taak te voltooi. Hierdie hulpmiddel help jou om gefokus te bly en die taak betyds af te handel.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wat is die beste gratis fokus-tydhouer aanlyn?",
        answer:
          "Die beste gratis aanlyn fokus-tydhouer is een wat in jou blaaier werk sonder om aan te meld of iets af te laai. Jy kan [Notepad](https://notepad.is/af/) gebruik. Dit is ’n gratis fokus-tydhouer sonder aanmeldvereistes. Jy kan dit direk in jou blaaier gebruik.",
      },
      {
        question: "Werk die aanlyn fokus-tydhouer as ek oortjies wissel?",
        answer:
          "Ja. Die tydhouer hou aan om in die agtergrond te loop selfs wanneer jy na ’n ander oortjie of app oorskakel. Jy kry steeds die waarskuwing wanneer jou sessie eindig.",
      },
      {
        question: "Hoe lank moet ’n fokussessie wees?",
        answer:
          "Die meeste mense werk die beste in 25-minute sessies met 5-minute pouses, wat die Pomodoro-tegniek volg. As jy diep werk soos kodering of skryf doen, probeer 50-minute sessies met 10-minute pouses. Toets albei en hou by die lengte wat jou aandag sterk hou sonder om uitgeput te voel.",
      },
      {
        question: "Kan ek ’n fokus-tydhouer aanlyn vir studie gebruik?",
        answer:
          "Ja. ’n Fokus-tydhouer is een van die doeltreffendste studiehulpmiddels omdat dit lang lees- of hersieningsure in kort, hanteerbare blokke verdeel. Stel 25 minute vir een onderwerp, neem ’n kort pouse, en gaan dan aan na die volgende.",
      },
      {
        question: "Is ’n aanlyn fokus-tydhouer beter as ’n foon-tydhouer?",
        answer:
          "’n Aanlyn fokus-tydhouer hou jou foon buite bereik, wat jou grootste afleiding verwyder. Foon-tydhouers dwing jou om jou toestel op te tel, en een blik op ’n kennisgewing kan jou 20 minute se fokus kos.",
      },
    ],
  },
};

export function getFocusTimerEducation(
  locale: string
): ToolEducationContent | null {
  return focusTimerEducationByLocale[locale] ?? null;
}
