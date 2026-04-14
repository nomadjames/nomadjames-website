import ClarenceGraphFrame from "@/components/ClarenceGraphFrame";
import styles from "./page.module.css";

export const metadata = {
  title: "Clarence Knowledge Graph | James Dishman",
  description:
    "Interactive public-safe graph view of the Clarence knowledge surface.",
};

export default function ClarenceGraphPage() {
  return (
    <main className={styles.page}>
      <ClarenceGraphFrame
        className={styles.frame}
        title="Clarence Knowledge Graph"
      />
    </main>
  );
}
