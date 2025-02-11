"use client";
import { useTranslations, useLocale } from "next-intl"; // ✅ استخدم useLocale بدل useRouter
import styles from "./Platform.module.css";

function Platform() {
  const locale = useLocale(); // ✅ الحصول على اللغة مباشرة
  const t = useTranslations("Platform");

  // console.log("Current Locale:", locale); // ✅ اختبار اللغة في الكونسول

  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={locale === "ar" ? styles.platformAr : styles.platform}
    >
      <div
        className={
          locale === "ar" ? styles.platformContentAr : styles.platformContent
        }
      >
        <div className="container">
          <div className={styles.platformText}>
            <h5 className={styles.subTitle}>{t("steps")}</h5>
            <h1 className={styles.title}>
              <span>{t("perfeet")}</span> <br />
              <span>{t("sell")}</span> <br /> <span>{t("platform")}</span>
            </h1>
            <button className={styles.platformBtn}>{t("KnewMore")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
