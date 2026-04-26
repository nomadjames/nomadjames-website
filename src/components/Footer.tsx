import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <span className={styles.columnLabel}>Site</span>
            <nav className={styles.columnLinks} aria-label="Site navigation">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Work</Link>
              <Link href="/lab">Lab</Link>
              <Link href="/writing">Writing</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <span className={styles.columnLabel}>Work</span>
            <nav className={styles.columnLinks} aria-label="Work navigation">
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/building">Building</Link>
              <Link href="/vision">Vision</Link>
              <Link href="/resume">Résumé</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/services">Services</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <span className={styles.columnLabel}>Elsewhere</span>
            <nav className={styles.columnLinks} aria-label="External links">
              <a href="https://www.linkedin.com/in/james-dishman-3a512163/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/nomadjames" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://open.substack.com/pub/nomadjames" target="_blank" rel="noopener noreferrer">Substack</a>
              <a href="https://medium.com/@nomadjames" target="_blank" rel="noopener noreferrer">Medium</a>
              <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer">SoundCloud</a>
              <a href="https://nomadjames.bandcamp.com/" target="_blank" rel="noopener noreferrer">Bandcamp</a>
              <a href="https://www.mixcloud.com/nomadjames/" target="_blank" rel="noopener noreferrer">Mixcloud</a>
            </nav>
            <p className={styles.copyright}>
              &copy; {year} James Dishman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
