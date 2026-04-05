/**
 * Stable admin timestamps for SSR + hydration: fixed locale and UTC so Node and the
 * browser always produce the same string (default locale / local TZ caused mismatches).
 */

const ADMIN_LOCALE = "en-US";

const dateTimeOpts: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
};

const dateOpts: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
};

export function formatAdminDateTime(iso: string): string {
  try {
    return `${new Intl.DateTimeFormat(ADMIN_LOCALE, dateTimeOpts).format(new Date(iso))} UTC`;
  } catch {
    return "—";
  }
}

export function formatAdminDate(iso: string): string {
  try {
    return `${new Intl.DateTimeFormat(ADMIN_LOCALE, dateOpts).format(new Date(iso))} UTC`;
  } catch {
    return "—";
  }
}
