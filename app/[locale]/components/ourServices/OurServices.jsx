import Image from "next/image";
import styles from "./OurServices.module.css";
import Link from "next/link";

function OurServices() {
  return (
    <section className={styles.ourServices}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={styles.ourServicesTitle}>Our Services</h2>
          <Image
            src={"/images/Group-1.png"}
            alt="image"
            width={67}
            height={7}
          />
          <p className={styles.ourServicesDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div className={styles.ourServicesContent}>
          <div className={styles.ourServicesLeft}>
            <div className={styles.ourServicesLeftInfo}>
              <h4 className={styles.ourServicesLeftTitle}>
                Paint protection films
              </h4>
              <p className={styles.ourServicesLeftDesc}>
                Stop worrying about damage or scratches to your car's paint and
                other effects of smooth and textured surfaces.
              </p>
              <Link href="/services" className={styles.ourServicesLeftBtn}>
                Order Services
              </Link>
            </div>
          </div>
          <div className={styles.ourServicesRight}>
            <div className={styles.ourServicesRightItem}>
              <div className={styles.ourServicesRighttInfo}>
                <h4 className={styles.ourServicesRightTitle}>
                  Paint protection films
                </h4>
              </div>
            </div>
            <div className={styles.ourServicesRightItem}>
              <div className={styles.ourServicesRighttInfo}>
                <h4 className={styles.ourServicesRightTitle}>
                  Paint protection films
                </h4>
              </div>
            </div>
            <div className={styles.ourServicesRightItem}>
              <div className={styles.ourServicesRighttInfo}>
                <h4 className={styles.ourServicesRightTitle}>
                  Paint protection films
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
