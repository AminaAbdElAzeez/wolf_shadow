import Image from "next/image";
import styles from "./ContactUs.module.css";
import { useLocale, useTranslations } from "next-intl";

function ContactUs() {
  const t = useTranslations("ContactUs");
  const locale = useLocale();

  return (
    <section className={styles.contactUs}>
      <div className="container">
        <div className={styles.contactUsContent}>
          <div
            className={
              locale === "ar" ? styles.contactUsLeftAr : styles.contactUsLeft
            }
          >
            <div className={styles.contactUsTitle}>
              <Image
                src={"/images/WOLF.png"}
                alt="image"
                width={400}
                height={130}
              />
              <Image
                src={"/images/Shadow.png"}
                alt="image"
                width={650}
                height={124}
              />
            </div>
            <Image
              src={"/images/pngwing.com.png"}
              alt="image"
              width={744}
              height={355}
              className={styles.car}
            />
          </div>
          <div className={styles.contactUsRight}>
            <div className={styles.contactUsRightTitle}>
              <h2 className={styles.RightTitle}>{t("ContactUsTitle")}</h2>
              <Image
                src={"/images/Group-1.png"}
                alt="image"
                width={67}
                height={7}
              />
              <p className={styles.RightDesc}>{t("ContactUsDesc")}</p>
            </div>
            <form className={styles.contactUsForm}>
              <input
                type="text"
                placeholder={t("ContactUsplaceholderName")}
                name="name"
                autoComplete="on"
              />
              <input
                type="email"
                placeholder={t("ContactUsplaceholderEmail")}
                name="email"
                autoComplete="on"
              />
              <input
                type="text"
                placeholder={t("ContactUsplaceholderSubject")}
                name="subject"
                autoComplete="on"
              />
              <textarea
                rows={5}
                placeholder={t("ContactUsplaceholderDetails")}
                name="details"
                autoComplete="on"
              ></textarea>
              <button className={styles.formBtn}>{t("ContactUsBtn")}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
