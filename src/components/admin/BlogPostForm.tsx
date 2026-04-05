"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BlogRichTextEditor } from "@/components/admin/BlogRichTextEditor";
import { prepareBlogHtml } from "@/lib/blog-prepare.client";
import { slugify } from "@/lib/slugify";
import { saveBlogPost } from "@/app/[locale]/admin/blog/actions";
import { localizedPath } from "@/lib/i18n";

type Props = {
  locale: string;
  mode: "new" | "edit";
  postId?: string;
  initialTitle?: string;
  initialExcerpt?: string;
  initialSlug?: string;
  initialHtml?: string;
  initialPublished?: boolean;
  initialMetaTitle?: string;
  initialMetaDescription?: string;
  initialCanonicalUrl?: string;
};

export function BlogPostForm({
  locale,
  mode,
  postId,
  initialTitle = "",
  initialExcerpt = "",
  initialSlug = "",
  initialHtml = "",
  initialPublished = false,
  initialMetaTitle = "",
  initialMetaDescription = "",
  initialCanonicalUrl = "",
}: Props) {
  const router = useRouter();
  const adminList = localizedPath(locale, "/admin/blog");

  const [title, setTitle] = useState(initialTitle);
  const [excerpt, setExcerpt] = useState(initialExcerpt);
  const [slug, setSlug] = useState(initialSlug);
  const [slugTouched, setSlugTouched] = useState(Boolean(initialSlug));
  const [html, setHtml] = useState(initialHtml || "<p></p>");
  const [published, setPublished] = useState(initialPublished);
  const [metaTitle, setMetaTitle] = useState(initialMetaTitle);
  const [metaDescription, setMetaDescription] = useState(
    initialMetaDescription
  );
  const [canonicalUrl, setCanonicalUrl] = useState(initialCanonicalUrl);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editorKey = useMemo(
    () => `${mode}-${postId ?? "new"}-${initialTitle.slice(0, 20)}`,
    [mode, postId, initialTitle]
  );

  function onTitleBlur() {
    if (!slugTouched && title.trim()) {
      setSlug(slugify(title));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const { contentHtml, toc } = prepareBlogHtml(html);
      const result = await saveBlogPost({
        id: postId,
        title: title.trim(),
        excerpt: excerpt.trim(),
        slug: slug.trim() || slugify(title),
        contentHtml,
        toc,
        published,
        metaTitle: metaTitle.trim(),
        metaDescription: metaDescription.trim(),
        canonicalUrl: canonicalUrl.trim(),
      });
      if (result.error) {
        setError(result.error);
        return;
      }
      router.push(adminList);
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <Link
          href={adminList}
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← All posts
        </Link>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="rounded border-border"
          />
          Published (visible on site)
        </label>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 text-destructive text-sm px-4 py-3">
          {error}
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
          Title
        </label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={onTitleBlur}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground"
          placeholder="Post title"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
          URL slug
        </label>
        <input
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground font-mono text-sm"
          placeholder="my-post-url"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
          Excerpt (card + default SEO description)
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground resize-y"
          placeholder="Short summary shown on the blog index"
        />
      </div>

      <div className="rounded-2xl border border-border bg-muted/20 p-5 space-y-4">
        <h3 className="text-sm font-semibold text-foreground font-display">
          SEO metadata (optional)
        </h3>
        <p className="text-xs text-muted-foreground">
          Leave blank to use the post title and excerpt for{" "}
          <code className="text-[11px]">&lt;title&gt;</code> and meta description.
          Canonical defaults to this post&apos;s public URL.
        </p>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
            Meta title
          </label>
          <input
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground text-sm"
            placeholder="Overrides &lt;title&gt; / Open Graph title"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
            Meta description
          </label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground text-sm resize-y"
            placeholder="Overrides meta description and og:description"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
            Canonical URL
          </label>
          <input
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground font-mono text-sm"
            placeholder="https://notepad.is/blog/your-slug or /blog/your-slug"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-2">
          Body
        </label>
        <BlogRichTextEditor
          key={editorKey}
          initialHtml={initialHtml || "<p></p>"}
          onHtmlChange={setHtml}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {saving ? "Saving…" : mode === "new" ? "Create post" : "Save changes"}
        </button>
        <Link
          href={adminList}
          className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted/50"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
