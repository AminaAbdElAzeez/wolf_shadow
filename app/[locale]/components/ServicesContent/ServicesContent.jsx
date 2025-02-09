import Image from "next/image";
import ProfileTitle from "../profileTitle/profileTitle";
import styles from "./ServicesContent.module.css";
import Link from "next/link";

const ServicesContent = () => {
  return (
    <section className={styles.servicesContent}>
      <div className={styles.title}>
        <ProfileTitle subTitle="Our Services" text={{ textAlign: "center" }} title="Our providing reliable " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "/>
      </div>
      <div className={styles.ServicesContentWrapper}>
        <div className="container">
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-701.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-700.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  Paint protection films
                </h3>
                <p className={styles.servicesContentItemDesc}>
                  Stop worrying about damage or scratches to your <br />
                  car's paint and other effects of smooth and textured <br />
                  surfaces.
                </p>
                <Link href="#servicesPayment" className={styles.servicesContentItemBtn}>
                  Order Services
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-702.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  Paint protection films
                </h3>
                <p className={styles.servicesContentItemDesc}>
                  Stop worrying about damage or scratches to your <br />
                  car's paint and other effects of smooth and textured <br />
                  surfaces.
                </p>
                <Link href="#servicesPayment" className={styles.servicesContentItemBtn}>
                  Order Services
                </Link>
              </div>
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-703.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
          </div>
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-701.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-700.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  Paint protection films
                </h3>
                <p className={styles.servicesContentItemDesc}>
                  Stop worrying about damage or scratches to your <br />
                  car's paint and other effects of smooth and textured <br />
                  surfaces.
                </p>
                <Link href="#servicesPayment" className={styles.servicesContentItemBtn}>
                  Order Services
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.servicesContentRow}>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-702.png"}
                alt="image"
                width={660}
                height={303}
              />
              <div className={styles.servicesContentItemText}>
                <h3 className={styles.servicesContentItemTitle}>
                  Paint protection films
                </h3>
                <p className={styles.servicesContentItemDesc}>
                  Stop worrying about damage or scratches to your <br />
                  car's paint and other effects of smooth and textured <br />
                  surfaces.
                </p>
                <Link href="#servicesPayment" className={styles.servicesContentItemBtn}>
                  Order Services
                </Link>
              </div>
            </div>
            <div className={styles.servicesContentItem}>
              <Image
                src={"/images/Rectangle-703.png"}
                alt="image"
                width={660}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
