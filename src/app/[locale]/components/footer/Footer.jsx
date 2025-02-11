import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <Link href="/" className={styles.footerItem}>
            <Image
              src="/images/footer-logo.png"
              alt="Logo"
              width={170}
              height={130}
            />
          </Link>
          <div className={styles.footerItem}>
            <p
              className={styles.footerItemDesc}
              dangerouslySetInnerHTML={{ __html: t("footerDesc") }}
            ></p>
            <ul className={styles.footerSocialList}>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/images/facebook.png"}
                    width={39}
                    height={38}
                    alt="image"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/images/twitter.png"}
                    width={39}
                    height={38}
                    alt="image"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/images/instagram.png"}
                    width={39}
                    height={38}
                    alt="image"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/images/youtube.png"}
                    width={39}
                    height={38}
                    alt="image"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h4 className={styles.footerItemTitle}>{t("footerMenuBar")}</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href={"/"}>{t("footerHome")}</Link>
              </li>
              <li>
                <Link href={"/works"}>{t("footerWorks")}</Link>
              </li>
              <li>
                <Link href={"/services"}>{t("footerServices")}</Link>
              </li>
              <li>
                <Link href={"/about"}>{t("footerAbout")}</Link>
              </li>
              <li>
                <Link href={"/contact"}>{t("footerContact")}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h4 className={styles.footerItemTitle}>
              {t("footerQuickContact")}
            </h4>
            <ul className={styles.footerLocation}>
              <li>
                <Image
                  src={"/images/location.png"}
                  alt="image"
                  width={24}
                  height={25}
                />
                <p dangerouslySetInnerHTML={{ __html: t("footerAddress") }}></p>
              </li>
              <li>
                <Image
                  src={"/images/call.png"}
                  alt="image"
                  width={24}
                  height={25}
                />
                <p>{t("footerPhone")}</p>
              </li>
              <li>
                <Image
                  src={"/images/sms.png"}
                  alt="image"
                  width={24}
                  height={25}
                />
                <p>{t("footerEmail")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className={styles.copyright}>
          <p>{t("footerCopyRight")}</p>
          <ul
            className={
              locale === "ar" ? styles.copyrightListAr : styles.copyrightList
            }
          >
            <li>{t("footerPrivacy")}</li>
            <li>{t("footerTerms")}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
