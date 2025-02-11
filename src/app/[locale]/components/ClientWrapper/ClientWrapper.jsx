"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // ✅ استخدام react-i18next وليس next-i18next
import i18nextConfig from "../../../next-i18next.config";

export default function ClientWrapper({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18nextConfig.i18n.defaultLocale);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const storedLang =
      localStorage.getItem("language") || i18nextConfig.i18n.defaultLocale;
    if (storedLang !== i18n.language) {
      i18n
        .changeLanguage(storedLang)
        .catch((err) => console.error("Error changing language:", err));
    }
    setLanguage(storedLang);
  }, []);

  return (
    <div lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      {isClient ? children : null}
    </div>
  );
}
