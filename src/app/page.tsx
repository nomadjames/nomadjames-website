import styles from "./page.module.css";

type FeaturedItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  tldr: string;
  link: string;
};

type CompactItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  link: string;
};

const featuredStudies: FeaturedItem[] = [
  {
    num: "01",
    title: "Clarence: Autonomous Agent Ecosystem",
    category: "AI Systems Design",
    year: "2025–2026",
    tldr: "I built an autonomous AI system that manages a knowledge base of 3,397 active memories, 2,474 entities, and 10,349 active facts with full vector search across 2,075 indexed vault notes, routes tasks across multiple models by cost and capability, syncs reference materials from Google Drive, and posts reports to 9 Discord channels. Then the platform I built it on changed the rules, and I had to migrate the entire system under constraint in 48 hours. The real lesson was not about automation. It was about trust calibration, platform dependency, and what happens when you design a collaborator instead of a tool.",
    link: "/portfolio/clarence",
  },
  {
    num: "02",
    title: "Ableton UX Evaluation Suite",
    category: "UX Research · Interaction Design",
    year: "2024–2026",
    tldr: "Multiple UX evaluation methods applied to three Ableton products, grounded in deep music production experience and a decade leading the Pittsburgh Ableton User Group. The suite revealed a consistent pattern: Ableton designs for insiders, and that works until someone shows up for the first time.",
    link: "/portfolio/ableton-evaluation-suite",
  },
  {
    num: "03",
    title: "Accessibility Audit Suite: Music Tech Meets WCAG",
    category: "UX Research",
    year: "2025",
    tldr: "I ran a multi-method accessibility audit across music tech, news, social media, and academic sites. The work covered WCAG compliance, hands-on VoiceOver screen reader testing on GroundNews, an Instagram accessibility audit of a university account, contrast analysis, PDF remediation, and cognitive accessibility research. The biggest finding was not any single violation. It was that accessibility best practices for people and machine readability for AI are the same goal, and most teams are failing at both.",
    link: "/portfolio/accessibility-audit",
  },
];

const building: CompactItem[] = [
  {
    num: "01",
    title: "SensorSynth FM",
    category: "Product Design · iOS",
    year: "2026",
    blurb: "An iPad FM synthesizer that treats device sensors, motion, environment, camera, spatial, and touch as modulation sources. This is the main active build.",
    link: "/portfolio/sensorsynth",
  },
  {
    num: "02",
    title: "Oblique Oracle",
    category: "Product Design · AI",
    year: "2026",
    blurb: "A divination app that combines I Ching generation, Oblique Strategies, and AI synthesis to study how people respond when algorithmic output is framed as wisdom.",
    link: "/portfolio/oblique-oracle",
  },
];

const vision: CompactItem[] = [
  {
    num: "01",
    title: "AI Music Education",
    category: "Vision / Product Design",
    year: "2026",
    blurb: "A concept for electronic music learning built from the overlap of production experience, UX research, and AI system design.",
    link: "/portfolio/ai-music-education",
  },
];

function FeaturedCardList({ items }: { items: FeaturedItem[] }) {
  return (
    <div className={styles.cardList}>
      {items.map((item) => (
        <article key={item.num} className={styles.card}>
          <span className={styles.cardNum}>{item.num}</span>
          <div className={styles.cardContent}>
            <a href={item.link} className={styles.cardTitle}>{item.title}</a>
            <div className={styles.cardMeta}>
              <span className={styles.cardCategory}>{item.category}</span>
              <span className={styles.cardDot} aria-hidden="true">·</span>
              <span className={styles.cardYear}>{item.year}</span>
            </div>
            <p className={styles.cardTldr}>{item.tldr}</p>
            <a href={item.link} className={styles.cardLink}>Read →</a>
          </div>
        </article>
      ))}
    </div>
  );
}

function CompactLinkList({ items }: { items: CompactItem[] }) {
  return (
    <div className={styles.compactList}>
      {items.map((item) => (
        <article key={item.num} className={styles.compactItem}>
          <span className={styles.compactNum}>{item.num}</span>
          <div className={styles.compactContent}>
            <a href={item.link} className={styles.compactTitle}>{item.title}</a>
            <div className={styles.cardMeta}>
              <span className={styles.cardCategory}>{item.category}</span>
              <span className={styles.cardDot} aria-hidden="true">·</span>
              <span className={styles.cardYear}>{item.year}</span>
            </div>
            <p className={styles.compactBlurb}>{item.blurb}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="container">
        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>UX Designer & AI Systems Builder</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>MS User Experience</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Youngstown, OH</span>
          </div>
          <h1 className={styles.name}>James Dishman</h1>
          <p className={styles.mantra}>Every problem has a solution.</p>
          <div className={styles.thesis}>
            <p>Technology should make humans better.</p>
            <p>I design the part where that actually happens.</p>
          </div>
          <p className={styles.bio}>
            Electronic music production and a decade leading Pittsburgh&apos;s Ableton User Group have given me a
            framework for thinking about tools: what they enable, what they foreclose, and who they leave out.
            That instinct is now a research practice, with an MS thesis taking shape around AI, creativity,
            and what it means to design systems that shape how people think.
          </p>
          <div className={styles.heroLinks}>
            <a href="https://www.linkedin.com/in/james-dishman-3a512163/" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              LinkedIn ↗
            </a>
            <a href="https://github.com/nomadjames" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              GitHub ↗
            </a>
            <a href="/contact" className={styles.heroLink}>Contact ↗</a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Portfolio</span>
            <div className={styles.sectionLine} />
          </div>
          <FeaturedCardList items={featuredStudies} />
          <div className={styles.sectionFooter}>
            <a href="/portfolio" className={styles.allWorkLink}>See portfolio →</a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Building</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.sectionIntro}>
            Active work in development. These projects are real, public, and still changing.
          </p>
          <CompactLinkList items={building} />
          <div className={styles.sectionFooter}>
            <a href="/building" className={styles.allWorkLink}>Open building →</a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Vision</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.sectionIntro}>
            Planned work and concept direction. These are ideas I think are worth pursuing next.
          </p>
          <CompactLinkList items={vision} />
          <div className={styles.sectionFooter}>
            <a href="/vision" className={styles.allWorkLink}>Open vision →</a>
          </div>
        </section>

      </main>
    </div>
  );
}
