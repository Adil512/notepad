"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, FileText, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "./locale-context";
import { localizedPath } from "@/lib/i18n";
import { getNavLabels } from "@/lib/nav-labels";

export function Header() {
  const locale = useLocale();
  const nav = getNavLabels(locale);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const L = (path: string) => localizedPath(locale, path);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: nav.notepad, path: "/" },
    { name: nav.writingTools, path: "/tools" },
    { name: "Writing", path: "/tools/writing" },
    { name: "Excel", path: "/tools/excel" },
    { name: "Document", path: "/tools/documents" },
    { name: nav.blog, path: "/blog" },
  ];

  const norm = (p: string) => p.replace(/\/+$/, "") || "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/80 bg-background/95">
      <div className="flex h-14 items-center px-4 w-full max-w-[85rem] mx-auto relative">
        <div className="flex flex-1 items-center min-w-0">
          <Link
            href={L("/")}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display font-medium text-xl tracking-tight hidden sm:block">
              {nav.notepad}
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navLinks.map((link) => {
            const href = L(link.path);
            const pn = norm(pathname || "");
            const h = norm(href);
            const active = link.path === "/" ? pn === h : pn === h || pn.startsWith(`${h}/`);
            return (
              <Link
                key={link.name}
                href={href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 text-muted-foreground"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 text-muted-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur absolute top-full left-0 right-0 p-4 flex flex-col gap-4 shadow-lg z-50">
          {navLinks.map((link) => {
            const href = L(link.path);
            const pn = norm(pathname || "");
            const h = norm(href);
            const active = link.path === "/" ? pn === h : pn === h || pn.startsWith(`${h}/`);
            return (
              <Link
                key={link.name}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
