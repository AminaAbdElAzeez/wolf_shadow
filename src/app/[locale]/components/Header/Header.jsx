"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

function Header() {
  const [toggle, setToggle] = useState(false);
  const path = usePathname();
  const t = useTranslations("Header");

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navContent}>
          <Link rel="preload" href="/" className={styles.logo}>
            <Image
              src="/images/Artboard.png"
              alt="Logo"
              width={89}
              height={70}
              priority
            />
          </Link>
          <div
            className={styles.navLinksWrapper}
            style={{
              clipPath:
                (toggle && "polygon(0 0 , 100% 0 , 100% 100% , 0 100%)") || "",
            }}
          >
            <ul className={styles.navLinks}>
              <li>
                <Link
                  href="/"
                  onClick={() => setToggle(false)}
                  className={`${styles.link} ${
                    path === "/" || path === "/en" || path === "/ar"
                      ? styles.active
                      : ""
                  }`}
                >
                  {t("navHome")}
                </Link>
              </li>

              <li>
                <Link
                  href="/works"
                  onClick={() => setToggle(false)}
                  className={`${styles.link} ${
                    path.includes("/works") ? styles.active : ""
                  }`}
                >
                  {t("Works")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => setToggle(false)}
                  className={`${styles.link} ${
                    path.includes("/services") ? styles.active : ""
                  }`}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setToggle(false)}
                  className={`${styles.link} ${
                    path.includes("/about") ? styles.active : ""
                  }`}
                >
                  {t("About")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setToggle(false)}
                  className={`${styles.link} ${
                    path.includes("/contact") ? styles.active : ""
                  }`}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Link href="/services" className={styles.orderBtn}>
              {t("OrderServices")}
            </Link>
            <LanguageSwitcher />
            <div className={styles.menu}>
              {toggle ? (
                <IoMdClose onClick={() => setToggle((prev) => !prev)} />
              ) : (
                <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
