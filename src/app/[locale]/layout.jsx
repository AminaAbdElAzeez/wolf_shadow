import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Poppins, Roboto_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "/src/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import BaseLayout from "./components/BaseLayout/BaseLayout";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Wolf Shadow",
//   icon: "icon.png",
//   description: "Welcome to Wolf Shadow.",
//   keywords: "Next.js, React, Web Development, Frontend",
//   author: "Apps Square Team",
//   robots: "index, follow",
// };
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params; // حل مشكلة انتظار الـ `params`

  // التأكد من أن اللغة المدخلة موجودة ضمن اللغات المدعومة
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // تعيين اللغة المطلوبة
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
