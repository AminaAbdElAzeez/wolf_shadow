import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
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
            <p className={styles.footerItemDesc}>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor
              incididunt.
            </p>
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
            <h4 className={styles.footerItemTitle}>Menu Bar</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/works"}>Works</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/about"}>About us</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h4 className={styles.footerItemTitle}>quick contact</h4>
            <ul className={styles.footerLocation}>
              <li>
                <Image
                  src={"/images/location.png"}
                  alt="image"
                  width={24}
                  height={25}
                />
                <p>
                  Saudi Arabia, <br /> Dammam, Jeddah
                </p>
              </li>
              <li>
                <Image
                  src={"/images/call.png"}
                  alt="image"
                  width={24}
                  height={25}
                />
                <p>+603 4784 273 12</p>
              </li>
              <li>
                <Image
                  src={"/images/sms.png"}
                  alt="image"
                  width={24}
                  height={25}
                />
                <p>wolfshadow@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className={styles.copyright}>
          <p>Copyright © 2025 Apps Square. All Rights Reserved.</p>
          <ul className={styles.copyrightList}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
