// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(ar|en)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

export function middleware(req) {
  const token = req.cookies.get("authToken")?.value;
  const pathname = req.nextUrl.pathname;

  const protectedRoutes = ["/en/cart", "/ar/cart"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    const locale = pathname.startsWith("/ar") ? "ar" : "en";
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: [
    "/", 
    "/(ar|en)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
