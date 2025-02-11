import Image from "next/image";
import styles from "./contactsInfo.module.css";
import { Card } from "antd";
import ProfileTitle from "../profileTitle/profileTitle";
import { useTranslations } from "next-intl";

function ContactInfo() {
  const t = useTranslations("ContactInfo");
  return (
    <section className={styles.chooseUs}>
      <div className="container">
        <ProfileTitle
          subTitle={t("contactInfoContacts")}
          text={{ textAlign: "center" }}
          title={t("contactInfoTitle")}
          desc={t("contactInfoDesc")}
        />
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
              {t("contactInfoTitle2")}
            </h3>
            <p
              className={styles.chooseUsItemDesc}
              dangerouslySetInnerHTML={{ __html: t("contactInfoLocation") }}
            ></p>
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
              {t("contactInfoTitle3")}
            </h3>
            <p className={styles.chooseUsItemDesc}>
              <span>{t("contactInfoTime1")}</span>
              <br />
              <span>{t("contactInfoTime2")}</span>
              <span>{t("contactInfoTime3")}</span>
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/call-2.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>
              {t("contactInfoTitle4")}
            </h3>
            <p className={styles.chooseUsItemDescContent}>
              <Image
                src={"/images/Calling-2.svg"}
                alt="icon"
                width={20}
                height={20}
              />
              {t("contactInfoPhone")}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
