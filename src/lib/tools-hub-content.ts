/** Localized copy for the /tools hub page, per locale. */

export type ToolsHubCategoryCopy = {
  title: string;
  description: string;
};

export type ToolsHubCopy = {
  pageTitle: string;
  intro: string;
  ctaNotepad: string;
  chips: {
    writing: string;
    editors: string;
    text: string;
    devTools: string;
    excel: string;
  };
  categoryLabel: string;
  openCategory: string;
  /** Suffix used after the count, e.g. "12 tools". */
  toolsCountWord: string;
  categories: {
    writing: ToolsHubCategoryCopy;
    editors: ToolsHubCategoryCopy;
    text: ToolsHubCategoryCopy;
    devTools: ToolsHubCategoryCopy;
    excel: ToolsHubCategoryCopy;
    documents: ToolsHubCategoryCopy;
    data: ToolsHubCategoryCopy;
    format: ToolsHubCategoryCopy;
  };
  aboutTitle: string;
  aboutBody: string;
  footer: {
    before: string;
    linkLabel: string;
    after: string;
  };
};

const en: ToolsHubCopy = {
  pageTitle: "All Tools",
  intro: "Find all the professional tools that you can use for free, unlimited.",
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "Writing tools",
    editors: "Editor tools",
    text: "Text analysis",
    devTools: "Developer tools",
    excel: "Excel converters",
  },
  categoryLabel: "Category",
  openCategory: "Open category",
  toolsCountWord: "tools",
  categories: {
    writing: {
      title: "Writing Tools",
      description:
        "Distraction-free writing, quick notes, focus sessions, goals, dictation, templates, snippets, and workflow helpers.",
    },
    editors: {
      title: "Editor Tools",
      description:
        "Markdown, code, JSON, and HTML editors for technical writing and structured content work.",
    },
    text: {
      title: "Text Analysis Tools",
      description:
        "Word, character, sentence, and paragraph counters with readability and comparison utilities.",
    },
    devTools: {
      title: "Developer Tools",
      description:
        "Formatters, minifiers, encoders, and regex utilities for day-to-day web development.",
    },
    excel: {
      title: "Excel Converter Tools",
      description:
        "Convert between Excel and CSV, JSON, XML, PDF, ODS, Google Sheets, and more spreadsheet formats.",
    },
    documents: {
      title: "Document Converter Tools",
      description:
        "Transform PDF, Word, TXT, Markdown, HTML, RTF, and PowerPoint files for editing and publishing.",
    },
    data: {
      title: "Data & Code Converter Tools",
      description:
        "Move data between JSON, CSV, XML, YAML, SQL, and plain text formats for API and data workflows.",
    },
    format: {
      title: "Text Utility Tools",
      description:
        "Case conversion, line operations, text cleanup, and compact formatting tools for quick text transformations.",
    },
  },
  aboutTitle: "About Our Free Online Tools",
  aboutBody:
    "Welcome to our complete collection of free online tools designed to simplify text editing, data conversion, document processing, and developer workflows.",
  footer: {
    before: "Looking for the classic canvas? The ",
    linkLabel: "Notepad Editor",
    after:
      " is still the full rich-text experience with tables, images, and formatting.",
  },
};

const af: ToolsHubCopy = {
  pageTitle: "Alle Gereedskap",
  intro:
    "Vind al die professionele gereedskap wat jy gratis en onbeperk kan gebruik.",
  ctaNotepad: "Notepad Aanlyn",
  chips: {
    writing: "Skryfgereedskap",
    editors: "Redigeergereedskap",
    text: "Teksontleding",
    devTools: "Ontwikkelaarsgereedskap",
    excel: "Excel-omskakelaars",
  },
  categoryLabel: "Kategorie",
  openCategory: "Maak kategorie oop",
  toolsCountWord: "gereedskap",
  categories: {
    writing: {
      title: "Skryfgereedskap",
      description:
        "Skryf sonder afleiding, vinnige notas, fokus sessies, doelwitte, diktaat, templates, snitte en werkvloeihulpmiddels.",
    },
    editors: {
      title: "Redigeergereedskap",
      description:
        "Markdown, kode, JSON en HTML-redigeerders vir tegniese skryfwerk en gestruktureerde inhoud.",
    },
    text: {
      title: "Teksontledingsgereedskap",
      description:
        "Woord-, karakter-, sin- en paragraaf-tellers met leesbaarheid- en vergelykingsnutsgoed.",
    },
    devTools: {
      title: "Ontwikkelaarsgereedskap",
      description:
        "Formateerders, minifiers, enkodeerders en regex-nutsgoed vir daaglikse webontwikkeling.",
    },
    excel: {
      title: "Excel-omskakelaargereedskap",
      description:
        "Skakel om tussen Excel en CSV, JSON, XML, PDF, ODS, Google Sheets en ander sigbladformate.",
    },
    documents: {
      title: "Dokument-omskakelaargereedskap",
      description:
        "Skakel PDF, Word, TXT, Markdown, HTML, RTF en PowerPoint-lêers om vir redigering en publikasie.",
    },
    data: {
      title: "Data & Kode-omskakelaargereedskap",
      description:
        "Beweeg data tussen JSON, CSV, XML, YAML, SQL en gewone teksformate vir API- en datavloei.",
    },
    format: {
      title: "Teksnutsgoed",
      description:
        "Hoofletter-omskakeling, lynoperasies, teks skoonmaak en kompakte formatering vir vinnige teksveranderings.",
    },
  },
  aboutTitle: "Oor Ons Gratis Aanlyn Gereedskap",
  aboutBody:
    "Welkom by ons volledige versameling gratis aanlyn gereedskap wat ontwerp is om teksredigering, data-omskakeling, dokumentverwerking en ontwikkelaarswerkvloeie makliker te maak.",
  footer: {
    before: "Looking for the classic canvas? The ",
    linkLabel: "Notepad Editor",
    after:
      " is still the full rich-text experience with tables, images, and formatting.",
  },
};

const sq: ToolsHubCopy = {
  pageTitle: "Të Gjitha Mjete",
  intro:
    "Gjeni të gjitha mjetet profesionale që mund t’i përdorni falas dhe pa kufi.",
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "Mjete shkrimi",
    editors: "Mjete redaktimi",
    text: "Analizë teksti",
    devTools: "Mjete zhvilluesish",
    excel: "Konvertues Excel",
  },
  categoryLabel: "Kategoria",
  openCategory: "Hape kategorinë",
  toolsCountWord: "mjete",
  categories: {
    writing: {
      title: "Mjete Shkrimi",
      description:
        "Shkrim pa shpërqendrim, shënime të shpejta, sesione fokusi, qëllime, diktime, shabllone, copëza dhe ndihmës për rrjedhën e punës.",
    },
    editors: {
      title: "Mjete Redaktimi",
      description:
        "Redaktues Markdown, kodi, JSON dhe HTML për shkrim teknik dhe punë me përmbajtje të strukturuar.",
    },
    text: {
      title: "Mjete Analize Teksti",
      description:
        "Numërues fjalësh, shenjash, fjalish dhe paragrafesh me vegla lexueshmërie dhe krahasimi.",
    },
    devTools: {
      title: "Mjete Zhvilluesish",
      description:
        "Formues, minifikues, kodues dhe vegla regex për zhvillimin e përditshëm të uebit.",
    },
    excel: {
      title: "Mjete Konvertimi Excel",
      description:
        "Konverto mes Excel dhe CSV, JSON, XML, PDF, ODS, Google Sheets dhe formate të tjera tabelash.",
    },
    documents: {
      title: "Mjete Konvertimi Dokumentesh",
      description:
        "Transformo skedarë PDF, Word, TXT, Markdown, HTML, RTF dhe PowerPoint për redaktim dhe publikim.",
    },
    data: {
      title: "Mjete Konvertimi të të Dhënave & Kodit",
      description:
        "Zhvendos të dhëna mes JSON, CSV, XML, YAML, SQL dhe formate teksti të thjeshtë për API dhe rrjedha të dhënash.",
    },
    format: {
      title: "Mjete Ndihmëse Teksti",
      description:
        "Konvertim shkronjash, operacione rreshtash, pastrim teksti dhe vegla formatimi kompakt për transformime të shpejta të tekstit.",
    },
  },
  aboutTitle: "Rreth Mjeteve tona Falas Online",
  aboutBody:
    "Mirë se vini në koleksionin tonë të plotë të mjeteve falas online të dizajnuara për të thjeshtuar redaktimin e tekstit, konvertimin e të dhënave, përpunimin e dokumenteve dhe rrjedhat e punës së zhvilluesve.",
  footer: {
    before: "Po kërkon kanavacën klasike? ",
    linkLabel: "Notepad Editor",
    after:
      " është ende përvoja e plotë me tekst të pasur me tabela, imazhe dhe formatim.",
  },
};

const byLocale: Record<string, ToolsHubCopy> = {
  en,
  af,
  sq,
};

export function getToolsHubCopy(locale: string): ToolsHubCopy {
  return byLocale[locale] ?? en;
}
