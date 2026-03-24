import styles from "./SocialLinks.module.css";

const socials = [
  { name: "SoundCloud", url: "https://soundcloud.com/nomadjames" },
  { name: "Bandcamp", url: "https://nomadjames.bandcamp.com/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/james-dishman-3a512163/" },
  { name: "X / Twitter", url: "https://twitter.com/nomadjames" },
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
