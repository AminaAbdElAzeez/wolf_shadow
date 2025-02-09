import styles from "./Custom.module.css";

function Custom() {
  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <h2 className={styles.title}>
            <div className={styles.dash}></div>
            Visualize, Customize, <br />
            Actualize.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Custom;
