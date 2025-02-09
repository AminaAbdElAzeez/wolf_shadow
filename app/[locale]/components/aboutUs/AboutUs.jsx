"use client";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import { useTranslations } from "next-intl";

function AboutUs() {
  const { t } = useTranslations("translation");
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutUsLeft}>
            <h5 className={styles.aboutSubTitle}>{t("aboutUsSubTitle")}</h5>
            <h2 className={styles.aboutTitle}>
              <span>{t("aboutUsTitle1")} </span>
              <br /> <span>{t("aboutUsTitle2")}</span>
            </h2>
            <Image
              src={"/images/Group-1.png"}
              alt="image"
              width={67}
              height={7}
            />
            <p className={styles.aboutdesc}>
              <span>{t("text1")}</span>
              <br />
              <span>{t("text2")}</span>
              <br />
              <span> {t("text3")}</span> <br />
              <span>{t("text4")}</span>
            </p>
            <p className={styles.aboutdesc}>
              <span>{t("text1")}</span>
              <br />
              <span>{t("text2")}</span>
              <br />
              <span> {t("text3")}</span> <br />
              <span>{t("text4")}</span>
            </p>
            <div className={styles.aboutInfo}>
              <div className={styles.aboutInfoItem}>
                <Image
                  src={"/images/Icon-2.png"}
                  alt="icon"
                  width={55}
                  height={55}
                />
                <h4 className={styles.aboutInfoTitle}>{t("safe")}</h4>
              </div>
              <div className={styles.aboutInfoItem}>
                <Image
                  src={"/images/Icon-1.png"}
                  alt="icon"
                  width={55}
                  height={55}
                />
                <h4 className={styles.aboutInfoTitle}>
                  {t("AffordablePrice")}
                </h4>
              </div>
            </div>
          </div>
          <div className={styles.aboutUsRight}>
            <Image
              src={"/images/Group-2.png"}
              width={465}
              height={415}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
