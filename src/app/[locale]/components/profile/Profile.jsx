import Image from "next/image";
import styles from "./Profile.module.css";
import ProfileTitle from "../profileTitle/profileTitle";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

function Profile() {
  const t = useTranslations("ProfileSlider");
  const locale = useLocale();

  return (
    <section className={styles.profile}>
      <div className="container">
        <ProfileTitle
          subTitle={t("ProfileSliderSubTitle")}
          text={{ textAlign: "center" }}
          title={t("ProfileSliderTitle")}
          desc={t("ProfileSliderDesc")}
        />
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-14.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>{t("ProfileSliderItemTitle")}</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>{t("ProfileSliderItemTitle")}</h4>
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
            <h4>{t("ProfileSliderItemTitle")}</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>{t("ProfileSliderItemTitle")}</h4>
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
            <h4>{t("ProfileSliderItemTitle")}</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>{t("ProfileSliderItemTitle")}</h4>
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
            <h4>{t("ProfileSliderItemTitle")}</h4>
          </div>
          <div className={styles.profileItem}>
            <Image
              src={"/images/Rectangle-7.png"}
              width={400}
              height={470}
              alt="img"
            />
            <h4>{t("ProfileSliderItemTitle")}</h4>
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.paginationItem}>
            {locale === "ar" ? <FaLongArrowAltRight /> : <FaLongArrowAltLeft />}
          </div>
          <div className={styles.paginationItem}>1</div>
          <div className={styles.paginationItem}>2</div>
          <div className={styles.paginationItem}>3</div>
          <div className={styles.paginationItem}>4</div>
          <div className={styles.paginationItem}>
            {locale === "ar" ? <FaLongArrowAltLeft /> : <FaLongArrowAltRight />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
