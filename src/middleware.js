// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(ar|en)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

// استيراد إعدادات التوجيه من `next-intl`
import { routing } from "./i18n/routing";

// دالة الميدل وير
export function middleware(req) {
  const token = req.cookies.get("authToken")?.value;
  const pathname = req.nextUrl.pathname;

  // تعريف المسارات المحمية
  const protectedRoutes = ["/en/cart", "/ar/cart"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // إذا لم يكن المستخدم مسجلاً الدخول، إعادة توجيهه إلى صفحة تسجيل الدخول المناسبة للغته
  if (isProtectedRoute && !token) {
    const locale = pathname.startsWith("/ar") ? "ar" : "en"; // تحديد اللغة من المسار
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  // السماح لـ `next-intl` بمعالجة التوجيه
  return createMiddleware(routing)(req);
}

// إعدادات الميدل وير
export const config = {
  matcher: [
    "/", // الصفحة الرئيسية
    "/(ar|en)/:path*", // جميع المسارات المحلية
    "/((?!_next|_vercel|.*\\..*).*)", // استثناء ملفات Next.js و Vercel
  ],
};
