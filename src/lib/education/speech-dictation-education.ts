import type { ToolEducationContent } from "@/lib/tool-page-education-content";

/** Locale overrides for speech-dictation below-the-tool SEO (richSections + FAQs). */
export const speechDictationEducationByLocale: Partial<
  Record<string, ToolEducationContent>
> = {
  af: {
    layout: "simple",
    richSections: [
      {
        heading: "Gratis Aanlyn Spraak-na-Teks-omskakelaar",
        paragraphs: [
          "Hierdie gratis aanlyn spraak-na-teks-hulpmiddel skakel gesproke woorde om na geskrewe teks met outomatiese spraakherkenning (ASR). Jy moet jou mikrofoon koppel om te praat. Hierdie stem-na-teks-omskakeling gebeur in intydse tyd of vanaf opgeneemde lêers.",
          "Ons spraak-na-teks-omskakelaar laat jou oudio transkribeer sonder om sagteware te installeer of rekeninge te skep. Ons webwerf bied ’n blaaiergebaseerde hulpmiddel wat op Windows, Mac en Linux met Google Chrome werk.",
        ],
      },
      {
        heading: "Algemene Gebruiksgevalle",
        listItems: [
          "Diktaat en [notas maak](https://notepad.is/af/) - Skrywers, studente en professionele persone gebruik stemtik om dokumente, e-posse en notas te skep sonder om te tik.",
          "Vergaderingstranskripsie - Sakeprofessioneles gebruik intydse transkripsiedienste om vergaderingsbesprekings vas te vang.",
          "Inhoudskepping - Podcast-transkripsie, video-onderskrifte en blogpos-konsepte baat by spraak-na-teks.",
          "Toeganklikheid - Stem-na-teks-tegnologie help mense met disleksie, fisiese gestremdhede of gehoorprobleme.",
        ],
      },
      {
        heading: "Wenke vir die Beste Resultate",
        listItems: [
          "Gebruik ’n gehalte-mikrofoon - ’n Hoëgehalte USB- of kopstukmikrofoon vang duideliker oudio as ingeboude skootrekenaar-mikrofoons.",
          "Verminder agtergrondgeraas - Geruisdemping help, maar die vermindering van omgewingsgeraas verbeter akkuraatheid aansienlik.",
          "Praat duidelik en konsekwent - Handhaaf ’n bestendige tempo en vermy mompel.",
          "Pouse tussen sinne - Kort pouses laat die spraakherkenningsenjin teks verwerk en finaliseer.",
          "Gebruik stemopdragte - Pasgemaakte stemopdragte voeg leestekens, formatering en spesiale karakters in.",
          "Kontroleer jou internetverbinding - Die meeste aanlyn spraak-na-teks-hulpmiddels vereis stabiele internet.",
        ],
      },
      {
        heading: "Belangrike Voordele",
        listItems: [
          "Spoed - Praat is 3x vinniger as gemiddelde tikspoed.",
          "Akkuraatheid - Moderne ASR-stelsels bereik hoë akkuraatheidsvlakke bo 90% vir duidelike spraak.",
          "Toeganklikheid - Spraak-na-teks-tegnologie stel mense met fisiese beperkings in staat om doeltreffend te skryf en te kommunikeer.",
          "Produktiwiteit - Diktaat-sagtewarehulpmiddels verminder die tyd wat aan dokumentasie bestee word. Intydse transkripsie elimineer die behoefte om notas tydens vergaderings te maak.",
        ],
      },
      {
        heading: "Hoekom Skrywers Ons Spraak-na-Teks-omskakelaar Liefhet",
        subsections: [
          {
            heading: "Spaar tyd",
            paragraphs: [
              "Gebruikers kan baie tyd spaar wanneer hulle ons spraak-na-teks-hulpmiddel gebruik. Handmatige skryf en tik kan baie tyd neem.",
            ],
          },
          {
            heading: "Hou data veilig",
            paragraphs: [
              "Ons hulpmiddel gebruik die gebruiker se blaaier om alle take uit te voer. Geen data word gedeel of op ons bediener gestoor nie. Dit is dus uiters veilig om te gebruik.",
            ],
          },
          {
            heading: "Verseker akkuraatheid",
            paragraphs: [
              "Ons gebruik Google Speech-to-Text Advanced API om die akkuraatste skryfwerk met stem te bied. Gebruikers kan dus foutvrye skryfwerk kry.",
            ],
          },
        ],
      },
    ],
    faqs: [],
  },
};

export function getSpeechDictationEducation(
  locale: string
): ToolEducationContent | null {
  return speechDictationEducationByLocale[locale] ?? null;
}
