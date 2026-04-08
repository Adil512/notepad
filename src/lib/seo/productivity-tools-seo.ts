import { writingToolsMeta, type WritingToolId } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

type SeoPack = { title: string; description: string };

const PRODUCTIVITY_TOOL_IDS = [
  "focus-timer",
  "goal-tracker",
  "speech-dictation",
  "paste-clean",
  "compare-drafts",
  "templates",
  "snippet-shelf",
  "reading-mode",
  "print-note",
  "share-note",
  "import-export",
  "install-app",
  "keyboard-shortcuts",
] as const satisfies readonly WritingToolId[];

const enTitleByTool: Record<(typeof PRODUCTIVITY_TOOL_IDS)[number], string> = {
  "focus-timer": "Focus Timer Online – Pomodoro Timer & Zen Writing Tool",
  "goal-tracker": "Writing Goals Tracker – Set Targets & Track Progress Online",
  "speech-dictation": "Speech to Text Online – Free Voice Dictation Notepad",
  "paste-clean": "Paste & Clean Text – Remove Formatting Online Free",
  "compare-drafts": "Compare Drafts Online – Side-by-Side Text Diff Tool",
  templates: "Writing Templates Online – Ready-to-Use Note Templates",
  "snippet-shelf": "Snippet Shelf – Save & Reuse Text Snippets Online",
  "reading-mode": "Reading Mode Online – Clean, Distraction-Free Text View",
  "print-note": "Print Notes Online – Print-Friendly Note Layout Tool",
  "share-note": "Share Notes Online – Export & Share Notes Instantly",
  "import-export": "Import & Export Notes Online – Manage Note Files Easily",
  "install-app": "Install Notepad App – PWA Install & Home Screen Setup",
  "keyboard-shortcuts": "Keyboard Shortcuts Guide – Notepad Hotkeys & Commands",
};

const enDescriptionByTool: Record<(typeof PRODUCTIVITY_TOOL_IDS)[number], string> = {
  "focus-timer":
    "Use a free online focus timer with Pomodoro sessions, short breaks, and distraction-free writing to stay productive.",
  "goal-tracker":
    "Set writing goals, track milestones, and monitor progress with this free online writing goals tracker.",
  "speech-dictation":
    "Convert voice to text instantly with this free speech dictation tool. Fast, accurate, and great for hands-free writing.",
  "paste-clean":
    "Paste text and instantly remove formatting, extra styles, and clutter. Get clean plain text in seconds.",
  "compare-drafts":
    "Compare two drafts side by side, highlight differences, and review edits quickly with this free text diff tool.",
  templates:
    "Use ready-made writing templates for meetings, journals, outlines, and checklists to write faster and stay organized.",
  "snippet-shelf":
    "Save reusable snippets, copy quickly, and organize common text blocks with this lightweight snippet shelf tool.",
  "reading-mode":
    "Read text in a clean, focused layout with reduced distractions for better readability and concentration.",
  "print-note":
    "Prepare notes for printing with a clean print layout and quick formatting controls for paper-ready output.",
  "share-note":
    "Share notes faster with export-friendly formatting and quick copy options for links, chat, and email.",
  "import-export":
    "Import existing note files and export your content in seconds with this simple online note file manager.",
  "install-app":
    "Install the notepad as a PWA for quick access, app-like speed, and a better writing workflow on any device.",
  "keyboard-shortcuts":
    "Learn essential notepad keyboard shortcuts to write, edit, and navigate faster with power-user efficiency.",
};

const generatedByTool: Record<(typeof PRODUCTIVITY_TOOL_IDS)[number], Record<string, SeoPack>> =
  Object.fromEntries(
    PRODUCTIVITY_TOOL_IDS.map((tool) => [
      tool,
      Object.fromEntries(
        Object.entries(jsonFormatterSeo).map(([locale, pack]) => [
          locale,
          {
            title: pack.title.replaceAll("JSON Formatter & Validator Online", enTitleByTool[tool]),
            description: pack.description.replaceAll(
              "Format, validate, and beautify JSON instantly with this free online tool. Fix errors, minify JSON, and improve readability in seconds. Fast and secure.",
              enDescriptionByTool[tool]
            ),
          },
        ])
      ),
    ])
  ) as Record<(typeof PRODUCTIVITY_TOOL_IDS)[number], Record<string, SeoPack>>;

export function getProductivityToolSeo(id: WritingToolId, locale: string): SeoPack | null {
  if (!PRODUCTIVITY_TOOL_IDS.includes(id as (typeof PRODUCTIVITY_TOOL_IDS)[number])) return null;
  const toolMap = generatedByTool[id as (typeof PRODUCTIVITY_TOOL_IDS)[number]];
  return toolMap[locale] ?? { title: writingToolsMeta[id].title, description: writingToolsMeta[id].description };
}

export function getProductivityToolHero(
  id: WritingToolId,
  locale: string
): { h1: string; description: string } | null {
  const seo = getProductivityToolSeo(id, locale);
  if (!seo) return null;
  const base = writingToolsMeta[id];
  let h1 = base.h1;
  for (const sep of [" – ", " - "] as const) {
    const i = seo.title.indexOf(sep);
    if (i > 0) {
      h1 = seo.title.slice(0, i).trim();
      break;
    }
  }
  return { h1, description: seo.description };
}
