import styles from "../portfolio/page.module.css";

type FeaturedItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  link: string;
};

const featured: FeaturedItem[] = [
  {
    num: "01",
    title: "AI Music Education",
    category: "Vision / Product Design",
    year: "2026",
    blurb: "A planned direction at the intersection of music production, UX research, and AI systems. It is not a shipped product yet. It lives here because the concept matters, but it is still upstream of building.",
    link: "/portfolio/ai-music-education",
  },
];

function FeaturedList({ items }: { items: FeaturedItem[] }) {
  return (
    <div className={styles.workList}>
      {items.map((item) => (
        <article key={item.num} className={styles.workItem}>
          <span className={styles.workNum}>{item.num}</span>
          <div className={styles.workContent}>
            <a href={item.link} className={styles.workTitle}>{item.title}</a>
            <div className={styles.workMeta}>
              <span className={styles.category}>{item.category}</span>
              <span className={styles.metaDot} aria-hidden="true">·</span>
              <span className={styles.year}>{item.year}</span>
            </div>
            <p className={styles.featuredBlurb}>{item.blurb}</p>
          </div>
          <div className={styles.statusBlock}>
            <a href={item.link} className={styles.readLink}>Open →</a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function VisionPage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <header className={styles.header}>
          <div className={styles.headerRule} />
          <h1 className={styles.pageTitle}>Vision</h1>
          <p className={styles.subtitle}>
            Planned work and concept direction. These ideas matter, but they are still ahead of active implementation.
          </p>
        </header>

        <section>
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 01</span>
            <h2 className={styles.moreWorkTitle}>Planned Direction</h2>
            <p className={styles.moreWorkDesc}>
              Work that is still in planning, framing, and concept definition.
            </p>
          </div>
          <FeaturedList items={featured} />
        </section>
      </main>
    </div>
  );
}
