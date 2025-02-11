import Image from "next/image";
import styles from "./OurServices.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

function OurServices() {
  const t = useTranslations("OurServices");
  return (
    <section className={styles.ourServices}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={styles.ourServicesTitle}>{t("OurServicesTitle")}</h2>
          <Image
            src={"/images/Group-1.png"}
            alt="image"
            width={67}
            height={7}
          />
          <p className={styles.ourServicesDesc}>{t("OurServicesDesc")}</p>
        </div>
        <div className={styles.ourServicesContent}>
          <div className={styles.ourServicesLeft}>
            <div className={styles.ourServicesLeftInfo}>
              <h4 className={styles.ourServicesLeftTitle}>
                {t("OurServicesItemTitle")}
              </h4>
              <p className={styles.ourServicesLeftDesc}>
                {t("OurServicesItemDesc")}
              </p>
              <Link href="/services" className={styles.ourServicesLeftBtn}>
                {t("OurServicesItemLink")}
              </Link>
            </div>
          </div>
          <div className={styles.ourServicesRight}>
            <div className={styles.ourServicesRightItem}>
              <div className={styles.ourServicesRighttInfo}>
                <h4 className={styles.ourServicesRightTitle}>
                  {t("OurServicesItemTitle")}
                </h4>
              </div>
            </div>
            <div className={styles.ourServicesRightItem}>
              <div className={styles.ourServicesRighttInfo}>
                <h4 className={styles.ourServicesRightTitle}>
                  {t("OurServicesItemTitle")}
                </h4>
              </div>
            </div>
            <div className={styles.ourServicesRightItem}>
              <div className={styles.ourServicesRighttInfo}>
                <h4 className={styles.ourServicesRightTitle}>
                  {t("OurServicesItemTitle")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
