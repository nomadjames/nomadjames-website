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
                    nomadjames
                </Link>
                <div className={styles.links}>
                    <Link
                        href="/portfolio"
                        className={`${styles.link} ${pathname === '/portfolio' ? styles.active : ''}`}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/writings"
                        className={`${styles.link} ${pathname === '/writings' ? styles.active : ''}`}
                    >
                        Writings
                    </Link>
                </div>
            </div>
        </nav>
    );
}
