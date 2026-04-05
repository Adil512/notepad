"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const TEMPLATES = [
  {
    id: "meeting",
    name: "Meeting notes",
    body: `# Meeting - ${new Date().toLocaleDateString()}

## Attendees
- 

## Agenda
1. 

## Notes


## Action items
- [ ] 
`,
  },
  {
    id: "journal",
    name: "Daily journal",
    body: `## ${new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}

### Grateful for


### Focus today


### Thoughts


`,
  },
  {
    id: "outline",
    name: "Blog outline",
    body: `# Title (working)

**Hook / intro**


## Section 1


## Section 2


## Conclusion / CTA


`,
  },
  {
    id: "checklist",
    name: "Checklist",
    body: `# Task list

- [ ] 
- [ ] 
- [ ] 

## Done

- [x] 
`,
  },
] as const;

export function TemplatesTool() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (id: string, body: string) => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      window.alert("Copy failed.");
    }
  };

  return (
    <ToolChrome>
      <ToolCard
        title="Templates"
        description="Copy a structure into your clipboard, then paste into any notepad or editor on the site."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {TEMPLATES.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-xl border border-border bg-muted/20 p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-foreground">
                  {t.name}
                </h3>
                <button
                  type="button"
                  onClick={() => copy(t.id, t.body)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold hover:bg-muted"
                >
                  {copied === t.id ? (
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied === t.id ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="mt-3 max-h-40 overflow-auto whitespace-pre-wrap rounded-lg bg-background/80 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
                {t.body.trim().slice(0, 220)}
                {t.body.length > 220 ? "…" : ""}
              </pre>
            </div>
          ))}
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
