import Link from "next/link";

export function ToolPageBreadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs font-medium text-muted-foreground sm:text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-1">
              {i > 0 ? (
                <span className="text-muted-foreground/50" aria-hidden>
                  /
                </span>
              ) : null}
              {last ? (
                <span className="text-foreground">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-primary hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
