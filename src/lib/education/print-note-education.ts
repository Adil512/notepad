import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for print-note below-the-tool SEO (richSections + FAQs). */
export const printNoteEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        paragraphs: [
          "Het jy ’n nota op papier of as ’n [PDF](https://notepad.is/af/tools/documents/pdf-to-word/) nodig? Tik ’n titel, voeg jou teks by, en druk Druk / [Stoor PDF](https://notepad.is/af/tools/documents/word-to-pdf/). Hierdie bladsy gee jou ’n skoon drukuitleg wat in jou blaaier werk. Geen Word-lêer nie. Geen ekstra app nie.",
        ],
      },
      {
        heading: "Hoe die Gedrukte Bladsy Lyk",
        paragraphs: [
          "Die drukvoorskou hou ’n duidelike titel boaan en jou notaliggaam daaronder. Spasiëring is vir papier gestel, sodat die bladsy maklik lees wanneer dit uit die drukker kom of as ’n PDF oopmaak.",
          "Jy beheer die finale kantlyne in jou blaaier se drukinstellings. Dit beteken jy kan die bladsy stywer maak vir ’n kort nota of meer wit spasie los wanneer jy later met die hand wil byskryf.",
        ],
      },
      {
        heading: "Algemene Redes Hoekom Mense Notas Druk",
        listItems: [
          "Vergaderinguitdeelstukke wat ’n titel en duidelike liggaamteks nodig het",
          "Studieblaaie wat jy met ’n pen wil merk",
          "Vinnige PDF-kopieë om te e-pos of vanlyn te stoor",
          "Eenvoudige eenbladsy-notas wanneer ’n volle dokumentredigeerder oordadig is",
        ],
      },
    ],
    faqs: [
      {
        question: "Hoe kan ek notas aanlyn druk?",
        answer:
          "Tik of plak eenvoudig jou notas in die aanlyn redigeerder, formateer dit indien nodig, en klik die Druk-knoppie. Jy kan direk vanuit jou blaaier druk sonder om enige sagteware te installeer.",
      },
      {
        question: "Kan ek handgeskrewe of gekopieerde notas aanlyn druk?",
        answer:
          "Ja. Jy kan gekopieerde notas plak of jou eie teks in die redigeerder tik, enige nodige veranderinge maak, en skoon, goed geformateerde notas aanlyn in net ’n paar klikke druk.",
      },
      {
        question: "Is dit gratis om notas aanlyn te druk?",
        answer:
          "Ja. Die meeste aanlyn notadruk-hulpmiddels laat jou gratis notas druk sonder om ’n rekening te skep. Jy kan jou notas vinnig voorberei en druk wanneer jy dit nodig het.",
      },
      {
        question: "Kan ek notas aanlyn vanaf my foon druk?",
        answer:
          "Ja. Jy kan notas aanlyn druk vanaf jou Android-foon, iPhone, tablet of rekenaar. Maak die hulpmiddel in jou blaaier oop, redigeer jou notas indien nodig, en druk met ’n gekoppelde drukker of stoor dit as ’n PDF.",
      },
    ],
  },
};

export function getPrintNoteEducation(
  locale: string
): ToolEducationContent | null {
  return printNoteEducationByLocale[locale] ?? null;
}
