import styles from "./page.module.css";

const writing = [
  {
    num: "01",
    title: "Universal Design and the Machine Reader",
    slug: "universal-design-machine-reader",
    date: "March 2025",
    type: "Essay",
    excerpt:
      "Accessibility best practices don't just help people — they help machines. Clean semantic structure, descriptive alt text, logical reading order: the same work that makes a page navigable for a screen reader user makes it parseable by an LLM. The two goals turn out to be the same goal.",
    status: "coming",
  },
  {
    num: "02",
    title: "Tools and Their Users: On What It Means to Design for Capability",
    slug: "tools-and-their-users",
    date: "2025",
    type: "Essay",
    excerpt:
      "Thirty years of making music with software gave me a lens for thinking about tools. Not what they do — what they allow. And crucially: who they were built imagining, and who has to work around that imagination.",
    status: "coming",
  },
  {
    num: "03",
    title: "The Ableton Effect: How One Company Taught Me to Think About UX",
    slug: "ableton-effect",
    date: "2025",
    type: "Reflection",
    excerpt:
      "I've volunteered with Ableton for over a decade. At some point I realized their documentation and interface design had shaped how I think about systems — and that this was worth examining carefully.",
    status: "coming",
  },
];

export default function Writings() {
  return (
    <div className={styles.page}>
      <main className="container">
        <header className={styles.header}>
          <div className={styles.headerRule} />
          <h1 className={styles.pageTitle}>Writing</h1>
          <p className={styles.subtitle}>
            Essays on design, technology, music, and the spaces where they collide.
          </p>
        </header>

        <div className={styles.writingList}>
          {writing.map((piece) => (
            <article key={piece.num} className={styles.writingItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemNum}>{piece.num}</span>
                <div className={styles.itemMeta}>
                  <span className={styles.itemType}>{piece.type}</span>
                  <span className={styles.metaDot}>·</span>
                  <time className={styles.itemDate}>{piece.date}</time>
                </div>
                {piece.status === "coming" && (
                  <span className={styles.statusBadge}>Coming</span>
                )}
              </div>
              <h2 className={styles.itemTitle}>{piece.title}</h2>
              <p className={styles.itemExcerpt}>{piece.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
