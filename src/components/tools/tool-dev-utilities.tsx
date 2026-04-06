"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { json } from "@codemirror/lang-json";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import {
  AlertCircle,
  Braces,
  Check,
  Copy,
  Minimize2,
  Sparkles,
  Upload,
} from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";
import { CodeMirrorField } from "@/components/tools/CodeMirrorField";

const SAMPLE_JSON = `{
  "ok": true,
  "items": [1, 2, 3]
}`;

function useLocalStorageText(key: string, initial: string) {
  const [text, setText] = useState(initial);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    try {
      const v = localStorage.getItem(key);
      if (v != null) setText(v);
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, [key]);
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(key, text);
      } catch {
        /* ignore */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [key, text, mounted]);
  return { text, setText, mounted };
}

function CopyBtn({ value }: { value: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      disabled={!value}
      onClick={() => {
        void navigator.clipboard.writeText(value).then(
          () => {
            setOk(true);
            setTimeout(() => setOk(false), 1500);
          },
          () => {}
        );
      }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted/50 disabled:opacity-40"
    >
      {ok ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
      {ok ? "Copied" : "Copy"}
    </button>
  );
}

function minifyHtml(htmlStr: string): string {
  return htmlStr
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim();
}

function beautifyCss(input: string): string {
  return input
    .replace(/\/\*[\s\S]*?\*\//g, (c) => `\n${c.trim()}\n`)
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s*{\s*/g, " {\n  ")
    .replace(/;\s*/g, ";\n  ")
    .replace(/\s*}\s*/g, "\n}\n\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim() + "\n";
}

function escapeXmlAttr(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function escapeXmlTextNode(v: string): string {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function serializeXmlElement(el: Element, depth: number): string {
  const ind = "  ".repeat(depth);
  let attrs = "";
  for (const a of Array.from(el.attributes)) {
    attrs += ` ${a.name}="${escapeXmlAttr(a.value)}"`;
  }
  const childEls = Array.from(el.children);
  if (childEls.length === 0) {
    const t = el.textContent?.trim() ?? "";
    if (!t) return `${ind}<${el.tagName}${attrs}/>\n`;
    return `${ind}<${el.tagName}${attrs}>${escapeXmlTextNode(t)}</${el.tagName}>\n`;
  }
  const body = childEls
    .map((c) => serializeXmlElement(c as Element, depth + 1))
    .join("");
  return `${ind}<${el.tagName}${attrs}>\n${body}${ind}</${el.tagName}>\n`;
}

function formatXmlString(xml: string): string {
  const doc = new DOMParser().parseFromString(xml.trim(), "application/xml");
  const pe = doc.querySelector("parsererror");
  if (pe?.textContent) {
    throw new Error(
      pe.textContent.replace(/\s+/g, " ").replace(/^[^:]+:?\s*/, "").trim()
    );
  }
  const root = doc.documentElement;
  if (!root) throw new Error("No root element");
  const decl = xml.trim().startsWith("<?xml")
    ? xml.trim().match(/^\s*<\?xml[^?]*\?>\s*/)?.[0] ?? ""
    : "";
  const body = serializeXmlElement(root, 0);
  return (decl ? decl.trim() + "\n" : "") + body;
}

function utf8ToBase64(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

function base64ToUtf8(b64: string): string {
  const clean = b64.replace(/\s/g, "");
  const bin = atob(clean);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export function JsonFormatterTool() {
  const key = "notepad-tool:json-formatter";
  const { text, setText, mounted } = useLocalStorageText(key, SAMPLE_JSON);
  const [parseError, setParseError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const exts = useMemo(() => [json()], []);

  const validate = useCallback(() => {
    const t = text.trim();
    if (!t) {
      setParseError(null);
      return;
    }
    try {
      JSON.parse(t);
      setParseError(null);
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [text]);

  useEffect(() => {
    const id = setTimeout(validate, 300);
    return () => clearTimeout(id);
  }, [text, validate]);

  const formatPretty = useCallback(() => {
    try {
      setText(JSON.stringify(JSON.parse(text), null, 2));
      setParseError(null);
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [text, setText]);

  const minify = useCallback(() => {
    try {
      setText(JSON.stringify(JSON.parse(text)));
      setParseError(null);
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [text, setText]);

  const copyAll = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, [text]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="JSON"
        description="Beautify, minify, and validate. Nothing leaves your browser."
      >
        <div className="flex flex-col gap-3 border-b border-border/50 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={formatPretty}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4" />
              Beautify
            </button>
            <button
              type="button"
              onClick={minify}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted/80"
            >
              <Minimize2 className="h-4 w-4" />
              Minify
            </button>
            <button
              type="button"
              onClick={copyAll}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted/80"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
              parseError
                ? "border border-destructive/40 bg-destructive/10 text-destructive"
                : text.trim() === ""
                  ? "border border-border bg-muted/40 text-muted-foreground"
                  : "border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-800 dark:text-emerald-200"
            }`}
          >
            {parseError ? (
              <>
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="font-mono text-xs">{parseError}</span>
              </>
            ) : text.trim() === "" ? (
              <span>Empty</span>
            ) : (
              <>
                <Braces className="h-4 w-4 shrink-0" />
                <span>Valid JSON</span>
              </>
            )}
          </div>
        </div>
        <div className="mt-5">
          <CodeMirrorField
            value={text}
            onChange={setText}
            extensions={exts}
            minHeight="min(72vh, 560px)"
            placeholder='{ "hello": "world" }'
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

const SAMPLE_HTML = `<!DOCTYPE html>
<html>
  <head>
    <!-- meta -->
    <title>Hi</title>
  </head>
  <body>
    <p class="x"> Hello </p>
  </body>
</html>`;

export function HtmlMinifierTool() {
  const { text, setText, mounted } = useLocalStorageText(
    "notepad-tool:html-minifier",
    SAMPLE_HTML
  );
  const [out, setOut] = useState("");
  const exts = useMemo(() => [html()], []);

  const run = useCallback(() => setOut(minifyHtml(text)), [text]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="Source HTML"
        description="Removes HTML comments and collapses whitespace between tags. Best for markup snippets; always verify output for production."
      >
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={run}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Minify
          </button>
          <CopyBtn value={out} />
        </div>
        <CodeMirrorField
          value={text}
          onChange={setText}
          extensions={exts}
          minHeight="min(40vh, 360px)"
        />
      </ToolCard>
      <ToolCard title="Minified output">
        <textarea
          readOnly
          value={out}
          className="min-h-[200px] w-full rounded-xl border border-input bg-muted/15 p-3 font-mono text-sm"
          placeholder="Click Minify…"
        />
      </ToolCard>
    </ToolChrome>
  );
}

const SAMPLE_CSS = `.foo{color:#123;background:url(x) center} .bar{padding:0}`;

export function CssBeautifierTool() {
  const { text, setText, mounted } = useLocalStorageText(
    "notepad-tool:css-beautifier",
    SAMPLE_CSS
  );
  const [out, setOut] = useState("");
  const exts = useMemo(() => [css()], []);

  const run = useCallback(() => {
    setOut(beautifyCss(text));
  }, [text]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="CSS input"
        description="Heuristic formatter for typical stylesheets; complex nested rules may need manual touch-ups."
      >
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={run}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Beautify
          </button>
          <CopyBtn value={out} />
        </div>
        <CodeMirrorField
          value={text}
          onChange={setText}
          extensions={exts}
          minHeight="min(40vh, 360px)"
        />
      </ToolCard>
      <ToolCard title="Formatted CSS">
        <textarea
          readOnly
          value={out}
          className="min-h-[240px] w-full rounded-xl border border-input bg-muted/15 p-3 font-mono text-sm"
          placeholder="Click Beautify…"
        />
      </ToolCard>
    </ToolChrome>
  );
}

export function Base64CodecTool() {
  const { text: plain, setText: setPlain, mounted: m1 } = useLocalStorageText(
    "notepad-tool:b64-plain",
    "Hello, 世界"
  );
  const { text: b64, setText: setB64, mounted: m2 } = useLocalStorageText(
    "notepad-tool:b64-out",
    ""
  );
  const [err, setErr] = useState<string | null>(null);

  const encode = useCallback(() => {
    try {
      setErr(null);
      setB64(utf8ToBase64(plain));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Encode failed");
    }
  }, [plain, setB64]);

  const decode = useCallback(() => {
    try {
      setErr(null);
      setPlain(base64ToUtf8(b64));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Invalid Base64");
    }
  }, [b64, setPlain]);

  const onFile = (f: File | null) => {
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const r = reader.result;
      if (typeof r === "string") {
        const i = r.indexOf(",");
        setB64(i >= 0 ? r.slice(i + 1) : r);
        setErr(null);
      }
    };
    reader.readAsDataURL(f);
  };

  if (!m1 || !m2) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      {err && (
        <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {err}
        </p>
      )}
      <ToolCard
        title="Text → Base64"
        description="UTF-8 safe encoding for Unicode text."
      >
        <textarea
          value={plain}
          onChange={(e) => setPlain(e.target.value)}
          className="min-h-[140px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm"
        />
        <button
          type="button"
          onClick={encode}
          className="mt-3 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Encode
        </button>
      </ToolCard>
      <ToolCard
        title="Base64 → text"
        description="Decodes to UTF-8. Paste raw Base64 (no data: prefix)."
      >
        <textarea
          value={b64}
          onChange={(e) => setB64(e.target.value)}
          className="min-h-[140px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm"
        />
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={decode}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted/80"
          >
            Decode to text
          </button>
          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted/50">
            <Upload className="h-4 w-4" />
            File → Base64
            <input
              type="file"
              className="hidden"
              onChange={(e) => onFile(e.target.files?.[0] ?? null)}
            />
          </label>
          <CopyBtn value={b64} />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function UrlCodecTool() {
  const { text, setText, mounted } = useLocalStorageText(
    "notepad-tool:url-codec",
    "https://example.com?q=hello world&emoji=🙂"
  );
  const [out, setOut] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const encode = useCallback(() => {
    try {
      setErr(null);
      setOut(encodeURIComponent(text));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed");
    }
  }, [text]);

  const decode = useCallback(() => {
    try {
      setErr(null);
      setOut(decodeURIComponent(text.replace(/\+/g, " ")));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Invalid encoding");
    }
  }, [text]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="Input"
        description="Encode full strings with encodeURIComponent, or decode percent-encoded text."
      >
        {err && (
          <p className="mb-3 text-sm text-destructive">{err}</p>
        )}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[160px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={encode}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Encode
          </button>
          <button
            type="button"
            onClick={decode}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted/80"
          >
            Decode
          </button>
        </div>
      </ToolCard>
      <ToolCard title="Result">
        <div className="mb-2">
          <CopyBtn value={out} />
        </div>
        <textarea
          readOnly
          value={out}
          className="min-h-[160px] w-full rounded-xl border border-input bg-muted/15 p-3 font-mono text-sm"
          placeholder="Result…"
        />
      </ToolCard>
    </ToolChrome>
  );
}

export function RegexTesterTool() {
  const { text: pattern, setText: setPattern, mounted: m1 } =
    useLocalStorageText("notepad-tool:regex-pattern", "\\w+");
  const { text: haystack, setText: setHaystack, mounted: m2 } =
    useLocalStorageText(
      "notepad-tool:regex-haystack",
      "Hello regex world 123"
    );
  const [g, setG] = useState(true);
  const [i, setI] = useState(false);
  const [m, setM] = useState(false);
  const [s, setS] = useState(false);
  const [u, setU] = useState(false);

  const result = useMemo(() => {
    const flags = `${g ? "g" : ""}${i ? "i" : ""}${m ? "m" : ""}${s ? "s" : ""}${u ? "u" : ""}`;
    try {
      const re = new RegExp(pattern || "(?:)", flags);
      const matches: { text: string; index: number }[] = [];
      if (g) {
        let exec: RegExpExecArray | null;
        const copy = new RegExp(re.source, flags);
        let guard = 0;
        while ((exec = copy.exec(haystack)) !== null && guard++ < 500) {
          matches.push({ text: exec[0], index: exec.index });
          if (exec[0].length === 0) copy.lastIndex++;
        }
      } else {
        const exec = re.exec(haystack);
        if (exec) matches.push({ text: exec[0], index: exec.index });
      }
      return { ok: true as const, matches };
    } catch (e) {
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Invalid pattern",
      };
    }
  }, [pattern, haystack, g, i, m, s, u]);

  if (!m1 || !m2) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard title="Pattern" description="JavaScript RegExp syntax.">
        <input
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="w-full rounded-xl border border-input bg-background px-3 py-2 font-mono text-sm"
          spellCheck={false}
        />
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={g} onChange={(e) => setG(e.target.checked)} />
            g global
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={i} onChange={(e) => setI(e.target.checked)} />
            i ignore case
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={m} onChange={(e) => setM(e.target.checked)} />
            m multiline
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={s} onChange={(e) => setS(e.target.checked)} />
            s dotAll
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={u} onChange={(e) => setU(e.target.checked)} />
            u unicode
          </label>
        </div>
      </ToolCard>
      <ToolCard title="Test string">
        <textarea
          value={haystack}
          onChange={(e) => setHaystack(e.target.value)}
          className="min-h-[180px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm"
        />
      </ToolCard>
      <ToolCard title="Matches">
        {!result.ok ? (
          <p className="text-sm text-destructive">{result.error}</p>
        ) : result.matches.length === 0 ? (
          <p className="text-sm text-muted-foreground">No matches.</p>
        ) : (
          <ul className="max-h-[320px] space-y-2 overflow-auto font-mono text-sm">
            {result.matches.map((x, idx) => (
              <li
                key={`${x.index}-${idx}`}
                className="rounded-lg border border-border/80 bg-muted/20 px-3 py-2"
              >
                <span className="text-muted-foreground">#{idx + 1} @ {x.index}: </span>
                <span className="text-foreground break-all">{JSON.stringify(x.text)}</span>
              </li>
            ))}
          </ul>
        )}
      </ToolCard>
    </ToolChrome>
  );
}

const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<root><item id="1"><name>One</name></item><item id="2"><name>Two</name></item></root>`;

export function XmlFormatterTool() {
  const { text, setText, mounted } = useLocalStorageText(
    "notepad-tool:xml-formatter",
    SAMPLE_XML
  );
  const [out, setOut] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const run = useCallback(() => {
    try {
      setOut(formatXmlString(text));
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Invalid XML");
    }
  }, [text]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="XML input"
        description="Parses in the browser and re-indents element trees. Declarations are preserved when possible."
      >
        {err && (
          <p className="mb-3 text-sm text-destructive">{err}</p>
        )}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={run}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Format
          </button>
          <CopyBtn value={out} />
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[min(40vh,320px)] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm"
          spellCheck={false}
        />
      </ToolCard>
      <ToolCard title="Formatted XML">
        <textarea
          readOnly
          value={out}
          className="min-h-[min(40vh,320px)] w-full rounded-xl border border-input bg-muted/15 p-3 font-mono text-sm"
          placeholder="Click Format…"
        />
      </ToolCard>
    </ToolChrome>
  );
}
