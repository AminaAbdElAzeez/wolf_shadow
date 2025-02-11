import Image from "next/image";
import styles from "./performance.module.css";
import { useTranslations } from "next-intl";

function Performance() {
  const t = useTranslations("Performance");

  return (
    <section className={styles.performance}>
      <div className="container">
        <div className={styles.performanceContent}>
          <div className={styles.performanceLeft}>
            <Image
              src={"/images/Group-5367.png"}
              alt="image"
              width={524}
              height={630}
            />
          </div>
          <div className={styles.performanceRight}>
            <h3 className={styles.performanceRightTitle}>
              {t("performanceSubTitle")}
            </h3>
            <h4 className={styles.performanceRightSubTitle}>
              <span>{t("performanceTitle1")}</span>
              <span>{t("performanceTitle2")}</span>
              <span
                dangerouslySetInnerHTML={{ __html: t("performanceTitle3") }}
              ></span>
            </h4>
            <p
              className={styles.performanceRightDesc}
              dangerouslySetInnerHTML={{ __html: t("performanceDesc1") }}
            ></p>
            <p
              className={styles.performanceRightDesc}
              dangerouslySetInnerHTML={{ __html: t("performanceDesc2") }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
