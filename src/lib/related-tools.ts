import {
  DATA_CODE_CONVERTER_TOOL_IDS,
  DOCUMENT_CONVERTER_TOOL_IDS,
  EXCEL_SPREADSHEET_TOOL_IDS,
  DEVTOOLS_TOOL_IDS,
  PRIMARY_EDITOR_TOOL_IDS,
  TEXT_ANALYSIS_TOOL_IDS,
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
  WRITING_PRODUCTIVITY_TOOL_IDS,
  WRITING_TOOL_IDS,
  isDevToolsHubToolId,
  isEditorHubToolId,
  isTextAnalysisHubToolId,
  isToolVisibleInLocale,
  isWritingProductivityToolId,
  writingToolsMeta,
  type WritingToolId,
} from "@/lib/writing-tools-registry";

const CONVERTER_GROUPS: WritingToolId[][] = [
  EXCEL_SPREADSHEET_TOOL_IDS,
  DOCUMENT_CONVERTER_TOOL_IDS,
  DATA_CODE_CONVERTER_TOOL_IDS,
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
];

/**
 * Hand-picked “also try” order. Remaining slots are filled from the same
 * converter group (spreadsheet / document / data-code / text-format), then
 * other tools in the same category.
 */
const RELATED_CURATED: Partial<Record<WritingToolId, WritingToolId[]>> = {
  "xml-to-json": [
    "json-to-xml",
    "xml-to-text",
    "text-to-xml",
    "yaml-to-json",
    "json-to-yaml",
    "json-formatter",
    "xml-formatter",
    "csv-to-json",
  ],
};

const MAX_RELATED = 8;

/** Cross-category suggestions on productivity writing tool pages (editors + analysis + devtools). */
const WRITING_PRODUCTIVITY_CROSS: WritingToolId[] = [
  "markdown-notepad",
  "word-counter",
  "json-formatter",
];

const EDITOR_HUB_CROSS: WritingToolId[] = [
  "json-formatter",
  "xml-formatter",
  "word-counter",
];

const TEXT_ANALYSIS_CROSS: WritingToolId[] = [
  "markdown-notepad",
  "json-formatter",
  "paste-clean",
];

const DEV_TOOLS_CROSS: WritingToolId[] = [
  "markdown-notepad",
  "json-editor",
  "word-counter",
];

export function getRelatedToolIds(
  id: WritingToolId,
  locale: string
): WritingToolId[] {
  if (isTextAnalysisHubToolId(id)) {
    const ordered: WritingToolId[] = [];
    const seen = new Set<WritingToolId>();
    const push = (tid: WritingToolId) => {
      if (
        tid === id ||
        seen.has(tid) ||
        !isToolVisibleInLocale(tid, locale)
      ) {
        return;
      }
      seen.add(tid);
      ordered.push(tid);
    };
    const peers = TEXT_ANALYSIS_TOOL_IDS.filter((t) => t !== id);
    for (const tid of peers) {
      if (ordered.length >= 5) break;
      push(tid);
    }
    for (const tid of TEXT_ANALYSIS_CROSS) {
      if (ordered.length >= MAX_RELATED) break;
      push(tid);
    }
    if (ordered.length < MAX_RELATED) {
      for (const tid of WRITING_TOOL_IDS) {
        if (ordered.length >= MAX_RELATED) break;
        push(tid);
      }
    }
    return ordered.slice(0, MAX_RELATED);
  }

  if (isDevToolsHubToolId(id)) {
    const ordered: WritingToolId[] = [];
    const seen = new Set<WritingToolId>();
    const push = (tid: WritingToolId) => {
      if (
        tid === id ||
        seen.has(tid) ||
        !isToolVisibleInLocale(tid, locale)
      ) {
        return;
      }
      seen.add(tid);
      ordered.push(tid);
    };
    const peers = DEVTOOLS_TOOL_IDS.filter((t) => t !== id);
    for (const tid of peers) {
      if (ordered.length >= 5) break;
      push(tid);
    }
    for (const tid of DEV_TOOLS_CROSS) {
      if (ordered.length >= MAX_RELATED) break;
      push(tid);
    }
    if (ordered.length < MAX_RELATED) {
      for (const tid of WRITING_TOOL_IDS) {
        if (ordered.length >= MAX_RELATED) break;
        push(tid);
      }
    }
    return ordered.slice(0, MAX_RELATED);
  }

  if (isEditorHubToolId(id)) {
    const ordered: WritingToolId[] = [];
    const seen = new Set<WritingToolId>();
    const push = (tid: WritingToolId) => {
      if (
        tid === id ||
        seen.has(tid) ||
        !isToolVisibleInLocale(tid, locale)
      ) {
        return;
      }
      seen.add(tid);
      ordered.push(tid);
    };
    const peers = PRIMARY_EDITOR_TOOL_IDS.filter((t) => t !== id);
    for (const tid of peers) {
      if (ordered.length >= 5) break;
      push(tid);
    }
    for (const tid of EDITOR_HUB_CROSS) {
      if (ordered.length >= MAX_RELATED) break;
      push(tid);
    }
    if (ordered.length < MAX_RELATED) {
      for (const tid of WRITING_TOOL_IDS) {
        if (ordered.length >= MAX_RELATED) break;
        push(tid);
      }
    }
    return ordered.slice(0, MAX_RELATED);
  }

  if (isWritingProductivityToolId(id)) {
    const ordered: WritingToolId[] = [];
    const seen = new Set<WritingToolId>();
    const push = (tid: WritingToolId) => {
      if (
        tid === id ||
        seen.has(tid) ||
        !isToolVisibleInLocale(tid, locale)
      ) {
        return;
      }
      seen.add(tid);
      ordered.push(tid);
    };
    const peers = WRITING_PRODUCTIVITY_TOOL_IDS.filter((t) => t !== id);
    for (const tid of peers) {
      if (ordered.length >= 5) break;
      push(tid);
    }
    for (const tid of WRITING_PRODUCTIVITY_CROSS) {
      if (ordered.length >= MAX_RELATED) break;
      push(tid);
    }
    if (ordered.length < MAX_RELATED) {
      for (const tid of WRITING_TOOL_IDS) {
        if (ordered.length >= MAX_RELATED) break;
        push(tid);
      }
    }
    return ordered.slice(0, MAX_RELATED);
  }

  const curated = RELATED_CURATED[id];
  const group = CONVERTER_GROUPS.find((g) => g.includes(id));
  const primary = new Set<string>(PRIMARY_EDITOR_TOOL_IDS);
  const ordered: WritingToolId[] = [];
  const seen = new Set<WritingToolId>();

  const push = (tid: WritingToolId) => {
    if (
      tid === id ||
      seen.has(tid) ||
      !isToolVisibleInLocale(tid, locale)
    ) {
      return;
    }
    seen.add(tid);
    ordered.push(tid);
  };

  if (curated) {
    for (const tid of curated) {
      if (ordered.length >= MAX_RELATED) break;
      push(tid);
    }
  }

  if (group && ordered.length < MAX_RELATED) {
    for (const tid of group) {
      if (ordered.length >= MAX_RELATED) break;
      push(tid);
    }
  }

  if (ordered.length < MAX_RELATED) {
    const cat = writingToolsMeta[id].category;
    for (const tid of WRITING_TOOL_IDS) {
      if (ordered.length >= MAX_RELATED) break;
      if (
        tid === id ||
        primary.has(tid) ||
        writingToolsMeta[tid].category !== cat
      ) {
        continue;
      }
      push(tid);
    }
  }

  return ordered;
}
