import Link from "next/link";
import type { Metadata } from "next";
import {
  PenLine,
  Home,
  ExternalLink,
  ArrowRight,
  Newspaper,
  FileEdit,
} from "lucide-react";
import { localizedPath } from "@/lib/i18n";
import { getSessionUser } from "@/lib/admin-auth";
import {
  getAdminBlogStats,
  getAdminRecentPosts,
} from "@/lib/admin-blog-stats";
import { canonicalUrlForPage } from "@/lib/site";
import { formatAdminDate } from "@/lib/admin-date-format";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Admin dashboard",
    alternates: { canonical: canonicalUrlForPage(locale, "/admin") },
  };
}

export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const user = await getSessionUser();
  const blog = localizedPath(locale, "/admin/blog");
  const [stats, recent] = await Promise.all([
    getAdminBlogStats(),
    getAdminRecentPosts(6),
  ]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl font-display">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Signed in as{" "}
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            {user?.email}
          </span>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Total posts
          </p>
          <p className="mt-2 text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
            {stats.total}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Published
          </p>
          <p className="mt-2 text-3xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
            {stats.published}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Drafts
          </p>
          <p className="mt-2 text-3xl font-bold tabular-nums text-amber-600 dark:text-amber-400">
            {stats.drafts}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Link
          href={blog}
          className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-violet-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
            <Newspaper className="h-6 w-6" />
          </div>
          <span className="mt-4 font-display text-lg font-semibold text-zinc-900 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-400">
            Blog posts
          </span>
          <span className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Write, publish, SEO metadata, and manage all articles.
          </span>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-400">
            Open manager
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>

        <Link
          href={localizedPath(locale, "/admin/blog/new")}
          className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-violet-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            <FileEdit className="h-6 w-6" />
          </div>
          <span className="mt-4 font-display text-lg font-semibold text-zinc-900 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-400">
            New post
          </span>
          <span className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Start a draft with the rich editor and publish when ready.
          </span>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-400">
            Create
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      {recent.length > 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
            <h2 className="font-display text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Recently updated
            </h2>
            <Link
              href={blog}
              className="text-xs font-semibold text-violet-600 hover:underline dark:text-violet-400"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {recent.map((p) => (
              <li key={p.id}>
                <Link
                  href={localizedPath(locale, `/admin/blog/${p.id}/edit`)}
                  className="flex items-center gap-4 px-5 py-3 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                >
                  <PenLine className="h-4 w-4 shrink-0 text-zinc-400" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-zinc-900 dark:text-zinc-100">
                      {p.title}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      /{p.slug} · {formatAdminDate(p.updated_at)}
                    </p>
                  </div>
                  {p.published ? (
                    <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                      Live
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                      Draft
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <Link
          href={localizedPath(locale, "/blog")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <ExternalLink className="h-4 w-4" />
          Public blog
        </Link>
        <Link
          href={localizedPath(locale, "/")}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <Home className="h-4 w-4" />
          Notepad home
        </Link>
      </div>
    </div>
  );
}
