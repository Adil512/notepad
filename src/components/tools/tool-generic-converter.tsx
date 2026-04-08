"use client";

import { useEffect, useMemo, useState } from "react";
import type { WritingToolId } from "@/lib/writing-tools-registry";
import { writingToolsMeta } from "@/lib/writing-tools-registry";
import {
  isPhase3ToolId,
  runPhase3Conversion,
} from "@/lib/converter-phase3";

export function GenericConverterTool({ id }: { id: WritingToolId }) {
  const meta = writingToolsMeta[id];
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null);
  const [uploadName, setUploadName] = useState("");
  const [downloadBlob, setDownloadBlob] = useState<Blob | null>(null);
  const [downloadFilename, setDownloadFilename] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [tableName, setTableName] = useState("table_name");
  const [separator, setSeparator] = useState(", ");
  const [delimiter, setDelimiter] = useState(",");
  const [lineEnding, setLineEnding] = useState<"LF" | "CRLF">("LF");
  const [textCaseMode, setTextCaseMode] = useState<"upper" | "lower">("upper");

  const supportsPhase3 = useMemo(() => isPhase3ToolId(id), [id]);

  useEffect(() => {
    if (!downloadBlob) {
      setDownloadUrl(null);
      return;
    }
    const u = URL.createObjectURL(downloadBlob);
    setDownloadUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [downloadBlob]);

  const onPickFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setUploadName(f.name);
    setFileBuffer(await f.arrayBuffer());
    setError("");
  };

  const doConvert = async () => {
    setError("");
    setDownloadBlob(null);
    setDownloadFilename("");
    if (supportsPhase3) {
      try {
        const res = await runPhase3Conversion(id, {
          input,
          fileData: fileBuffer,
          fileName: uploadName,
        });
        if (res.kind === "text") {
          setOutput(res.text);
        } else {
          setOutput(`Your file is ready: ${res.filename}. Use Download file to save it.`);
          setDownloadBlob(res.blob);
          setDownloadFilename(res.filename);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Conversion failed.");
      }
      return;
    }

    try {
      switch (id) {
        case "json-to-csv": {
          const parsed = JSON.parse(input);
          const rows = Array.isArray(parsed) ? parsed : [parsed];
          setOutput(toCsv(rows));
          break;
        }
        case "csv-to-json": {
          const rows = parseCsv(input);
          setOutput(JSON.stringify(rows, null, 2));
          break;
        }
        case "json-to-xml": {
          const parsed = JSON.parse(input);
          setOutput(jsonToXml(parsed, "root"));
          break;
        }
        case "xml-to-json": {
          const parsed = xmlToJson(input);
          setOutput(JSON.stringify(parsed, null, 2));
          break;
        }
        case "yaml-to-json": {
          const parsed = yamlToJson(input);
          setOutput(JSON.stringify(parsed, null, 2));
          break;
        }
        case "json-to-yaml": {
          const parsed = JSON.parse(input);
          setOutput(jsonToYaml(parsed));
          break;
        }
        case "sql-to-csv": {
          setOutput(sqlInsertToCsv(input));
          break;
        }
        case "csv-to-sql": {
          const rows = parseCsv(input);
          setOutput(csvToSqlInserts(rows, tableName));
          break;
        }
        case "text-to-json": {
          setOutput(JSON.stringify(textToJson(input), null, 2));
          break;
        }
        case "json-to-text": {
          const parsed = JSON.parse(input);
          setOutput(jsonToText(parsed));
          break;
        }
        case "text-to-xml": {
          setOutput(textToXml(input));
          break;
        }
        case "xml-to-text": {
          setOutput(xmlToText(input));
          break;
        }
        case "text-uppercase-lowercase": {
          setOutput(
            textCaseMode === "upper" ? input.toUpperCase() : input.toLowerCase()
          );
          break;
        }
        case "text-to-camel-case": {
          setOutput(toCamelCase(input));
          break;
        }
        case "text-to-snake-case": {
          setOutput(toSnakeCase(input));
          break;
        }
        case "text-to-kebab-case": {
          setOutput(toKebabCase(input));
          break;
        }
        case "split-text-to-columns": {
          const lines = input
            .split(/\r?\n/)
            .filter((line) => line.trim().length > 0)
            .map((line) => line.split(delimiter).map((v) => v.trim()));
          setOutput(toCsvFromMatrix(lines));
          break;
        }
        case "merge-text-lines": {
          const lines = input
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean);
          setOutput(lines.join(separator));
          break;
        }
        case "convert-line-endings": {
          const normalized = input.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
          setOutput(lineEnding === "CRLF" ? normalized.replace(/\n/g, "\r\n") : normalized);
          break;
        }
        case "minify-json": {
          setOutput(JSON.stringify(JSON.parse(input)));
          break;
        }
        case "minify-xml": {
          const xml = new DOMParser().parseFromString(input, "application/xml");
          const parserError = xml.querySelector("parsererror");
          if (parserError) throw new Error("Invalid XML input.");
          const raw = new XMLSerializer().serializeToString(xml);
          setOutput(raw.replace(/>\s+</g, "><").trim());
          break;
        }
        default: {
          setOutput(
            "This action is not available for the current input. Check the format and try again."
          );
        }
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed.");
    }
  };

  return (
    <section className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
      <div className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-foreground">
          {meta.h1}
        </h2>
        <p className="text-sm text-muted-foreground">{meta.description}</p>
      </div>

      {supportsPhase3 ? (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input
            type="file"
            className="text-sm text-muted-foreground file:mr-3 file:rounded-md file:border file:border-border file:bg-background file:px-3 file:py-1.5 file:text-sm"
            onChange={onPickFile}
          />
          {uploadName ? (
            <span className="text-xs text-muted-foreground">
              Loaded: {uploadName}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Input</label>
          <textarea
            className="min-h-40 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Paste input content here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Output</label>
          <textarea
            className="min-h-40 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none"
            placeholder="Converted output will appear here..."
            readOnly
            value={output}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {id === "csv-to-sql" ? (
          <input
            value={tableName}
            onChange={(e) => setTableName(e.target.value || "table_name")}
            className="h-9 rounded-md border border-border bg-background px-3 text-sm"
            placeholder="table_name"
          />
        ) : null}
        {id === "merge-text-lines" ? (
          <input
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            className="h-9 rounded-md border border-border bg-background px-3 text-sm"
            placeholder="Separator"
          />
        ) : null}
        {id === "split-text-to-columns" ? (
          <input
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value || ",")}
            className="h-9 rounded-md border border-border bg-background px-3 text-sm"
            placeholder="Delimiter"
          />
        ) : null}
        {id === "convert-line-endings" ? (
          <select
            value={lineEnding}
            onChange={(e) => setLineEnding(e.target.value as "LF" | "CRLF")}
            className="h-9 rounded-md border border-border bg-background px-3 text-sm"
          >
            <option value="LF">Target LF</option>
            <option value="CRLF">Target CRLF</option>
          </select>
        ) : null}
        {id === "text-uppercase-lowercase" ? (
          <select
            value={textCaseMode}
            onChange={(e) =>
              setTextCaseMode(e.target.value as "upper" | "lower")
            }
            className="h-9 rounded-md border border-border bg-background px-3 text-sm"
          >
            <option value="upper">UPPERCASE</option>
            <option value="lower">lowercase</option>
          </select>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          onClick={doConvert}
        >
          Convert
        </button>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(output)}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium"
        >
          Copy output
        </button>
        {downloadUrl && downloadFilename ? (
          <a
            href={downloadUrl}
            download={downloadFilename}
            className="rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            Download file
          </a>
        ) : null}
      </div>
      {error ? (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
      ) : null}
    </section>
  );
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
  const columns = Array.from(
    new Set(rows.flatMap((r) => Object.keys(r)))
  );
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
    if (idx <= 0) throw new Error("YAML parse supports simple key: value lines.");
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

function csvToSqlInserts(rows: Record<string, string>[], tableName: string): string {
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
