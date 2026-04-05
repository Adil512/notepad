import {
  blogPosts as staticBlogPosts,
  type BlogSection,
} from "@/lib/blog-data";
import { createPublicSupabaseClient } from "@/utils/supabase/public";

export type TocItem = { id: string; title: string };

export type UnifiedBlogPost = {
  kind: "static" | "db";
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: BlogSection[] | null;
  contentHtml: string | null;
  toc: TocItem[];
  relatedSlugs: string[];
  id?: string;
  publishedAtIso?: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalUrl?: string | null;
};

export type DbBlogPostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content_html: string;
  toc_json: TocItem[] | null;
  read_time: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  meta_title?: string | null;
  meta_description?: string | null;
  canonical_url?: string | null;
};

function formatBlogDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function dbRowToUnified(row: DbBlogPostRow): UnifiedBlogPost {
  const toc = Array.isArray(row.toc_json) ? row.toc_json : [];
  return {
    kind: "db",
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    date: formatBlogDate(row.published_at || row.created_at),
    readTime: row.read_time || "1 min read",
    sections: null,
    contentHtml: row.content_html,
    toc,
    relatedSlugs: [],
    publishedAtIso: row.published_at || row.created_at,
    metaTitle: row.meta_title ?? null,
    metaDescription: row.meta_description ?? null,
    canonicalUrl: row.canonical_url ?? null,
  };
}

function staticToUnified(): UnifiedBlogPost[] {
  return staticBlogPosts.map((p) => ({
    kind: "static",
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    readTime: p.readTime,
    sections: p.sections,
    contentHtml: null,
    toc: [],
    relatedSlugs: p.relatedSlugs,
  }));
}

function parsePublishedAt(post: UnifiedBlogPost): number {
  if (post.kind === "db" && post.publishedAtIso) {
    return new Date(post.publishedAtIso).getTime();
  }
  const parsed = Date.parse(post.date);
  return Number.isFinite(parsed) ? parsed : 0;
}

async function fetchPublishedDbPosts(): Promise<UnifiedBlogPost[]> {
  const supabase = createPublicSupabaseClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return (data as DbBlogPostRow[]).map(dbRowToUnified);
}

/** Published posts: database first; static posts fill in slugs not overridden by DB. */
export async function getMergedBlogPosts(): Promise<UnifiedBlogPost[]> {
  const dbPosts = await fetchPublishedDbPosts();
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const staticOnly = staticToUnified().filter((p) => !dbSlugs.has(p.slug));
  const merged = [...dbPosts, ...staticOnly];
  merged.sort((a, b) => parsePublishedAt(b) - parsePublishedAt(a));
  return merged;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<UnifiedBlogPost | undefined> {
  const supabase = createPublicSupabaseClient();
  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (data) return dbRowToUnified(data as DbBlogPostRow);
  }

  const staticPost = staticBlogPosts.find((p) => p.slug === slug);
  if (!staticPost) return undefined;
  return staticToUnified().find((p) => p.slug === slug);
}

export async function getLatestBlogPosts(
  limit: number
): Promise<UnifiedBlogPost[]> {
  const all = await getMergedBlogPosts();
  return all.slice(0, limit);
}

export function getPopularPostsUnified(
  all: UnifiedBlogPost[],
  excludeSlug: string,
  limit = 3
): UnifiedBlogPost[] {
  return all.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

export function getRelatedPostsUnified(
  post: UnifiedBlogPost,
  all: UnifiedBlogPost[]
): UnifiedBlogPost[] {
  if (post.kind === "static" && post.relatedSlugs.length > 0) {
    const bySlug = new Map(all.map((p) => [p.slug, p]));
    const fromSlugs = post.relatedSlugs
      .map((s) => bySlug.get(s))
      .filter((p): p is UnifiedBlogPost => p != null)
      .filter((p) => p.slug !== post.slug);
    if (fromSlugs.length > 0) return fromSlugs;
  }
  return getPopularPostsUnified(all, post.slug, 3);
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const posts = await getMergedBlogPosts();
  return posts.map((p) => p.slug);
}

/** For sitemap: published DB posts with last modified time. */
export async function getPublishedBlogSlugsForSitemap(): Promise<
  { slug: string; lastModified: Date }[]
> {
  const supabase = createPublicSupabaseClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug, updated_at")
    .eq("published", true);

  if (error || !data) return [];
  return (data as { slug: string; updated_at: string }[]).map((row) => ({
    slug: row.slug,
    lastModified: new Date(row.updated_at || Date.now()),
  }));
}
