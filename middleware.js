import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  const locales = ["en", "ar"];
  const defaultLocale = "en";

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    // pathname.startsWith("/static") ||
    pathname.startsWith("/public") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale && pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|static|public|.*\\..*).*)",
};
