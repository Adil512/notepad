import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for templates below-the-tool SEO (richSections + FAQs). */
export const templatesEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        heading: "Skryftemplates Aanlyn",
        paragraphs: [
          "Begin skryf oor enige onderwerp met ’n gereedgemaakte struktuur sonder om te dink waar om te begin. Spaar jou tyd en gebruik ’n template om te begin. Jy kan die aanvanklike struktuur oorslaan of jy nou ’n blogpos, opstel, brief of storie-uiteensetting skryf. Ons het gratis gereedgemaakte templates vir alles.",
          "Jy kan dit direk in jou eie blaaier op ons webwerf gebruik, of jy kan die template ook kopieer en plaaslik op jou eie rekenaar, skootrekenaar of enige ander toestel gebruik waarmee jy skryf.",
          "Die goeie ding is dat jy geen derdeparty-sagteware of app hoef te installeer nie; jy hoef nie aan te [meld](https://notepad.is/af/login) nie. Jy kan direk begin skryf.",
        ],
      },
      {
        heading: "Gratis Templates vir Elke Tipe Skryfwerk",
        paragraphs: [
          "Een hulpmiddel dek al jou skryfbehoeftes. Blogpos-templates met inleiding-, liggaam- en slotsom-afdelings hou jou artikels georganiseerd.",
          "En nog baie meer templates om jou skryfwerk makliker en vinniger te maak.",
        ],
        listItems: [
          "Vergaderingnotas met agenda, notas en aksiepunte.",
          "Daaglikse joernaal met Dankbaar vir, Fokus vandag en Gedagtes",
          "Kontrolelys met Taaklys",
        ],
      },
      {
        heading: "Hoekom Templates Jou ’n Vinniger Skrywer Maak",
        paragraphs: [
          "Om enige inhoud te struktureer is ’n kritieke deel en terselfdertyd ook moeilik. Dink net daaraan: wat as jy ’n gereedgemaakte struktuur kry oor enige onderwerp waaroor jy moet skryf? En jy kan net die groot deel oorslaan, wat reeds vir jou gedoen is. So kan jy direk begin skryf. Jy kan al jou fokus en jou brein op net een ding plaas, naamlik die skryfwerk. Jy kan nie net vinniger skryf nie, maar dit kan ook jou fokus en algehele produktiwiteit verbeter.",
        ],
      },
      {
        heading: "Hoe om ’n Skryftemplate te Gebruik",
        paragraphs: [
          "Ons [professionele skryfgereedskap](https://notepad.is/af/) is maklik om te gebruik. Hier is hoe jy hierdie skryftemplate op die maklikste moontlike manier kan gebruik.",
          "Op hierdie bladsy het ons ’n lys [skryftemplates](https://word.cloud.microsoft/create/en/writing-templates/) wat gereed is om te kopieer en te plak oral waar jy wil skryf en die struktuur wil volg.",
        ],
      },
    ],
    faqs: [],
  },
};

export function getTemplatesEducation(
  locale: string
): ToolEducationContent | null {
  return templatesEducationByLocale[locale] ?? null;
}
