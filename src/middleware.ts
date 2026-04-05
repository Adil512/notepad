import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { defaultLocale, isValidLocale } from "@/lib/i18n";
import { localeRequestHeaders } from "@/lib/request-locale-header";

function firstSegment(pathname: string): string | undefined {
  return pathname.split("/").filter(Boolean)[0];
}

/** Locale shown in URL: every code except default English */
function hasExplicitNonEnLocale(pathname: string): boolean {
  const seg = firstSegment(pathname);
  return Boolean(seg && isValidLocale(seg) && seg !== defaultLocale);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/auth") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return updateSession(request);
  }

  // Default locale must not use /en in the address bar
  if (pathname === "/en" || pathname === "/en/") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }
  if (pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    const rest = pathname.slice("/en".length) || "/";
    url.pathname = rest.startsWith("/") ? rest : `/${rest}`;
    return NextResponse.redirect(url, 308);
  }

  if (hasExplicitNonEnLocale(pathname)) {
    return updateSession(request);
  }

  // English: rewrite internally to /en/... so app/[locale] still matches
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = pathname === "/" ? "/en" : `/en${pathname}`;

  const headers = localeRequestHeaders(request);
  return updateSession(request, () =>
    NextResponse.rewrite(rewriteUrl, { request: { headers } })
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
