import Image from "next/image";
import styles from "./profileTitle.module.css";

function ProfileTitle({ subTitle, text, title, desc }) {
  return (
    <div className={styles.profileTitle} style={text}>
      <h5 className={styles.subTitle}>{subTitle}</h5>
      <h2 className={styles.title}>{title}</h2>
      <Image src={"/images/Group-1.png"} alt="image" width={67} height={7} />
      <p className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }}>
      </p>
    </div>
  );
}

export default ProfileTitle;
