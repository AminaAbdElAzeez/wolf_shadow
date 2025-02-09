import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  const locales = ["en", "ar"]; // اللغات المدعومة
  const defaultLocale = "en"; // اللغة الافتراضية

  // ✅ استثناء مسارات Next.js الداخلية
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/public") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // ✅ التأكد مما إذا كان المسار يحتوي على لغة
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // ✅ منع إعادة التوجيه إذا كان المسار الجذر بالفعل يحتوي على اللغة
  if (!hasLocale && pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

// ✅ ضبط `matcher` ليعمل فقط على الروت ولا يغير باقي المسارات
export const config = {
  matcher: "/((?!_next|api|static|public|.*\\..*).*)",
};
