"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, User, FileText, Menu, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "./locale-context";
import { localizedPath } from "@/lib/i18n";
import { getNavLabels } from "@/lib/nav-labels";

function AuthProfileDropdown({
  loginHref,
  signupHref,
  isAdminRoute,
}: {
  loginHref: string;
  signupHref: string;
  isAdminRoute: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        title="Account"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={
          isAdminRoute
            ? "inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
            : "inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
        }
      >
        <User className="h-[18px] w-[18px]" strokeWidth={1.75} />
        <span className="sr-only">Account menu</span>
      </button>

      {open ? (
        <div
          role="menu"
          className={
            isAdminRoute
              ? "absolute right-0 top-[calc(100%+0.5rem)] z-[70] min-w-[9.5rem] overflow-hidden rounded-xl border border-slate-700 bg-slate-900 py-1.5 shadow-lg"
              : "absolute right-0 top-[calc(100%+0.5rem)] z-[70] min-w-[9.5rem] overflow-hidden rounded-xl border border-border/70 bg-background py-1.5 shadow-lg"
          }
        >
          <Link
            role="menuitem"
            href={loginHref}
            onClick={() => setOpen(false)}
            className={
              isAdminRoute
                ? "block px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                : "block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted/60"
            }
          >
            Sign in
          </Link>
          <Link
            role="menuitem"
            href={signupHref}
            onClick={() => setOpen(false)}
            className={
              isAdminRoute
                ? "block px-4 py-2.5 text-sm font-bold text-violet-300 transition-colors hover:bg-white/5 hover:text-white"
                : "block px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-muted/60"
            }
          >
            Sign up
          </Link>
        </div>
      ) : null}
    </div>
  );
}

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
    if (!supabase) return;
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
            <AuthProfileDropdown
              loginHref={L("/login")}
              signupHref={L("/signup")}
              isAdminRoute={isAdminRoute}
            />
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
          ) : null}
        </div>
      )}
    </header>
  );
}
