import type { LucideIcon } from "lucide-react";
import {
  Braces,
  FileCode2,
  FileSpreadsheet,
  FileText,
  FileType2,
  Presentation,
  Table2,
} from "lucide-react";
import { isPhase3ToolId } from "@/lib/converter-phase3";
import type { WritingToolId } from "@/lib/writing-tools-registry";
import { writingToolsMeta } from "@/lib/writing-tools-registry";

export type ConverterWorkspaceMode = "file-only" | "text-only" | "hybrid";

const TEXT_ONLY_PHASE3 = new Set<WritingToolId>([
  "text-to-excel",
  "json-to-excel",
  "xml-to-excel",
  "html-to-excel",
  "text-to-pdf",
  "html-to-pdf",
  "markdown-to-pdf",
  "txt-to-word",
  "html-to-word",
  "txt-to-markdown",
  "markdown-to-txt",
]);

const HYBRID_PHASE3 = new Set<WritingToolId>([
  "csv-to-excel",
  "google-sheet-to-excel",
  "rtf-to-pdf",
]);

const SPREADSHEET_ACCEPT =
  ".xlsx,.xls,.ods,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.oasis.opendocument.spreadsheet";
const PDF_ACCEPT = ".pdf,application/pdf";
const DOCX_ACCEPT =
  ".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const PPTX_ACCEPT =
  ".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation";
const CSV_ACCEPT = ".csv,text/csv,text/plain";

export type ConverterWorkspaceIconKey =
  | "sheet"
  | "pdf"
  | "doc"
  | "code"
  | "braces"
  | "table"
  | "text"
  | "slides";

const ICON_MAP: Record<ConverterWorkspaceIconKey, LucideIcon> = {
  sheet: FileSpreadsheet,
  pdf: FileType2,
  doc: FileText,
  code: FileCode2,
  braces: Braces,
  table: Table2,
  text: FileText,
  slides: Presentation,
};

const OVERRIDES: Partial<
  Record<
    WritingToolId,
    Partial<{
      step1Title: string;
      step2Title: string;
      fileHint: string;
      step2Blurb: string;
      convertLabel: string;
      downloadLabel: string;
      cardDescription: string;
      icon: ConverterWorkspaceIconKey;
    }>
  >
> = {
  "excel-to-pdf": {
    step1Title: "Upload workbook",
    step2Title: "Generate PDF",
    fileHint:
      ".xlsx, .xls, or .ods — first sheet is exported as readable text in the PDF.",
    step2Blurb:
      "We render the first worksheet as plain text in a clean, paginated PDF — ideal for sharing or archiving without sending the original spreadsheet.",
    convertLabel: "Convert to PDF",
    downloadLabel: "Download PDF",
    cardDescription:
      "Turn spreadsheet data into a print-ready PDF. Your workbook stays on your device until you download the result.",
    icon: "sheet",
  },
};

export function inferConverterWorkspaceMode(
  id: WritingToolId
): ConverterWorkspaceMode {
  if (!isPhase3ToolId(id)) return "text-only";
  if (TEXT_ONLY_PHASE3.has(id)) return "text-only";
  if (HYBRID_PHASE3.has(id)) return "hybrid";
  return "file-only";
}

export function getConverterFileAccept(id: WritingToolId): string {
  switch (id) {
    case "pdf-to-excel":
    case "pdf-to-text":
    case "pdf-to-html":
    case "pdf-to-markdown":
    case "pdf-to-word":
    case "pdf-to-ppt":
    case "pdf-to-rtf":
      return PDF_ACCEPT;
    case "word-to-txt":
    case "word-to-html":
    case "word-to-pdf":
      return DOCX_ACCEPT;
    case "ppt-to-pdf":
      return PPTX_ACCEPT;
    case "csv-to-excel":
    case "google-sheet-to-excel":
      return `${CSV_ACCEPT},${SPREADSHEET_ACCEPT}`;
    case "rtf-to-pdf":
      return ".rtf,application/rtf,text/rtf";
    case "numbers-to-excel":
    case "ods-to-excel":
      return `${SPREADSHEET_ACCEPT},.numbers`;
    default:
      if (id.startsWith("excel-to-")) return SPREADSHEET_ACCEPT;
      return "*/*";
  }
}

function defaultIcon(id: WritingToolId): ConverterWorkspaceIconKey {
  if (
    id.includes("json") ||
    id.includes("yaml") ||
    id.includes("xml") ||
    id.includes("csv") ||
    id.includes("sql")
  ) {
    return "braces";
  }
  if (id.includes("excel") || id.includes("sheet") || id.includes("csv-to")) {
    return "sheet";
  }
  if (id.includes("pdf") || id.endsWith("-pdf")) return "pdf";
  if (id.includes("word") || id.includes("doc")) return "doc";
  if (id.includes("ppt") || id.includes("slide")) return "slides";
  if (id.includes("html") || id.includes("markdown")) return "code";
  if (id.includes("text") || id.includes("line")) return "text";
  return "table";
}

function defaultStepCopy(
  id: WritingToolId,
  mode: ConverterWorkspaceMode,
  meta: (typeof writingToolsMeta)[WritingToolId]
) {
  if (mode === "file-only") {
    return {
      step1Title: "Upload file",
      step2Title: "Convert",
      fileHint: `Supported formats depend on this tool — max 25 MB recommended for browser conversion.`,
      step2Blurb: meta.description,
      convertLabel: "Convert",
    };
  }
  if (mode === "hybrid") {
    return {
      step1Title: "Add file or paste",
      step2Title: "Convert",
      fileHint: "Drop a file here, or paste content in the box below.",
      step2Blurb: meta.description,
      convertLabel: "Convert",
    };
  }
  return {
    step1Title: "Source input",
    step2Title: "Convert",
    fileHint: "",
    step2Blurb: meta.description,
    convertLabel: "Convert",
  };
}

export function getConverterWorkspaceUI(id: WritingToolId) {
  const meta = writingToolsMeta[id];
  const mode = inferConverterWorkspaceMode(id);
  const accept = getConverterFileAccept(id);
  const o = OVERRIDES[id];
  const defaults = defaultStepCopy(id, mode, meta);

  const step1Title = o?.step1Title ?? defaults.step1Title;
  const step2Title = o?.step2Title ?? defaults.step2Title;
  const fileHint = o?.fileHint ?? defaults.fileHint;
  const step2Blurb = o?.step2Blurb ?? defaults.step2Blurb;
  const convertLabel = o?.convertLabel ?? defaults.convertLabel;
  const downloadLabel = o?.downloadLabel ?? "Download file";
  const cardDescription =
    o?.cardDescription ?? meta.heroDescription ?? meta.description;
  const iconKey = o?.icon ?? defaultIcon(id);

  return {
    mode,
    accept,
    step1Title,
    step2Title,
    fileHint,
    step2Blurb,
    convertLabel,
    downloadLabel,
    cardDescription,
    Icon: ICON_MAP[iconKey],
  };
}

export function downloadLabelForFilename(
  fallback: string,
  filename: string
): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".pdf")) return "Download PDF";
  if (lower.endsWith(".xlsx")) return "Download XLSX";
  if (lower.endsWith(".docx")) return "Download DOCX";
  if (lower.endsWith(".ods")) return "Download ODS";
  return fallback;
}
