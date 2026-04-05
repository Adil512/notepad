import { createAdminSupabaseClient } from "@/utils/supabase/admin";
import type { DbBlogPostRow } from "@/lib/blog-service";

export type AdminBlogStats = {
  total: number;
  published: number;
  drafts: number;
};

export async function getAdminBlogStats(): Promise<AdminBlogStats> {
  try {
    const admin = createAdminSupabaseClient();
    const [{ count: total }, { count: published }] = await Promise.all([
      admin.from("blog_posts").select("*", { count: "exact", head: true }),
      admin
        .from("blog_posts")
        .select("*", { count: "exact", head: true })
        .eq("published", true),
    ]);
    const t = total ?? 0;
    const p = published ?? 0;
    return { total: t, published: p, drafts: Math.max(0, t - p) };
  } catch {
    return { total: 0, published: 0, drafts: 0 };
  }
}

/** Recent posts for admin overview (lightweight). */
export async function getAdminRecentPosts(
  limit: number
): Promise<Pick<DbBlogPostRow, "id" | "title" | "slug" | "published" | "updated_at">[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data, error } = await admin
      .from("blog_posts")
      .select("id, title, slug, published, updated_at")
      .order("updated_at", { ascending: false })
      .limit(limit);
    if (error || !data) return [];
    return data as Pick<
      DbBlogPostRow,
      "id" | "title" | "slug" | "published" | "updated_at"
    >[];
  } catch {
    return [];
  }
}
