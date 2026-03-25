"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="nomadjames — home">
          <span className={styles.logoAccent}>nomad</span>james
        </Link>
        <div className={styles.links}>
          <Link
            href="/portfolio"
            className={`${styles.link} ${pathname.startsWith("/portfolio") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/portfolio") ? "page" : undefined}
          >
            Work
          </Link>
          <Link
            href="/writings"
            className={`${styles.link} ${pathname.startsWith("/writings") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/writings") ? "page" : undefined}
          >
            Writing
          </Link>
          <Link
            href="/resume"
            className={`${styles.link} ${pathname.startsWith("/resume") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/resume") ? "page" : undefined}
          >
            Résumé
          </Link>
        </div>
      </div>
    </nav>
  );
}
