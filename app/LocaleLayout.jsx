"use client"; // ✅ ضروري لأن NextIntlClientProvider يحتاج `use client`

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "./[locale]/components/Header/Header";
import Footer from "./[locale]/components/footer/Footer";

async function getMessages(locale) {
  try {
    const messages = await import(`@/app/locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`🔴 الترجمة غير موجودة للغة: ${locale}`);
    notFound(); // عرض صفحة 404 إذا لم تكن الترجمة متاحة
  }
}

export default async function LocaleLayout({ children, params }) {
  const messages = await getMessages(params.locale); // تحميل الترجمة المناسبة

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
