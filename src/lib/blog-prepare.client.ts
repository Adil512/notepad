"use client";

import { slugify } from "@/lib/slugify";

export type TocItem = { id: string; title: string };

/** Assign stable ids to h2/h3 for TOC and in-page anchors (browser only). */
export function prepareBlogHtml(html: string): {
  contentHtml: string;
  toc: TocItem[];
} {
  const doc = new DOMParser().parseFromString(
    html || "<p></p>",
    "text/html"
  );
  const toc: TocItem[] = [];
  const headings = doc.querySelectorAll("h2, h3, h4");
  const used = new Set<string>();

  headings.forEach((el, i) => {
    let base = slugify(el.textContent || `section-${i}`);
    if (!base) base = `section-${i}`;
    let id = base;
    let n = 2;
    while (used.has(id)) {
      id = `${base}-${n++}`;
    }
    used.add(id);
    el.id = id;
    toc.push({
      id,
      title: (el.textContent || "").trim() || `Section ${i + 1}`,
    });
  });

  return { contentHtml: doc.body.innerHTML, toc };
}
