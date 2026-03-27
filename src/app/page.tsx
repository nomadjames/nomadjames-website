import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>UX Designer & AI Researcher</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Kent State University MS UX</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Youngstown, OH</span>
          </div>
          <h1 className={styles.name}>James Dishman</h1>
          <div className={styles.thesis}>
            <p>Technology should make humans better.</p>
            <p>I design the part where that actually happens.</p>
          </div>
          <p className={styles.bio}>
            Thirty years of electronic music and a decade leading Pittsburgh&apos;s Ableton User Group gave me a
            framework for thinking about tools: what they enable, what they foreclose, and who they leave out.
            I&apos;m in graduate school now building that instinct into a research practice, with a thesis taking
            shape around AI, creativity, and what it means to design systems that shape how people think.
          </p>
          <div className={styles.heroLinks}>
            <a href="https://www.linkedin.com/in/james-dishman-3a512163/" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              LinkedIn ↗
            </a>
            <a href="https://github.com/nomadjames" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              GitHub ↗
            </a>
            <a href="/about" className={styles.heroLink}>About ↗</a>
            <a href="/lab" className={styles.heroLink}>Lab ↗</a>
            <a href="https://medium.com/@nomadjames" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              Medium ↗
            </a>
<a href="/contact" className={styles.heroLink}>
              Contact ↗
            </a>
          </div>
        </section>

        {/* Selected Work */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Selected Work</span>
            <div className={styles.sectionLine} />
          </div>
          <ol className={styles.workList}>
            <li className={styles.workItem}>
              <span className={styles.workNum}>01</span>
              <div className={styles.workContent}>
                <a href="/portfolio/accessibility-audit" className={styles.workTitle}>
                  Accessibility Audit Suite
                </a>
                <div className={styles.workMeta}>
                  <span>UX Research</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>WCAG 2.1 · Contrast Analysis · VoiceOver · PDF Remediation</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2025</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>02</span>
              <div className={styles.workContent}>
                <a href="/portfolio/ableton-evaluation-suite" className={styles.workTitle}>
                  Ableton UX Evaluation Suite
                </a>
                <div className={styles.workMeta}>
                  <span>UX Research · Interaction Design</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Heuristic Evaluation · Cognitive Walkthrough · Stakeholder Analysis</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2024–2026</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>03</span>
              <div className={styles.workContent}>
                <a href="/portfolio/food-insecurity" className={styles.workTitle}>
                  Food Insecurity Discovery Research
                </a>
                <div className={styles.workMeta}>
                  <span>UX Research</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Semi-Structured Interviews · Affinity Mapping · JTBD Analysis</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2025</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>04</span>
              <div className={styles.workContent}>
                <a href="/portfolio/health-translator" className={styles.workTitle}>
                  Health Translator
                </a>
                <div className={styles.workMeta}>
                  <span>AI / UX Research</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Trust-Centered Design · Plain Language · Multimodal Interaction</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2025</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>05</span>
              <div className={styles.workContent}>
                <a href="/portfolio/clarence" className={styles.workTitle}>
                  Clarence: Autonomous Agent Ecosystem
                </a>
                <div className={styles.workMeta}>
                  <span>AI Systems Design</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Agent Architecture · Human-AI Collaboration · Rust · Python</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2025–2026</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>06</span>
              <div className={styles.workContent}>
                <a href="/portfolio/sensorsynth" className={styles.workTitle}>
                  SensorSynth FM
                </a>
                <div className={styles.workMeta}>
                  <span>Product Design · iOS</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Embodied Interaction · FM Synthesis · Sensor Mapping · AudioKit</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2026</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>07</span>
              <div className={styles.workContent}>
                <a href="/portfolio/oblique-oracle" className={styles.workTitle}>
                  Oblique Oracle
                </a>
                <div className={styles.workMeta}>
                  <span>Product Design · AI</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Divination · I Ching · Oblique Strategies</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2026</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>08</span>
              <div className={styles.workContent}>
                <a href="/portfolio/usability-testing" className={styles.workTitle}>
                  Usability Testing Methods
                </a>
                <div className={styles.workMeta}>
                  <span>UX Research</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>Moderated Testing · Unmoderated Testing · Loop11 · Test Plan Design</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span>2024–2026</span>
                </div>
              </div>
              <span className={styles.workArrow} aria-hidden="true">→</span>
            </li>
          </ol>
        </section>

        {/* Currently Building */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Currently Building</span>
            <div className={styles.sectionLine} />
          </div>
          <div className={styles.buildingGrid}>
            <div className={styles.buildingItem}>
              <span className={styles.buildingName}>Clarence</span>
              <p className={styles.buildingDesc}>
                An autonomous AI agent ecosystem: 27 scheduled jobs, 16 named agents, a custom Rust API bridge,
                multi-model routing, and a nightly R&amp;D Council that debates open questions while I sleep.
                The design question is what it means to build a genuine collaborator rather than a responsive tool.
              </p>
              <a href="/portfolio/clarence" className={styles.buildingLink}>Read the case study →</a>
            </div>
            <div className={styles.buildingItem}>
              <span className={styles.buildingName}>SensorSynth FM</span>
              <p className={styles.buildingDesc}>
                An iPad FM synthesizer that uses the device&apos;s physical sensors (accelerometer, gyroscope,
                TrueDepth camera) as modulation sources. The design question is what it feels like when your
                body is the instrument, not just the thing holding it.
              </p>
              <a href="/portfolio/sensorsynth" className={styles.buildingLink}>Read the case study →</a>
            </div>
          </div>
        </section>

        {/* Music */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Music</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.musicStatement}>
            Thirty years in electronic music production. Pittsburgh Ableton User Group. Available for DJ sets, live performances, and collaboration.
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
