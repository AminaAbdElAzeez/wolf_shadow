"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLang = locale === "en" ? "ar" : "en";

    Cookies.set("NEXT_LOCALE", newLang, { expires: 365 });

    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    const newPath = `/${newLang}${pathname.replace(/^\/(en|ar)/, "")}`;
    router.push(newPath);
  };

  return (
    <button onClick={toggleLanguage} className={styles.langToggleBtn}>
      <Image
        src={
          locale === "en"
            ? "/images/Flag_of_Saudi_Arabia.svg.webp"
            : "/images/Flag_of_the_United_States.svg.webp"
        }
        alt={locale === "en" ? "AR" : "EN"}
        width={45}
        height={30}
        style={{
          aspectRatio: "3/2",
          objectFit: "cover",
        }}
      />
    </button>
  );
};

export default LanguageSwitcher;
