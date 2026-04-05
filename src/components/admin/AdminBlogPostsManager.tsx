"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Plus, Search, FileText } from "lucide-react";
import { localizedPath } from "@/lib/i18n";
import { formatAdminDateTime } from "@/lib/admin-date-format";
import { AdminBlogRowActions } from "@/components/admin/AdminBlogRowActions";
import type { DbBlogPostRow } from "@/lib/blog-service";

type Filter = "all" | "published" | "draft";

export function AdminBlogPostsManager({
  locale,
  posts,
  stats,
  adminListError = null,
}: {
  locale: string;
  posts: DbBlogPostRow[];
  stats: { total: number; published: number; drafts: number };
  /** Set when admin DB list fails (e.g. missing SUPABASE_SERVICE_ROLE_KEY on Vercel). */
  adminListError?: string | null;
}) {
  const L = (p: string) => localizedPath(locale, p);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((row) => {
      if (filter === "published" && !row.published) return false;
      if (filter === "draft" && row.published) return false;
      if (!q) return true;
      return (
        row.title.toLowerCase().includes(q) ||
        row.slug.toLowerCase().includes(q)
      );
    });
  }, [posts, query, filter]);

  const newPost = L("/admin/blog/new");

  return (
    <div className="space-y-8">
      {adminListError && (
        <div
          className="rounded-2xl border border-amber-500/40 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-100"
          role="alert"
        >
          <p className="font-semibold">Admin can’t load posts from the database</p>
          <p className="mt-1 text-amber-900/90 dark:text-amber-100/90">
            The public blog uses the <strong>anon</strong> key (published posts
            only). This list needs the <strong>service role</strong> key to read
            all rows (including drafts).
          </p>
          <p className="mt-2 font-mono text-xs opacity-90">{adminListError}</p>
          <p className="mt-3 text-xs">
            On Vercel: Project → Settings → Environment Variables → add{" "}
            <code className="rounded bg-amber-100/80 px-1 py-0.5 dark:bg-amber-900/60">
              SUPABASE_SERVICE_ROLE_KEY
            </code>{" "}
            (from Supabase → Project Settings → API → service_role secret), then
            redeploy. Never expose this key in the browser or prefix it with{" "}
            <code className="rounded bg-amber-100/80 px-1 py-0.5 dark:bg-amber-900/60">
              NEXT_PUBLIC_
            </code>
            .
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl font-display">
            Blog posts
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Create, edit, publish, and organize articles for the public blog.
          </p>
        </div>
        <Link
          href={newPost}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          <Plus className="h-4 w-4" />
          New post
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-2xl border p-4 text-left transition ${
            filter === "all"
              ? "border-violet-500/50 bg-violet-50 ring-1 ring-violet-500/20 dark:bg-violet-950/40 dark:ring-violet-400/20"
              : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            All posts
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
            {stats.total}
          </p>
        </button>
        <button
          type="button"
          onClick={() => setFilter("published")}
          className={`rounded-2xl border p-4 text-left transition ${
            filter === "published"
              ? "border-emerald-500/50 bg-emerald-50 ring-1 ring-emerald-500/20 dark:bg-emerald-950/30 dark:ring-emerald-400/20"
              : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Published
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-emerald-700 dark:text-emerald-400">
            {stats.published}
          </p>
        </button>
        <button
          type="button"
          onClick={() => setFilter("draft")}
          className={`rounded-2xl border p-4 text-left transition ${
            filter === "draft"
              ? "border-amber-500/50 bg-amber-50 ring-1 ring-amber-500/20 dark:bg-amber-950/30 dark:ring-amber-400/20"
              : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Drafts
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-amber-700 dark:text-amber-400">
            {stats.drafts}
          </p>
        </button>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or slug…"
          className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          aria-label="Search posts"
        />
      </div>

      {posts.length === 0 && adminListError ? (
        <p className="rounded-xl border border-zinc-200 bg-white py-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
          After fixing the configuration above, refresh this page. Saving or
          creating posts also requires the service role key.
        </p>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/40">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
            <FileText className="h-7 w-7" />
          </div>
          <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
            No posts yet
          </p>
          <p className="mt-1 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
            Create your first article to show it on the public blog and in your
            sitemap.
          </p>
          <Link
            href={newPost}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            <Plus className="h-4 w-4" />
            New post
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <p className="rounded-xl border border-zinc-200 bg-white py-10 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
          No posts match your search or filter.
        </p>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-800/40">
                  <th className="px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300">
                    Title
                  </th>
                  <th className="hidden px-4 py-3 font-semibold text-zinc-700 md:table-cell dark:text-zinc-300">
                    Slug
                  </th>
                  <th className="px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300">
                    Status
                  </th>
                  <th className="hidden px-4 py-3 font-semibold text-zinc-700 lg:table-cell dark:text-zinc-300">
                    Updated
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-700 dark:text-zinc-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {filtered.map((row) => (
                  <tr
                    key={row.id}
                    className="transition hover:bg-zinc-50/80 dark:hover:bg-zinc-800/30"
                  >
                    <td className="px-4 py-3 align-top">
                      <Link
                        href={L(`/admin/blog/${row.id}/edit`)}
                        className="font-medium text-zinc-900 hover:text-violet-600 dark:text-zinc-100 dark:hover:text-violet-400"
                      >
                        <span className="line-clamp-2">{row.title}</span>
                      </Link>
                    </td>
                    <td className="hidden max-w-[200px] px-4 py-3 align-top md:table-cell">
                      <code className="break-all text-xs text-zinc-500 dark:text-zinc-400">
                        /{row.slug}
                      </code>
                    </td>
                    <td className="px-4 py-3 align-top">
                      {row.published ? (
                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="hidden whitespace-nowrap px-4 py-3 align-top text-zinc-500 lg:table-cell dark:text-zinc-400">
                      {formatAdminDateTime(row.updated_at)}
                    </td>
                    <td className="px-4 py-3 align-top text-right">
                      <AdminBlogRowActions locale={locale} post={row} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-zinc-200 bg-zinc-50/50 px-4 py-2 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800/20 dark:text-zinc-400">
            Showing {filtered.length} of {posts.length} post
            {posts.length === 1 ? "" : "s"}
          </div>
        </div>
      )}
    </div>
  );
}
