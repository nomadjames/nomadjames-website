"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const workActive = pathname.startsWith("/portfolio") || pathname.startsWith("/building") || pathname.startsWith("/vision");

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="nomadjames — home" onClick={closeMenu}>
          <span className={styles.logoAccent}>nomad</span>james
        </Link>
        <button
          className={styles.toggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`} />
        </button>
        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          <Link
            href="/portfolio"
            className={`${styles.link} ${workActive ? styles.active : ""}`}
            aria-current={workActive ? "page" : undefined}
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            href="/lab"
            className={`${styles.link} ${pathname.startsWith("/lab") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/lab") ? "page" : undefined}
            onClick={closeMenu}
          >
            Lab
          </Link>
          <Link
            href="/writing"
            className={`${styles.link} ${pathname.startsWith("/writing") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/writing") ? "page" : undefined}
            onClick={closeMenu}
          >
            Writing
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${pathname.startsWith("/about") || pathname.startsWith("/resume") || pathname.startsWith("/contact") || pathname.startsWith("/services") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/about") || pathname.startsWith("/resume") || pathname.startsWith("/contact") || pathname.startsWith("/services") ? "page" : undefined}
            onClick={closeMenu}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
