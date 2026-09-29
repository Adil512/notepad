import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Code2,
  FolderSync,
  Layers,
  Search,
  Clock,
  Keyboard,
  Command,
  ShieldCheck,
  FileCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { canonicalUrlForPage } from "@/lib/site";
import { localizedPath } from "@/lib/i18n";

const SMART_NOTEPAD_APP_URL =
  "https://script.google.com/macros/s/AKfycbyzKz0gNuMubU-uC0INhS0bTG2DKBbaFN29BhPnyUakqkEirDk17owLHLquenguWWYpPQ/exec";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/smart-notepad");
  return {
    title: "Smart Notepad – Free Online Text and Code Editor for Google Drive | Notepad.is",
    description:
      "Smart Notepad is a free online text and code editor that lets you create, open, edit, organize, and manage text and code files directly in your Google Drive.",
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title:
        "Smart Notepad – Free Online Text and Code Editor for Google Drive",
      description:
        "Create, open, edit, organize, and manage text and code files directly in your Google Drive without installing a desktop editor.",
    },
  };
}

const SUPPORTED_FILES = [
  { name: "Plain Text", ext: ".txt" },
  { name: "HTML", ext: ".html, .htm" },
  { name: "CSS", ext: ".css" },
  { name: "JavaScript", ext: ".js, .jsx" },
  { name: "TypeScript", ext: ".ts, .tsx" },
  { name: "JSON", ext: ".json" },
  { name: "Markdown", ext: ".md, .markdown" },
  { name: "Python", ext: ".py" },
  { name: "PHP", ext: ".php" },
  { name: "SQL", ext: ".sql" },
  { name: "XML", ext: ".xml" },
  { name: "YAML", ext: ".yaml, .yml" },
  { name: "CSV", ext: ".csv" },
];

const FEATURES = [
  {
    icon: Code2,
    title: "Text and Code Editing",
    desc: "Edit plain text and source code in a browser-based editor with syntax highlighting, line numbers, indentation, bracket matching, code folding, find and replace, word wrapping, and other useful editing features.",
  },
  {
    icon: FolderSync,
    title: "Google Drive File Management",
    desc: "Manage your files and folders directly from Smart Notepad. You can create, open, rename, copy, move, download, upload, and delete files and folders.",
  },
  {
    icon: Layers,
    title: "Multiple Files and Tabs",
    desc: "Open multiple files at the same time and switch between them using editor tabs. Unsaved changes are clearly marked so you can review your work before closing a file.",
  },
  {
    icon: Search,
    title: "File Search",
    desc: "Search files in the current Google Drive folder to quickly find the document or code file you need.",
  },
  {
    icon: Clock,
    title: "Recent Files and Favorites",
    desc: "Keep frequently used files easy to access with recent files and favorites.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    desc: "Use keyboard shortcuts for common editing and workspace actions, including saving, searching, switching between tabs, and closing tabs.",
  },
  {
    icon: Command,
    title: "Command Palette",
    desc: "Use the command palette to quickly access available Smart Notepad commands without searching through menus.",
  },
];

const HOW_IT_WORKS_STEPS = [
  "Open Smart Notepad in your browser.",
  "Authorize Google Drive access using your Google Account.",
  "Browse your Drive files and folders from the Smart Notepad workspace.",
  "Open a supported file to edit its contents.",
  "Make your changes using the editor.",
  "Save the file to update it in Google Drive.",
  "Manage your files and folders directly from the workspace.",
];

export default async function SmartNotepadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const privacyHref = localizedPath(locale, "/privacy");
  const termsHref = localizedPath(locale, "/terms");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-primary/[0.04] dark:from-primary/[0.12] dark:to-primary/[0.05]"
          aria-hidden
        />
        <div className="container relative max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Free Online Text and Code Editor for Google Drive
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Smart Notepad
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            Smart Notepad is a free online text and code editor that lets you
            create, open, edit, organize, and manage text and code files directly
            in your Google Drive.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            With Smart Notepad, you can work with your Drive files from one
            browser-based workspace without installing a desktop editor. Create
            new files, edit existing files, organize folders, and save your changes
            directly to Google Drive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SMART_NOTEPAD_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Open Smart Notepad
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto px-4 py-12 sm:py-16 space-y-16">
        {/* Edit Your Google Drive Files */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Edit Your Google Drive Files
          </h2>
          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Smart Notepad connects to your Google Drive so you can work with
              the files available in your own Drive account.
            </p>
            <p>
              You can browse your Drive folders, open supported files, edit their
              contents, and save changes back to Google Drive.
            </p>
            <p>
              Smart Notepad uses your Google authorization to access your Drive
              files. Each user connects their own Google Account, and Smart
              Notepad operates on the Drive data that account is authorized to
              access.
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Main Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/20 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Supported File Types */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Supported File Types
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Smart Notepad supports common text and code file formats, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SUPPORTED_FILES.map((file) => (
              <div
                key={file.name}
                className="flex flex-col justify-center rounded-xl border border-border bg-card/60 p-3.5 text-center shadow-sm"
              >
                <span className="font-semibold text-foreground text-sm">
                  {file.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground mt-0.5">
                  {file.ext}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pt-1">
            Additional text-based files can also be opened and edited when their
            contents can be processed as text.
          </p>
        </section>

        {/* How Smart Notepad Works */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            How Smart Notepad Works
          </h2>
          <div className="space-y-3">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <p className="text-base text-foreground pt-0.5 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-base leading-relaxed pt-2">
            Smart Notepad does not require a separate account. Google
            authorization is used to connect the app with the user&apos;s Google
            Drive.
          </p>
        </section>

        {/* Google Drive Permissions */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Google Drive Permissions
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>
              Smart Notepad requests Google Drive access because its core
              functionality depends on working with files stored in Google Drive.
            </p>
            <p>
              The requested Drive permission allows Smart Notepad to see, create,
              edit, organize, copy, move, and delete files that the authorized
              user can access through Google Drive.
            </p>
            <p>
              Smart Notepad does not use Google Drive data for advertising, sell
              Google user data, or use Google user data to train artificial
              intelligence or machine-learning models.
            </p>
            <p>
              For details about how Google Drive data and other information are
              handled, please read our{" "}
              <Link
                href={privacyHref}
                className="text-primary hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Privacy, Terms, and Free to Use Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Privacy Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-foreground font-semibold text-lg font-display">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Privacy
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smart Notepad is designed to use Google Drive data only to provide
              its file editing and file management functionality.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not use Google Workspace user data for advertising. We also
              do not sell Google user data or use it for artificial intelligence
              or machine-learning model training.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You can learn more about our data practices in our Privacy Policy.
            </p>
            <div className="pt-2">
              <span className="text-sm font-medium text-foreground">
                Privacy Policy:{" "}
              </span>
              <Link
                href={privacyHref}
                className="text-sm text-primary hover:underline font-medium break-all"
              >
                https://notepad.is/privacy/
              </Link>
            </div>
          </div>

          {/* Terms of Service Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-semibold text-lg font-display">
                <FileCheck className="w-5 h-5 text-primary" />
                Terms of Service
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By using Smart Notepad, you agree to the applicable terms
                governing use of the service.
              </p>
              <div className="pt-2">
                <span className="text-sm font-medium text-foreground">
                  Terms of Service:{" "}
                </span>
                <Link
                  href={termsHref}
                  className="text-sm text-primary hover:underline font-medium break-all"
                >
                  https://notepad.is/terms/
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center gap-2 text-foreground font-semibold text-base font-display mb-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Free to Use
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Smart Notepad is free to use. There is no subscription required
                for its core text editing and Google Drive file management
                features.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-card to-primary/[0.04] p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Open Smart Notepad
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ready to edit your Google Drive files?
          </p>
          <div>
            <a
              href={SMART_NOTEPAD_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Open Smart Notepad
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Smart Notepad runs directly in your web browser and works with your
            Google Account and Google Drive.
          </p>
        </section>
      </div>
    </div>
  );
}
