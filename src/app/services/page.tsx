import styles from "./page.module.css";

export const metadata = {
  title: "Services | James Dishman",
  description:
    "UX research, AI agent design, and electronic music education. Available for freelance and consulting work.",
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <main className="container">

        <a href="/" className={styles.backLink}>&larr; Home</a>

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>Services</span>
          </div>
          <h1 className={styles.title}>What I Can Do For You</h1>
          <p className={styles.subtitle}>
            I take on freelance and consulting work in three areas where I have real depth:
            UX research and design, AI agent systems, and electronic music education.
          </p>
        </header>

        {/* UX Research & Design */}
        <section className={styles.service}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNum}>01</span>
            <h2 className={styles.serviceName}>UX Research &amp; Design</h2>
          </div>
          <p className={styles.serviceDesc}>
            Usability testing, heuristic evaluations, accessibility audits, user interviews,
            and interaction design. Grounded in academic methodology from my MS program at
            Kent State and applied to real products.
          </p>
          <div className={styles.serviceDetails}>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>What this looks like</span>
              <ul className={styles.detailList}>
                <li>Moderated and unmoderated usability testing with full reports</li>
                <li>WCAG 2.1 accessibility audits with prioritized remediation plans</li>
                <li>Heuristic evaluations and cognitive walkthroughs</li>
                <li>Semi-structured interviews, affinity mapping, and JTBD analysis</li>
                <li>Interaction design for complex tools (creative software, dashboards, data interfaces)</li>
              </ul>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Why me</span>
              <p className={styles.detailText}>
                I bring domain expertise that generalist UX designers do not have. If your product
                touches music technology, creative tools, or AI-powered interfaces, I already understand
                the users because I am one. My portfolio has the receipts.
              </p>
            </div>
          </div>
        </section>

        {/* AI Agent Design & Setup */}
        <section className={styles.service}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNum}>02</span>
            <h2 className={styles.serviceName}>AI Agent Design &amp; Setup</h2>
          </div>
          <p className={styles.serviceDesc}>
            I built and live with Clarence, a multi-agent AI system that runs 24/7 with memory
            architecture, scheduled automation, and multi-model routing. I can help you design
            and deploy something similar for your workflow.
          </p>
          <div className={styles.serviceDetails}>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>What this looks like</span>
              <ul className={styles.detailList}>
                <li>Personal or team AI agent setup with persistent memory</li>
                <li>Workflow automation with scheduled tasks and monitoring</li>
                <li>Multi-model routing (choosing the right AI for each job)</li>
                <li>Human-AI collaboration design: trust calibration, delegation boundaries, feedback loops</li>
                <li>Integration with your existing tools (Slack, Discord, email, CRM)</li>
              </ul>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Why me</span>
              <p className={styles.detailText}>
                Most people offering AI consulting have built demos. I have built a production system
                that manages my schedule, monitors projects, runs nightly research panels, and remembers
                every conversation we have had. The difference between a demo and a tool you actually
                depend on is where all the hard design questions live.
              </p>
            </div>
          </div>
        </section>

        {/* Electronic Music Education */}
        <section className={styles.service}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNum}>03</span>
            <h2 className={styles.serviceName}>Electronic Music Education</h2>
          </div>
          <p className={styles.serviceDesc}>
            Thirty years of electronic music production and a decade leading Pittsburgh&apos;s
            Ableton User Group. I teach Ableton Live, synthesis, sound design, and the creative
            thinking behind making electronic music that matters.
          </p>
          <div className={styles.serviceDetails}>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>What this looks like</span>
              <ul className={styles.detailList}>
                <li>One-on-one Ableton Live lessons (beginner through advanced)</li>
                <li>Synthesis fundamentals: subtractive, FM, granular, wavetable</li>
                <li>Sound design workshops for groups or teams</li>
                <li>Creative process coaching for producers who feel stuck</li>
                <li>Curriculum design for music technology programs</li>
              </ul>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Why me</span>
              <p className={styles.detailText}>
                I have been in rooms with beginners and professionals for years. I know where people
                get stuck because I have watched it happen hundreds of times. The Ableton User Group
                taught me that the best music education meets people where they are, not where the
                manual assumes they should be.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Interested?</h2>
          <p className={styles.ctaText}>
            Tell me what you are working on. I will tell you honestly whether I can help.
          </p>
          <a href="/contact" className={styles.ctaButton}>Get in touch</a>
        </section>

      </main>
    </div>
  );
}
