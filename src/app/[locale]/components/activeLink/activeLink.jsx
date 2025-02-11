"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./activeLink.module.css";

function ActiveLink({ children, href }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`styles.link ${path === href ? styles.active : styles.link}`}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
