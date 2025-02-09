"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLang = locale === "en" ? "ar" : "en";

    // تحديث اللغة في الكوكيز
    Cookies.set("NEXT_LOCALE", newLang, { expires: 365 });

    // إعادة التوجيه مع تغيير اللغة في الرابط
    const newPath = `/${newLang}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
    <button onClick={toggleLanguage}>
      {locale === "en" ? (
        <Image
          src="/images/Flag_of_Saudi_Arabia.svg.webp"
          alt="AR"
          width={30}
          height={20}
        />
      ) : (
        <Image
          src="/images/Flag_of_the_United_States.svg.webp"
          alt="EN"
          width={30}
          height={20}
        />
      )}
    </button>
  );
};

export default LanguageSwitcher;
