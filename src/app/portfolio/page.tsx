import styles from "./page.module.css";

type FeaturedItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  link: string;
};

type LinkItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  link: string;
};

const featured: FeaturedItem[] = [
  {
    num: "01",
    title: "Clarence: Autonomous Agent Ecosystem",
    category: "AI Systems Design",
    year: "2025–2026",
    blurb: "An autonomous AI collaborator built to manage memory, route work across models, and operate as a real daily system under practical constraints. It is the clearest expression of my systems thinking, research instincts, and design judgment in one project.",
    link: "/portfolio/clarence",
  },
  {
    num: "02",
    title: "Ableton UX Evaluation Suite",
    category: "UX Research · Interaction Design",
    year: "2024–2026",
    blurb: "A multi-method evaluation suite across three Ableton products, grounded in long-term music production experience and a decade leading the Pittsburgh Ableton User Group. The work shows how domain expertise changes what good research can see.",
    link: "/portfolio/ableton-evaluation-suite",
  },
  {
    num: "03",
    title: "Accessibility Audit Suite: Music Tech Meets WCAG",
    category: "UX Research",
    year: "2025",
    blurb: "A multi-method accessibility audit across web, social, assistive technology, PDF remediation, and cognitive accessibility. It is one of the strongest examples of rigor, breadth, and practical design ethics on the site.",
    link: "/portfolio/accessibility-audit",
  },
];

const archive: LinkItem[] = [
  {
    num: "04",
    title: "Usability Testing Methods",
    category: "UX Research",
    year: "2024–2026",
    link: "/portfolio/usability-testing",
  },
  {
    num: "05",
    title: "Food Insecurity Discovery Research",
    category: "UX Research",
    year: "2025",
    link: "/portfolio/food-insecurity",
  },
  {
    num: "06",
    title: "Health Translator",
    category: "UX Research",
    year: "2025",
    link: "/portfolio/health-translator",
  },
  {
    num: "07",
    title: "PAUG.net: Community Platform",
    category: "Web Development · Community Design",
    year: "2026",
    link: "/portfolio/paug",
  },
  {
    num: "08",
    title: "Graduate Assistantship: UX Textbook Authoring",
    category: "Academic Research",
    year: "2025–2026",
    link: "/portfolio/graduate-assistantship",
  },
  {
    num: "09",
    title: "Card Sort Analysis: Methodology in Non-IA Contexts",
    category: "UX Research",
    year: "2024",
    link: "/portfolio/card-sort-americorps",
  },
  {
    num: "10",
    title: "Algorithmic Storytelling v3: Interactive Narrative as Political Act",
    category: "Creative Coding",
    year: "2025",
    link: "/portfolio/algorithmic-storytelling",
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
            <a href={item.link} className={styles.readLink}>Read →</a>
          </div>
        </article>
      ))}
    </div>
  );
}

function LinkList({ items }: { items: LinkItem[] }) {
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
          </div>
          <div className={styles.statusBlock}>
            <a href={item.link} className={styles.readLink}>Read →</a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className="container">
        <header className={styles.header}>
          <div className={styles.headerRule} />
          <h1 className={styles.pageTitle}>Portfolio</h1>
          <p className={styles.subtitle}>
            Completed work. The three strongest case studies stay at the top. Everything else follows in order of importance.
          </p>
        </header>

        <section>
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 01</span>
            <h2 className={styles.moreWorkTitle}>Featured Work</h2>
            <p className={styles.moreWorkDesc}>
              The clearest representation of how I think, research, design, and build.
            </p>
          </div>
          <FeaturedList items={featured} />
        </section>

        <section className={`${styles.musicSection} ${styles.moreWorkSection}`}>
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 02</span>
            <h2 className={styles.moreWorkTitle}>Archive</h2>
            <p className={styles.moreWorkDesc}>
              Completed work beyond the top three. Still public, just lower in the hierarchy.
            </p>
          </div>
          <LinkList items={archive} />
        </section>

        <section className={`${styles.musicSection} ${styles.moreWorkSection}`} id="more-work">
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 03</span>
            <h2 className={styles.moreWorkTitle}>More Work</h2>
            <p className={styles.moreWorkDesc}>
              Supporting PDFs and additional project artifacts.
            </p>
          </div>
          <div className={styles.musicContent}>
            <div className={styles.musicLinks}>
              <a href="/pdfs/usability-test-plan-adobe-express.pdf" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                Adobe Express Redesign: Paper Prototyping (PDF) ↗
              </a>
              <a href="/pdfs/loop11-usability-analysis.pdf" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                Apple.com vs BestBuy.com: Unmoderated Usability Study (PDF) ↗
              </a>
              <a href="/pdfs/mobile-design-patterns.pdf" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                Mobile Design Patterns (PDF) ↗
              </a>
              <a href="/pdfs/usability-brief-chipotle.pdf" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                Chipotle Usability Brief (PDF) ↗
              </a>
              <a href="/pdfs/unmoderated-usability-testing.pdf" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                Unmoderated Usability Testing Methods (PDF) ↗
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
