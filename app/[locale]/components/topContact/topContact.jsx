import styles from "./topContact.module.css";

function TopContact() {
  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <div className={styles.content}>
            <h2 className={styles.title}>
            Reach Out to Us
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopContact;
