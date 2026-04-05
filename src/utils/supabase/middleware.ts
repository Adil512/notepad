import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  getPathWithoutLocale,
  getLocaleFromPathname,
  localizedPath,
} from "@/lib/i18n";
import { localeRequestHeaders } from "@/lib/request-locale-header";
import { isAdminEmail } from "@/lib/admin-email";

export async function updateSession(
  request: NextRequest,
  getBaseResponse?: () => NextResponse
) {
  const headers = localeRequestHeaders(request);
  const base = () =>
    getBaseResponse?.() ??
    NextResponse.next({ request: { headers } });
  let supabaseResponse = base();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl?.trim() || !supabaseAnonKey?.trim()) {
    console.error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY (middleware)"
    );
    return supabaseResponse;
  }

  /**
   * Do not call `request.cookies.set` here (breaks on Edge; unnecessary on Node proxy).
   * @supabase/ssr requires `getAll()` to reflect `setAll()` in the same tick — track overrides here.
   */
  const cookieOverrides = new Map<string, string>();

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        const merged = new Map<string, { name: string; value: string }>();
        for (const c of request.cookies.getAll()) {
          merged.set(c.name, { name: c.name, value: c.value });
        }
        for (const [name, value] of cookieOverrides) {
          if (value === "") merged.delete(name);
          else merged.set(name, { name, value });
        }
        return [...merged.values()];
      },
      setAll(cookiesToSet, responseHeaders) {
        cookiesToSet.forEach(({ name, value }) => {
          cookieOverrides.set(name, value);
        });
        supabaseResponse = base();
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
        for (const [key, value] of Object.entries(responseHeaders)) {
          supabaseResponse.headers.set(key, value);
        }
      },
    },
  });

  let user: Awaited<
    ReturnType<typeof supabase.auth.getUser>
  >["data"]["user"] = null;
  try {
    ({
      data: { user },
    } = await supabase.auth.getUser());
  } catch (err) {
    console.error("supabase.auth.getUser() failed in proxy/middleware:", err);
  }

  const pathname = request.nextUrl.pathname;
  const pathAfterLocale = getPathWithoutLocale(pathname);
  const locale = getLocaleFromPathname(pathname);

  if (pathAfterLocale.startsWith("/admin")) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = localizedPath(locale, "/login");
      return NextResponse.redirect(url);
    }
    if (!isAdminEmail(user.email)) {
      const url = request.nextUrl.clone();
      url.pathname = localizedPath(locale, "/");
      return NextResponse.redirect(url);
    }
  }

  if (!user && pathAfterLocale.startsWith("/protected")) {
    const url = request.nextUrl.clone();
    url.pathname = localizedPath(locale, "/login");
    return NextResponse.redirect(url);
  }

  if (
    user &&
    (pathAfterLocale === "/login" || pathAfterLocale === "/signup")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = localizedPath(locale, "/");
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
