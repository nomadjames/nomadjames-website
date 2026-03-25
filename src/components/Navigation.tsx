"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>nomad</span>james
        </Link>
        <div className={styles.links}>
          <Link
            href="/portfolio"
            className={`${styles.link} ${pathname.startsWith("/portfolio") ? styles.active : ""}`}
          >
            Work
          </Link>
          <Link
            href="/writings"
            className={`${styles.link} ${pathname.startsWith("/writings") ? styles.active : ""}`}
          >
            Writing
          </Link>
          <Link
            href="/resume"
            className={`${styles.link} ${pathname.startsWith("/resume") ? styles.active : ""}`}
          >
            Résumé
          </Link>
        </div>
      </div>
    </nav>
  );
}
