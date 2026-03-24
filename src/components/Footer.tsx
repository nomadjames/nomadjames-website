import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.copyright}>
            &copy; {year} James Dishman
          </p>
          <div className={styles.socials}>
            <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer">SoundCloud</a>
            <a href="https://nomadjames.bandcamp.com/" target="_blank" rel="noopener noreferrer">Bandcamp</a>
            <a href="https://www.linkedin.com/in/james-dishman-3a512163/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/nomadjames" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
