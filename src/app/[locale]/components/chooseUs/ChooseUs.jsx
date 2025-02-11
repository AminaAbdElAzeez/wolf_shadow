"use client";
import Image from "next/image";
import styles from "./ChooseUs.module.css";
import { Card } from "antd";
import { useLocale, useTranslations } from "next-intl";

function ChooseUs() {
  const t = useTranslations("ChooseUs");

  return (
    <section className={styles.chooseUs}>
      <div className="container">
        <div className={styles.chooseUsTitle}>
          <h2>{t("chooseUsTitle")}</h2>
          <Image
            src={"/images/Group-1.png"}
            alt="image"
            width={67}
            height={7}
          />
        </div>
        <div className={styles.chooseUsContent}>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/location-tick.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>
              {t("chooseUsItemTitle")}
            </h3>
            <p className={styles.chooseUsItemDesc}>
              <span>{t("chooseUsItemDesc1")}</span> <br />{" "}
              <span>{t("chooseUsItemDesc2")}</span>
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/calendar.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>
              {t("chooseUsItemTitle2")}
            </h3>
            <p className={styles.chooseUsItemDesc}>
              <span>{t("chooseUsItemDesc3")}</span> <br />
              <span>{t("chooseUsItemDesc4")}</span>
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/car.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>
              {t("chooseUsItemTitle3")}
            </h3>
            <p className={styles.chooseUsItemDesc}>
              <span>{t("chooseUsItemDesc5")}</span> <br />
              <span>{t("chooseUsItemDesc6")}</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
