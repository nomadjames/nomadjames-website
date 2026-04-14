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
    blurb: "An autonomous AI collaborator built to manage memory, route work across models, and operate as a real daily system under practical constraints. The case study focuses on trust calibration, memory design, and what changed when the stack had to migrate under pressure.",
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
    blurb: "A multi-method accessibility audit across web, social, assistive technology, PDF remediation, and cognitive accessibility. The project combines technical remediation with practical design ethics.",
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
    title: "Touchscreen Synthesizer Research Survey",
    category: "Research · Music Technology",
    year: "2026",
    link: "/pdfs/touchscreen-synthesizer-research-survey.pdf",
  },
  {
    num: "06",
    title: "iPad Music App Development Research Report",
    category: "Product Research · Music Technology",
    year: "2026",
    link: "/pdfs/ipad-music-app-development-research-report.pdf",
  },
  {
    num: "07",
    title: "Food Insecurity Discovery Research",
    category: "UX Research",
    year: "2025",
    link: "/portfolio/food-insecurity",
  },
  {
    num: "08",
    title: "Health Translator",
    category: "UX Research",
    year: "2025",
    link: "/portfolio/health-translator",
  },
  {
    num: "09",
    title: "PAUG.net: Community Platform",
    category: "Web Development · Community Design",
    year: "2026",
    link: "/portfolio/paug",
  },
  {
    num: "10",
    title: "Graduate Assistantship: UX Textbook Authoring",
    category: "Academic Research",
    year: "2025–2026",
    link: "/portfolio/graduate-assistantship",
  },
  {
    num: "11",
    title: "Ableton Learning Synths Cognitive Walkthrough",
    category: "UX Evaluation · Cognitive Walkthrough",
    year: "2026",
    link: "/pdfs/ableton-learning-synths-cognitive-walkthrough.pdf",
  },
  {
    num: "12",
    title: "Stakeholder Analysis of Ableton Live",
    category: "UX Strategy · Stakeholder Research",
    year: "2024",
    link: "/pdfs/ableton-stakeholder-analysis.pdf",
  },
  {
    num: "13",
    title: "Card Sort Analysis: Methodology in Non-IA Contexts",
    category: "UX Research",
    year: "2024",
    link: "/portfolio/card-sort-americorps",
  },
  {
    num: "14",
    title: "Algorithmic Storytelling v3: Interactive Narrative as Political Act",
    category: "Creative Coding",
    year: "2025",
    link: "/portfolio/algorithmic-storytelling",
  },
  {
    num: "15",
    title: "Mobile Design Patterns",
    category: "Interaction Design",
    year: "2025",
    link: "/pdfs/mobile-design-patterns.pdf",
  },
  {
    num: "16",
    title: "Adobe Express Redesign: Paper Prototyping",
    category: "Usability Testing · Prototype Evaluation",
    year: "2025",
    link: "/pdfs/usability-test-plan-adobe-express.pdf",
  },
  {
    num: "17",
    title: "Apple.com vs BestBuy.com: Unmoderated Usability Study",
    category: "Usability Testing · Unmoderated Research",
    year: "2024–2026",
    link: "/pdfs/loop11-usability-analysis.pdf",
  },
  {
    num: "18",
    title: "Chipotle Usability Brief",
    category: "Usability Testing · Study Design",
    year: "2026",
    link: "/pdfs/usability-brief-chipotle.pdf",
  },
  {
    num: "19",
    title: "Unmoderated Usability Testing Methods",
    category: "Usability Testing · Research Methods",
    year: "2024–2026",
    link: "/pdfs/unmoderated-usability-testing.pdf",
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
            Completed work. Featured projects stay at the top, followed by the broader archive.
          </p>
        </header>

        <section>
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 01</span>
            <h2 className={styles.moreWorkTitle}>Featured Work</h2>
            <p className={styles.moreWorkDesc}>
              Selected case studies from the top of the portfolio.
            </p>
          </div>
          <FeaturedList items={featured} />
        </section>

        <section className={`${styles.musicSection} ${styles.moreWorkSection}`}>
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 02</span>
            <h2 className={styles.moreWorkTitle}>Archive</h2>
            <p className={styles.moreWorkDesc}>
              Completed work beyond the top three, including supporting reports and artifacts from the broader archive.
            </p>
          </div>
          <LinkList items={archive} />
        </section>
      </main>
    </div>
  );
}
