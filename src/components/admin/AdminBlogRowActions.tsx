"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { localizedPath } from "@/lib/i18n";
import {
  deleteBlogPost,
  setBlogPostPublished,
} from "@/app/[locale]/admin/blog/actions";
import type { DbBlogPostRow } from "@/lib/blog-service";

export function AdminBlogRowActions({
  locale,
  post,
}: {
  locale: string;
  post: DbBlogPostRow;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function onTogglePublish() {
    setPending(true);
    await setBlogPostPublished(post.id, !post.published);
    router.refresh();
    setPending(false);
  }

  async function onDelete() {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) {
      return;
    }
    setPending(true);
    const { error } = await deleteBlogPost(post.id);
    setPending(false);
    if (error) {
      window.alert(error);
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-1.5 shrink-0">
      <button
        type="button"
        disabled={pending}
        onClick={onTogglePublish}
        className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
      >
        {post.published ? "Unpublish" : "Publish"}
      </button>
      <Link
        href={localizedPath(locale, `/admin/blog/${post.id}/edit`)}
        className="rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-800 shadow-sm hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/60 dark:text-violet-200 dark:hover:bg-violet-900/50"
      >
        Edit
      </Link>
      <button
        type="button"
        disabled={pending}
        onClick={onDelete}
        className="rounded-lg border border-red-200 bg-white px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50 dark:border-red-900/50 dark:bg-zinc-800 dark:text-red-400 dark:hover:bg-red-950/30"
      >
        Delete
      </button>
    </div>
  );
}
