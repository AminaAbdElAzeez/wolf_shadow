"use client";
import Image from "next/image";
import styles from "./Offer.module.css";
import { useLocale, useTranslations } from "next-intl";
function Offer() {
  const t = useTranslations("Offer");
  const locale = useLocale();

  return (
    <section className={styles.Offer}>
      <div className="container">
        <div className={styles.OfferContent}>
          <div
            className={locale === "ar" ? styles.offerLeftAr : styles.offerLeft}
          >
            <Image
              src={"/images/Group.png"}
              alt="image"
              width={500}
              height={400}
            />
          </div>
          <div className={styles.offerRight}>
            <h5 className={styles.subTitle}>{t("offerSubtitle")}</h5>
            <h2 className={styles.title}>
              <span>{t("offertitle1")}</span>
              <br />
              <span>{t("offertitle2")}</span>
            </h2>
            <ul className={styles.offerList}>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/wallet.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>{t("offertitle3")}</h3>
                  <p>
                    <span>{t("offerDesc1")}</span>
                    <br />
                    <span>{t("offerDesc2")}</span>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/user-tick.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>{t("offertitle4")}</h3>
                  <p>
                    <span>{t("offerDesc3")}</span> <br />
                    <span>{t("offerDesc4")} </span>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/24-support.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>{t("offertitle5")}</h3>
                  <p>
                    <span>{t("offerDesc5")}</span> <br />
                    <span> {t("offerDesc6")} </span>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/messages-2.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>{t("offertitle6")}</h3>
                  <p>
                    <span> {t("offerDesc7")}</span> <br />
                    <span>{t("offerDesc8")} </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
