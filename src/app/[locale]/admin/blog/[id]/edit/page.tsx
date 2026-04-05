import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createAdminSupabaseClient } from "@/utils/supabase/admin";
import { getSessionUser, isAdminEmail } from "@/lib/admin-auth";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { AdminBreadcrumb } from "@/components/admin/AdminBreadcrumb";
import { localizedPath } from "@/lib/i18n";
import type { DbBlogPostRow } from "@/lib/blog-service";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  return {
    title: "Edit blog post",
    alternates: {
      canonical: canonicalUrlForPage(locale, `/admin/blog/${id}/edit`),
    },
  };
}

export default async function AdminEditBlogPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const user = await getSessionUser();
  if (!user?.email || !isAdminEmail(user.email)) notFound();

  let row: DbBlogPostRow | null = null;
  try {
    const admin = createAdminSupabaseClient();
    const { data, error } = await admin
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .single();
    if (!error && data) row = data as DbBlogPostRow;
  } catch {
    row = null;
  }

  if (!row) {
    return (
      <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/60">
        <p className="text-zinc-600 dark:text-zinc-400">Post not found.</p>
        <Link
          href={localizedPath(locale, "/admin/blog")}
          className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
        >
          ← Back to list
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AdminBreadcrumb
        locale={locale}
        items={[
          {
            label: "Blog posts",
            href: localizedPath(locale, "/admin/blog"),
          },
          { label: "Edit" },
        ]}
      />
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8">
        <h1 className="text-2xl font-bold font-display text-zinc-900 dark:text-zinc-50">
          Edit post
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1">
          {row.title}
        </p>
        <div className="mt-8">
          <BlogPostForm
            locale={locale}
            mode="edit"
            postId={row.id}
            initialTitle={row.title}
            initialExcerpt={row.excerpt}
            initialSlug={row.slug}
            initialHtml={row.content_html}
            initialPublished={row.published}
            initialMetaTitle={row.meta_title ?? ""}
            initialMetaDescription={row.meta_description ?? ""}
            initialCanonicalUrl={row.canonical_url ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
