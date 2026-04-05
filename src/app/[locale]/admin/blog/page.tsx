import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createAdminSupabaseClient } from "@/utils/supabase/admin";
import { getSessionUser, isAdminEmail } from "@/lib/admin-auth";
import { getAdminBlogStats } from "@/lib/admin-blog-stats";
import { AdminBlogPostsManager } from "@/components/admin/AdminBlogPostsManager";
import type { DbBlogPostRow } from "@/lib/blog-service";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog admin",
    alternates: { canonical: canonicalUrlForPage(locale, "/admin/blog") },
  };
}

export default async function AdminBlogListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const user = await getSessionUser();
  if (!user?.email || !isAdminEmail(user.email)) notFound();

  let rows: DbBlogPostRow[] = [];
  let adminListError: string | null = null;
  try {
    const admin = createAdminSupabaseClient();
    const { data, error } = await admin
      .from("blog_posts")
      .select("*")
      .order("updated_at", { ascending: false });
    if (error) adminListError = error.message;
    else if (data) rows = data as DbBlogPostRow[];
  } catch (e) {
    adminListError =
      e instanceof Error
        ? e.message
        : "Could not load posts (check server configuration).";
  }

  const stats = await getAdminBlogStats();

  return (
    <AdminBlogPostsManager
      locale={locale}
      posts={rows}
      stats={stats}
      adminListError={adminListError}
    />
  );
}
