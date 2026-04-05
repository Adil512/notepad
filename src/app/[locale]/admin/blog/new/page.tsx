import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSessionUser, isAdminEmail } from "@/lib/admin-auth";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { AdminBreadcrumb } from "@/components/admin/AdminBreadcrumb";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "New blog post",
    alternates: { canonical: canonicalUrlForPage(locale, "/admin/blog/new") },
  };
}

export default async function AdminNewBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const user = await getSessionUser();
  if (!user?.email || !isAdminEmail(user.email)) notFound();

  return (
    <div className="space-y-6">
      <AdminBreadcrumb
        locale={locale}
        items={[
          {
            label: "Blog posts",
            href: localizedPath(locale, "/admin/blog"),
          },
          { label: "New post" },
        ]}
      />
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8">
        <h1 className="text-2xl font-bold font-display text-zinc-900 dark:text-zinc-50">
          New post
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Draft saves to the database when you submit. You can publish from the
          editor.
        </p>
        <div className="mt-8">
          <BlogPostForm locale={locale} mode="new" />
        </div>
      </div>
    </div>
  );
}
