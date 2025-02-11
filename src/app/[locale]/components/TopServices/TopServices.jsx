import { useLocale, useTranslations } from "next-intl";
import styles from "./TopServices.module.css";

function TopServices() {
  const t = useTranslations("TopServices");
  const locale = useLocale();

  return (
    <section className={styles.custom}>
      <div className="container">
        <div
          className={
            locale === "ar" ? styles.customContentAr : styles.customContent
          }
        >
          <div className={styles.content}>
            <h2
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: t("servicesTitle") }}
            ></h2>
            <h5
              className={locale === "ar" ? styles.subtitleAr : styles.subtitle}
            >
              {t("servicesSubTitle")}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopServices;
