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

/** Proper locale packs where string-replacement from JSON formatter SEO fails (e.g. Afrikaans). */
const productivitySeoOverrides: Partial<
  Record<(typeof PRODUCTIVITY_TOOL_IDS)[number], Partial<Record<string, SeoPack>>>
> = {
  "focus-timer": {
    af: {
      title: "Fokus-tydhouer Aanlyn – Pomodoro-tydhouer & Zen-skryfgereedskap",
      description:
        "Gebruik ’n gratis aanlyn fokus-tydhouer met Pomodoro-sessies, kort pouses en afleidingsvrye skryf om produktief te bly.",
    },
    sq: {
      title: "Kohëmatës Fokusi Online – Kohëmatës Pomodoro & Mjet Shkrimi Zen",
      description:
        "Përdorni një kohëmatës fokusi falas online me seanca Pomodoro, pushime të shkurtra dhe shkrim pa shpërqendrime për të qëndruar produktiv.",
    },
  },
  "goal-tracker": {
    af: {
      title: "Skryfdoelwitte-naspoorder – Stel Teikens & Volg Vordering Aanlyn",
      description:
        "Stel skryfdoelwitte, volg mylpale en monitor vordering met hierdie gratis aanlyn skryfdoelwitte-naspoorder.",
    },
    sq: {
      title: "Ndjekës i Objektivave të Shkrimit – Vendosni Synime & Ndiqni Progresin Online",
      description:
        "Vendosni objektiva shkrimi, ndiqni arritjet dhe monitoroni progresin me këtë ndjekës falas të objektivave të shkrimit online.",
    },
  },
  "speech-dictation": {
    af: {
      title: "Spraak-na-Teks Aanlyn – Gratis Stemdiktaat-kladblok",
      description:
        "Skakel stem onmiddellik om na teks met hierdie gratis spraakdiktaat-hulpmiddel. Vinnig, akkuraat en ideaal vir handvrye skryf.",
    },
    sq: {
      title: "Zë në Tekst Online – Bllok Shënimesh Falas për Diktim me Zë",
      description:
        "Konvertoni zërin në tekst menjëherë me këtë mjet falas të diktimit të zërit. I shpejtë, i saktë dhe i shkëlqyer për shkrim pa duar.",
    },
  },
  templates: {
    af: {
      title: "Skryftemplates Aanlyn – Gereed-vir-Gebruik Nota-templates",
      description:
        "Gebruik gereedgemaakte skryftemplates vir vergaderings, joernale, uiteensettings en kontrolelyste om vinniger te skryf en georganiseerd te bly.",
    },
    sq: {
      title: "Shabllone Shkrimi Online – Shabllone Shënimesh Gati për Përdorim",
      description:
        "Përdorni shabllone shkrimi të gatshme për takime, ditarë, skica dhe lista kontrolli për të shkruar më shpejt dhe për të qëndruar të organizuar.",
    },
  },
  "reading-mode": {
    af: {
      title: "Leesmodus Aanlyn – Skoon, Afleidingsvrye Teksweergawe",
      description:
        "Lees teks in ’n skoon, gefokusde uitleg met minder afleidings vir beter leesbaarheid en konsentrasie.",
    },
  },
  "print-note": {
    af: {
      title: "Druk Notas Aanlyn – Drukvriendelike Nota-uitleghulpmiddel",
      description:
        "Berei notas voor om te druk met ’n skoon drukuitleg en vinnige formateringskontroles vir papiergereed uitset.",
    },
  },
  "import-export": {
    af: {
      title: "Invoer & Uitvoer Notas Aanlyn – Bestuur Notalêers Maklik",
      description:
        "Voer bestaande notalêers in en voer jou inhoud binne sekondes uit met hierdie eenvoudige aanlyn notalêerbestuurder.",
    },
  },
};

export function getProductivityToolSeo(id: WritingToolId, locale: string): SeoPack | null {
  if (!PRODUCTIVITY_TOOL_IDS.includes(id as (typeof PRODUCTIVITY_TOOL_IDS)[number])) return null;
  const toolId = id as (typeof PRODUCTIVITY_TOOL_IDS)[number];
  const override = productivitySeoOverrides[toolId]?.[locale];
  if (override) return override;
  const toolMap = generatedByTool[toolId];
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
