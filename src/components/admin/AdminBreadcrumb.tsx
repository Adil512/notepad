import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { localizedPath } from "@/lib/i18n";

export function AdminBreadcrumb({
  locale,
  items,
}: {
  locale: string;
  items: { label: string; href?: string }[];
}) {
  const L = (p: string) => localizedPath(locale, p);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
        <li>
          <Link
            href={L("/admin")}
            className="hover:text-violet-600 dark:hover:text-violet-400"
          >
            Admin
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-violet-600 dark:hover:text-violet-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
