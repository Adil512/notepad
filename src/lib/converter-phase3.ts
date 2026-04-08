import type { WritingToolId } from "@/lib/writing-tools-registry";

export type Phase3Options = {
  input: string;
  fileData: ArrayBuffer | null;
  fileName: string;
};

export type Phase3Result =
  | { kind: "text"; text: string }
  | { kind: "blob"; blob: Blob; filename: string; mimeType: string };

const PHASE3_IDS = new Set<WritingToolId>([
  "text-to-excel",
  "csv-to-excel",
  "json-to-excel",
  "xml-to-excel",
  "html-to-excel",
  "pdf-to-excel",
  "excel-to-csv",
  "excel-to-json",
  "excel-to-xml",
  "excel-to-pdf",
  "google-sheet-to-excel",
  "numbers-to-excel",
  "ods-to-excel",
  "excel-to-ods",
  "excel-to-google-sheet",
  "pdf-to-word",
  "word-to-pdf",
  "text-to-pdf",
  "pdf-to-text",
  "word-to-txt",
  "txt-to-word",
  "html-to-pdf",
  "pdf-to-html",
  "markdown-to-pdf",
  "pdf-to-markdown",
  "ppt-to-pdf",
  "pdf-to-ppt",
  "rtf-to-pdf",
  "pdf-to-rtf",
  "txt-to-markdown",
  "markdown-to-txt",
  "html-to-word",
  "word-to-html",
]);

export function isPhase3ToolId(id: WritingToolId): boolean {
  return PHASE3_IDS.has(id);
}

export async function runPhase3Conversion(
  id: WritingToolId,
  opts: Phase3Options
): Promise<Phase3Result> {
  const XLSX = await import("xlsx");
  const { jsPDF } = await import("jspdf");
  const mammoth = (await import("mammoth")).default;
  const docxMod = await import("docx");
  const { marked } = await import("marked");
  const pdfjsLib = await import("pdfjs-dist");

  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

  const needFile = (msg: string) => {
    if (!opts.fileData) throw new Error(msg);
    return opts.fileData;
  };

  const readWorkbook = (data: ArrayBuffer) => {
    try {
      return XLSX.read(data, { type: "array" });
    } catch {
      throw new Error(
        "Could not read spreadsheet. Try exporting as .xlsx or .csv from Numbers / Google Sheets."
      );
    }
  };

  switch (id) {
    case "text-to-excel": {
      const lines = opts.input.split(/\r?\n/).map((l) => [l]);
      const ws = XLSX.utils.aoa_to_sheet(lines);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "converted.xlsx", XLSX_MIME);
    }

    case "csv-to-excel": {
      const csv =
        opts.input.trim() ||
        (opts.fileData
          ? new TextDecoder().decode(opts.fileData)
          : "");
      if (!csv.trim()) throw new Error("Paste CSV or upload a .csv file.");
      const wbIn = XLSX.read(csv, { type: "string" });
      const name = wbIn.SheetNames[0];
      const ws = wbIn.Sheets[name];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "converted.xlsx", XLSX_MIME);
    }

    case "json-to-excel": {
      const parsed = JSON.parse(opts.input || "[]");
      const rows = Array.isArray(parsed) ? parsed : [parsed];
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "converted.xlsx", XLSX_MIME);
    }

    case "xml-to-excel": {
      const j = xmlStringToRows(opts.input);
      const ws = XLSX.utils.json_to_sheet(j.rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "converted.xlsx", XLSX_MIME);
    }

    case "html-to-excel": {
      const doc = new DOMParser().parseFromString(opts.input, "text/html");
      const table = doc.querySelector("table");
      if (!table) throw new Error("Paste HTML that includes a <table> element.");
      const ws = XLSX.utils.table_to_sheet(table);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "converted.xlsx", XLSX_MIME);
    }

    case "pdf-to-excel": {
      const data = needFile("Upload a PDF file.");
      const text = await extractPdfText(data, pdfjsLib);
      const rows = textToGrid(text);
      const ws = XLSX.utils.aoa_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Extracted");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "pdf-text-as-grid.xlsx", XLSX_MIME);
    }

    case "excel-to-csv": {
      const wb = readWorkbook(needFile("Upload an Excel file (.xlsx, .xls, .ods)."));
      const name = wb.SheetNames[0];
      const csv = XLSX.utils.sheet_to_csv(wb.Sheets[name]);
      return { kind: "text", text: csv };
    }

    case "excel-to-json": {
      const wb = readWorkbook(needFile("Upload an Excel file."));
      const name = wb.SheetNames[0];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(wb.Sheets[name]);
      return { kind: "text", text: JSON.stringify(rows, null, 2) };
    }

    case "excel-to-xml": {
      const wb = readWorkbook(needFile("Upload an Excel file."));
      const name = wb.SheetNames[0];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(wb.Sheets[name]);
      const xml = rowsToXml(rows, "rows", "row");
      return { kind: "text", text: xml };
    }

    case "excel-to-pdf": {
      const wb = readWorkbook(needFile("Upload an Excel file."));
      const name = wb.SheetNames[0];
      const csv = XLSX.utils.sheet_to_csv(wb.Sheets[name]);
      const pdfBlob = textToPdfBlob(csv, jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "sheet-export.pdf", mimeType: "application/pdf" };
    }

    case "google-sheet-to-excel": {
      const csv =
        opts.input.trim() ||
        (opts.fileData ? new TextDecoder().decode(opts.fileData) : "");
      if (!csv.trim()) {
        return {
          kind: "text",
          text:
            "Export your Google Sheet as CSV (File → Download → Comma-separated values), then paste it here or upload the file, and click Convert again.",
        };
      }
      const wbIn = XLSX.read(csv, { type: "string" });
      const ws = wbIn.Sheets[wbIn.SheetNames[0]];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "from-google-sheet.xlsx", XLSX_MIME);
    }

    case "numbers-to-excel":
    case "ods-to-excel": {
      const data = needFile("Upload a .numbers (export as xlsx first) or .ods / .xlsx file.");
      const wb = readWorkbook(data);
      const out = XLSX.utils.book_new();
      wb.SheetNames.forEach((sn) => {
        XLSX.utils.book_append_sheet(out, wb.Sheets[sn], sn.slice(0, 31));
      });
      const buf = XLSX.write(out, { bookType: "xlsx", type: "array" }) as Uint8Array;
      return blobResult(buf, "converted.xlsx", XLSX_MIME);
    }

    case "excel-to-ods": {
      const wb = readWorkbook(needFile("Upload an Excel file."));
      try {
        const buf = XLSX.write(wb, { bookType: "ods", type: "array" }) as Uint8Array;
        return blobResult(buf, "converted.ods", "application/vnd.oasis.opendocument.spreadsheet");
      } catch {
        const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" }) as Uint8Array;
        return blobResult(buf, "converted.xlsx", XLSX_MIME);
      }
    }

    case "excel-to-google-sheet": {
      const wb = readWorkbook(needFile("Upload an Excel file."));
      const name = wb.SheetNames[0];
      const tsv = XLSX.utils.sheet_to_csv(wb.Sheets[name], { FS: "\t" });
      return {
        kind: "text",
        text: `${tsv}\n\n---\nCopy the block above, open Google Sheets → paste (Ctrl+V). Or use File → Import → Upload in Google Sheets.`,
      };
    }

    case "pdf-to-text": {
      const text = await extractPdfText(needFile("Upload a PDF."), pdfjsLib);
      return { kind: "text", text };
    }

    case "pdf-to-html": {
      const text = await extractPdfText(needFile("Upload a PDF."), pdfjsLib);
      const esc = escapeHtml(text);
      return {
        kind: "text",
        text: `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Extracted</title></head><body><article><pre style="white-space:pre-wrap;font-family:system-ui,sans-serif">${esc}</pre></article></body></html>`,
      };
    }

    case "pdf-to-markdown": {
      const text = await extractPdfText(needFile("Upload a PDF."), pdfjsLib);
      const lines = text.split(/\r?\n/).filter((l) => l.trim());
      const md = lines.map((l) => l.trim()).join("\n\n");
      return { kind: "text", text: md };
    }

    case "pdf-to-word": {
      const text = await extractPdfText(needFile("Upload a PDF."), pdfjsLib);
      const blob = await plainTextToDocx(text, docxMod);
      return { kind: "blob", blob, filename: "extracted.docx", mimeType: DOCX_MIME };
    }

    case "pdf-to-ppt": {
      const text = await extractPdfText(needFile("Upload a PDF."), pdfjsLib);
      const pages = text.split(/\f/).length > 1 ? text.split(/\f/) : chunkByLength(text, 2000);
      const outline = pages
        .map((p, i) => `## Slide ${i + 1}\n\n${p.trim()}`)
        .join("\n\n---\n\n");
      return {
        kind: "text",
        text: `${outline}\n\n---\nUse this outline to build slides in PowerPoint or Google Slides. True .pptx generation requires desktop apps.`,
      };
    }

    case "pdf-to-rtf": {
      const text = await extractPdfText(needFile("Upload a PDF."), pdfjsLib);
      return { kind: "text", text: textToRtf(text) };
    }

    case "text-to-pdf": {
      const pdfBlob = textToPdfBlob(opts.input || " ", jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "document.pdf", mimeType: "application/pdf" };
    }

    case "html-to-pdf": {
      const pdfBlob = textToPdfBlob(stripHtml(opts.input), jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "page.pdf", mimeType: "application/pdf" };
    }

    case "markdown-to-pdf": {
      const html = await marked.parse(opts.input || "", { async: true });
      const pdfBlob = textToPdfBlob(stripHtml(String(html)), jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "markdown.pdf", mimeType: "application/pdf" };
    }

    case "rtf-to-pdf": {
      const raw =
        opts.input.trim() ||
        (opts.fileData ? new TextDecoder().decode(opts.fileData) : "");
      if (!raw.trim()) throw new Error("Paste RTF or upload an .rtf file.");
      const plain = stripRtf(raw);
      const pdfBlob = textToPdfBlob(plain, jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "rtf.pdf", mimeType: "application/pdf" };
    }

    case "word-to-txt": {
      const buf = needFile("Upload a .docx file.");
      const { value } = await mammoth.extractRawText({ arrayBuffer: buf });
      return { kind: "text", text: value };
    }

    case "word-to-html": {
      const buf = needFile("Upload a .docx file.");
      const { value } = await mammoth.convertToHtml({ arrayBuffer: buf });
      return { kind: "text", text: value };
    }

    case "word-to-pdf": {
      const buf = needFile("Upload a .docx file.");
      const { value } = await mammoth.extractRawText({ arrayBuffer: buf });
      const pdfBlob = textToPdfBlob(value, jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "document.pdf", mimeType: "application/pdf" };
    }

    case "txt-to-word": {
      const blob = await plainTextToDocx(opts.input, docxMod);
      return { kind: "blob", blob, filename: "document.docx", mimeType: DOCX_MIME };
    }

    case "html-to-word": {
      const plain = stripHtml(opts.input);
      const blob = await plainTextToDocx(plain, docxMod);
      return { kind: "blob", blob, filename: "page.docx", mimeType: DOCX_MIME };
    }

    case "txt-to-markdown": {
      const paras = (opts.input || "")
        .split(/\r?\n\r?\n/)
        .map((p) => p.trim())
        .filter(Boolean);
      return {
        kind: "text",
        text: paras.map((p) => `${p}\n`).join("\n"),
      };
    }

    case "markdown-to-txt": {
      const html = await marked.parse(opts.input || "", { async: true });
      return { kind: "text", text: stripHtml(String(html)) };
    }

    case "ppt-to-pdf": {
      const data = needFile("Upload a .pptx file.");
      const text = await extractPptxText(data);
      const pdfBlob = textToPdfBlob(text, jsPDF);
      return { kind: "blob", blob: pdfBlob, filename: "slides-text.pdf", mimeType: "application/pdf" };
    }

    default:
      break;
  }

  throw new Error("Unhandled Phase 3 tool.");
}

const XLSX_MIME =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const DOCX_MIME =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function blobResult(
  buf: Uint8Array,
  filename: string,
  mimeType: string
): Phase3Result {
  const copy = new Uint8Array(buf.byteLength);
  copy.set(buf);
  return {
    kind: "blob",
    blob: new Blob([copy], { type: mimeType }),
    filename,
    mimeType,
  };
}

async function extractPdfText(
  data: ArrayBuffer,
  pdfjsLib: typeof import("pdfjs-dist")
): Promise<string> {
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(data) });
  const pdf = await loadingTask.promise;
  const parts: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const tc = await page.getTextContent();
    const line = tc.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    parts.push(line);
  }
  return parts.join("\n\n");
}

function textToGrid(text: string): string[][] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  return lines.map((line) => {
    if (line.includes("\t")) return line.split("\t").map((c) => c.trim());
    if (/\s{2,}/.test(line)) return line.split(/\s{2,}/).map((c) => c.trim());
    return [line];
  });
}

function textToPdfBlob(text: string, jsPDF: typeof import("jspdf").jsPDF): Blob {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 15;
  const pageW = doc.internal.pageSize.getWidth() - margin * 2;
  const lines = doc.splitTextToSize(text || " ", pageW);
  let y = margin;
  const lineH = 7;
  for (let i = 0; i < lines.length; i++) {
    if (y > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(lines[i], margin, y);
    y += lineH;
  }
  return doc.output("blob");
}

async function plainTextToDocx(
  text: string,
  docxMod: typeof import("docx")
): Promise<Blob> {
  const { Document, Packer, Paragraph, TextRun } = docxMod;
  const lines = (text || " ").split(/\r?\n/);
  const doc = new Document({
    sections: [
      {
        children: lines.map(
          (line) =>
            new Paragraph({
              children: [new TextRun(line.length ? line : " ")],
            })
        ),
      },
    ],
  });
  return Packer.toBlob(doc);
}

function stripHtml(html: string): string {
  if (typeof document === "undefined") {
    return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }
  const d = document.createElement("div");
  d.innerHTML = html;
  return d.textContent || d.innerText || "";
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function xmlStringToRows(xml: string): { rows: Record<string, string>[] } {
  const dom = new DOMParser().parseFromString(xml, "application/xml");
  if (dom.querySelector("parsererror")) throw new Error("Invalid XML.");
  const root = dom.documentElement;
  const children = Array.from(root.children);
  if (children.length === 0) {
    return { rows: [{ value: root.textContent ?? "" }] };
  }
  return {
    rows: children.map((el, i) => ({
      index: String(i + 1),
      name: el.nodeName,
      text: el.textContent?.trim() ?? "",
    })),
  };
}

function rowsToXml(
  rows: Record<string, unknown>[],
  root: string,
  rowTag: string
): string {
  const rTag = sanitizeXmlName(rowTag);
  const rootTag = sanitizeXmlName(root);
  const body = rows
    .map((row) => {
      const cells = Object.entries(row)
        .map(([k, v]) => {
          const tag = sanitizeXmlName(k);
          return `<${tag}>${escapeXmlContent(String(v ?? ""))}</${tag}>`;
        })
        .join("");
      return `<${rTag}>${cells}</${rTag}>`;
    })
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><${rootTag}>${body}</${rootTag}>`;
}

function sanitizeXmlName(s: string): string {
  const t = s.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (/^xml$/i.test(t)) return `_${t}`;
  return t || "col";
}

function escapeXmlContent(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function stripRtf(rtf: string): string {
  let t = rtf.replace(/\r\n/g, "\n");
  t = t.replace(/\{\\\*[^}]*\}/g, "");
  t = t.replace(/\\'([0-9a-f]{2})/gi, (_, h) =>
    String.fromCharCode(parseInt(h, 16))
  );
  t = t.replace(/\\[a-z]+\d* ?/gi, "");
  t = t.replace(/[{}]/g, "");
  return t.replace(/\n{3,}/g, "\n\n").trim();
}

function textToRtf(text: string): string {
  const safe = text.replace(/\\/g, "\\\\").replace(/{/g, "\\{").replace(/}/g, "\\}");
  return `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Calibri;}}\\f0\\fs24 ${safe}}`;
}

async function extractPptxText(data: ArrayBuffer): Promise<string> {
  const jszipMod = await import("jszip");
  const JSZip = (jszipMod as unknown as { default: typeof import("jszip") })
    .default;
  const zip = await JSZip.loadAsync(data);
  const names = Object.keys(zip.files).filter((p) =>
    /^ppt\/slides\/slide\d+\.xml$/i.test(p)
  );
  names.sort((a, b) => {
    const na = parseInt(a.match(/slide(\d+)/i)?.[1] ?? "0", 10);
    const nb = parseInt(b.match(/slide(\d+)/i)?.[1] ?? "0", 10);
    return na - nb;
  });
  const chunks: string[] = [];
  for (const path of names) {
    const xml = await zip.file(path)?.async("string");
    if (!xml) continue;
    const matches = [...xml.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map((m) => m[1]);
    chunks.push(matches.join(" "));
  }
  if (!chunks.length) throw new Error("No slide text found. Ensure the file is a .pptx.");
  return chunks.map((c, i) => `--- Slide ${i + 1} ---\n${c}`).join("\n\n");
}

function chunkByLength(s: string, size: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < s.length; i += size) {
    out.push(s.slice(i, i + size));
  }
  return out.length ? out : [s];
}
