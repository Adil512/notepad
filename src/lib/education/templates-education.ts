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
  sq: {
    layout: "simple",
    richSections: [
      {
        heading: "Shabllone Shkrimi Online",
        paragraphs: [
          "Filloni të shkruani për çdo temë me një strukturë të gatshme pa menduar se ku të filloni. Kurseni kohën tuaj dhe përdorni një shabllon për të filluar. Mund ta anashkaloni strukturën fillestare qoftë nëse po shkruani një postim në blog, një ese, një letër apo një skicë historie. Ne kemi shabllone falas të gatshme për të gjitha.",
          "Mund ta përdorni atë direkt në shfletuesin tuaj duke përdorur faqen tonë të internetit, ose mund ta kopjoni shabllonin dhe ta përdorni lokalisht në kompjuterin tuaj, laptopin apo çdo pajisje tjetër që përdorni për të shkruar.",
          "E mira është se nuk keni nevojë të instaloni asnjë softuer apo aplikacion të palëve të treta; nuk ka nevojë të [regjistroheni](https://notepad.is/sq/login). Mund të filloni direkt të shkruani.",
        ],
      },
      {
        heading: "Shabllone Falas për Çdo Lloj Shkrimi",
        paragraphs: [
          "Një mjet mbulon të gjitha nevojat tuaja të shkrimit. Shabllonet e postimeve në blog me seksionet e hyrjes, trupit dhe përfundimit i mbajnë artikujt tuaj të organizuar.",
          "Dhe shumë shabllone të tjera për ta bërë shkrimin tuaj më të lehtë dhe të shpejtë.",
        ],
        listItems: [
          "Shënimet e takimit me agjendën, shënimet dhe pikat e veprimit.",
          "Ditari ditor me 'Mirënjohës për', 'Fokusi sot' dhe 'Mendime'",
          "Lista e kontrollit me listën e detyrave",
        ],
      },
      {
        heading: "Pse Shabllonet Ju Bëjnë një Shkrimtar më të Shpejtë",
        paragraphs: [
          "Strukturimi i çdo përmbajtjeje është një pjesë kritike dhe në të njëjtën kohë e vështirë. Mendoni për këtë: çfarë nëse merrni një strukturë të gatshme për çdo temë për të cilën duhet të shkruani? Dhe mund të anashkaloni pjesën më të madhe të punës, e cila tashmë është bërë për ju. Kështu mund të filloni direkt të shkruani. Mund ta përqendroni gjithë fokusin dhe trurin tuaj vetëm në një gjë, që është shkrimi. Jo vetëm që mund të shkruani më shpejt, por kjo gjithashtu mund të përmirësojë fokusin dhe produktivitetin tuaj të përgjithshëm.",
        ],
      },
      {
        heading: "Si të Përdorni një Shabllon Shkrimi",
        paragraphs: [
          "Mjetet tona [profesionale të shkrimit](https://notepad.is/sq/) janë të lehta për t'u përdorur. Ja se si mund ta përdorni këtë shabllon shkrimi në mënyrën më të lehtë të mundshme.",
          "Në këtë faqe ne kemi një listë të [shablloneve të shkrimit](https://notepad.is/sq/tools/writing/templates/) gati për t'u kopjuar dhe ngjitur kudo që dëshironi të shkruani dhe të ndiqni strukturën.",
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
