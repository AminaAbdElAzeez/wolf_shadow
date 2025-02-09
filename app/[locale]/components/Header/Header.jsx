"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header() {
  const [toggle, setToggle] = useState(false);
  const path = usePathname();
  const t = useTranslations("Header"); // استخدام الترجمة بشكل صحيح

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
                  href={"/"}
                  onClick={() => setToggle(false)}
                  className={`styles.link ${
                    path === "/" ? styles.active : styles.link
                  }`}
                >
                  {t("navHome")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/works"}
                  onClick={() => setToggle(false)}
                  className={`styles.link ${
                    path === "/works" ? styles.active : styles.link
                  }`}
                >
                  {t("Works")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  onClick={() => setToggle(false)}
                  className={`styles.link ${
                    path === "/services" ? styles.active : styles.link
                  }`}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  onClick={() => setToggle(false)}
                  className={`styles.link ${
                    path === "/about" ? styles.active : styles.link
                  }`}
                >
                  {t("About")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  onClick={() => setToggle(false)}
                  className={`styles.link ${
                    path === "/contact" ? styles.active : styles.link
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
