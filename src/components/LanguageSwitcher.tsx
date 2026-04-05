"use client";

import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Search, X } from "lucide-react";
import {
  LANGUAGE_TO_LOCALE,
  getLocaleFromPathname,
  getPathWithoutLocale,
  localizedPath,
  localeToLanguage,
  supportedLanguageNames,
} from "@/lib/i18n";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  const activeLocale = getLocaleFromPathname(pathname);
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const currentLabel = localeToLanguage[activeLocale] ?? "English";

  const filtered = useMemo(
    () =>
      supportedLanguageNames.filter((l) =>
        l.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const handleSelect = (languageName: string) => {
    const code = LANGUAGE_TO_LOCALE[languageName];
    if (!code) return;
    const next = localizedPath(code, pathWithoutLocale);
    setIsOpen(false);
    router.push(next);
    router.refresh();
  };

  const overlay =
    isOpen && mounted ? (
      <div
        className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-switcher-title"
      >
        <div
          className="flex min-h-[100dvh] w-full items-center justify-center p-4 py-8 sm:p-6 sm:py-10"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-card border border-border shadow-2xl rounded-2xl w-full max-w-4xl flex flex-col max-h-[min(85dvh,calc(100dvh-3rem))] overflow-hidden animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b flex items-start justify-between gap-4 bg-muted/20 shrink-0">
              <div className="min-w-0">
                <h2
                  id="language-switcher-title"
                  className="text-xl font-semibold font-display text-foreground"
                >
                  Select your language
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Same page in another language. English uses notepad.is/ with no
                  prefix; others use notepad.is/ar/, etc.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 border-b bg-background shrink-0">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search over 100+ languages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto p-5 custom-scrollbar bg-card">
              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-muted-foreground">
                    No languages found matching &quot;{search}&quot;.
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {filtered.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => handleSelect(lang)}
                      className={`text-left px-4 py-2.5 text-sm rounded-lg transition-all ${
                        currentLabel === lang
                          ? "bg-primary text-primary-foreground font-medium shadow-sm"
                          : "hover:bg-primary/10 hover:text-primary text-muted-foreground hover:font-medium"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground px-3 py-1.5 rounded-full border border-border"
        title="Change Language"
      >
        <Globe className="h-[16px] w-[16px]" />
        <span className="hidden lg:inline-block">{currentLabel}</span>
      </button>
      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
