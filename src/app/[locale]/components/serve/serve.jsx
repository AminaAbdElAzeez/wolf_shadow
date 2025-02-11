import Image from "next/image";
import styles from "./serve.module.css";
import ProfileTitle from "../profileTitle/profileTitle";
import { useTranslations } from "next-intl";

function Serve() {
  const t = useTranslations("Serve");

  return (
    <section className={styles.sent}>
      <div className="container">
        <div className={styles.sentContent}>
          <Image
            src={"/images/serve.png"}
            alt="image"
            width={500}
            height={340}
            className={styles.sentImg}
          />
          <ProfileTitle
            subTitle={t("serveSubTitle")}
            text={{ textAlign: "center" }}
            title={t("serveTitle")}
            desc={t("serveDesc")}
          />
          <button className={styles.btn}>{t("serveBtn")}</button>
        </div>
      </div>
    </section>
  );
}

export default Serve;
