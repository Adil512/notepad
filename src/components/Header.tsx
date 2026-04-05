"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, User, FileText, Menu, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "./locale-context";
import { localizedPath } from "@/lib/i18n";
import { getNavLabels } from "@/lib/nav-labels";

export function Header({ user }: { user: SupabaseUser | null }) {
  const locale = useLocale();
  const nav = getNavLabels(locale);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const L = (path: string) => localizedPath(locale, path);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  const navLinks = [
    { name: nav.notepad, path: "/" },
    { name: nav.writingTools, path: "/tools" },
    { name: nav.blog, path: "/blog" },
    { name: nav.about, path: "/about" },
    { name: nav.contact, path: "/contact" },
    { name: nav.privacy, path: "/privacy" },
  ];

  const isAdminRoute = pathname?.includes("/admin");

  const norm = (p: string) => p.replace(/\/+$/, "") || "/";

  const adminNav = [
    { name: "Overview", path: "/admin" },
    { name: "Blog", path: "/admin/blog" },
  ];

  return (
    <header
      className={
        isAdminRoute
          ? "sticky top-0 z-[60] w-full border-b border-slate-800 bg-slate-900 text-slate-100 shadow-md"
          : "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/80 bg-background/95"
      }
    >
      <div className="flex h-14 items-center px-4 w-full max-w-[85rem] mx-auto relative">
        <div className="flex flex-1 items-center min-w-0">
          <Link
            href={isAdminRoute ? L("/admin") : L("/")}
            className="flex items-center gap-2 group shrink-0"
          >
            <div
              className={
                isAdminRoute
                  ? "bg-violet-500/20 p-1.5 rounded-lg group-hover:bg-violet-500/30 transition-colors"
                  : "bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors"
              }
            >
              {isAdminRoute ? (
                <Shield className="h-5 w-5 text-violet-300" />
              ) : (
                <FileText className="h-5 w-5 text-primary" />
              )}
            </div>
            <span
              className={`font-display font-medium text-xl tracking-tight hidden sm:block ${isAdminRoute ? "text-slate-100" : ""}`}
            >
              {isAdminRoute ? "Notepad" : nav.notepad}
            </span>
            {isAdminRoute && (
              <span className="hidden rounded-md bg-violet-500/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-200 sm:inline">
                Admin
              </span>
            )}
          </Link>
        </div>

        <nav
          className={
            isAdminRoute
              ? "hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1"
              : "hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1"
          }
        >
          {isAdminRoute
            ? adminNav.map((link) => {
                const href = L(link.path);
                const pn = norm(pathname || "");
                const h = norm(href);
                const active =
                  link.path === "/admin"
                    ? pn === h
                    : pn === h || pn.startsWith(`${h}/`);
                return (
                  <Link
                    key={link.name}
                    href={href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })
            : navLinks.map((link) => {
                const href = L(link.path);
                return (
                  <Link
                    key={link.name}
                    href={href}
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                      pathname === href
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
          {isAdminRoute && (
            <Link
              href={L("/")}
              className="hidden sm:inline-flex text-sm font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              View site
            </Link>
          )}
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={
              isAdminRoute
                ? "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-white/10 h-9 w-9 text-slate-400 hover:text-white"
                : "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 text-muted-foreground"
            }
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>

          {user ? (
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                title="Profile"
                className={
                  isAdminRoute
                    ? "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-white/10 h-9 w-9 text-slate-400 border border-slate-700 hover:text-white"
                    : "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 text-muted-foreground border border-border"
                }
              >
                <User className="h-[18px] w-[18px]" />
                <span className="sr-only">User Profile</span>
              </button>
              <button
                type="button"
                onClick={handleSignout}
                className={
                  isAdminRoute
                    ? "text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/10"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-accent"
                }
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href={L("/login")}
                className={
                  isAdminRoute
                    ? "text-sm font-medium text-slate-400 hover:text-white transition-colors px-3"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3"
                }
              >
                Sign in
              </Link>
              <Link
                href={L("/signup")}
                className={
                  isAdminRoute
                    ? "text-sm font-medium bg-violet-600 text-white hover:bg-violet-500 transition-colors px-4 py-1.5 rounded-md shadow-sm"
                    : "text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-4 py-1.5 rounded-md shadow-sm"
                }
              >
                Sign up
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={
              isAdminRoute
                ? "md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 h-9 w-9 text-slate-300"
                : "md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 text-muted-foreground"
            }
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={
            isAdminRoute
              ? "md:hidden border-t border-slate-800 bg-slate-900 absolute top-full left-0 right-0 p-4 flex flex-col gap-2 shadow-lg z-50"
              : "md:hidden border-t bg-background/95 backdrop-blur absolute top-full left-0 right-0 p-4 flex flex-col gap-4 shadow-lg z-50"
          }
        >
          {isAdminRoute ? (
            <>
              {adminNav.map((link) => {
                const href = L(link.path);
                return (
                  <Link
                    key={link.name}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium rounded-md text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href={L("/")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-md text-violet-300 hover:bg-white/10"
              >
                View site
              </Link>
            </>
          ) : (
            navLinks.map((link) => {
              const href = L(link.path);
              return (
                <Link
                  key={link.name}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    pathname === href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })
          )}
          <div className="h-px w-full bg-border my-2" />
          {user ? (
            <button
              type="button"
              onClick={() => {
                handleSignout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors hover:bg-accent"
            >
              Sign out
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                href={L("/login")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors hover:bg-accent"
              >
                Sign in
              </Link>
              <Link
                href={L("/signup")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md shadow-sm"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
