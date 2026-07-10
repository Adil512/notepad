import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for reading-mode below-the-tool SEO (richSections + FAQs). */
export const readingModeEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        heading: "Leesmodus Aanlyn",
        paragraphs: [
          "Leesmodus aanlyn gee jou ’n skoon, rustige aansig van jou teks sodat jy op die woorde kan fokus. Plak notas, artikels of konsepte in die boks, en lees dit dan in ’n eenvoudige uitleg sonder advertensies, sybalke of ekstra deurmekaarspul.",
          "Jy kan die lettergrootte en lynwydte verander om by jou leesvoorkeur te pas. Alles loop in jou blaaier. Geen aanmelding nie. Geen installasie nie.",
        ],
      },
      {
        heading: "Hoekom ’n Afleidingsvrye Leesmodus Gebruik?",
        paragraphs: [
          "Lang bladsye en besige skerms maak dit moeilik om by die teks te bly. ’n [Afleidingsvrye lees](https://notepad.is/af/distraction-free-writer/)-modus verwyder die geraas sodat jou oë lyn vir lyn met minder spanning kan beweeg.",
          "Gebruik dit wanneer jy notas moet hersien, ’n konsep moet proeflees, of iets noukeurig moet lees voordat jy dit redigeer of deel.",
        ],
      },
      {
        heading: "Hoe om Hierdie Leesmodus-hulpmiddel te Gebruik",
        paragraphs: [
          "Plak of tik jou teks in die bronboks. Pas lettergrootte en lynwydte aan totdat die bladsy maklik lees. Blaai dan deur die leesoppervlak en fokus op die inhoud.",
          "Jou teks bly op jou toestel in die blaaier. Jy kan dit enige tyd uitvee en weer begin met ’n nuwe stuk skryfwerk.",
        ],
      },
    ],
    faqs: [],
  },
};

export function getReadingModeEducation(
  locale: string
): ToolEducationContent | null {
  return readingModeEducationByLocale[locale] ?? null;
}
