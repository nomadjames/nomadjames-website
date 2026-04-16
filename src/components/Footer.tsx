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
              <a href="/">Home</a>
              <a href="/portfolio">Work</a>
              <a href="/lab">Lab</a>
              <a href="/writing">Writing</a>
              <a href="/about">About</a>
            </nav>
          </div>

          <div className={styles.column}>
            <span className={styles.columnLabel}>Work</span>
            <nav className={styles.columnLinks} aria-label="Work navigation">
              <a href="/portfolio">Portfolio</a>
              <a href="/building">Building</a>
              <a href="/vision">Vision</a>
              <a href="/resume">Résumé</a>
              <a href="/contact">Contact</a>
              <a href="/services">Services</a>
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
