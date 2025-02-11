import Image from "next/image";
import styles from "./solution.module.css";
import { useLocale, useTranslations } from "next-intl";

function Solution() {
  const t = useTranslations("Solution");
  const locale = useLocale();

  return (
    <section className={styles.solution}>
      <div className="container">
        <div className={styles.solutionContent}>
          <div
            className={
              locale === "ar" ? styles.solutionLeftAr : styles.solutionLeft
            }
          >
            <div className={styles.solutionImg}>
              <Image
                src={"/images/Rectangle-99.png"}
                alt="image"
                width={524}
                height={580}
              />
            </div>
            <p
              className={
                locale === "ar"
                  ? styles.solutionLeftDescAr
                  : styles.solutionLeftDesc
              }
            >
              {t("solutionLeftDesc")}
            </p>
          </div>
          <div className={styles.solutionRight}>
            <h3
              className={styles.solutionRightTitle}
              dangerouslySetInnerHTML={{ __html: t("solutionTitle") }}
            ></h3>
            <p
              className={styles.solutionRightDesc}
              dangerouslySetInnerHTML={{ __html: t("solutionDesc") }}
            ></p>
            <p
              className={styles.solutionRightDesc}
              dangerouslySetInnerHTML={{ __html: t("solutionDesc") }}
            ></p>
            <ul className={styles.solutionRightInfo}>
              <li>
                <Image
                  src={"/images/Vector.png"}
                  alt="image"
                  width={20}
                  height={20}
                />
                <span>{t("solutionOnline")}</span>
              </li>
              <li>
                <Image
                  src={"/images/Vector.png"}
                  alt="image"
                  width={20}
                  height={20}
                />
                <span>{t("solutionAuto")}</span>
              </li>
            </ul>
            <p
              className={styles.solutionRightDesc}
              dangerouslySetInnerHTML={{ __html: t("solutionDesc2") }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
