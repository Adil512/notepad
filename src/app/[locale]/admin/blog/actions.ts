"use server";

import { revalidatePath } from "next/cache";
import { createAdminSupabaseClient } from "@/utils/supabase/admin";
import { getSessionUser, isAdminEmail } from "@/lib/admin-auth";
import { slugify } from "@/lib/slugify";
import { estimateReadTimeFromHtml } from "@/lib/blog-html";
import { defaultLocale, locales } from "@/lib/i18n";
import type { TocItem } from "@/lib/blog-service";

async function assertAdmin() {
  const user = await getSessionUser();
  if (!user?.email || !isAdminEmail(user.email)) {
    throw new Error("Unauthorized");
  }
  return user;
}

function revalidateBlogPaths(slug?: string) {
  for (const loc of locales) {
    const prefix = loc === defaultLocale ? "" : `/${loc}`;
    revalidatePath(`${prefix}/blog`);
    revalidatePath(`${prefix}/`);
    if (slug) {
      revalidatePath(`${prefix}/blog/${slug}`);
    }
  }
  revalidatePath("/sitemap.xml");
}

async function ensureUniqueSlug(
  baseSlug: string,
  excludeId?: string
): Promise<string> {
  const admin = createAdminSupabaseClient();
  const original = baseSlug || "post";
  let slug = original;
  let n = 2;
  for (;;) {
    const { data } = await admin
      .from("blog_posts")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();
    if (!data || (excludeId && data.id === excludeId)) return slug;
    slug = `${original}-${n++}`;
  }
}

export type SaveBlogPostInput = {
  id?: string;
  title: string;
  excerpt: string;
  slug: string;
  contentHtml: string;
  toc: TocItem[];
  published: boolean;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
};

export async function saveBlogPost(
  input: SaveBlogPostInput
): Promise<{ error?: string; id?: string }> {
  try {
    await assertAdmin();
  } catch {
    return { error: "Unauthorized. Sign in with an admin email." };
  }

  let admin;
  try {
    admin = createAdminSupabaseClient();
  } catch (e) {
    return {
      error:
        e instanceof Error
          ? e.message
          : "Server misconfigured (SUPABASE_SERVICE_ROLE_KEY).",
    };
  }

  const title = input.title.trim();
  const excerpt = input.excerpt.trim();
  if (!title) return { error: "Title is required." };

  let slug = slugify(input.slug.trim() || title);
  if (!slug) slug = "post";

  try {
    slug = await ensureUniqueSlug(slug, input.id);
  } catch {
    return { error: "Could not verify slug uniqueness." };
  }

  const readTime = estimateReadTimeFromHtml(input.contentHtml);
  const row = {
    slug,
    title,
    excerpt: excerpt || title,
    content_html: input.contentHtml,
    toc_json: input.toc,
    read_time: readTime,
    published: input.published,
    published_at: input.published ? new Date().toISOString() : null,
    meta_title: input.metaTitle?.trim() || null,
    meta_description: input.metaDescription?.trim() || null,
    canonical_url: input.canonicalUrl?.trim() || null,
  };

  if (input.id) {
    const { data, error } = await admin
      .from("blog_posts")
      .update(row)
      .eq("id", input.id)
      .select("id")
      .single();
    if (error) return { error: error.message };
    revalidateBlogPaths(slug);
    return { id: data?.id };
  }

  const { data, error } = await admin
    .from("blog_posts")
    .insert(row)
    .select("id")
    .single();
  if (error) return { error: error.message };
  revalidateBlogPaths(slug);
  return { id: data?.id };
}

export async function deleteBlogPost(
  id: string
): Promise<{ error?: string }> {
  try {
    await assertAdmin();
  } catch {
    return { error: "Unauthorized." };
  }

  let admin;
  try {
    admin = createAdminSupabaseClient();
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "Server misconfigured.",
    };
  }

  const { data: row } = await admin
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();
  const { error } = await admin.from("blog_posts").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidateBlogPaths(row?.slug);
  return {};
}

export async function setBlogPostPublished(
  id: string,
  published: boolean
): Promise<{ error?: string }> {
  try {
    await assertAdmin();
  } catch {
    return { error: "Unauthorized." };
  }

  let admin;
  try {
    admin = createAdminSupabaseClient();
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "Server misconfigured.",
    };
  }

  const { data: row } = await admin
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  const { error } = await admin
    .from("blog_posts")
    .update({
      published,
      published_at: published ? new Date().toISOString() : null,
    })
    .eq("id", id);
  if (error) return { error: error.message };
  revalidateBlogPaths(row?.slug);
  return {};
}
