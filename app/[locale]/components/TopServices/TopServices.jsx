import styles from "./TopServices.module.css";

function TopServices() {
  return (
    <section className={styles.custom}>
      <div className="container">
        <div className={styles.customContent}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Our Comprehensive <br /> Services
            </h2>
            <h5>Discover Our Services</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopServices;
