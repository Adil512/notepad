"use client";

import { useEffect, useState } from "react";
import { Smartphone, Monitor, Download } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

export function InstallAppTool() {
  const [standalone, setStandalone] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(display-mode: standalone)").matches;
    const ios =
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
      true;
    setStandalone(m || ios);
  }, []);

  return (
    <ToolChrome>
      {standalone && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-900 dark:text-emerald-100">
          You&apos;re running in an installed / standalone window. Notes still
          save locally in your browser.
        </div>
      )}

      <ToolCard
        title="Progressive Web App"
        description="We ship a web app manifest so browsers can offer “Install” or “Add to Home Screen”. Offline behavior depends on your browser cache; your data stays on-device unless you use features that explicitly sync."
      >
        <p className="text-sm text-muted-foreground">
          After install, open Notepad.is from the icon for a focused,
          app-like shell with the same secure, local-first writing experience.
        </p>
      </ToolCard>

      <ToolCard title="Desktop (Chrome, Edge)">
        <div className="flex gap-3 text-sm text-muted-foreground">
          <Monitor className="h-5 w-5 shrink-0 text-primary" />
          <p>
            Look for the install icon in the address bar or the browser menu →
            <span className="font-medium text-foreground">
              {" "}
              Install Notepad.is
            </span>
            .
          </p>
        </div>
      </ToolCard>

      <ToolCard title="iPhone & iPad (Safari)">
        <div className="flex gap-3 text-sm text-muted-foreground">
          <Smartphone className="h-5 w-5 shrink-0 text-primary" />
          <p>
            Tap the Share button, then{" "}
            <span className="font-medium text-foreground">
              Add to Home Screen
            </span>
            .
          </p>
        </div>
      </ToolCard>

      <ToolCard title="Android (Chrome)">
        <div className="flex gap-3 text-sm text-muted-foreground">
          <Download className="h-5 w-5 shrink-0 text-primary" />
          <p>
            Menu (⋮) →{" "}
            <span className="font-medium text-foreground">
              Install app
            </span>{" "}
            or <span className="font-medium text-foreground">Add to Home screen</span>.
          </p>
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
