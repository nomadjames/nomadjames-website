import styles from "./Tldr.module.css";

interface TldrProps {
  children: React.ReactNode;
}

export default function Tldr({ children }: TldrProps) {
  return (
    <aside className={styles.tldr} role="note" aria-label="TLDR summary">
      <span className={styles.label}>TL;DR</span>
      <p className={styles.text}>{children}</p>
    </aside>
  );
}
