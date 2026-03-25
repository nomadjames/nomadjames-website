import styles from "./page.module.css";

const work = [
  {
    num: "01",
    title: "Accessibility Audit Suite: Music Tech Meets WCAG",
    category: "UX Research",
    year: "2025",
    methods: ["WCAG 2.1", "Heuristic Evaluation", "VoiceOver", "PDF Remediation", "Contrast Analysis"],
    status: "published",
    link: "/portfolio/accessibility-audit",
  },
  {
    num: "02",
    title: "Cognitive Walkthrough: Ableton Learning Synths",
    category: "UX Research",
    year: "2026",
    methods: ["Cognitive Walkthrough", "Learnability Evaluation", "Novice User Modeling", "Redesign Recommendations"],
    status: "published",
    link: "/portfolio/ableton-learning-synths",
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
    title: "Health Tech Translator",
    category: "UX Research",
    year: "2025",
    methods: ["Information Architecture", "Content Strategy", "Plain Language"],
    status: "published",
    link: "/portfolio/health-translator",
  },
  {
    num: "05",
    title: "Card Sort Analysis: Methodology in Non-IA Contexts",
    category: "UX Research",
    year: "2024",
    methods: ["Card Sorting", "Information Architecture", "Navigation Taxonomy", "UX Audit"],
    status: "published",
    link: "/portfolio/card-sort-americorps",
  },
  {
    num: "06",
    title: "SensorSynth FM: Your Body as the Interface",
    category: "Product Design · iOS",
    year: "2026",
    methods: ["Embodied Interaction", "FM Synthesis", "Sensor Mapping", "AudioKit / SwiftUI"],
    status: "wip",
    link: "/portfolio/sensorsynth",
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
              in direct partnership with Ableton&apos;s North American team. Available for DJ sets, production, and
              consultation.
            </p>
            <div className={styles.musicLinks}>
              <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                SoundCloud ↗
              </a>
              <a href="https://nomadjames.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
                Bandcamp ↗
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
