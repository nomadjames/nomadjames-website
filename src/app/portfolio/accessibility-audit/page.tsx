import styles from "./page.module.css";

export const metadata = {
  title: "Accessibility Audit Suite | James Dishman",
  description:
    "Multi-method accessibility audit across social media, web contrast, assistive technology, PDF remediation, and cognitive accessibility research.",
};

export default function AccessibilityAudit() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>← Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>UX Research</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2025</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>UX 60504 - Accessibility and Universal Design · Kent State MS UX</span>
          </div>
          <h1 className={styles.title}>Accessibility Audit Suite:<br />Music Tech Meets WCAG</h1>
          <div className={styles.methods}>
            {["WCAG 2.1 AA/AAA", "Contrast Analysis", "Nielsen Heuristics", "VoiceOver", "PDF Remediation", "Social Media Audit"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.body}>
            Music technology is a niche with a trust problem. The community is passionate, technically deep,
            and globally distributed - but the companies building the tools are often small teams shipping fast.
            Dedicated accessibility resources are rare. Formal a11y training is rarer still. The result is a
            category of software and web experiences that routinely fails users who rely on assistive technology,
            have low vision, or process information differently.
          </p>
          <p className={styles.body}>
            That&apos;s the landscape I audited across six methods during this course. The goal wasn&apos;t to produce
            a scorecard. It was to develop a professional audit practice - one I could carry into real design work.
          </p>
        </section>

        {/* Approach */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Approach</h2>
          <p className={styles.body}>
            Rather than treating each assignment as a standalone deliverable, I structured the work as a
            multi-method audit suite across different artifact types: social media content, commercial websites,
            an interactive learning platform, a PDF document, and direct assistive technology testing. That
            variety was intentional. Accessibility failures don&apos;t cluster in one place. Neither should the audit.
          </p>
          <ul className={styles.methodList}>
            <li><strong>Social media content audit</strong> - Instagram (Kent State College of Aeronautics)</li>
            <li><strong>Contrast ratio and color blindness analysis</strong> - Three music tech websites via WebAIM Contrast Checker</li>
            <li><strong>Heuristic evaluation</strong> - Ableton&apos;s Learning Music platform (learningmusic.ableton.com)</li>
            <li><strong>Assistive technology hands-on</strong> - VoiceOver testing on GroundNews web and mobile</li>
            <li><strong>PDF remediation</strong> - Adobe Acrobat accessibility checker on a scanned document</li>
            <li><strong>Cognitive accessibility research</strong> - Original reflection on AI, cognitive load, and machine readability</li>
          </ul>
        </section>

        {/* What I Found */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Found</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Instagram: Accessibility as Afterthought</h3>
            <p className={styles.body}>
              The Kent State College of Aeronautics feed had alt text on images, but all of it was
              auto-generated — not human-authored, not contextually accurate. Auto-generated alt text
              that misidentifies or vaguely describes an image is a different failure than missing alt
              text: it creates false confidence. A screen reader user gets a description, but the
              description is wrong. Decorative emoji were scattered throughout captions with no
              aria-hidden treatment, meaning screen readers announced each one by name. Story text
              overlays failed contrast requirements. Video content had no captions. The alt text problem
              in isolation is fixable with workflow changes. Combined with the rest, it signals that
              accessibility is being handled by automation rather than intention — which is its own
              category of problem.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Contrast Audit: Even Good Teams Leave Gaps</h3>
            <p className={styles.body}>
              The audit covered three music tech sites I know well: Ableton.com, Fors.fm, and Audiothingies.com.
              Audiothingies had the most significant failures - body text rendering at a 2.8:1 contrast ratio
              against its background, well below the WCAG AA minimum of 4.5:1 for normal text (Success Criterion
              1.4.3). Fors.fm showed low-contrast navigation that would fail for users with moderate low vision.
              Ableton largely passed, with one interactive element falling short of the 3:1 minimum for non-text
              contrast under SC 1.4.11.
            </p>
            <p className={styles.body}>
              The takeaway: even well-resourced companies with strong visual design cultures leave gaps.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>VoiceOver: The Baseline Was Missing</h3>
            <p className={styles.body}>
              VoiceOver testing on GroundNews revealed navigation order issues that made the reading experience
              non-linear in confusing ways - the focus sequence didn&apos;t match the visual hierarchy. Interactive
              elements were unlabeled. Landmark regions were missing, which meant screen reader users had no
              efficient way to jump between sections of the page. These aren&apos;t edge-case issues. They&apos;re the
              baseline.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>PDF Remediation: Before/After Delta</h3>
            <p className={styles.body}>
              Starting from a scanned document, I used Adobe Acrobat&apos;s accessibility checker to identify reading
              order failures, missing alt text on figures, and untagged tables. The remediation process required
              manually setting reading order, writing descriptive alt text, and tagging table structure.
              Documenting the before/after delta made the scope of the problem concrete in a way that a checklist
              alone doesn&apos;t.
            </p>
          </div>
        </section>

        {/* The Ableton Evaluation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Ableton Evaluation</h2>
          <p className={styles.body}>
            I chose learningmusic.ableton.com for the heuristic evaluation because I wanted to audit something
            I care about enough to be honest about its failures.
          </p>
          <p className={styles.body}>
            I&apos;ve volunteered with Ableton for over a decade. I lead the Pittsburgh Ableton User Group. The way
            Ableton communicates ideas about music - their documentation, their interfaces, the Learning Music
            site - shaped how I think about UX and why I decided to pursue it professionally. That&apos;s not a
            credential I&apos;m citing. It&apos;s the reason this evaluation carries more weight for me than a generic
            audit would.
          </p>
          <p className={styles.body}>
            Applying Nielsen&apos;s 10 heuristics to a platform I know well meant I could distinguish between
            design decisions and design failures. The site&apos;s strengths are real: strong consistency and
            standards throughout, a clear visual language, and content that respects the learner&apos;s intelligence.
            But the interactive modules have a problem with error recovery - when a user makes a mistake in a
            sequencer exercise, feedback is minimal and recovery paths aren&apos;t obvious (Heuristic 9). The chord
            sequencer had visibility of system status issues: it wasn&apos;t always clear what state the module was
            in or whether an action had registered.
          </p>
          <p className={styles.body}>
            For advanced users, the platform offers little in the way of flexibility or efficiency shortcuts -
            Heuristic 7. Someone who already understands music theory is forced through the same linear
            progression as a complete beginner. That&apos;s a pedagogical choice, but it&apos;s also an accessibility
            gap: it doesn&apos;t account for the range of expertise users actually bring.
          </p>
          <p className={styles.body}>
            None of this diminishes the site. Ableton built something genuinely good. Being able to say that
            clearly, and say where it falls short just as clearly, is what I was going for.
          </p>
        </section>

        {/* The Insight */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Insight That Changed How I Think</h2>
          <p className={styles.body}>
            The cognitive accessibility rabbit hole is where this work got interesting for me.
          </p>
          <p className={styles.body}>
            The research question I started with was straightforward: how do AI tools intersect with cognitive
            accessibility? What I landed on was something I hadn&apos;t seen stated plainly anywhere:{" "}
            <strong>accessibility best practices don&apos;t just help people - they help machines.</strong>
          </p>
          <p className={styles.body}>
            Clean semantic structure, descriptive alt text, logical reading order, properly tagged PDFs - all
            of it makes content more parseable by LLMs, search crawlers, and AI summarization tools. The two
            goals are the same goal.
          </p>
          <p className={styles.body}>
            I&apos;ve been using AI tools to manage the cognitive load of a demanding grad school schedule. Not to
            do the work - to organize my thinking and reflect on what concepts mean. There&apos;s a real difference.
            But the experience made me aware of how inaccessible content creates friction not just for screen
            reader users, but for anyone or anything trying to extract meaning from a poorly structured document
            or page.
          </p>
          <p className={styles.body}>
            Universal design isn&apos;t a compliance exercise. It&apos;s a design posture: assume the full range of
            human variation from the start, and build accordingly. When I think about the AI tools I&apos;m building
            and intend to build, that posture goes with me.
          </p>
        </section>

        {/* What I'd Do Differently */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What a Professional Version Would Include</h2>
          <p className={styles.body}>
            A class assignment has a clear scope boundary. A real audit engagement doesn&apos;t. Here&apos;s what the
            professional version of this work would add:
          </p>
          <ul className={styles.reflectionList}>
            <li>
              <strong>Stakeholder interviews before the audit</strong> - understanding the team&apos;s current workflow,
              toolchain, and capacity for remediation changes what you prioritize
            </li>
            <li>
              <strong>User testing with disabled participants</strong> - heuristic evaluation and automated checkers
              find a lot, but they don&apos;t find everything. Nothing replaces watching a screen reader user navigate
              in real time
            </li>
            <li>
              <strong>Remediation tracking</strong> - a findings report with no tracking mechanism has limited
              organizational impact. A prioritized issue log with severity ratings, WCAG criteria references,
              and remediation owners is the real deliverable
            </li>
            <li>
              <strong>VPAT documentation</strong> - for enterprise software or any product sold to institutions,
              a Voluntary Product Accessibility Template is often required
            </li>
            <li>
              <strong>Longitudinal re-audit</strong> - accessibility degrades as content is added and codebases
              change. A one-time audit is a starting point, not a solution
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "WCAG 2.1 AA/AAA application and citation",
              "Contrast ratio analysis (WebAIM)",
              "Color blindness simulation and evaluation",
              "Nielsen's 10 Heuristics - applied evaluation",
              "VoiceOver / screen reader testing",
              "PDF remediation (Adobe Acrobat)",
              "Social media content accessibility audit",
              "Cognitive accessibility and AI intersection",
              "Technical writing for accessibility findings",
              "Music technology domain expertise",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
