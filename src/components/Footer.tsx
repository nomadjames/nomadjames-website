import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copyright}>&copy; {year} nomad james. All rights reserved.</p>
                    <div className={styles.socials}>
                        {/* Socials will go here later */}
                        <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer">SoundCloud</a>
                        <a href="https://twitter.com/nomadjames" target="_blank" rel="noopener noreferrer">X / Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
