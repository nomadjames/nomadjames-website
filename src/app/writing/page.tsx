import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Writing | James Dishman",
  description: "Technical writing on UX engineering, AI systems, and creative technology.",
};

const posts = [
  {
    slug: "working-with-clarence",
    title: "Working With Clarence",
    date: "May 4, 2026",
    description:
      "How I use Clarence for UX critique, creative prototyping, and system workflow without handing off judgment.",
    tags: ["AI Systems", "Human-AI Collaboration", "UX Critique", "Verification"],
  },
  {
    slug: "clarence-needed-a-system-wiki",
    title: "Why Clarence Needed a System Wiki",
    date: "April 11, 2026",
    description:
      "Why important system knowledge could not stay trapped in chat logs, repo docs, and a vault that could point at the wrong place.",
    tags: ["AI Systems", "Knowledge Architecture", "Memory", "Hermes"],
  },
  {
    slug: "sensorsynth-needed-a-wiki",
    title: "Why SensorSynthFM Needed a Wiki Before It Needed More Features",
    date: "April 11, 2026",
    description:
      "Why SensorSynthFM had a truth problem, not an idea problem, and how a project wiki keeps the thesis-demo work honest.",
    tags: ["SensorSynthFM", "Documentation", "Creative Technology", "Research"],
  },
  {
    slug: "pretext-30-year-browser-problem",
    title: "Implementing Pretext: Solving a 30-Year Browser Problem on a Portfolio Site",
    date: "March 31, 2026",
    description:
      "How I used Cheng Lou's new 15KB library to replace DOM-based text measurement with Canvas-powered character-level layout, and why it matters for interaction design.",
    tags: ["Pretext", "Typography", "Performance", "React"],
  },
];

export default function WritingPage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Writing</h1>
          <p className={styles.subtitle}>
            Technical notes on building things at the intersection of design, AI, and code.
          </p>
        </header>

        <section className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.cardDate}>{post.date}</div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDesc}>{post.description}</p>
              <div className={styles.tags}>
                {post.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
