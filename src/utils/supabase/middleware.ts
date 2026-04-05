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

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = base();
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
