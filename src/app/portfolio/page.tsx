import styles from "./page.module.css";

const work = [
  {
    num: "01",
    title: "Accessibility Audit Suite: Music Tech Meets WCAG",
    category: "UX Research",
    year: "2025",
    methods: ["WCAG 2.1", "Contrast Analysis", "VoiceOver", "PDF Remediation", "Cognitive Accessibility"],
    status: "published",
    link: "/portfolio/accessibility-audit",
  },
  {
    num: "02",
    title: "Ableton UX Evaluation Suite",
    category: "UX Research · Interaction Design",
    year: "2024–2026",
    methods: ["Heuristic Evaluation", "Cognitive Walkthrough", "Stakeholder Analysis"],
    status: "published",
    link: "/portfolio/ableton-evaluation-suite",
  },
  {
    num: "03",
    title: "Food Insecurity Discovery Research",
    category: "UX Research",
    year: "2025",
    methods: ["Contextual Inquiry", "Semi-Structured Interviews", "Affinity Mapping", "Journey Mapping"],
    status: "published",
    link: "/portfolio/food-insecurity",
  },
  {
    num: "04",
    title: "Health Translator",
    category: "UX Research",
    year: "2025",
    methods: ["Information Architecture", "Content Strategy", "Plain Language"],
    status: "published",
    link: "/portfolio/health-translator",
  },
  {
    num: "05",
    title: "Clarence: Autonomous Agent Ecosystem",
    category: "AI Systems Design",
    year: "2025–2026",
    methods: ["Agent Architecture", "Human-AI Collaboration", "Rust", "Python"],
    status: "published",
    link: "/portfolio/clarence",
  },
  {
    num: "06",
    title: "Card Sort Analysis: Methodology in Non-IA Contexts",
    category: "UX Research",
    year: "2024",
    methods: ["Card Sorting", "Information Architecture", "Navigation Taxonomy", "UX Audit"],
    status: "published",
    link: "/portfolio/card-sort-americorps",
  },
  {
    num: "07",
    title: "SensorSynth FM: Your Body as the Interface",
    category: "Product Design · iOS",
    year: "2026",
    methods: ["Embodied Interaction", "FM Synthesis", "Sensor Mapping", "AudioKit / SwiftUI"],
    status: "published",
    link: "/portfolio/sensorsynth",
  },
  {
    num: "08",
    title: "Oblique Oracle: Algorithmic Divination as Design Research",
    category: "Product Design · AI Integration",
    year: "2026",
    methods: ["I Ching", "Oblique Strategies", "AI Synthesis", "React Native / Expo", "Claude API"],
    status: "published",
    link: "/portfolio/oblique-oracle",
  },
  {
    num: "09",
    title: "Usability Testing Methods",
    category: "UX Research",
    year: "2024–2026",
    methods: ["Moderated Testing", "Unmoderated Testing", "Usability Brief", "Loop11", "Test Plan Design"],
    status: "published",
    link: "/portfolio/usability-testing",
  },
];

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className="container">
        <header className={styles.header}>
          <div className={styles.headerRule} />
          <h1 className={styles.pageTitle}>Work</h1>
          <p className={styles.subtitle}>
            Research, design, and systems thinking - graduate studies and independent projects.
          </p>
        </header>

        <div className={styles.workList}>
          {work.map((item) => (
            <article key={item.num} className={styles.workItem}>
              <span className={styles.workNum}>{item.num}</span>
              <div className={styles.workContent}>
                {item.link ? (
                  <a href={item.link} className={styles.workTitle}>{item.title}</a>
                ) : (
                  <span className={styles.workTitle}>{item.title}</span>
                )}
                <div className={styles.workMeta}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <div className={styles.methods}>
                  {item.methods.map((m, i) => (
                    <span key={i} className={styles.method}>{m}</span>
                  ))}
                </div>
              </div>
              <div className={styles.statusBlock}>
                {item.status === "published" && (
                  <a href={item.link!} className={styles.readLink}>Read →</a>
                )}
                {item.status === "soon" && (
                  <span className={styles.statusBadge}>Soon</span>
                )}
                {item.status === "wip" && (
                  <span className={`${styles.statusBadge} ${styles.wipBadge}`}>WIP</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className={styles.musicSection}>
          <div className={styles.musicHeader}>
            <span className={styles.sectionLabel}>Music & Sound</span>
            <div className={styles.sectionLine} />
          </div>
          <div className={styles.musicContent}>
            <p className={styles.musicDesc}>
              Electronic music production and curation spanning 30 years. Pittsburgh Ableton User Group organizer,
              in direct partnership with Ableton&apos;s international team. Available for DJ sets, production, and
              consultation.
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
          </div>
        </section>
      </main>
    </div>
  );
}
