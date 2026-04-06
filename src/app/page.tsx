import styles from "./page.module.css";

const caseStudies = [
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
    tldr: "I ran a multi-method accessibility audit across music tech, news, social media, and academic sites. The work covered WCAG compliance, hands-on VoiceOver screen reader testing on GroundNews, an Instagram accessibility audit of a university account, contrast analysis, PDF remediation, and cognitive accessibility research. The biggest finding wasn't any single violation. It was that accessibility best practices for people and machine readability for AI are the same goal, and most teams are failing at both.",
    link: "/portfolio/accessibility-audit",
  },
];

const building = [
  {
    num: "01",
    title: "SensorSynth FM",
    category: "Product Design · iOS",
    year: "2026",
    tldr: "An in-progress iPad FM synthesizer that treats every available device sensor as a modulation source: motion, environment, camera, spatial, and touch. The more environmental variables feed the synthesis engine, the more unpredictable and unrepeatable each patch becomes. The design question: what happens when the instrument responds not just to your body, but to the full physical context you exist in?",
    link: "/portfolio/sensorsynth",
  },
  {
    num: "02",
    title: "Oblique Oracle",
    category: "Product Design · AI",
    year: "2026",
    tldr: "A divination app that combines I Ching hexagram generation, Brian Eno's Oblique Strategies, and AI synthesis into a single reading. The point is not prediction. It is studying what happens to human reflection and judgment when algorithmic output is framed as wisdom instead of information.",
    link: "/portfolio/oblique-oracle",
  },
  {
    num: "03",
    title: "PAUG.net",
    category: "Web Development · Community Design",
    year: "2026",
    tldr: "The Pittsburgh Ableton User Group needed a home that wasn't rented from a social media platform. I designed and built paug.net as a standalone community hub with events, blog, founder bios, and a CMS so non-technical co-founders can publish content. The site is live, DNS is configured, and PAUG finally has a URL it owns.",
    link: "/portfolio/paug",
  },
];

const vision = [
  {
    num: "01",
    title: "AI Music Education",
    category: "Vision / Product Design",
    year: "2026",
    tldr: "Thirty years of making electronic music. An MS in UX. An AI agent system running in production. Nobody has combined all three to solve music education. This is the concept.",
    link: "/portfolio/ai-music-education",
  },
];

type Card = {
  num: string;
  title: string;
  category: string;
  year: string;
  tldr: string;
  link: string;
};

function CardList({ items }: { items: Card[] }) {
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

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>UX Designer & AI Systems Builder</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>MS User Experience Design</span>
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

        {/* Case Studies */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Case Studies</span>
            <div className={styles.sectionLine} />
          </div>
          <CardList items={caseStudies} />
          <div className={styles.sectionFooter}>
            <a href="/portfolio" className={styles.allWorkLink}>See all work →</a>
          </div>
        </section>

        {/* Building */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Building</span>
            <div className={styles.sectionLine} />
          </div>
          <CardList items={building} />
        </section>

        {/* Vision */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Vision</span>
            <div className={styles.sectionLine} />
          </div>
          <CardList items={vision} />
        </section>

        {/* Music */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>§ Music</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.musicStatement}>
            Electronic music producer. Pittsburgh Ableton User Group. Available for DJ sets, live performances, and collaboration.
          </p>
          <div className={styles.musicLinks}>
            <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
              SoundCloud ↗
            </a>
            <a href="https://nomadjames.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
              Bandcamp ↗
            </a>
            <a href="https://www.mixcloud.com/nomadjames/" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
              Mixcloud ↗
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
