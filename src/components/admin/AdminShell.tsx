"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Newspaper,
  ExternalLink,
  Home,
  Menu,
  X,
  Shield,
  Wrench,
} from "lucide-react";
import { localizedPath } from "@/lib/i18n";

export function AdminShell({
  locale,
  userEmail,
  children,
}: {
  locale: string;
  userEmail: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const L = (p: string) => localizedPath(locale, p);
  const [open, setOpen] = useState(false);

  const adminHome = L("/admin");
  const blogAdmin = L("/admin/blog");

  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  const pn = norm(pathname || "");
  const ah = norm(adminHome);
  const bb = norm(blogAdmin);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onOverview = pn === ah;
  const onBlog = pn === bb || pn.startsWith(`${bb}/`);

  const linkClass = (active: boolean) =>
    [
      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
      active
        ? "bg-white/10 text-white border-l-2 border-violet-400 -ml-px pl-[11px]"
        : "text-slate-400 hover:bg-white/5 hover:text-slate-100 border-l-2 border-transparent",
    ].join(" ");

  const Nav = (
    <nav className="flex flex-1 flex-col gap-1 p-3">
      <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
        Manage
      </p>
      <Link href={adminHome} className={linkClass(onOverview)}>
        <LayoutDashboard className="h-4 w-4 shrink-0 opacity-80" />
        Overview
      </Link>
      <Link href={blogAdmin} className={linkClass(onBlog)}>
        <Newspaper className="h-4 w-4 shrink-0 opacity-80" />
        Blog posts
      </Link>

      <p className="px-3 pt-6 pb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
        Shortcuts
      </p>
      <Link
        href={L("/blog")}
        className={linkClass(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="h-4 w-4 shrink-0 opacity-80" />
        Public blog
      </Link>
      <Link href={L("/")} className={linkClass(false)}>
        <Home className="h-4 w-4 shrink-0 opacity-80" />
        Notepad home
      </Link>
      <Link href={L("/tools")} className={linkClass(false)}>
        <Wrench className="h-4 w-4 shrink-0 opacity-80" />
        Writing Tools
      </Link>
    </nav>
  );

  return (
    <div className="flex flex-1 min-h-[calc(100dvh-3.5rem)] min-w-0 bg-zinc-100 dark:bg-zinc-950">
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={[
          "fixed left-0 top-14 z-50 flex h-[calc(100dvh-3.5rem)] w-60 flex-col border-r border-slate-800 bg-slate-900 shadow-xl transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3 lg:hidden">
          <Shield className="h-5 w-5 text-violet-400" />
          <span className="font-display text-sm font-semibold text-white">
            Admin
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden items-center gap-2 border-b border-slate-800 px-4 py-4 lg:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
            <Shield className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Console
            </p>
            <p className="truncate text-sm font-medium text-slate-200">
              Notepad.is
            </p>
          </div>
        </div>

        {Nav}

        <div className="mt-auto border-t border-slate-800 p-3">
          <p className="truncate px-3 text-xs text-slate-500" title={userEmail}>
            {userEmail}
          </p>
        </div>
      </aside>

      <div className="flex flex-1 flex-col min-w-0 lg:pl-60">
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-white/80 px-3 py-2 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          >
            <Menu className="h-4 w-4" />
            Menu
          </button>
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Admin
          </span>
        </div>

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
