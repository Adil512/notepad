import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import {
  defaultLocale,
  getLocaleFromPathname,
  getPathWithoutLocale,
  isValidLocale,
  localizedPath,
} from "@/lib/i18n";
import {
  isDataHubToolId,
  isDevToolsHubToolId,
  isDocumentHubToolId,
  isEditorHubToolId,
  isExcelHubToolId,
  isFormatHubToolId,
  isTextAnalysisHubToolId,
  isWritingProductivityToolId,
} from "@/lib/writing-tools-registry";
import { localeRequestHeaders } from "@/lib/request-locale-header";

function firstSegment(pathname: string): string | undefined {
  return pathname.split("/").filter(Boolean)[0];
}

/** Locale shown in URL: every code except default English */
function hasExplicitNonEnLocale(pathname: string): boolean {
  const seg = firstSegment(pathname);
  return Boolean(seg && isValidLocale(seg) && seg !== defaultLocale);
}

function maybeWritingProductivityRedirect(
  request: NextRequest
): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isWritingProductivityToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/writing/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeEditorHubRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isEditorHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/editors/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeTextAnalysisHubRedirect(
  request: NextRequest
): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isTextAnalysisHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/text/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeDevToolsHubRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isDevToolsHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/dev-tools/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeExcelHubRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isExcelHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/excel/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeDocumentHubRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isDocumentHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/documents/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeDataHubRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isDataHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/data/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

function maybeFormatHubRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  if (parts.length !== 2 || parts[0] !== "tools") {
    return null;
  }
  const seg = parts[1];
  if (!isFormatHubToolId(seg)) {
    return null;
  }
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `/tools/format/${seg}/`);
  return NextResponse.redirect(new URL(dest, request.url), 308);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const writingRedirect = maybeWritingProductivityRedirect(request);
  if (writingRedirect) {
    return writingRedirect;
  }

  const editorRedirect = maybeEditorHubRedirect(request);
  if (editorRedirect) {
    return editorRedirect;
  }

  const textAnalysisRedirect = maybeTextAnalysisHubRedirect(request);
  if (textAnalysisRedirect) {
    return textAnalysisRedirect;
  }

  const devToolsRedirect = maybeDevToolsHubRedirect(request);
  if (devToolsRedirect) {
    return devToolsRedirect;
  }

  const excelRedirect = maybeExcelHubRedirect(request);
  if (excelRedirect) {
    return excelRedirect;
  }

  const documentRedirect = maybeDocumentHubRedirect(request);
  if (documentRedirect) {
    return documentRedirect;
  }

  const dataRedirect = maybeDataHubRedirect(request);
  if (dataRedirect) {
    return dataRedirect;
  }

  const formatRedirect = maybeFormatHubRedirect(request);
  if (formatRedirect) {
    return formatRedirect;
  }

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
