import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins, Roboto_Mono } from "next/font/google";
import { Tajawal } from "next/font/google";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"], // الأوزان المطلوبة للخط
  variable: "--font-tajawal",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

async function BaseLayout({ children, locale }) {
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className={`${poppins.variable} ${robotoMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default BaseLayout;
