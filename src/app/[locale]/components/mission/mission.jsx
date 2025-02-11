import { useTranslations } from "next-intl";
import styles from "./mission.module.css";

function Mission() {
  const t = useTranslations("Mission");

  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <div className={styles.content}>
            <h2
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: t("missionTitle") }}
            >
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
