"use client"; 

import getMessages from "@/utils/getMessages";
import Header from "./[locale]/components/Header/Header";
import Footer from "./[locale]/components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";

export default  function LocaleLayout({ children, params }) {
  const locale = params || "en";
  const messages =  getMessages(locale);

  return (
      <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
      </NextIntlClientProvider>
  );
}
