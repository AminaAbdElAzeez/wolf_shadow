import Image from "next/image";
import styles from "./solution.module.css";

function Solution() {
  return (
    <section className={styles.solution}>
      <div className="container">
        <div className={styles.solutionContent}>
          <div className={styles.solutionLeft}>
            <div className={styles.solutionImg}>
              <Image
                src={"/images/Rectangle-99.png"}
                alt="image"
                width={524}
                height={580}
              />
            </div>
            <p className={styles.solutionLeftDesc}>
              We Care Health Programs for Everyone
            </p>
          </div>
          <div className={styles.solutionRight}>
            <h3 className={styles.solutionRightTitle}>
              Best Solution Provides <br />
              Electric Vehicle
            </h3>
            <p className={styles.solutionRightDesc}>
              Car Dealer is the most enticing, creative, modern and <br />{" "}
              multipurpose auto dealer Premium Wordpress Theme. <br /> Suitable
              for any car dealer websites, business or corporate <br />{" "}
              websites.
            </p>
            <p className={styles.solutionRightDesc}>
              Car Dealer is the most enticing, creative, modern and <br />{" "}
              multipurpose auto dealer Premium Wordpress Theme. <br /> Suitable
              for any car dealer websites, business or corporate <br />{" "}
              websites.
            </p>
            <ul className={styles.solutionRightInfo}>
              <li>
                <Image
                  src={"/images/Vector.png"}
                  alt="image"
                  width={20}
                  height={20}
                />
                <span>Online Appointment</span>
              </li>
              <li>
                <Image
                  src={"/images/Vector.png"}
                  alt="image"
                  width={20}
                  height={20}
                />
                <span>Auto Rent Service</span>
              </li>
            </ul>
            <p className={styles.solutionRightDesc}>
              Car Dealer is the most enticing, creative, modern and multipurpose{" "}
              <br />
              auto dealer Premium Wordpress Theme. Suitable for any car <br />
              dealer websites, business or corporate websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
