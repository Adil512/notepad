import {
  defaultLocale,
  getLocaleFromPathname,
  getPathWithoutLocale,
  isValidLocale,
  localizedPath,
} from "./src/lib/i18n";
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
} from "./src/lib/writing-tools-registry";

type Env = {
  ASSETS: {
    fetch: (input: Request | URL | string, init?: RequestInit) => Promise<Response>;
  };
};

const ADS_TXT_DESTINATION =
  "https://adstxt.journeymv.com/sites/e06862ab-368c-421d-8d71-0bbd2614623b/ads.txt";

const RETIRED_WRITING_TOOL_REDIRECTS: Record<string, string> = {
  "install-app": "/",
  "keyboard-shortcuts": "/",
};

function firstSegment(pathname: string): string | undefined {
  return pathname.split("/").filter(Boolean)[0];
}

function hasExplicitNonEnLocale(pathname: string): boolean {
  const seg = firstSegment(pathname);
  return Boolean(seg && isValidLocale(seg) && seg !== defaultLocale);
}

function redirect(url: URL | string, status = 308): Response {
  return Response.redirect(typeof url === "string" ? url : url.toString(), status);
}

function redirectToPath(
  url: URL,
  destPath: string,
  status = 308,
  preserveSearch = false
): Response {
  const cleaned = destPath.replace(/\/{2,}/g, "/");
  const normalized = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  const target = new URL(preserveSearch ? url.toString() : url.origin);
  target.pathname = normalized || "/";
  return redirect(target, status);
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

function cleanPathFromTypoSuffix(pathname: string): string | null {
  const rawParts = pathname.split("/").filter(Boolean);
  if (rawParts.length === 0) return null;

  if (rawParts.length === 1) {
    const single = rawParts[0].toLowerCase();
    if (single.endsWith("-home")) {
      const prefix = single.slice(0, -5);
      if (isValidLocale(prefix)) {
        return prefix === defaultLocale ? "/" : `/${prefix}/`;
      }
      return "/";
    }
  }

  let modified = false;
  const cleanedParts: string[] = [];

  for (let i = 0; i < rawParts.length; i++) {
    const part = rawParts[i];
    const partLower = part.toLowerCase();

    if (part.startsWith("-") && part.length > 1) {
      modified = true;
      continue;
    }

    if (partLower.endsWith("-home") && i === 0) {
      const prefix = partLower.slice(0, -5);
      if (isValidLocale(prefix)) {
        if (prefix !== defaultLocale) cleanedParts.push(prefix);
        modified = true;
        continue;
      }
    }

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

function maybeCheckRedirects(url: URL): Response | null {
  const pathname = url.pathname;

  if (pathname === "/ads.txt" || pathname === "/ads.txt/") {
    return redirect(ADS_TXT_DESTINATION, 301);
  }

  if (pathname.includes('"') || pathname.includes("%22") || pathname.includes("\\")) {
    return redirectToPath(url, "/", 301);
  }

  const cleanedSuffix = cleanPathFromTypoSuffix(pathname);
  if (cleanedSuffix) {
    return redirectToPath(url, cleanedSuffix, 301);
  }

  const locale = getLocaleFromPathname(pathname);
  const inner = getPathWithoutLocale(pathname).replace(/\/+$/, "") || "/";
  const parts = inner.split("/").filter(Boolean);

  if (locale !== defaultLocale) {
    if (parts.length === 2 && parts[0] === "blog") {
      return redirectToPath(url, `/blog/${parts[1]}/`, 301);
    } else if (parts[0] === "tools" && parts.length >= 2) {
      const toolId = parts[parts.length - 1];
      if (isWritingToolId(toolId) && !isToolVisibleInLocale(toolId, locale)) {
        const category = getToolFolder(toolId);
        const dest = category ? `/tools/${category}/${toolId}/` : `/tools/${toolId}/`;
        return redirectToPath(url, dest, 301);
      }
    } else if (parts.length === 1 && isWritingToolId(parts[0])) {
      const toolId = parts[0];
      if (!isToolVisibleInLocale(toolId, locale)) {
        const category = getToolFolder(toolId);
        const dest = category ? `/tools/${category}/${toolId}/` : `/tools/${toolId}/`;
        return redirectToPath(url, dest, 301);
      }
    }
  }

  // Retired writing tools
  let retiredSlug: string | undefined;
  if (
    parts.length === 3 &&
    parts[0] === "tools" &&
    parts[1] === "writing" &&
    parts[2] in RETIRED_WRITING_TOOL_REDIRECTS
  ) {
    retiredSlug = parts[2];
  } else if (
    parts.length === 2 &&
    parts[0] === "tools" &&
    parts[1] in RETIRED_WRITING_TOOL_REDIRECTS
  ) {
    retiredSlug = parts[1];
  }
  if (retiredSlug) {
    const rawDest = localizedPath(locale, RETIRED_WRITING_TOOL_REDIRECTS[retiredSlug]);
    const dest = rawDest === "/" ? "/" : `${rawDest.replace(/\/+$/, "")}/`;
    return redirectToPath(url, dest, 301);
  }

  // Legacy flat /tools/:id -> category hub redirects
  if (parts.length === 2 && parts[0] === "tools") {
    const seg = parts[1];
    const folder = getToolFolder(seg);
    if (folder) {
      const dest = localizedPath(locale, `/tools/${folder}/${seg}/`);
      return redirectToPath(url, dest, 308);
    }
  }

  // Retired auth/admin paths
  if (
    pathname.startsWith("/auth") ||
    pathname.includes("/admin") ||
    pathname.endsWith("/login") ||
    pathname.endsWith("/login/") ||
    pathname.endsWith("/signup") ||
    pathname.endsWith("/signup/") ||
    pathname.includes("/reset-password")
  ) {
    return redirectToPath(url, "/", 308);
  }

  // Default locale must not appear as /en in the browser URL bar
  if (pathname === "/en" || pathname === "/en/") {
    return redirectToPath(url, "/", 308, true);
  }
  if (pathname.startsWith("/en/")) {
    let rest = pathname.slice("/en".length) || "/";
    if (rest !== "/" && !rest.endsWith("/") && !STATIC_EXT_RE.test(rest)) {
      rest = `${rest}/`;
    }
    return redirectToPath(url, rest, 308, true);
  }

  return null;
}

const NON_TXT_STATIC_EXT_RE =
  /\.(?:js|css|map|json|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|eot|xml|webmanifest)$/i;
const STATIC_EXT_RE =
  /\.(?:js|css|map|json|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|eot|txt|xml|webmanifest)$/i;

let cachedBuildId: string | null = null;

async function getBuildId(env: Env, url: URL): Promise<string> {
  if (cachedBuildId !== null) return cachedBuildId;
  try {
    const res = await env.ASSETS.fetch(new Request(new URL("/_build_id.txt", url).toString()));
    if (res.ok) {
      cachedBuildId = (await res.text()).trim();
      return cachedBuildId;
    }
  } catch {
    // Ignore and fall back to empty string
  }
  return "";
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === "/ads.txt" || pathname === "/ads.txt/") {
      return redirect(ADS_TXT_DESTINATION, 301);
    }

    // Fast path for static files & Next.js assets (non-.txt)
    if (
      pathname.startsWith("/_next/") ||
      pathname === "/sitemap.xml" ||
      pathname === "/robots.txt" ||
      pathname === "/manifest.webmanifest" ||
      pathname === "/favicon.ico" ||
      pathname === "/_build_id.txt" ||
      NON_TXT_STATIC_EXT_RE.test(pathname)
    ) {
      return env.ASSETS.fetch(request);
    }

    // Next.js static export RSC `.txt` endpoints (default `en` pages live under `/en/...`)
    if (pathname.endsWith(".txt")) {
      if (pathname.endsWith("/__next._tree.txt")) {
        const buildId = await getBuildId(env, url);
        return new Response(`0:${JSON.stringify({ b: buildId, n: 1 })}\n`, {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=0, must-revalidate",
          },
        });
      }

      let assetPath = pathname.endsWith("/__next._full.txt")
        ? `${pathname.slice(0, -"__next._full.txt".length)}index.txt`
        : pathname;

      if (!hasExplicitNonEnLocale(assetPath) && !assetPath.startsWith("/en/")) {
        assetPath = `/en${assetPath}`;
      }

      const txtUrl = new URL(url.toString());
      txtUrl.pathname = assetPath;
      return env.ASSETS.fetch(
        new Request(txtUrl.toString(), {
          method: request.method,
          headers: request.headers,
        })
      );
    }

    const redir = maybeCheckRedirects(url);
    if (redir) return redir;

    if (pathname.includes("//")) {
      const collapsed = pathname.replace(/\/{2,}/g, "/") || "/";
      const targetPath =
        collapsed !== "/" && !collapsed.endsWith("/") ? `${collapsed}/` : collapsed;
      return redirectToPath(url, targetPath, 308, true);
    }

    // Normalize trailing slash on HTML pages to match Next.js `trailingSlash: true`
    if (pathname !== "/" && !pathname.endsWith("/")) {
      return redirectToPath(url, `${pathname}/`, 308, true);
    }

    // Rewrite default English paths (`/`, `/about/`, etc.) to `/en/...` static assets
    const assetUrl = new URL(url.toString());
    if (!hasExplicitNonEnLocale(pathname)) {
      assetUrl.pathname = pathname === "/" ? "/en/" : `/en${pathname}`;
    }

    const res = await env.ASSETS.fetch(
      new Request(assetUrl.toString(), {
        method: request.method,
        headers: request.headers,
      })
    );
    if (res.status === 404) {
      const notFoundUrl = new URL("/404.html", url);
      const nf = await env.ASSETS.fetch(new Request(notFoundUrl.toString()));
      if (nf.ok) {
        return new Response(nf.body, {
          status: 404,
          headers: nf.headers,
        });
      }
    }

    return res;
  },
};

export default worker;
