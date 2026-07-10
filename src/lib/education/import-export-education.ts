import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for import-export below-the-tool SEO (richSections + FAQs). */
export const importExportEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        heading: "Wat is Invoer & Uitvoer Notas Aanlyn?",
        paragraphs: [
          "As jy soek na ’n hulpmiddel waar jy kan voortgaan om aan jou bestaande dokument te werk en dit in verskillende formate soos .md, .txt of .html kan uitvoer, is dit die hulpmiddel wat jy nodig het.",
          "Voer eenvoudig jou notalêer in die redigeerder in en begin dadelik redigeer. Daar is geen sagteware om te installeer nie, en jou notas maak direk in jou blaaier oop.",
          "Invoer en Uitvoer [Notas Aanlyn](https://notepad.is/af/) is ’n gratis en kragtige hulpmiddel waar jy enige teks of lêer kan skryf of oplaai en in verskillende formate soos .md, .txt of [.html](https://notepad.is/af/tools/editors/html-editor/) kan uitvoer.",
        ],
      },
      {
        heading: "Invoer & Uitvoer Notas Aanlyn-hulpmiddel is Nuttig Vir",
        listItems: [
          "Gestoorde notas oopmaak",
          "Voortgaan met onvoltooide werk",
          "Tekslêers aanlyn redigeer",
          "Vinnige veranderinge maak voordat jy weer stoor",
          "Omskakel en stoor in drie verskillende formate",
        ],
      },
      {
        heading: "Hoekom Ons Invoer & Uitvoer Notas-hulpmiddel Gebruik?",
        subsections: [
          {
            heading: "Vinnige Lêerinvoer",
            paragraphs: [
              "Laai bestaande notas onmiddellik sonder ingewikkelde stappe. Klik net op Kies lêer en laai jou dokument op, of begin skryf in die teksveld.",
            ],
          },
          {
            heading: "Een-klik Uitvoer",
            paragraphs: [
              "Laai jou notas af wanneer jy gereed is in drie verskillende formate. Die hulpmiddel skakel outomaties om na jou gekose formaat. Geen ekstra moeite nodig nie.",
            ],
          },
          {
            heading: "Werk in Jou Blaaier",
            paragraphs: [
              "Hierdie hulpmiddel werk in jou eie blaaier, en jy hoef geen sagteware te installeer nie.",
            ],
          },
          {
            heading: "Gratis om te Gebruik",
            paragraphs: [
              "100% gratis om vir onbeperkte tyd te gebruik. Jy hoef nie ’n enkele sent te betaal om hierdie Invoer & Uitvoer Notas Aanlyn-hulpmiddel te gebruik nie.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Watter lêers kan ek invoer?",
        answer:
          "Jy kan ondersteunde teksgebaseerde notalêers invoer, soos TXT-, HTML- en Markdown-lêers. Dit word outomaties deur ons hulpmiddel omgeskakel wanneer jy die lêerformaat kies om in te voer.",
      },
      {
        question: "Kan ek my notas uitvoer na redigering?",
        answer:
          "Ja. Sodra jy klaar geredigeer het, kan jy jou bygewerkte notas in net ’n paar klikke uitvoer en aflaai.",
      },
      {
        question: "Moet ek sagteware installeer?",
        answer: "Nee. Alles werk direk in jou webblaaier.",
      },
      {
        question: "Is die Invoer & Uitvoer Notas-hulpmiddel gratis?",
        answer:
          "Ja. Jy kan notas aanlyn gratis invoer, redigeer en uitvoer.",
      },
    ],
  },
};

export function getImportExportEducation(
  locale: string
): ToolEducationContent | null {
  return importExportEducationByLocale[locale] ?? null;
}
