"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
            className={`${styles.link} ${pathname.startsWith("/portfolio") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/portfolio") ? "page" : undefined}
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${pathname.startsWith("/about") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/about") ? "page" : undefined}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/resume"
            className={`${styles.link} ${pathname.startsWith("/resume") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/resume") ? "page" : undefined}
            onClick={closeMenu}
          >
            Résumé
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
            href="/services"
            className={`${styles.link} ${pathname.startsWith("/services") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/services") ? "page" : undefined}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${pathname.startsWith("/contact") ? styles.active : ""}`}
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
