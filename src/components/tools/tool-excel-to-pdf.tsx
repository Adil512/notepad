"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  Loader2,
  Trash2,
  X,
} from "lucide-react";
import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { runPhase3Conversion } from "@/lib/converter-phase3";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const TOOL_ID = "excel-to-pdf" as const;
const ACCEPT = ".xlsx,.xls,.ods,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel";

export function ExcelToPdfTool() {
  const meta = writingToolsMeta[TOOL_ID];
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null);
  const [uploadName, setUploadName] = useState("");
  const [uploadSize, setUploadSize] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [downloadBlob, setDownloadBlob] = useState<Blob | null>(null);
  const [downloadFilename, setDownloadFilename] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

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
    const max = 25 * 1024 * 1024;
    if (file.size > max) {
      setError("Please use a file under 25 MB for reliable browser conversion.");
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

  const convert = async () => {
    if (!fileBuffer) {
      setError("Add an Excel file to continue.");
      return;
    }
    setError("");
    setConverting(true);
    setDone(false);
    setDownloadBlob(null);
    setDownloadFilename("");
    try {
      const res = await runPhase3Conversion(TOOL_ID, {
        input: "",
        fileData: fileBuffer,
        fileName: uploadName,
      });
      if (res.kind === "blob") {
        setDownloadBlob(res.blob);
        setDownloadFilename(res.filename);
        setDone(true);
      } else {
        setError("Unexpected response. Please try another file.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed.");
    } finally {
      setConverting(false);
    }
  };

  const fmtSize = (n: number) => {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <ToolChrome>
      <ToolCard
        title={meta.h1}
        description="Turn spreadsheet data into a print-ready PDF. Your workbook stays on your device until you download the result."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* Step 1 */}
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                1
              </span>
              <span className="text-sm font-semibold text-foreground">
                Upload workbook
              </span>
            </div>

            <input
              ref={inputRef}
              type="file"
              accept={ACCEPT}
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
              className={`group relative flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all ${
                isDragging
                  ? "border-primary bg-primary/[0.06] shadow-inner"
                  : "border-border/80 bg-muted/20 hover:border-primary/40 hover:bg-muted/35 dark:bg-muted/10"
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-sky-500/15 text-emerald-700 dark:from-emerald-400/20 dark:to-sky-400/10 dark:text-emerald-300">
                <FileSpreadsheet className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <p className="font-medium text-foreground">
                Drop your file here, or{" "}
                <span className="text-primary underline decoration-primary/30 underline-offset-2 group-hover:decoration-primary">
                  browse
                </span>
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                .xlsx, .xls, or .ods — first sheet is exported as readable text in the PDF.
              </p>
            </button>

            {uploadName ? (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-border/70 bg-background/80 px-4 py-3 dark:bg-background/40">
                <FileSpreadsheet className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
          </div>

          {/* Connector */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-muted/30 text-muted-foreground lg:h-12 lg:w-12">
              <ArrowDown className="h-5 w-5 lg:hidden" />
              <ArrowRight className="hidden h-5 w-5 lg:block" />
            </div>
          </div>

          {/* Step 2 + result */}
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                2
              </span>
              <span className="text-sm font-semibold text-foreground">
                Generate PDF
              </span>
            </div>

            <div className="flex min-h-[220px] flex-1 flex-col rounded-2xl border border-border/70 bg-gradient-to-b from-background to-muted/15 p-6 dark:from-background dark:to-muted/5">
              <p className="text-sm text-muted-foreground">
                We render the first worksheet as plain text in a clean, paginated PDF — ideal for sharing or archiving without sending the original spreadsheet.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <button
                  type="button"
                  disabled={!fileBuffer || converting}
                  onClick={() => void convert()}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-45"
                >
                  {converting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Building PDF…
                    </>
                  ) : (
                    <>
                      Convert to PDF
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
                    Download PDF
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
          Files are processed in your browser. Nothing is uploaded to our servers for this conversion.
        </p>
      </ToolCard>
    </ToolChrome>
  );
}
