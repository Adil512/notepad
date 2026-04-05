import type { ReactNode } from "react";

export function ToolChrome({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-6xl flex-col gap-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function ToolCard({
  title,
  description,
  children,
  variant = "default",
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
  /** `muted` for secondary panels */
  variant?: "default" | "muted";
}) {
  const surface =
    variant === "muted"
      ? "border-border/60 bg-muted/25 dark:bg-muted/10"
      : "border-border/70 bg-card/95 shadow-sm ring-1 ring-black/[0.03] dark:ring-white/[0.04]";

  return (
    <section
      className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm sm:p-7 ${surface}`}
    >
      {variant === "default" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />
      )}
      {title && (
        <div className="flex items-start gap-3">
          <span
            className="mt-1.5 hidden h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary to-primary/60 sm:block"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {title}
            </h2>
            {description && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
      {!title && description && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {children != null && children !== false && (
        <div
          className={
            title || description ? "mt-5 sm:mt-6" : ""
          }
        >
          {children}
        </div>
      )}
    </section>
  );
}
