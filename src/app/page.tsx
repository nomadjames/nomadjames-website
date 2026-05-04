import styles from "./page.module.css";
import SineWaveHero from "@/components/SineWaveHero";

type FeaturedItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  tldr: string;
  link: string;
  ariaLabel: string;
};

type CompactItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  link: string;
  ariaLabel: string;
};

const featuredStudies: FeaturedItem[] = [
  {
    num: "01",
    title: "Clarence: Autonomous Agent Ecosystem",
    category: "AI Systems Design",
    year: "2025–2026",
    tldr: "I built a production AI system for persistent memory, task routing, and daily collaboration. Then the platform it depended on changed the rules, and I had to migrate it under a 48-hour deadline. The case study is about designing human-AI collaboration under real trust and platform constraints.",
    link: "/portfolio/clarence",
    ariaLabel: "Read the Clarence case study",
  },
  {
    num: "02",
    title: "Ableton UX Evaluation Suite",
    category: "UX Research · Interaction Design",
    year: "2024–2026",
    tldr: "Multiple UX evaluation methods applied to three Ableton products, grounded in deep music production experience and a decade leading the Pittsburgh Ableton User Group. The suite revealed a consistent pattern: Ableton designs for insiders, and that works until someone shows up for the first time.",
    link: "/portfolio/ableton-evaluation-suite",
    ariaLabel: "Read the Ableton UX Evaluation Suite case study",
  },
  {
    num: "03",
    title: "Accessibility Audit Suite: Music Tech Meets WCAG",
    category: "UX Research",
    year: "2025",
    tldr: "I ran a multi-method accessibility audit across music tech, news, social media, and academic sites. The work covered WCAG compliance, hands-on VoiceOver screen reader testing on GroundNews, an Instagram accessibility audit of a university account, contrast analysis, PDF remediation, and cognitive accessibility research. The biggest finding was not any single violation. It was that accessibility best practices for people and machine readability for AI are the same goal, and most teams are failing at both.",
    link: "/portfolio/accessibility-audit",
    ariaLabel: "Read the Accessibility Audit Suite case study",
  },
];

const building: CompactItem[] = [
  {
    num: "01",
    title: "SensorSynthFM",
    category: "Product Design · iOS",
    year: "2026",
    blurb: "An iPad FM synthesizer that treats device sensors, motion, environment, camera, spatial, and touch as modulation sources. This is the main active build.",
    link: "/building/sensorsynth",
    ariaLabel: "Read the SensorSynthFM case study",
  },
  {
    num: "02",
    title: "Oblique Oracle",
    category: "Product Design · AI",
    year: "2026",
    blurb: "A divination app that combines I Ching generation, Oblique Strategies, and AI synthesis to study how people respond when algorithmic output is framed as wisdom.",
    link: "/portfolio/oblique-oracle",
    ariaLabel: "Read the Oblique Oracle case study",
  },
  {
    num: "03",
    title: "RandyCamp Clipcycle",
    category: "Creative Technology · Installation",
    year: "2026",
    blurb: "A fullscreen VJ clip cycler and portable visual-system build for RandyCamp, moving from randomized media playback toward an interface and Raspberry Pi installation.",
    link: "/building/randycamp-clipcycle",
    ariaLabel: "Open the RandyCamp Clipcycle build",
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
    ariaLabel: "Read the AI Music Education concept",
  },
];

function FeaturedCardList({ items }: { items: FeaturedItem[] }) {
  return (
    <div className={styles.cardList}>
      {items.map((item) => (
        <article key={item.num} className={styles.card}>
          <span className={styles.cardNum} aria-hidden="true">{item.num}</span>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitleHeading}>
              <a href={item.link} className={styles.cardTitle} aria-label={item.ariaLabel}>{item.title}</a>
            </h3>
            <div className={styles.cardMeta}>
              <span className={styles.cardCategory}>{item.category}</span>
              <span className={styles.cardDot} aria-hidden="true">·</span>
              <span className={styles.cardYear}>{item.year}</span>
            </div>
            <p className={styles.cardTldr}>{item.tldr}</p>
            <span className={styles.cardLink} aria-hidden="true">Read <span aria-hidden="true">→</span></span>
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
          <span className={styles.compactNum} aria-hidden="true">{item.num}</span>
          <div className={styles.compactContent}>
            <h3 className={styles.compactTitleHeading}>
              <a href={item.link} className={styles.compactTitle} aria-label={item.ariaLabel}>{item.title}</a>
            </h3>
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
      <main className={styles.main}>
        <header className={`container ${styles.hero}`}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>Youngstown, OH</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>MS User Experience</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>UX + AI Systems</span>
          </div>

          <h1 className={styles.name}>James Dishman</h1>
          <SineWaveHero className={styles.sineWave} />
          <p className={styles.mantra}>UX Designer, AI Systems Builder, Electronic Music Producer</p>
          <div className={styles.thesis}>
            <p>I research and design systems where creativity, community, and AI intersect. Thirty years in electronic music production, a decade leading the Pittsburgh Ableton User Group, and formal UX training at Kent State converge into a single practice. The focus: creativity tools, accessibility, and AI agents that actually collaborate instead of just responding.</p>
          </div>
          <p className={styles.bio}>
            The work below starts with completed case studies, then moves into active builds and longer-term directions.
          </p>
        </header>

        <div className={`container ${styles.contentShell}`}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionLabel}><span aria-hidden="true">§</span> Portfolio</h2>
              <div className={styles.sectionLine} />
            </div>
            <FeaturedCardList items={featuredStudies} />
            <div className={styles.sectionFooter}>
              <a href="/portfolio" className={styles.allWorkLink} aria-label="See the portfolio page">See portfolio →</a>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionLabel}><span aria-hidden="true">§</span> Building</h2>
              <div className={styles.sectionLine} />
            </div>
            <p className={styles.sectionIntro}>
              Active work in development. These projects are real, public, and still changing.
            </p>
            <CompactLinkList items={building} />
            <div className={styles.sectionFooter}>
              <a href="/building" className={styles.allWorkLink} aria-label="Open the building page">Open building →</a>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionLabel}><span aria-hidden="true">§</span> Vision</h2>
              <div className={styles.sectionLine} />
            </div>
            <p className={styles.sectionIntro}>
              Planned work and concept direction. These are ideas I think are worth pursuing next.
            </p>
            <CompactLinkList items={vision} />
            <div className={styles.sectionFooter}>
              <a href="/vision" className={styles.allWorkLink} aria-label="Open the vision page">Open vision →</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
