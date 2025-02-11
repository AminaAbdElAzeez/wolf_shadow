import { useTranslations } from "next-intl";
import styles from "./topContact.module.css";

function TopContact() {
  const t = useTranslations("TopContact");

  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t("topContactTitle")}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopContact;
