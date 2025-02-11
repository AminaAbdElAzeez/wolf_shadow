import Image from "next/image";
import ProfileTitle from "../profileTitle/profileTitle";
import styles from "./ServicesContent.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ServicesContent = () => {
  const t = useTranslations("ServicesContent");

  return (
    <section className={styles.servicesContent}>
      <div className={styles.title}>
        <ProfileTitle
          subTitle={t("servicesSubTitle")}
          text={{ textAlign: "center" }}
          title={t("servicesTitle")}
          desc={t("servicesDesc")}
        />
      </div>
      <div className={styles.ServicesContentWrapper}>
        <div className="container">
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-701.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-700.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  {t("servicesItemTitle")}
                </h3>
                <p
                  className={styles.servicesContentItemDesc}
                  dangerouslySetInnerHTML={{ __html: t("servicesItemDesc") }}
                ></p>
                <Link
                  href="#servicesPayment"
                  className={styles.servicesContentItemBtn}
                >
                  {t("servicesItemLink")}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-702.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  {t("servicesItemTitle")}
                </h3>
                <p
                  className={styles.servicesContentItemDesc}
                  dangerouslySetInnerHTML={{ __html: t("servicesItemDesc") }}
                ></p>
                <Link
                  href="#servicesPayment"
                  className={styles.servicesContentItemBtn}
                >
                  {t("servicesItemLink")}
                </Link>
              </div>
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-703.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
          </div>
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-701.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-700.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  {t("servicesItemTitle")}
                </h3>
                <p
                  className={styles.servicesContentItemDesc}
                  dangerouslySetInnerHTML={{ __html: t("servicesItemDesc") }}
                ></p>
                <Link
                  href="#servicesPayment"
                  className={styles.servicesContentItemBtn}
                >
                  {t("servicesItemLink")}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-702.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  {t("servicesItemTitle")}
                </h3>
                <p
                  className={styles.servicesContentItemDesc}
                  dangerouslySetInnerHTML={{ __html: t("servicesItemDesc") }}
                ></p>
                <Link
                  href="#servicesPayment"
                  className={styles.servicesContentItemBtn}
                >
                  {t("servicesItemLink")}
                </Link>
              </div>
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-703.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
