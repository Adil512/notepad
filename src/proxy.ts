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
  isWritingToolId,
  isToolVisibleInLocale,
  writingToolsMeta,
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

/** Retired writing tool slugs → permanent redirect target (locale applied in proxy). */
const RETIRED_WRITING_TOOL_REDIRECTS: Record<string, string> = {
  "install-app": "/",
  "keyboard-shortcuts": "/",
};

function maybeRetiredWritingToolRedirect(
  request: NextRequest
): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  const inner =
    getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);
  let slug: string | undefined;
  if (
    parts.length === 3 &&
    parts[0] === "tools" &&
    parts[1] === "writing" &&
    parts[2] in RETIRED_WRITING_TOOL_REDIRECTS
  ) {
    slug = parts[2];
  } else if (
    parts.length === 2 &&
    parts[0] === "tools" &&
    parts[1] in RETIRED_WRITING_TOOL_REDIRECTS
  ) {
    slug = parts[1];
  }
  if (!slug) return null;
  const locale = getLocaleFromPathname(pathname);
  const dest = localizedPath(locale, `${RETIRED_WRITING_TOOL_REDIRECTS[slug]}/`);
  return NextResponse.redirect(new URL(dest, request.url), 301);
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

function cleanPathFromTypoSuffix(pathname: string): string | null {
  const rawParts = pathname.split("/").filter(Boolean);
  if (rawParts.length === 0) return null;

  // 1. Handle single segment /[locale]-Home or /[locale]-home (e.g. /sk-Home, /ay-Home/, /am-Home, /he-Home, /id-Home)
  if (rawParts.length === 1) {
    const single = rawParts[0].toLowerCase();
    if (single.endsWith("-home")) {
      const prefix = single.slice(0, -5); // strip "-home"
      if (isValidLocale(prefix)) {
        return prefix === defaultLocale ? "/" : `/${prefix}/`;
      }
      return "/";
    }
  }

  // 2. Check each segment for duplicate-typo suffixes or trailing hyphen-segments
  let modified = false;
  const cleanedParts: string[] = [];

  for (let i = 0; i < rawParts.length; i++) {
    const part = rawParts[i];
    const partLower = part.toLowerCase();

    // Check if segment is a standalone hyphenated tag like "-Templates", "-Tools", "-Home", "-Writing", etc.
    if (part.startsWith("-") && part.length > 1) {
      modified = true;
      continue; // drop this trailing hyphenated segment
    }

    // Check for [locale]-home as a segment
    if (partLower.endsWith("-home") && i === 0) {
      const prefix = partLower.slice(0, -5);
      if (isValidLocale(prefix)) {
        if (prefix !== defaultLocale) cleanedParts.push(prefix);
        modified = true;
        continue;
      }
    }

    // Check for known category duplicate/typo segments
    if (partLower === "tools-tools" || partLower === "tools-home") {
      cleanedParts.push("tools");
      modified = true;
    } else if (partLower === "writing-writing" || partLower === "tools-writing") {
      cleanedParts.push("writing");
      modified = true;
    } else if (partLower === "editors-editors" || partLower === "tools-editors") {
      cleanedParts.push("editors");
      modified = true;
    } else if (partLower === "format-format" || partLower === "tools-format") {
      cleanedParts.push("format");
      modified = true;
    } else if (partLower === "excel-excel" || partLower === "tools-excel") {
      cleanedParts.push("excel");
      modified = true;
    } else if (partLower === "data-data" || partLower === "tools-data") {
      cleanedParts.push("data");
      modified = true;
    } else if (partLower === "dev-tools-dev-tools" || partLower === "tools-dev-tools") {
      cleanedParts.push("dev-tools");
      modified = true;
    } else if (partLower === "documents-documents" || partLower === "tools-documents") {
      cleanedParts.push("documents");
      modified = true;
    } else if (partLower === "templates-templates") {
      cleanedParts.push("templates");
      modified = true;
    } else if (partLower.endsWith("-templates") && partLower !== "templates") {
      const base = partLower.slice(0, -"-templates".length);
      if (base === "templates" || base === "writing") {
        cleanedParts.push("templates");
        modified = true;
      } else {
        cleanedParts.push(part);
      }
    } else {
      // Check if string is formed by repeating a substring with a dash, e.g. foo-foo or xml-formatter-xml-formatter
      if (partLower.length > 4 && partLower.includes("-")) {
        const len = partLower.length;
        if (len % 2 === 1) {
          const mid = (len - 1) / 2;
          if (partLower[mid] === "-") {
            const left = partLower.slice(0, mid);
            const right = partLower.slice(mid + 1);
            if (left === right) {
              cleanedParts.push(left);
              modified = true;
              continue;
            }
          }
        }
      }
      cleanedParts.push(part);
    }
  }

  if (modified) {
    if (cleanedParts.length === 0) return "/";
    return `/${cleanedParts.join("/")}/`;
  }

  return null;
}

function getToolFolder(toolId: string): string | null {
  if (isWritingProductivityToolId(toolId)) return "writing";
  if (isEditorHubToolId(toolId)) return "editors";
  if (isTextAnalysisHubToolId(toolId)) return "text";
  if (isDevToolsHubToolId(toolId)) return "dev-tools";
  if (isExcelHubToolId(toolId)) return "excel";
  if (isDocumentHubToolId(toolId)) return "documents";
  if (isDataHubToolId(toolId)) return "data";
  if (isFormatHubToolId(toolId)) return "format";
  return null;
}

function maybeLegacyOrEnglishFallbackRedirect(
  request: NextRequest
): NextResponse | null {
  const pathname = request.nextUrl.pathname;

  // 1. Clean quote characters if present in URL path
  if (pathname.includes('"') || pathname.includes('%22') || pathname.includes('\\')) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // 2. Check for Suffix Typos
  const cleanedSuffixPath = cleanPathFromTypoSuffix(pathname);
  if (cleanedSuffixPath) {
    return NextResponse.redirect(new URL(cleanedSuffixPath, request.url), 301);
  }

  // 3. Check for non-English locales accessing English-only tools or hidden tools
  const locale = getLocaleFromPathname(pathname);
  if (locale !== defaultLocale) {
    const inner = getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
    const parts = inner.split("/").filter(Boolean);
    
    // Check if the path targets a tool
    if (parts[0] === "tools" && parts.length >= 2) {
      const toolId = parts[parts.length - 1];
      if (isWritingToolId(toolId)) {
        if (!isToolVisibleInLocale(toolId, locale)) {
          const category = getToolFolder(toolId);
          const dest = category ? `/tools/${category}/${toolId}/` : `/tools/${toolId}/`;
          return NextResponse.redirect(new URL(dest, request.url), 301);
        }
      }
    } else if (parts.length === 1 && isWritingToolId(parts[0])) {
      // Handle direct /[locale]/[toolId] urls (legacy/direct urls)
      const toolId = parts[0];
      if (!isToolVisibleInLocale(toolId, locale)) {
        const category = getToolFolder(toolId);
        const dest = category ? `/tools/${category}/${toolId}/` : `/tools/${toolId}/`;
        return NextResponse.redirect(new URL(dest, request.url), 301);
      }
    }
  }

  return null;
}

export async function proxy(request: NextRequest) {
  const legacyOrFallbackRedirect = maybeLegacyOrEnglishFallbackRedirect(request);
  if (legacyOrFallbackRedirect) {
    return legacyOrFallbackRedirect;
  }

  const { pathname } = request.nextUrl;

  const retiredRedirect = maybeRetiredWritingToolRedirect(request);
  if (retiredRedirect) {
    return retiredRedirect;
  }

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

  // Static utility files
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/ads.txt"
  ) {
    return NextResponse.next();
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

  const isAuthOrAdmin =
    pathname.startsWith("/auth") ||
    pathname.includes("/admin") ||
    pathname.includes("/protected") ||
    pathname.endsWith("/login") ||
    pathname.endsWith("/signup");

  if (hasExplicitNonEnLocale(pathname)) {
    if (isAuthOrAdmin) {
      return updateSession(request);
    }
    return NextResponse.next();
  }

  // English: rewrite internally to /en/... so app/[locale] still matches
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = pathname === "/" ? "/en" : `/en${pathname}`;

  if (isAuthOrAdmin) {
    return updateSession(request, () =>
      NextResponse.rewrite(rewriteUrl)
    );
  }

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
