/**
 * Split HTML so the table of contents can sit after the first <p>...</p> block.
 * If there is no paragraph, returns { lead: "", rest: full } (TOC appears before body).
 */
export function splitHtmlAfterFirstParagraph(html: string): {
  lead: string;
  rest: string;
} {
  const trimmed = (html || "").trim();
  if (!trimmed) return { lead: "", rest: "" };

  const re = /<p\b[^>]*>[\s\S]*?<\/p>/i;
  const m = trimmed.match(re);
  if (!m || m.index === undefined) {
    return { lead: "", rest: trimmed };
  }
  const end = m.index + m[0].length;
  return {
    lead: trimmed.slice(0, end),
    rest: trimmed.slice(end).trimStart(),
  };
}
