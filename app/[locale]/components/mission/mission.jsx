import styles from "./mission.module.css";

function Mission() {
  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Our Mission and <br /> Values
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
