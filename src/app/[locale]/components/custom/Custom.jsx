import { useLocale, useTranslations } from "next-intl";
import styles from "./Custom.module.css";

function Custom() {
  const t = useTranslations("Custom");
  const locale = useLocale();

  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <h2 className={locale === "ar" ? styles.titleAr : styles.title}>
            <div className={styles.dash}></div>
            <span dangerouslySetInnerHTML={{ __html: t("customTitle") }}></span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Custom;
