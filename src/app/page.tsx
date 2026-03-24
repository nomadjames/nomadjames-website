import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>UX Designer & AI Researcher</span>
            <span className={styles.eyebrowDot}>·</span>
            <span className={styles.eyebrowLabel}>Kent State University MS UX</span>
            <span className={styles.eyebrowDot}>·</span>
            <span className={styles.eyebrowLabel}>Pittsburgh, PA</span>
          </div>
          <h1 className={styles.name}>James Dishman</h1>
          <div className={styles.thesis}>
            <p>Technology should make humans better.</p>
            <p>I design the part where that actually happens.</p>
          </div>
          <p className={styles.bio}>
            Thirty years of electronic music and a decade leading Pittsburgh&apos;s Ableton User Group gave me a
            framework for thinking about tools — what they enable, what they foreclose, and who they leave out.
            I&apos;m in graduate school now building that instinct into a research practice, with a thesis taking
            shape around AI, creativity, and the ethics of designed cognition.
          </p>
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
                  <span className={styles.metaDot}>·</span>
                  <span>WCAG 2.1 · Heuristic Evaluation · VoiceOver · PDF Remediation</span>
                  <span className={styles.metaDot}>·</span>
                  <span>2025</span>
                </div>
              </div>
              <span className={styles.workArrow}>→</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>02</span>
              <div className={styles.workContent}>
                <span className={styles.workTitle}>Moderated Usability Testing</span>
                <div className={styles.workMeta}>
                  <span>UX Research</span>
                  <span className={styles.metaDot}>·</span>
                  <span>Screener Design · Test Protocol · Session Moderation</span>
                  <span className={styles.metaDot}>·</span>
                  <span>2025</span>
                </div>
              </div>
              <span className={styles.workStatus}>Soon</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>03</span>
              <div className={styles.workContent}>
                <span className={styles.workTitle}>Food Insecurity Discovery Research</span>
                <div className={styles.workMeta}>
                  <span>UX Research</span>
                  <span className={styles.metaDot}>·</span>
                  <span>Contextual Inquiry · Affinity Mapping · Journey Mapping</span>
                  <span className={styles.metaDot}>·</span>
                  <span>2025</span>
                </div>
              </div>
              <span className={styles.workStatus}>Soon</span>
            </li>
            <li className={styles.workItem}>
              <span className={styles.workNum}>04</span>
              <div className={styles.workContent}>
                <span className={styles.workTitle}>SensorSynth FM</span>
                <div className={styles.workMeta}>
                  <span>Product Design</span>
                  <span className={styles.metaDot}>·</span>
                  <span>Hardware · Interface Design · Sensor Integration</span>
                  <span className={styles.metaDot}>·</span>
                  <span>2026</span>
                </div>
              </div>
              <span className={`${styles.workStatus} ${styles.wip}`}>WIP</span>
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
                An autonomous AI research agent that reads the web, manages long-term memory, and surfaces the
                signal I need. A practical study in what it means to design for machine collaboration rather than
                machine compliance.
              </p>
            </div>
            <div className={styles.buildingItem}>
              <span className={styles.buildingName}>SensorSynth FM</span>
              <p className={styles.buildingDesc}>
                A hardware synthesizer that reads environmental sensors — temperature, light, motion — and
                translates physical space into FM synthesis parameters. The interface question is the
                interesting part.
              </p>
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
            Thirty years in electronic music production. Pittsburgh Ableton User Group. Available for DJ sets and collaboration.
          </p>
          <div className={styles.musicLinks}>
            <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
              SoundCloud ↗
            </a>
            <a href="https://nomadjames.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={styles.musicLink}>
              Bandcamp ↗
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
