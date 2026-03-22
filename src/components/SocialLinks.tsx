import styles from "./SocialLinks.module.css";

const socials = [
    { name: "SoundCloud", url: "https://soundcloud.com/nomadjames" },
    { name: "Bandcamp", url: "https://nomadjames.bandcamp.com/" },
    { name: "Twitter / X", url: "https://twitter.com/nomadjames" },
    { name: "Facebook", url: "https://www.facebook.com/nomadjames" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/james-dishman-3a512163/" },
];

export default function SocialLinks() {
    return (
        <div className={styles.container}>
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    {social.name}
                </a>
            ))}
        </div>
    );
}
