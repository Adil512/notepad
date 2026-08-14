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
  sq: {
    layout: "simple",
    richSections: [
      {
        heading: "Konvertues Falas Online i Zërit në Teks",
        paragraphs: [
          "Ky mjet falas online i zërit në tekst konverton fjalët e folura në tekst të shkruar duke përdorur njohjen automatike të të folurit (ASR). Ju duhet të lidhni mikrofonin tuaj për të folur. Ky konvertim i zërit në tekst ndodh në kohë reale ose nga skedarët e regjistruar.",
          "Konvertuesi ynë i zërit në tekst ju lejon të transkriptoni audio pa instaluar softuer ose pa krijuar llogari. Faqja jonë e internetit ofron një mjet të bazuar në shfletues që punon në Windows, Mac and Linux duke përdorur Google Chrome.",
        ],
      },
      {
        heading: "Rastet e Zakonshme të Përdorimit",
        listItems: [
          "Diktomë dhe [marrje shënimesh](https://notepad.is/sq/) - Shkrimtarët, studentët dhe profesionistët përdorin shkrimin me zë për të krijuar dokumente, email dhe shënime pa pasur nevojë të daktilografojnë.",
          "Transkriptimi i takimeve - Profesionistët e biznesit përdorin shërbimet e transkriptimit në kohë reale për të kapur diskutimet e takimeve.",
          "Krijimi i përmbajtjes - Transkriptimi i podkasteve, titrat e videove dhe skicimi i postimeve në blog përfitojnë nga konvertimi i zërit në tekst.",
          "Aksesueshmëria - Teknologjia e zërit në tekst ndihmon njerëzit me disleksi, aftësi të kufizuara fizike ose dëmtime të dëgjimit.",
        ],
      },
      {
        heading: "Këshilla për Rezultate më të Mira",
        listItems: [
          "Përdorni një mikrofon cilësor - Një mikrofon USB ose kufje me cilësi të lartë kap audio më të pastër sesa mikrofonat e integruar të laptopit.",
          "Zvogëloni zhurmën e sfondit - Anulimi i zhurmës ndihmon, por zvogëlimi i zhurmës së ambientit përmirëson saktësinë ndjeshëm.",
          "Flisni qartë dhe në mënyrë të qëndrueshme - Mbani një ritëm të qëndrueshëm dhe shmangni murmuritjen.",
          "Bëni pauzë midis fjalive - Pauzat e shkurtra lejojnë motorin e njohjes së të folurit të përpunojë dhe finalizojë tekstin.",
          "Përdorni komanda zëri - Komandat e personalizuara të zërit vendosin shenja pikësimi, formatim dhe karaktere speciale.",
          "Kontrolloni lidhjen tuaj të internetit - Shumica e mjeteve online të zërit në tekst kërkojnë internet të qëndrueshëm.",
        ],
      },
      {
        heading: "Përfitimet kryesore",
        listItems: [
          "Shpejtësia - Të folurit është 3 herë më i shpejtë se shpejtësia mesatare e daktilografimit.",
          "Saktësia - Sistemet moderne ASR arrijnë nivele të larta saktësie mbi 90% për të folur të qartë.",
          "Aksesueshmëria - Teknologjia e zërit në tekst u mundëson njerëzve me kufizime fizike të shkruajnë dhe të komunikojnë në mënyrë efektive.",
          "Produktiviteti - Mjetet e softuerit të diktimit zvogëlojnë kohën e shpenzuar për dokumentacionin. Transkriptimi në kohë reale eliminon nevojën për të mbajtur shënime gjatë takimeve.",
        ],
      },
      {
        heading: "Pse Shkrimtarët e Duajnë Konvertuesin Tonë të Zërit në Teks",
        subsections: [
          {
            heading: "Kursen kohë",
            paragraphs: [
              "Përdoruesit mund të kursejnë shumë kohë kur përdorin mjetin tonë të zërit në tekst. Shkrimi dhe daktilografimi manual mund të marrë shumë kohë.",
            ],
          },
          {
            heading: "I mban të dhënat të sigurta",
            paragraphs: [
              "Mjeti ynë përdor shfletuesin e përdoruesit për të kryer të gjitha detyrat. Asnjë e dhënë nuk ndahet apo ruhet në serverin tonë. Prandaj është jashtëzakonisht i sigurt për t'u përdorur.",
            ],
          },
          {
            heading: "Siguron saktësi",
            paragraphs: [
              "Ne përdorim API-në e avancuar të Google Speech-to-Text për të ofruar shkrimin më të saktë me zë. Kështu përdoruesit mund të marrin shkrim pa gabime.",
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
