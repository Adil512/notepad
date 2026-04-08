import type { WritingToolId } from "@/lib/writing-tools-registry";
import {
  isPhase3ToolId,
  runPhase3Conversion,
  type Phase3Result,
} from "@/lib/converter-phase3";

export type { Phase3Result as ConverterRunResult };

export type ConverterRunParams = {
  id: WritingToolId;
  input: string;
  fileData: ArrayBuffer | null;
  fileName: string;
  tableName: string;
  separator: string;
  delimiter: string;
  lineEnding: "LF" | "CRLF";
  textCaseMode: "upper" | "lower";
};

export async function runConverter(
  params: ConverterRunParams
): Promise<Phase3Result> {
  const {
    id,
    input,
    fileData,
    fileName,
    tableName,
    separator,
    delimiter,
    lineEnding,
    textCaseMode,
  } = params;

  if (isPhase3ToolId(id)) {
    return runPhase3Conversion(id, { input, fileData, fileName });
  }

  switch (id) {
    case "json-to-csv": {
      const parsed = JSON.parse(input);
      const rows = Array.isArray(parsed) ? parsed : [parsed];
      return { kind: "text", text: toCsv(rows) };
    }
    case "csv-to-json": {
      const rows = parseCsv(input);
      return { kind: "text", text: JSON.stringify(rows, null, 2) };
    }
    case "json-to-xml": {
      const parsed = JSON.parse(input);
      return { kind: "text", text: jsonToXml(parsed, "root") };
    }
    case "xml-to-json": {
      const parsed = xmlToJson(input);
      return { kind: "text", text: JSON.stringify(parsed, null, 2) };
    }
    case "yaml-to-json": {
      const parsed = yamlToJson(input);
      return { kind: "text", text: JSON.stringify(parsed, null, 2) };
    }
    case "json-to-yaml": {
      const parsed = JSON.parse(input);
      return { kind: "text", text: jsonToYaml(parsed) };
    }
    case "sql-to-csv": {
      return { kind: "text", text: sqlInsertToCsv(input) };
    }
    case "csv-to-sql": {
      const rows = parseCsv(input);
      return { kind: "text", text: csvToSqlInserts(rows, tableName) };
    }
    case "text-to-json": {
      return { kind: "text", text: JSON.stringify(textToJson(input), null, 2) };
    }
    case "json-to-text": {
      const parsed = JSON.parse(input);
      return { kind: "text", text: jsonToText(parsed) };
    }
    case "text-to-xml": {
      return { kind: "text", text: textToXml(input) };
    }
    case "xml-to-text": {
      return { kind: "text", text: xmlToText(input) };
    }
    case "text-uppercase-lowercase": {
      return {
        kind: "text",
        text:
          textCaseMode === "upper" ? input.toUpperCase() : input.toLowerCase(),
      };
    }
    case "text-to-camel-case": {
      return { kind: "text", text: toCamelCase(input) };
    }
    case "text-to-snake-case": {
      return { kind: "text", text: toSnakeCase(input) };
    }
    case "text-to-kebab-case": {
      return { kind: "text", text: toKebabCase(input) };
    }
    case "split-text-to-columns": {
      const lines = input
        .split(/\r?\n/)
        .filter((line) => line.trim().length > 0)
        .map((line) => line.split(delimiter).map((v) => v.trim()));
      return { kind: "text", text: toCsvFromMatrix(lines) };
    }
    case "merge-text-lines": {
      const lines = input
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);
      return { kind: "text", text: lines.join(separator) };
    }
    case "convert-line-endings": {
      const normalized = input.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return {
        kind: "text",
        text:
          lineEnding === "CRLF"
            ? normalized.replace(/\n/g, "\r\n")
            : normalized,
      };
    }
    case "minify-json": {
      return { kind: "text", text: JSON.stringify(JSON.parse(input)) };
    }
    case "minify-xml": {
      const xml = new DOMParser().parseFromString(input, "application/xml");
      const parserError = xml.querySelector("parsererror");
      if (parserError) throw new Error("Invalid XML input.");
      const raw = new XMLSerializer().serializeToString(xml);
      return { kind: "text", text: raw.replace(/>\s+</g, "><").trim() };
    }
    default:
      return {
        kind: "text",
        text:
          "This action is not available for the current input. Check the format and try again.",
      };
  }
}

function parseCsv(input: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    const next = input[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      row.push(field);
      field = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && next === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  if (rows.length === 0) return [];
  const headers = rows[0].map((h, idx) => h.trim() || `col_${idx + 1}`);
  return rows.slice(1).map((r) =>
    Object.fromEntries(headers.map((h, i) => [h, r[i] ?? ""]))
  );
}

function toCsv(rows: Record<string, unknown>[]): string {
  if (!rows.length) return "";
  const columns = Array.from(new Set(rows.flatMap((r) => Object.keys(r))));
  const header = columns.join(",");
  const body = rows.map((row) =>
    columns.map((col) => csvEscape(row[col])).join(",")
  );
  return [header, ...body].join("\n");
}

function csvEscape(value: unknown): string {
  const raw = value == null ? "" : String(value);
  if (/[",\n\r]/.test(raw)) return `"${raw.replaceAll('"', '""')}"`;
  return raw;
}

function toCsvFromMatrix(lines: string[][]): string {
  return lines.map((line) => line.map(csvEscape).join(",")).join("\n");
}

function jsonToXml(value: unknown, root = "root"): string {
  const encode = (s: string) =>
    s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  const node = (key: string, val: unknown): string => {
    if (Array.isArray(val)) {
      return val.map((item) => node(key, item)).join("");
    }
    if (val && typeof val === "object") {
      const inner = Object.entries(val as Record<string, unknown>)
        .map(([k, v]) => node(k, v))
        .join("");
      return `<${key}>${inner}</${key}>`;
    }
    return `<${key}>${encode(val == null ? "" : String(val))}</${key}>`;
  };
  return `<?xml version="1.0" encoding="UTF-8"?>\n${node(root, value)}`;
}

function xmlToJson(input: string): unknown {
  const xml = new DOMParser().parseFromString(input, "application/xml");
  const parserError = xml.querySelector("parsererror");
  if (parserError) throw new Error("Invalid XML input.");
  const root = xml.documentElement;
  return { [root.nodeName]: elementToJson(root) };
}

function elementToJson(el: Element): unknown {
  const children = Array.from(el.children);
  if (children.length === 0) return el.textContent ?? "";
  const grouped: Record<string, unknown[]> = {};
  for (const child of children) {
    if (!grouped[child.nodeName]) grouped[child.nodeName] = [];
    grouped[child.nodeName].push(elementToJson(child));
  }
  return Object.fromEntries(
    Object.entries(grouped).map(([k, v]) => [k, v.length === 1 ? v[0] : v])
  );
}

function yamlToJson(input: string): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  const lines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx <= 0)
      throw new Error("YAML parse supports simple key: value lines.");
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    out[key] = parseScalar(value);
  }
  return out;
}

function jsonToYaml(value: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (Array.isArray(value)) {
    return value
      .map((item) =>
        typeof item === "object" && item !== null
          ? `${pad}-\n${jsonToYaml(item, indent + 1)}`
          : `${pad}- ${String(item)}`
      )
      .join("\n");
  }
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => {
        if (typeof v === "object" && v !== null) {
          return `${pad}${k}:\n${jsonToYaml(v, indent + 1)}`;
        }
        return `${pad}${k}: ${String(v)}`;
      })
      .join("\n");
  }
  return `${pad}${String(value)}`;
}

function parseScalar(value: string): unknown {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return value.replace(/^['"]|['"]$/g, "");
}

function csvToSqlInserts(
  rows: Record<string, string>[],
  tableName: string
): string {
  if (!rows.length) return "";
  const cols = Object.keys(rows[0]);
  const safeTable = tableName.replace(/[^\w]/g, "_");
  return rows
    .map((row) => {
      const values = cols
        .map((c) => `'${(row[c] ?? "").replaceAll("'", "''")}'`)
        .join(", ");
      return `INSERT INTO ${safeTable} (${cols.join(", ")}) VALUES (${values});`;
    })
    .join("\n");
}

function sqlInsertToCsv(input: string): string {
  const lines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => /^insert\s+into/i.test(l));
  if (!lines.length) throw new Error("Provide SQL INSERT lines.");
  const parsed = lines.map((line) => {
    const match = line.match(
      /insert\s+into\s+\S+\s*\(([^)]+)\)\s*values\s*\((.+)\)\s*;?/i
    );
    if (!match) throw new Error("Only INSERT INTO ... VALUES(...) is supported.");
    const cols = match[1].split(",").map((c) => c.trim());
    const vals = splitSqlValues(match[2]).map((v) =>
      v.replace(/^'/, "").replace(/'$/, "").replaceAll("''", "'")
    );
    return Object.fromEntries(cols.map((c, i) => [c, vals[i] ?? ""]));
  });
  return toCsv(parsed);
}

function splitSqlValues(values: string): string[] {
  const out: string[] = [];
  let current = "";
  let inQuote = false;
  for (let i = 0; i < values.length; i++) {
    const ch = values[i];
    const next = values[i + 1];
    if (ch === "'" && inQuote && next === "'") {
      current += "''";
      i++;
      continue;
    }
    if (ch === "'") {
      inQuote = !inQuote;
      current += ch;
      continue;
    }
    if (ch === "," && !inQuote) {
      out.push(current.trim());
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) out.push(current.trim());
  return out;
}

function textToJson(input: string): unknown {
  const lines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.every((l) => l.includes(":"))) {
    return Object.fromEntries(
      lines.map((line) => {
        const idx = line.indexOf(":");
        return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()];
      })
    );
  }
  return lines;
}

function jsonToText(value: unknown): string {
  if (Array.isArray(value)) return value.map((v) => String(v)).join("\n");
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => `${k}: ${String(v)}`)
      .join("\n");
  }
  return String(value ?? "");
}

function textToXml(input: string): string {
  const lines = input.split(/\r?\n/).filter((line) => line.trim().length > 0);
  const body = lines
    .map((line, i) => `<line index="${i + 1}">${escapeXml(line)}</line>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<text>${body}</text>`;
}

function xmlToText(input: string): string {
  const xml = new DOMParser().parseFromString(input, "application/xml");
  const parserError = xml.querySelector("parsererror");
  if (parserError) throw new Error("Invalid XML input.");
  return xml.documentElement.textContent?.trim() ?? "";
}

function escapeXml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toWords(input: string): string[] {
  return input
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase());
}

function toCamelCase(input: string): string {
  const words = toWords(input);
  if (!words.length) return "";
  return words[0] + words.slice(1).map(capitalize).join("");
}

function toSnakeCase(input: string): string {
  return toWords(input).join("_");
}

function toKebabCase(input: string): string {
  return toWords(input).join("-");
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
