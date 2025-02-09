"use client";
import { useTranslations } from "next-intl";
import styles from "./Platform.module.css";
function Platform() {
  const { t } = useTranslations("Platform");

  return (
    <section className={styles.platform}>
      <div className={styles.platformContent}>
        <div className="container">
          <div className={styles.platformText}>
            <h5 className={styles.subTitle}>{t("steps")}</h5>
            <h1 className={styles.title}>
              <span>{t("perfeet")}</span> <br />
              <span> {t("sell")}</span> <br /> <span>{t("platform")}</span>
            </h1>
            <button className={styles.platformBtn}>{t("KnewMore")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
