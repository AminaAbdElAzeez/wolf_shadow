import Image from "next/image";
import styles from "./sent.module.css";
import ProfileTitle from "../profileTitle/profileTitle";
import { useTranslations } from "next-intl";

function Sent() {
  const t = useTranslations("Sent");

  return (
    <section className={styles.sent}>
      <div className="container">
        <div className={styles.sentContent}>
          <Image
            src={"/images/sent.png"}
            alt="image"
            width={500}
            height={340}
            className={styles.sentImg}
          />
          <ProfileTitle
            subTitle={t("sentSubTitle")}
            text={{ textAlign: "center" }}
            title={t("sentTitle")}
            desc={t("sentDesc")}
          />
          <button className={styles.btn}>{t("sentBtn")}</button>
        </div>
      </div>
    </section>
  );
}

export default Sent;
