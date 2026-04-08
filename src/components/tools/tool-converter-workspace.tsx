"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCopy,
  Download,
  Loader2,
  Trash2,
  X,
} from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";
import {
  downloadLabelForFilename,
  getConverterWorkspaceUI,
} from "@/lib/converter-workspace-config";
import { runConverter } from "@/lib/converter-runner";
import type { WritingToolId } from "@/lib/writing-tools-registry";
import { writingToolsMeta } from "@/lib/writing-tools-registry";

const MAX_FILE_BYTES = 25 * 1024 * 1024;

function fmtSize(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export function ToolConverterWorkspace({ id }: { id: WritingToolId }) {
  const meta = writingToolsMeta[id];
  const ui = useMemo(() => getConverterWorkspaceUI(id), [id]);
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null);
  const [uploadName, setUploadName] = useState("");
  const [uploadSize, setUploadSize] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [converting, setConverting] = useState(false);
  const [done, setDone] = useState(false);
  const [downloadBlob, setDownloadBlob] = useState<Blob | null>(null);
  const [downloadFilename, setDownloadFilename] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const [tableName, setTableName] = useState("table_name");
  const [separator, setSeparator] = useState(", ");
  const [delimiter, setDelimiter] = useState(",");
  const [lineEnding, setLineEnding] = useState<"LF" | "CRLF">("LF");
  const [textCaseMode, setTextCaseMode] = useState<"upper" | "lower">("upper");

  const { mode, accept, Icon } = ui;
  const showFileZone = mode === "file-only" || mode === "hybrid";
  const showTextInput = mode === "text-only" || mode === "hybrid";

  useEffect(() => {
    if (!downloadBlob) {
      setDownloadUrl(null);
      return;
    }
    const u = URL.createObjectURL(downloadBlob);
    setDownloadUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [downloadBlob]);

  const clearFile = useCallback(() => {
    setFileBuffer(null);
    setUploadName("");
    setUploadSize(null);
    setError("");
    setDone(false);
    setDownloadBlob(null);
    setDownloadFilename("");
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  const loadFile = useCallback(async (file: File) => {
    if (!file.size) {
      setError("This file appears to be empty.");
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setError(
        "Please use a file under 25 MB for reliable browser conversion."
      );
      return;
    }
    setError("");
    setDone(false);
    setDownloadBlob(null);
    setDownloadFilename("");
    setUploadName(file.name);
    setUploadSize(file.size);
    setFileBuffer(await file.arrayBuffer());
  }, []);

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) await loadFile(f);
  };

  const onDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) await loadFile(f);
  };

  const validate = (): string | null => {
    if (mode === "file-only" && !fileBuffer) {
      return "Add a file to continue.";
    }
    if (mode === "hybrid" && !fileBuffer && !input.trim()) {
      return "Paste content or upload a file to continue.";
    }
    return null;
  };

  const convert = async () => {
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError("");
    setConverting(true);
    setDone(false);
    setOutput("");
    setDownloadBlob(null);
    setDownloadFilename("");
    try {
      const res = await runConverter({
        id,
        input,
        fileData: fileBuffer,
        fileName: uploadName,
        tableName,
        separator,
        delimiter,
        lineEnding,
        textCaseMode,
      });
      if (res.kind === "text") {
        setOutput(res.text);
        setDownloadBlob(null);
        setDownloadFilename("");
      } else {
        setOutput("");
        setDownloadBlob(res.blob);
        setDownloadFilename(res.filename);
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed.");
    } finally {
      setConverting(false);
    }
  };

  const effectiveDownloadLabel = downloadFilename
    ? downloadLabelForFilename(ui.downloadLabel, downloadFilename)
    : ui.downloadLabel;

  const IconEl = Icon;

  return (
    <ToolChrome>
      <ToolCard title={meta.h1} description={ui.cardDescription}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                1
              </span>
              <span className="text-sm font-semibold text-foreground">
                {ui.step1Title}
              </span>
            </div>

            {showFileZone ? (
              <>
                <input
                  ref={inputRef}
                  type="file"
                  accept={accept}
                  className="sr-only"
                  onChange={onInputChange}
                />
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setIsDragging(false);
                    }
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDrop}
                  className={`group relative flex min-h-[180px] flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all ${
                    isDragging
                      ? "border-primary bg-primary/[0.06] shadow-inner"
                      : "border-border/80 bg-muted/20 hover:border-primary/40 hover:bg-muted/35 dark:bg-muted/10"
                  }`}
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-sky-500/15 text-emerald-700 dark:from-emerald-400/20 dark:to-sky-400/10 dark:text-emerald-300">
                    <IconEl className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <p className="font-medium text-foreground">
                    Drop your file here, or{" "}
                    <span className="text-primary underline decoration-primary/30 underline-offset-2 group-hover:decoration-primary">
                      browse
                    </span>
                  </p>
                  {ui.fileHint ? (
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      {ui.fileHint}
                    </p>
                  ) : null}
                </button>

                {uploadName ? (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-border/70 bg-background/80 px-4 py-3 dark:bg-background/40">
                    <IconEl className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0 flex-1 text-left">
                      <p className="truncate text-sm font-medium text-foreground">
                        {uploadName}
                      </p>
                      {uploadSize != null ? (
                        <p className="text-xs text-muted-foreground">
                          {fmtSize(uploadSize)}
                        </p>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      onClick={clearFile}
                      className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      aria-label="Remove file"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ) : null}
              </>
            ) : null}

            {showTextInput ? (
              <div
                className={
                  showFileZone
                    ? "mt-5 flex min-h-0 flex-1 flex-col"
                    : "flex min-h-0 flex-1 flex-col"
                }
              >
                {showFileZone ? (
                  <label className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Or paste below
                  </label>
                ) : null}
                <textarea
                  className="min-h-[220px] w-full flex-1 resize-y rounded-2xl border border-border/80 bg-background/80 p-4 text-sm leading-relaxed text-foreground outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring dark:bg-background/40"
                  placeholder="Paste your source content here…"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setError("");
                  }}
                />
              </div>
            ) : null}
          </div>

          <div className="flex items-center justify-center py-2 lg:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-muted/30 text-muted-foreground lg:h-12 lg:w-12">
              <ArrowDown className="h-5 w-5 lg:hidden" />
              <ArrowRight className="hidden h-5 w-5 lg:block" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                2
              </span>
              <span className="text-sm font-semibold text-foreground">
                {ui.step2Title}
              </span>
            </div>

            <div className="flex min-h-[220px] flex-1 flex-col rounded-2xl border border-border/70 bg-gradient-to-b from-background to-muted/15 p-6 dark:from-background dark:to-muted/5">
              <p className="text-sm text-muted-foreground">{ui.step2Blurb}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {id === "csv-to-sql" ? (
                  <input
                    value={tableName}
                    onChange={(e) =>
                      setTableName(e.target.value || "table_name")
                    }
                    className="h-9 rounded-lg border border-border bg-background px-3 text-sm"
                    placeholder="table_name"
                    aria-label="SQL table name"
                  />
                ) : null}
                {id === "merge-text-lines" ? (
                  <input
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    className="h-9 min-w-[140px] rounded-lg border border-border bg-background px-3 text-sm"
                    placeholder="Separator"
                    aria-label="Line separator"
                  />
                ) : null}
                {id === "split-text-to-columns" ? (
                  <input
                    value={delimiter}
                    onChange={(e) => setDelimiter(e.target.value || ",")}
                    className="h-9 w-24 rounded-lg border border-border bg-background px-3 text-sm"
                    placeholder="Delimiter"
                    aria-label="Column delimiter"
                  />
                ) : null}
                {id === "convert-line-endings" ? (
                  <select
                    value={lineEnding}
                    onChange={(e) =>
                      setLineEnding(e.target.value as "LF" | "CRLF")
                    }
                    className="h-9 rounded-lg border border-border bg-background px-3 text-sm"
                    aria-label="Line ending"
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
                    className="h-9 rounded-lg border border-border bg-background px-3 text-sm"
                    aria-label="Case mode"
                  >
                    <option value="upper">UPPERCASE</option>
                    <option value="lower">lowercase</option>
                  </select>
                ) : null}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <button
                  type="button"
                  disabled={converting}
                  onClick={() => void convert()}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-45"
                >
                  {converting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Converting…
                    </>
                  ) : (
                    <>
                      {ui.convertLabel}
                      <ArrowRight className="h-4 w-4 opacity-90" />
                    </>
                  )}
                </button>

                {done && downloadUrl && downloadFilename ? (
                  <a
                    href={downloadUrl}
                    download={downloadFilename}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/10 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-500/15 dark:border-emerald-400/30 dark:text-emerald-200"
                  >
                    <Download className="h-5 w-5" />
                    {effectiveDownloadLabel}
                  </a>
                ) : null}

                {done ? (
                  <p className="flex items-center justify-center gap-1.5 text-center text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Conversion complete
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {output.trim() ? (
          <div className="mt-8 rounded-2xl border border-border/70 bg-muted/10 p-5 dark:bg-muted/5 sm:p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-foreground">Result</h3>
              <button
                type="button"
                onClick={() => void navigator.clipboard.writeText(output)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium transition hover:bg-muted/60"
              >
                <ClipboardCopy className="h-3.5 w-3.5" />
                Copy all
              </button>
            </div>
            <textarea
              readOnly
              className="min-h-[200px] w-full resize-y rounded-xl border border-border/80 bg-background p-4 font-mono text-xs leading-relaxed text-foreground sm:text-sm"
              value={output}
            />
          </div>
        ) : null}

        {error ? (
          <div
            className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-100"
            role="alert"
          >
            <X className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
            <span>{error}</span>
          </div>
        ) : null}

        <p className="mt-6 border-t border-border/50 pt-5 text-center text-xs text-muted-foreground">
          Files are processed in your browser. Nothing is uploaded to our
          servers for this conversion.
        </p>
      </ToolCard>
    </ToolChrome>
  );
}

export function GenericConverterTool({ id }: { id: WritingToolId }) {
  return <ToolConverterWorkspace id={id} />;
}
