export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: BlogSection[] | null;
  relatedSlugs: string[];
};

/** Legacy static posts removed; all blog content comes from the database. */
export const blogPosts: BlogPost[] = [];
