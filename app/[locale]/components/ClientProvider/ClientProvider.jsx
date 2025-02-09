// "use client";

// import { useEffect, useState } from "react";
// import { useTranslation } from "next-i18next";
// import i18nextConfig from "../../../next-i18next.config";

// export default function ClientProvider({ children }) {
//   const { i18n } = useTranslation();
//   const [language, setLanguage] = useState(i18nextConfig.i18n.defaultLocale);

//   useEffect(() => {
//     const storedLang = localStorage.getItem("language") || "en";
//     if (storedLang !== i18n.language) {
//       i18n.changeLanguage(storedLang);
//     }
//   }, [i18n]);

//   return (
//     <html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
//       <body>{children}</body>
//     </html>
//   );
// }
