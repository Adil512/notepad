import type { NextRequest } from "next/server";
import { getLocaleFromPathname } from "@/lib/i18n";

/** Forwarded on the request by middleware so the root layout can set `<html lang>`. */
export const LOCALE_REQUEST_HEADER = "x-notepad-locale";

export function localeRequestHeaders(request: NextRequest): Headers {
  const headers = new Headers(request.headers);
  headers.set(LOCALE_REQUEST_HEADER, getLocaleFromPathname(request.nextUrl.pathname));
  return headers;
}
