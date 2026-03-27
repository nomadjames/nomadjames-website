import styles from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "Usability Testing Methods | James Dishman",
  description:
    "A multi-method usability testing collection: moderated sessions, usability brief design, unmoderated remote testing with Loop11, and usability test planning for digital prototypes. Conducted across Kent State MS UX coursework.",
};

export default function UsabilityTesting() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>&larr; Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>UX Research</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.year}>2024 / 2026</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.course}>Kent State MS UX (UX 60502, UX 60503, UX 60541)</span>
          </div>
          <h1 className={styles.title}>Usability Testing<br />Methods</h1>
          <div className={styles.methods}>
            {[
              "Moderated Usability Testing",
              "Usability Brief Design",
              "Unmoderated Remote Testing",
              "Loop11",
              "Test Plan Design",
              "Think-Aloud Protocol",
              "Task Completion Analysis",
              "Mixed Methods",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          Four usability testing projects across three graduate courses, each using a different method: a moderated session that revealed consistent navigation patterns by resisting the urge to correct participants, a usability brief that reframed study design around ROI, an unmoderated remote test comparing two major e-commerce sites, and a usability test plan for a digital prototype redesign.
        </Tldr>

        {/* Why This Collection Exists */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why This Collection Exists</h2>
          <p className={styles.body}>
            Usability testing is not one skill. Moderated and unmoderated sessions surface
            different kinds of data. Writing a usability brief requires a different kind of
            thinking than running a session. Planning a test for a prototype that does not
            exist yet is a different problem than evaluating a live product.
          </p>
          <p className={styles.body}>
            These four projects span three courses in Kent State&apos;s MS UX program. Each
            one applied a different usability method to a different product. Together, they
            demonstrate range across the core skill set that usability work actually
            requires: facilitating sessions, designing studies, choosing metrics, working
            with remote testing platforms, and planning evaluations for prototypes still in
            development.
          </p>
        </section>

        {/* Moderated Usability Testing: Papa Johns */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Moderated Usability Testing: Papa Johns</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60541, Evaluation Fundamentals (Spring 2026)
          </p>
          <p className={styles.body}>
            A moderated usability test on papajohns.com with a participant named Alex.
            The session covered standard e-commerce tasks: finding menu items, signing up
            for an email list, locating customer service. The most important thing that
            happened was not what Alex did. It was what I chose not to do.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Key Moment: Not Correcting the Participant</h3>
            <p className={styles.body}>
              One task asked Alex to sign up for the Papa Johns email list. The option was
              visible on screen. Alex did not sign up. I actively resisted the urge to
              correct him or point him toward the right element. Later in the session, Alex
              missed the &ldquo;Customer Service&rdquo; link in a similar way.
            </p>
            <p className={styles.body}>
              By not correcting the first miss, I was able to identify a consistent pattern
              in how Alex interprets certain types of UI elements. Had I corrected him early,
              that pattern would have been obscured. The second miss confirmed it was not
              random. It was a reliable behavior that pointed to something specific about how
              this user reads and prioritizes link-style elements on the page.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What This Taught Me About Facilitation</h3>
            <p className={styles.body}>
              The <em>Handbook of Usability Testing</em> emphasizes mindfulness as a
              facilitation skill: the ability to avoid subconsciously leading participants
              through body language, tone, or timing cues. This is a learnable skill that
              many practitioners do not realize they need. Running this session made the
              concept concrete. The instinct to help is strong. Resisting it is where the
              data lives.
            </p>
            <p className={styles.body}>
              Even well-implemented, well-established sites have edge cases that moderated
              testing can illuminate. Alex approached multiple tasks differently than
              expected, which reinforced the value of testing from all angles and treating
              moderated usability as valuable throughout a product&apos;s lifecycle, not just
              at launch.
            </p>
          </div>
        </section>

        {/* Usability Brief Design: Chipotle */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Usability Brief Design: Chipotle</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60541, Evaluation Fundamentals (Spring 2026)
          </p>
          <p className={styles.body}>
            For this project, I ordered from Chipotle.com for the first time and found
            the experience seamlessly well-designed. That created an interesting challenge:
            when something works well, it is harder to build a study. The usability brief
            had to identify what was worth measuring even in the absence of obvious friction.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Reframing Around ROI</h3>
            <p className={styles.body}>
              The key question I worked through: what matters most to the business?
              Completion rate, which directly equals sales, not just ease of use. Even a
              perfectly usable site that does not convert is not serving its purpose. This
              reframing shaped the entire study design. The primary metric was not
              satisfaction or time-on-task. It was whether the user completed the order.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Mixed-Methods Recommendation</h3>
            <p className={styles.body}>
              <strong>Quantitative: Success Rate Analysis.</strong> Objective, directly
              quantifiable, and stakeholder-friendly. The measure: did the user complete the
              task and place an order? A directly quantifiable metric that stakeholders
              respond to because it maps to revenue.
            </p>
            <p className={styles.body}>
              <strong>Qualitative: Think-Aloud Study.</strong> Explains why the data looks
              the way it does. Reveals mental models and friction points invisible to
              analytics alone.
            </p>
            <p className={styles.body}>
              The recommended approach: have users order a specific combination
              (quantitative measurement), then run think-aloud sessions with different
              users (qualitative depth). The quantitative data tells you what is happening.
              The qualitative data tells you why.
            </p>
          </div>
        </section>

        {/* Unmoderated Remote Testing: Loop11 */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Unmoderated Remote Testing: Loop11</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60502, Usability (Fall 2024) and UX 60541, Evaluation
            Fundamentals (Spring 2026)
          </p>
          <p className={styles.body}>
            An unmoderated usability test designed and executed in Loop11, comparing
            Apple.com and BestBuy.com. The task: find the 13-inch M2 MacBook Air with 16GB
            RAM on each site. Success criteria were defined by target URLs containing
            specific product identifiers for each retailer.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Study Design</h3>
            <p className={styles.body}>
              The test used objective success criteria: participants either landed on the
              correct product page or they did not. This removed subjective judgment from
              task completion assessment and made the data clean. The same product across
              two different information architectures provided a natural comparison condition.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Familiarity Bias Lesson</h3>
            <p className={styles.body}>
              I was highly familiar with both Apple.com and BestBuy.com before designing
              this test. Running it revealed that average users do not navigate these sites
              the way I expected. The gap between expert familiarity and actual user behavior
              is exactly what unmoderated testing is designed to surface: real navigation
              patterns from real users, uninfluenced by a moderator&apos;s presence or an
              expert&apos;s assumptions about how a site &ldquo;should&rdquo; be navigated.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Unmoderated Testing at Scale</h3>
            <p className={styles.body}>
              The Module 7 deliverable in UX 60541 extended this work into a substantial
              unmoderated testing project covering test design, task scenario creation,
              quantitative metrics (task completion, time on task, error rates), qualitative
              analysis of participant behavior, and synthesis of findings into
              recommendations.
            </p>
          </div>
        </section>

        {/* Usability Test Plan: Digital Prototypes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Usability Test Plan: Adobe Express Prototype</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60503, Fundamentals of Interaction Design (Spring 2025)
          </p>
          <p className={styles.body}>
            Earlier in UX 60503, I had selected Adobe Express as a redesign target because
            its iOS app UX was cumbersome and uninspiring despite extensive personal use. I
            developed paper prototypes covering core tasks: uploading a photo and adding an
            empty layer, selecting and placing fonts, and adding arcing text. The prototype
            process led to scrapping unnecessary buttons and iterating through multiple
            interface refinements.
          </p>
          <p className={styles.body}>
            The final assignment was planning a usability test for that digital prototype.
            Testing a prototype that does not yet exist as a shipped product requires
            different thinking than evaluating a live site. The test plan had to account for
            prototype fidelity limitations, define tasks that were achievable within the
            prototype&apos;s scope, and anticipate where participants might hit the boundaries
            of what the prototype could simulate.
          </p>
        </section>

        {/* What I Learned Across Methods */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>What I Learned Across Methods</h2>
          <p className={styles.body}>
            Each method reveals something the others cannot. Running all four across
            different products and contexts made the distinctions concrete rather than
            theoretical.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Moderated Testing Reveals Patterns</h3>
            <p className={styles.body}>
              The Papa Johns session demonstrated that moderated testing&apos;s primary value
              is not task completion data. It is the ability to observe consistent behaviors
              across tasks in real time. The facilitator&apos;s discipline, specifically the
              decision not to intervene, is what makes those patterns visible.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Usability Briefs Force Strategic Thinking</h3>
            <p className={styles.body}>
              The Chipotle brief required thinking about what is worth measuring before
              any data is collected. The shift from &ldquo;what can we test&rdquo; to &ldquo;what
              matters most to the business&rdquo; changed the entire study design. That
              reframing, from usability metrics to business outcomes, is where study design
              becomes strategic.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Unmoderated Testing Corrects Expert Assumptions</h3>
            <p className={styles.body}>
              The Loop11 study showed that expert familiarity with a product is a liability
              when designing tests. Unmoderated testing removes the moderator&apos;s influence
              entirely, which surfaces navigation behaviors that the test designer might
              never have predicted. The method is strongest when the goal is behavioral
              data at scale rather than deep qualitative insight.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Prototype Testing Requires Different Constraints</h3>
            <p className={styles.body}>
              Planning a test for a prototype that does not fully exist yet forces you to
              think about what the test can and cannot evaluate. The Adobe Express test plan
              had to work within the boundaries of the prototype&apos;s fidelity while still
              generating useful signal about the redesign&apos;s viability.
            </p>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Moderated usability session facilitation",
              "Unmoderated remote test design (Loop11)",
              "Usability brief and study design",
              "Think-aloud protocol",
              "Task completion analysis",
              "Success rate measurement",
              "Mixed-methods study design",
              "Test plan writing for digital prototypes",
              "Participant observation without intervention",
              "ROI-oriented metric selection",
              "Comparative site evaluation",
              "Paper prototyping",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Original Submissions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Original Submissions</h2>
          <ul className={styles.reflectionList}>
            <li>
              <a href="/pdfs/usability-session-papajohns.pdf" target="_blank" rel="noopener noreferrer">
                Moderated Usability Session: Papa Johns (UX 60541)
              </a>
            </li>
            <li>
              <a href="/pdfs/usability-brief-chipotle.pdf" target="_blank" rel="noopener noreferrer">
                Usability Brief: Chipotle (UX 60541)
              </a>
            </li>
            <li>
              <a href="/pdfs/unmoderated-usability-testing.pdf" target="_blank" rel="noopener noreferrer">
                Unmoderated Usability Testing (UX 60541)
              </a>
            </li>
            <li>
              <a href="/pdfs/loop11-usability-analysis.pdf" target="_blank" rel="noopener noreferrer">
                Loop11 Usability Analysis: Apple.com vs BestBuy.com (UX 60502)
              </a>
            </li>
            <li>
              <a href="/pdfs/usability-test-plan-adobe-express.pdf" target="_blank" rel="noopener noreferrer">
                Usability Test Plan: Adobe Express Prototype (UX 60503)
              </a>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
