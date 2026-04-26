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
    title: "SensorSynth FM",
    category: "Product Design · iOS",
    year: "2026",
    blurb: "An iPad FM synthesizer that treats motion, environment, camera, spatial, and touch as modulation sources. This is the most important active product build on the site, and it stays here until the system is finished enough to graduate into the completed portfolio.",
    link: "/portfolio/sensorsynth",
  },
  {
    num: "02",
    title: "Oblique Oracle",
    category: "Product Design · AI",
    year: "2026",
    blurb: "A divination app built around I Ching generation, Oblique Strategies, and AI synthesis. It is both a product direction and a design-research artifact for studying how people respond to fluent algorithmic guidance.",
    link: "/portfolio/oblique-oracle",
  },
];

function FeaturedList({ items }: { items: FeaturedItem[] }) {
  return (
    <div className={styles.workList}>
      {items.map((item) => (
        <article key={item.num} className={styles.workItem}>
          <span className={styles.workNum}>{item.num}</span>
          <div className={styles.workContent}>
            <h3 className={styles.workTitleHeading}>
              <a href={item.link} className={styles.workTitle}>{item.title}</a>
            </h3>
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

export default function BuildingPage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <header className={styles.header}>
          <div className={styles.headerRule} />
          <h1 className={styles.pageTitle}>Building</h1>
          <p className={styles.subtitle}>
            Active work in development. These projects are public and important, but they are not done yet.
          </p>
        </header>

        <section>
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 01</span>
            <h2 className={styles.moreWorkTitle}>Current Focus</h2>
            <p className={styles.moreWorkDesc}>
              The main projects still moving under active design and development.
            </p>
          </div>
          <FeaturedList items={featured} />
        </section>
      </main>
    </div>
  );
}
