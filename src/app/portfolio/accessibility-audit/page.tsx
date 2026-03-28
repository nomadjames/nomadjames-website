import styles from "./page.module.css";
import Tldr from "@/components/Tldr";

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
            {["WCAG 2.1 AA/AAA", "Contrast Analysis", "VoiceOver", "PDF Remediation", "Social Media Audit", "Cognitive Accessibility"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          I evaluated five music technology platforms across WCAG compliance, VoiceOver testing, contrast analysis, PDF remediation, and cognitive accessibility. The biggest finding wasn&apos;t any single violation. It was that accessibility best practices for people and machine readability for AI are the same goal, and most teams are failing at both.
        </Tldr>

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
            That&apos;s the landscape I audited across five methods during this course. The goal wasn&apos;t to produce
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
            <li><strong>Assistive technology hands-on</strong> - VoiceOver testing on GroundNews web</li>
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
              auto-generated, not human-authored, not contextually accurate. Auto-generated alt text
              that misidentifies or vaguely describes an image is a different failure than missing alt
              text: it creates false confidence. A screen reader user gets a description, but the
              description is wrong. Decorative emoji were scattered throughout captions with no
              aria-hidden treatment, meaning screen readers announced each one by name. Story text
              overlays failed contrast requirements. Video content had no captions. The alt text problem
              in isolation is fixable with workflow changes. Combined with the rest, it signals that
              accessibility is being handled by automation rather than intention, which is its own
              category of problem.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Contrast Audit: Specific Failures, Not Generic Ones</h3>
            <p className={styles.body}>
              The audit covered three music tech sites: Ableton.com, Fors.fm, and Audiothingies.com.
              Fors.fm was a surprise. I expected to find violations there and didn&apos;t. Ableton largely passed.
              The significant failures were concentrated at Audiothingies.com: gold-colored link text at a 2.4:1
              contrast ratio (well below the 4.5:1 WCAG AA minimum under SC 1.4.3), red heading text at 4.3:1
              that just misses the threshold, an &quot;Out of Stock&quot; notification and a CTA button that both
              fail contrast requirements, and small red header text (23px) that doesn&apos;t qualify for the large-text
              exception.
            </p>
            <p className={styles.body}>
              The takeaway: failures cluster in specific interactive elements and status indicators, not uniformly
              across a site. That makes them easy to miss in a casual review, and consequential for users with
              low vision who depend on those exact touchpoints.
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

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Beyond WCAG: Cognitive Accessibility</h3>
            <p className={styles.body}>
              WCAG organizes accessibility around four principles: perceivable, operable, understandable, and
              robust. That framework catches a lot. But it doesn&apos;t fully address cognitive load, focus support,
              or plain language as first-class concerns. To fill that gap, I built an evaluation methodology
              grounded in the W3C&apos;s COGA (Cognitive and Learning Disabilities Accessibility) task force work
              and their &quot;Making Content Usable for People with Cognitive and Learning Disabilities&quot; guidance.
              The goal was to extend the audit to cover the experience of users with ADHD, dyslexia, autism,
              memory impairments, and mental health conditions like communication anxiety.
            </p>
            <p className={styles.body}>
              I developed eight evaluation criteria that sit alongside traditional WCAG checks: plain language,
              clear iconography, consistent navigation, focus support, memory independence, error prevention,
              content scannability, and progressive disclosure. I also ran Flesch-Kincaid readability analysis
              and applied mobile care heuristics for cognitive accessibility. These criteria surface a class
              of failures that automated tools and contrast checkers will never flag, things like unclear
              error messages, inconsistent interaction patterns, dark patterns that exploit decision fatigue,
              and content that demands too much working memory to parse.
            </p>
            <p className={styles.body}>
              This is the part of accessibility work that most teams skip entirely. WCAG compliance is necessary
              but not sufficient. If your content is technically perceivable and operable but still confusing,
              you haven&apos;t solved the problem.
            </p>
          </div>
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
              <strong>User testing with assistive technology users</strong> - heuristic evaluation and automated checkers
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

        {/* Original submission */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Original Submission</h2>
          <p className={styles.body}>
            <a href="/pdfs/accessibility-audit.pdf" target="_blank" rel="noopener noreferrer">View original PDF →</a>
          </p>
        </section>

      </main>
    </div>
  );
}
