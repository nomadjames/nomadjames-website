import type { Metadata } from "next";
import styles from "./resume.module.css";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Résumé | James Dishman",
  description:
    "UX researcher and designer. MS UX candidate at Kent State University. Background in accessibility, discovery research, and AI product design.",
};

export default function Resume() {
  return (
    <div className={styles.page}>
      <main className="container">

        <header className={styles.header}>
          <h1 className={styles.name}>James Dishman</h1>
          <div className={styles.contact}>
            <span>Youngstown, OH</span>
            <span className={styles.dot}>·</span>
            <a href="/contact">nomadjames.com/contact</a>
            <span className={styles.dot}>·</span>
            <a href="https://linkedin.com/in/james-dishman-3a512163" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
          <PrintButton className={styles.downloadBtn} />
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <p className={styles.summary}>
            UX researcher and designer finishing an MS in User Experience at Kent State University.
            Background spans accessibility auditing, discovery research, and AI product design.
            Electronic music production and a decade as Pittsburgh&apos;s Ableton User Group organizer
            inform a practice focused on expert users, cognitively demanding systems, and tools that
            genuinely extend human capability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Research Methods</h3>
              <p className={styles.skillList}>
                Contextual inquiry · Semi-structured interviews · Moderated usability testing ·
                Unmoderated usability testing · Cognitive walkthrough · Journey mapping ·
                Affinity mapping · JTBD analysis · Card sorting · Paper prototyping · Survey design · Heuristic evaluation
              </p>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Accessibility</h3>
              <p className={styles.skillList}>
                WCAG 2.1 AA/AAA · COGA cognitive accessibility · VoiceOver testing · Contrast analysis (WebAIM) ·
                Readability analysis (Flesch-Kincaid) · PDF remediation · Universal design
              </p>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Design & Tools</h3>
              <p className={styles.skillList}>
                Figma · Photoshop · Miro · Obsidian · Adobe Acrobat · Google Forms · Loop11 · Lyssna
              </p>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Technical</h3>
              <p className={styles.skillList}>
                HTML/CSS · Next.js · TypeScript · React Native / Expo · Python · Rust · p5.js · SQLite · RAG / vector search · GitHub Actions CI/CD · API integration · AI prompt design · Multi-agent system design
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>

          <div className={styles.role}>
            <div className={styles.roleHeader}>
              <div>
                <h3 className={styles.roleTitle}>Smart Meter Technician</h3>
                <p className={styles.roleOrg}>Wellington Energy (First Energy subcontractor)</p>
              </div>
              <span className={styles.roleDates}>April 2025–Present</span>
            </div>
            <ul className={styles.bullets}>
              <li>Conduct residential electrical service assessments at high volume across assigned territory, evaluating safety conditions before equipment exchange</li>
              <li>Communicate directly with residents to explain service interruptions and manage expectations during live infrastructure work</li>
              <li>Perform meter exchanges (analog to smart meter), documenting each site and escalating non-standard conditions for triage and resolution</li>
              <li>Work independently across a distributed daily territory with no direct supervision, maintaining consistent safety and service standards</li>
            </ul>
          </div>

          <div className={styles.role}>
            <div className={styles.roleHeader}>
              <div>
                <h3 className={styles.roleTitle}>Graduate Assistant</h3>
                <p className={styles.roleOrg}>Kent State University</p>
              </div>
              <span className={styles.roleDates}>2024–Present</span>
            </div>
            <ul className={styles.bullets}>
              <li>Developed instructional materials for graduate-level UX courses, improving course structure and student outcomes</li>
              <li>Assisted in authoring a graduate-level UX textbook through systematic analysis of academic publications and content development</li>
              <li>Conducted full site-map analysis and copy review across MS UX program web materials</li>
              <li>Verified qualitative research data for faculty projects</li>
            </ul>
          </div>

          <div className={styles.role}>
            <div className={styles.roleHeader}>
              <div>
                <h3 className={styles.roleTitle}>User Group Organizer</h3>
                <p className={styles.roleOrg}>Pittsburgh Ableton User Group <span className={styles.dot}>·</span> Ableton AG</p>
              </div>
              <span className={styles.roleDates}>2015–Present</span>
            </div>
            <ul className={styles.bullets}>
              <li>Co-founded and led community meetings for Ableton users across the Pittsburgh region, growing an active practitioner network (with Paul Miller and Steve Knots)</li>
              <li>Served as direct liaison between user community and Ableton&apos;s international corporate team, channeling field feedback into product development cycles</li>
              <li>Collaborated with university faculty and educators to expand music technology education access and inclusivity</li>
            </ul>
          </div>

          <div className={styles.role}>
            <div className={styles.roleHeader}>
              <div>
                <h3 className={styles.roleTitle}>Material Handler</h3>
                <p className={styles.roleOrg}>Osmose Utility Services</p>
              </div>
              <span className={styles.roleDates}>2021–2023</span>
            </div>
            <ul className={styles.bullets}>
              <li>Managed field logistics for steel and fiberglass pole repair crews across a Western Pennsylvania territory, coordinating material delivery to active utility job sites</li>
              <li>Operated warehouse inventory and loaded trucks for distribution infrastructure restoration projects serving regional electric utilities</li>
              <li>Gained direct exposure to electrical distribution system components, pole condition assessment workflows, and utility field operations</li>
            </ul>
          </div>

          <div className={styles.role}>
            <div className={styles.roleHeader}>
              <div>
                <h3 className={styles.roleTitle}>Self-employed Title Abstractor</h3>
                <p className={styles.roleOrg}>Various Clients and Brokers</p>
              </div>
              <span className={styles.roleDates}>2012–2019</span>
            </div>
            <ul className={styles.bullets}>
              <li>Conducted certified title analysis across multiple states and counties; managed complex multi-party research workflows</li>
              <li>Led teams to resolve title defects through research, analysis, and resolution workflows</li>
              <li>Partnered with attorneys on title opinions, delivering resolution on complex legal and property issues</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.eduGrid}>
            <div className={styles.edu}>
              <div className={styles.eduDegree}>MS, User Experience <span className={styles.dot}>·</span> 3.95 GPA</div>
              <div className={styles.eduOrg}>Kent State University</div>
              <div className={styles.eduDates}>Expected December 2026</div>
            </div>
            <div className={styles.edu}>
              <div className={styles.eduDegree}>BA, English · Philosophy · Political Science</div>
              <div className={styles.eduOrg}>University of Pittsburgh</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Selected Projects</h2>
          <div className={styles.projectList}>
            <div className={styles.project}>
              <div className={styles.projectHeader}>
                <a href="/portfolio/accessibility-audit" className={styles.projectTitle}>
                  Accessibility Audit Suite →
                </a>
                <span className={styles.projectYear}>2025</span>
              </div>
              <p className={styles.projectDesc}>
                Multi-method WCAG 2.1 audit across social media, web contrast, assistive technology (VoiceOver),
                and PDF remediation. Music technology domain: Ableton Learning Music heuristic evaluation,
                Audiothingies contrast failures, Fors.fm navigation audit.
              </p>
            </div>
            <div className={styles.project}>
              <div className={styles.projectHeader}>
                <a href="/portfolio/food-insecurity" className={styles.projectTitle}>
                  Food Insecurity Discovery Research →
                </a>
                <span className={styles.projectYear}>2025</span>
              </div>
              <p className={styles.projectDesc}>
                Full-cycle discovery research on food insecurity in the Mahoning Valley.
                Screener design, qualitative interview protocol, semi-structured participant interviews,
                affinity diagram synthesis, JTBD analysis.
              </p>
            </div>
            <div className={styles.project}>
              <div className={styles.projectHeader}>
                <a href="/portfolio/health-translator" className={styles.projectTitle}>
                  Health Translator →
                </a>
                <span className={styles.projectYear}>2025</span>
              </div>
              <p className={styles.projectDesc}>
                AI-powered plain-language translation layer for healthcare portals. Team project for
                AI in UX/HCI. Designed around trust as the primary constraint: always-available human
                escalation, reading level indicator, multimodal text + audio delivery.
              </p>
            </div>
            <div className={styles.project}>
              <div className={styles.projectHeader}>
                <a href="/portfolio/clarence" className={styles.projectTitle}>
                  Clarence: AI Agent Orchestration System →
                </a>
                <span className={styles.projectYear}>2025–2026</span>
              </div>
              <p className={styles.projectDesc}>
                Sixteen-agent autonomous system with persistent memory, conversation distillation,
                and trust calibration. Designed and built as a working research platform for
                human-AI collaboration patterns.
              </p>
            </div>
            <div className={styles.project}>
              <div className={styles.projectHeader}>
                <a href="/portfolio/paug" className={styles.projectTitle}>
                  PAUG.net: Community Platform →
                </a>
                <span className={styles.projectYear}>2025–2026</span>
              </div>
              <p className={styles.projectDesc}>
                Designed and built the web presence for Pittsburgh Ableton User Group. Next.js static
                site with community-first information architecture, deployed on GitHub Pages with
                custom domain and automated CI/CD.
              </p>
            </div>
            <div className={styles.project}>
              <div className={styles.projectHeader}>
                <span className={styles.projectTitle}>SensorSynth FM</span>
                <span className={styles.projectYear}>2026</span>
              </div>
              <p className={styles.projectDesc}>
                MS UX Capstone. iPad FM synthesizer using the device&apos;s physical sensors (accelerometer,
                gyroscope, TrueDepth camera) as real-time FM modulation sources. Built with AudioKit 5 and SwiftUI.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
