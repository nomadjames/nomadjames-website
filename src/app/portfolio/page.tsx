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
    methods: ["Screener Design", "Semi-Structured Interviews", "Affinity Mapping", "JTBD Analysis", "Mixed Methods"],
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
    methods: ["I Ching", "Oblique Strategies", "AI Synthesis", "Next.js", "Groq API"],
    status: "published",
    link: "/portfolio/oblique-oracle",
  },
  {
    num: "09",
    title: "Usability Testing Methods",
    category: "UX Research",
    year: "2024–2026",
    methods: ["Moderated Mobile Testing", "15-Participant Study", "Multi-Facilitator", "iOS / Android / Web", "Unmoderated Testing", "Loop11", "Usability Brief", "Test Plan Design"],
    status: "published",
    link: "/portfolio/usability-testing",
  },
  {
    num: "10",
    title: "PAUG.net: Community Platform",
    category: "Web Development · Community Design",
    year: "2026",
    methods: ["Next.js", "GitHub Pages", "Decap CMS", "Community UX", "Dark UI", "Responsive Design"],
    status: "published",
    link: "/portfolio/paug",
  },
  {
    num: "11",
    title: "Graduate Assistantship: UX Textbook Authoring",
    category: "Academic Research",
    year: "2025–2026",
    methods: ["Textbook Authoring", "Qualitative Research", "Instructional Design", "Research Verification"],
    status: "published",
    link: "/portfolio/graduate-assistantship",
  },
  {
    num: "12",
    title: "Algorithmic Storytelling v3: Interactive Narrative as Political Act",
    category: "Creative Coding",
    year: "2025",
    methods: ["p5.js", "Sprite Animation", "Collision Detection", "Interactive Narrative", "Political Satire"],
    status: "published",
    link: "/portfolio/algorithmic-storytelling",
  },
];

const vision = [
  {
    num: "V1",
    title: "AI Music Education: A Vision for Electronic Music Learning",
    category: "Vision / Product Design",
    year: "2026",
    methods: ["Market Analysis", "Competitive Research", "Barrier Analysis", "Curriculum Design", "AI/UX Integration"],
    status: "published",
    link: "/portfolio/ai-music-education",
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
            Research, design, and systems thinking. Graduate studies and independent projects.
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

        <section className={`${styles.musicSection} ${styles.moreWorkSection}`} id="vision">
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 02</span>
            <h2 className={styles.moreWorkTitle}>Vision</h2>
            <p className={styles.moreWorkDesc}>
              Concept pieces and forward-looking work. Not shipped products. Directions I think are worth exploring, grounded in what I see from the intersection of my domains.
            </p>
          </div>
          <div className={styles.workList} style={{ marginTop: "2rem", borderTop: "1px solid var(--border)" }}>
            {vision.map((item) => (
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
                  <a href={item.link!} className={styles.readLink}>Read →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.musicSection} ${styles.moreWorkSection}`} id="more-work">
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 03</span>
            <h2 className={styles.moreWorkTitle}>More Work</h2>
            <p className={styles.moreWorkDesc}>
              Additional projects and research not featured as full case studies.
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

        <section className={`${styles.musicSection} ${styles.moreWorkSection}`} id="music">
          <div className={styles.moreWorkHeader}>
            <span className={styles.sectionLabel}>§ Section 04</span>
            <h2 className={styles.moreWorkTitle}>Music &amp; Sound</h2>
            <p className={styles.moreWorkDesc}>
              Electronic music producer. Pittsburgh Ableton User Group organizer,
              in direct partnership with Ableton&apos;s international team. Available for DJ sets, production, and
              consultation.
            </p>
          </div>
          <div className={styles.musicContent}>
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
