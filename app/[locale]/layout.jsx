"use client";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import LocaleLayout from "../LocaleLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wolf Shadow",
  description: "Welcome to Wolf Shadow.",
  keywords: "Next.js, React, Web Development, Frontend",
  author: "Apps Square Team",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body>
        <LocaleLayout>{children}</LocaleLayout>
      </body>
    </html>
  );
}
