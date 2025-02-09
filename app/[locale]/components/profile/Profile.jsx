import Image from "next/image";
import styles from "./Profile.module.css";
import ProfileTitle from "../profileTitle/profileTitle";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function Profile() {
  return (
    <section className={styles.profile}>
      <div className="container">
        <ProfileTitle subTitle="Our Works" text={{ textAlign: "center" }} title="Our providing reliable " 
        desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore `} />
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-14.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
        </div>
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-11.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
        </div>
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-12.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
        </div>
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-13.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>Paint protection films</h4>
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.paginationItem}>
            <FaLongArrowAltLeft />
          </div>
          <div className={styles.paginationItem}>1</div>
          <div className={styles.paginationItem}>2</div>
          <div className={styles.paginationItem}>3</div>
          <div className={styles.paginationItem}>4</div>
          <div className={styles.paginationItem}>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
