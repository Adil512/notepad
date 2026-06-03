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
};

const byLocale: Record<string, ToolsHubCopy> = {
  en,
  af,
};

export function getToolsHubCopy(locale: string): ToolsHubCopy {
  return byLocale[locale] ?? en;
}
