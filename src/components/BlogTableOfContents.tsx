import type { TocItem } from "@/lib/blog-service";

export function BlogTableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mt-6 sm:mt-8 mb-12 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8"
    >
      <h2 className="text-sm font-semibold text-foreground mb-4 font-display">
        On this page
      </h2>
      <ol className="space-y-2.5 text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-primary transition-colors inline-flex gap-2"
            >
              <span className="text-primary/70 tabular-nums w-5 shrink-0">
                {i + 1}.
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
