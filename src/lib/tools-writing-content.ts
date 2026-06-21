/** Localized copy for the /tools/writing category page, per locale. */

import type { WritingProductivityToolId } from "@/lib/writing-tools-registry";

/** A piece of the intro paragraph: either plain text or an inline link. */
export type IntroSegment = { text: string } | { link: string; label: string };

export type WritingToolLabel = { h1: string; tagline: string };

export type WritingToolsCopy = {
  pageTitle: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Intro paragraph as ordered text/link segments. */
  intro: IntroSegment[];
  ctaAllTools: string;
  ctaNotepadEditor: string;
  experiencesHeading: string;
  utilitiesHeading: string;
  open: string;
  landings: {
    distractionFree: { title: string; description: string };
    quickNotes: { title: string; description: string };
  };
  /** Per-tool card overrides; falls back to the registry meta when absent. */
  toolLabels?: Partial<Record<WritingProductivityToolId, WritingToolLabel>>;
};

const en: WritingToolsCopy = {
  pageTitle: "Writing tools",
  metaTitle:
    "Best Writing Tools for Productivity – Focus Timer, Dictation, Templates & More",
  metaDescription:
    "Boost your writing productivity with powerful writing tools including Focus Timer, Writing Goals, Speech Dictation, Templates, Snippet Shelf and more",
  intro: [
    {
      text: "Our writing tools help you create, organize, and manage digital notes, content, and drafts in the browser. Start from a ",
    },
    { link: "/distraction-free-writer", label: "distraction-free writing mode" },
    { text: " or capture thoughts with " },
    { link: "/quick-notes", label: "quick notes" },
    { text: ", then layer on productivity helpers: a " },
    { link: "/tools/writing/focus-timer", label: "focus timer" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "speech-to-text dictation" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "writing goals" },
    { text: ", and " },
    { link: "/tools/writing/templates", label: "content templates" },
    {
      text: ". Whether you blog, draft for work, or study, these utilities improve focus and throughput without leaving Notepad.is.",
    },
  ],
  ctaAllTools: "All tools",
  ctaNotepadEditor: "Notepad editor",
  experiencesHeading: "Writing experiences",
  utilitiesHeading: "Free Online Writing Tools",
  open: "Open",
  landings: {
    distractionFree: {
      title: "Distraction-free writer",
      description:
        "A calm full-screen canvas for deep work—no clutter, just your words.",
    },
    quickNotes: {
      title: "Quick notes",
      description:
        "Lightweight capture for ideas and lists when you do not need the full editor.",
    },
  },
};

const af: WritingToolsCopy = {
  pageTitle: "Skryfgereedskap",
  intro: [
    {
      text: "Ons skryfgereedskap help jou om digitale notas, inhoud en konsepte in die blaaier te skep, te organiseer en te bestuur. Begin met ’n ",
    },
    { link: "/distraction-free-writer", label: "skryfmodus sonder afleiding" },
    { text: " of vang gedagtes vinnig met " },
    { link: "/quick-notes", label: "vinnige notas" },
    { text: ", en voeg dan produktiwiteitshulpmiddels by: ’n " },
    { link: "/tools/writing/focus-timer", label: "fokus-tydhouer" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "spraak-na-teks diktaat" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "skryfdoelwitte" },
    { text: " en " },
    { link: "/tools/writing/templates", label: "inhoudtemplates" },
    {
      text: ". Of jy nou ’n blog skryf, werkskonsepte maak of studeer — hierdie nutsgoed verbeter jou fokus en produktiwiteit sonder om Notepad.is te verlaat.",
    },
  ],
  ctaAllTools: "Alle gereedskap",
  ctaNotepadEditor: "Notepad-redigeerder",
  experiencesHeading: "Skryfervarings",
  utilitiesHeading: "Nutsgoed",
  open: "Maak oop",
  landings: {
    distractionFree: {
      title: "Skryf sonder afleiding",
      description:
        "’n rustige volskermdoek vir diep werk — geen deurmekaarspul nie, net jou woorde.",
    },
    quickNotes: {
      title: "Vinnige notas",
      description:
        "Liggewig vaslegging vir idees en lyste wanneer jy nie die volle redigeerder nodig het nie.",
    },
  },
  toolLabels: {
    "focus-timer": {
      h1: "Fokus-tydhouer & skryf",
      tagline: "Pomodoro + zen-redigeerder + plaaslike statistieke",
    },
    "goal-tracker": {
      h1: "Skryfdoelwitte",
      tagline: "Teikens, vordering, mylpale",
    },
    "speech-dictation": {
      h1: "Spraakdiktaat",
      tagline: "Stem na teks in die blaaier",
    },
    templates: {
      h1: "Templates",
      tagline: "Een-klik beginstrukture",
    },
    "snippet-shelf": {
      h1: "Snippersrak",
      tagline: "Herbruikbare teks, kitskopie",
    },
    "reading-mode": {
      h1: "Leesmodus",
      tagline: "Rustige leesuitleg",
    },
    "print-note": {
      h1: "Druk nota",
      tagline: "Drukvriendelike uitleg",
    },
    "share-note": {
      h1: "Deel nota",
      tagline: "Voer uit & deel plaaslik",
    },
    "import-export": {
      h1: "Invoer & uitvoer",
      tagline: "Lêers op een plek",
    },
    "install-app": {
      h1: "Installeer app",
      tagline: "PWA / voeg by tuisskerm",
    },
    "keyboard-shortcuts": {
      h1: "Sleutelbordkortpaaie",
      tagline: "Kragtige gebruiker verwysing",
    },
  },
};

const byLocale: Record<string, WritingToolsCopy> = {
  en,
  af,
};

export function getWritingToolsCopy(locale: string): WritingToolsCopy {
  return byLocale[locale] ?? en;
}
