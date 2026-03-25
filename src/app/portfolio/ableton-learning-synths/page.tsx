import styles from "./page.module.css";

export const metadata = {
  title: "Cognitive Walkthrough: Ableton Learning Synths | James Dishman",
  description:
    "Cognitive walkthrough evaluation of learningsynths.ableton.com — assessing learnability for novice users motivated by musical outcomes rather than technical theory.",
};

export default function AbletonLearningsynths() {
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
            <span className={styles.year}>2026</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>UX 60541 - Evaluation Fundamentals · Kent State MS UX</span>
          </div>
          <h1 className={styles.title}>Cognitive Walkthrough:<br />Ableton Learning Synths</h1>
          <div className={styles.methods}>
            {["Cognitive Walkthrough", "Learnability Evaluation", "Novice User Modeling", "Heuristic Analysis", "Redesign Recommendations"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* The Site */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why This Site</h2>
          <p className={styles.body}>
            Ableton&apos;s Learning Synths — <em>learningsynths.ableton.com</em> — is an interactive educational
            site designed to teach the fundamentals of subtractive synthesis to complete beginners. It&apos;s
            a good faith attempt at a genuinely hard problem: breaking down an abstract, technically dense
            topic for users who don&apos;t yet have the vocabulary to ask the right questions.
          </p>
          <p className={styles.body}>
            I&apos;ve been involved with Ableton as a user, community organizer, and advocate for over thirty
            years. I lead the Pittsburgh Ableton User Group and have watched countless beginners encounter
            synthesis for the first time. That background shaped why I picked this site — and it meant I
            could bring genuine domain fluency to the evaluation while still working from a rigorous novice
            perspective.
          </p>
        </section>

        {/* The Method */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Method</h2>
          <p className={styles.body}>
            A cognitive walkthrough evaluates interface learnability by walking through specific tasks as
            a target user, asking four questions at each step: Is the user trying to achieve the right
            outcome? Is the correct action visible? Can the user connect the action to the goal? Does
            the feedback confirm that the right thing happened?
          </p>
          <p className={styles.body}>
            The persona I used: an aspiring music producer just getting started. No equipment, no production
            software, no understanding of synthesis terminology or concepts. One specific goal — approximate
            a West Coast-style synth lead they&apos;d heard in a track. That persona isn&apos;t hypothetical.
            It&apos;s every beginner who has ever opened a synthesizer manual and bounced off the first page.
          </p>
          <p className={styles.body}>
            The walkthrough covered both the sequential learning path (the intended flow) and a direct
            navigation attempt — what happens when a user tries to find a specific sound without working
            through the lessons in order.
          </p>
        </section>

        {/* What I Found */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Found</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Sequential learning: genuinely effective</h3>
            <p className={styles.body}>
              When a user commits to the linear path — starting from the beginning, working through each
              module in sequence — Learning Synths works well. Buttons are consistent and follow standard
              conventions. Interactive audio-visual feedback connects abstract concepts to audible results
              quickly, which accelerates understanding. The site&apos;s progressive structure means each concept
              builds on the last, and the pacing respects the learner&apos;s intelligence.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Outcome-motivated navigation: a different experience</h3>
            <p className={styles.body}>
              A user who arrives with a specific goal — "I want to make that sound" — doesn&apos;t start at
              the beginning. They scan the menu. They look for something that sounds like what they&apos;re
              trying to make. This is where the site creates problems.
            </p>
            <p className={styles.body}>
              The West Coast Lead page exists. It&apos;s under a section called "Recipes." To find it, the
              user must first know that a West Coast-style lead is a "recipe," then must open that section,
              then must correctly associate "Envelopes: CHANGE OVER TIME" — a technical label using undefined
              vocabulary — with the legato quality they&apos;re trying to achieve. At each step, this is a
              Question 3 failure: the user cannot connect the available action to their goal.
            </p>
            <p className={styles.body}>
              Worse: if they do land on the West Coast Lead page directly, the content assumes familiarity
              with concepts covered in earlier modules. The page is comprehensible to someone who has
              worked through the course. It&apos;s opaque to someone arriving cold with a musical goal.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The underlying mismatch</h3>
            <p className={styles.body}>
              The site is organized around a theory-first framework: learn the concept, then hear how it
              applies. Most beginner learners approach synthesis the other way: they have a sound in their
              head, and they want to understand enough theory to produce it. These aren&apos;t equally valid
              preferences — the theory-first approach is pedagogically defensible. But the site&apos;s navigation
              assumes the user already knows which concepts are relevant to their goal. That assumption breaks
              for anyone arriving with a musical outcome rather than a learning agenda.
            </p>
          </div>
        </section>

        {/* The Insight */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Insight</h2>
          <p className={styles.body}>
            The site succeeds at sequential learning but creates discovery barriers for the novice user
            who is motivated by specific musical outcomes rather than technical theory.
          </p>
          <p className={styles.body}>
            That distinction matters because it determines who can use the site effectively. A learner
            willing to work through the structured curriculum gets a genuinely good experience. A learner
            who arrives with a goal and tries to navigate toward it — which describes most beginners in
            domains they care about — hits a wall that the site&apos;s content quality can&apos;t compensate for.
          </p>
          <p className={styles.body}>
            Educational interfaces in technical domains almost universally underinvest in the motivational
            layer. Learning Synths is better than most. The failure here isn&apos;t poor design — it&apos;s an
            assumption about the user&apos;s orientation that&apos;s baked into the information architecture.
          </p>
        </section>

        {/* Recommendations */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recommendations</h2>
          <ul className={styles.reflectionList}>
            <li>
              <strong>Outcome-oriented navigation labels</strong> — replace or supplement technical labels
              with descriptions of what the concept sounds like or what you can do with it.
              "Envelopes: CHANGE OVER TIME" is accurate. "Make a sound that swells or fades" is
              accessible — and tells the novice user whether this is the module they need.
            </li>
            <li>
              <strong>A motivation-driven discovery path</strong> — a parallel navigation flow that lets
              users start from a sound (or a genre, or a feeling) rather than a concept. The technical
              content doesn&apos;t need to change. The entry point does.
            </li>
            <li>
              <strong>Contextual prerequisites</strong> — when a user lands on an advanced page directly,
              surface the foundational concepts they&apos;ll need before they hit the first undefined term.
              A small "you&apos;ll need to know:" section at the top of the Recipes pages would resolve the
              cold-landing problem.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Cognitive walkthrough methodology",
              "Novice user persona construction",
              "Learnability evaluation (CW four-question framework)",
              "Information architecture critique",
              "Redesign recommendation writing",
              "Technical domain expertise (electronic music synthesis)",
              "Educational UX evaluation",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
