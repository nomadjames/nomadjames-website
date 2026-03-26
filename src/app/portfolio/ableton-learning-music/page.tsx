import styles from "../ableton-learning-synths/page.module.css";

export const metadata = {
  title: "Heuristic Evaluation: Ableton Learning Music | James Dishman",
  description:
    "Nielsen's 10 Heuristics evaluation of learningmusic.ableton.com, a free music theory education platform, assessed from the perspective of a decade-long Ableton collaborator and UX researcher.",
};

export default function AbletonLearningMusic() {
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
            <span className={styles.course}>UX 60504 - Accessibility and Universal Design · Kent State MS UX</span>
          </div>
          <h1 className={styles.title}>Heuristic Evaluation:<br />Ableton Learning Music</h1>
          <div className={styles.methods}>
            {["Nielsen's 10 Heuristics", "Severity Rating", "Educational UX", "Music Technology", "Redesign Recommendations"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* Why This Site */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why This Site</h2>
          <p className={styles.body}>
            Ableton&apos;s Learning Music (<em>learningmusic.ableton.com</em>) is a free, browser-based music
            theory course designed to teach rhythm, melody, and basic composition to complete beginners.
            No downloads, no sign-in, no cost. It is one of the most ambitious free music education tools
            available, and it comes from a company that has shaped how most of the world makes electronic music.
          </p>
          <p className={styles.body}>
            I chose this site deliberately. I have been a volunteer partner with Ableton for over a decade.
            organizing the Pittsburgh Ableton User Group, serving as a direct liaison to their North American
            team, and watching their communication style and product design from the inside. The way Ableton
            builds its educational tools is not incidental to why I went into UX. It is part of the reason.
            Evaluating this site is not a neutral exercise for me. That investment is also why the evaluation
            is more precise than it might otherwise be.
          </p>
        </section>

        {/* The Method */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Method</h2>
          <p className={styles.body}>
            A heuristic evaluation applies Nielsen&apos;s 10 Usability Heuristics as a systematic inspection
            framework. Each heuristic is scored on a four-point severity scale: 0 (no problem), 1 (cosmetic
            issue), 2 (minor usability issue), 3 (major issue requiring priority fix). The evaluator is not
            a proxy user. The method draws on expert judgment to identify violations of established
            usability principles.
          </p>
          <p className={styles.body}>
            I evaluated the full course flow: the opening sequence, all major module types, interactive
            sequencer and keyboard tools, the Tracks section, and the Beats, Notes, Chords, and Song
            structure lessons. The evaluation focused on how well the site serves its stated audience, specifically someone who has never made music before, while also noting where the tool&apos;s design choices
            reflect genuine craft.
          </p>
        </section>

        {/* The Findings */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Heuristic Findings</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Visibility of System Status (Score: 1)</h3>
            <p className={styles.body}>
              Controls and audio are tightly synced. The interactive sequencer provides immediate audible
              and visual feedback when the user modifies a pattern. The playhead gives a clear, unambiguous
              indication of where playback is at any moment. For an audio-first educational interface, this
              is the most important heuristic. The site handles it well.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Match Between System and Real World (Score: 2)</h3>
            <p className={styles.body}>
              Standard music terminology is used accurately (tempo, bars, melody, chord) and the
              site avoids excessive technical jargon. The piano keyboard metaphor translates the
              note-to-pitch relationship in a way most users will recognize. The issue is in the
              threshold: terms like &ldquo;bars&rdquo; or &ldquo;tempo&rdquo; are used without definition on first encounter.
              For a learner who has never engaged with music theory, these terms are not obvious. The site
              assumes a slightly higher baseline than its beginner audience may have.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>User Control and Freedom (Score: 2)</h3>
            <p className={styles.body}>
              Navigation between modules is clear and backtracking is easy. The larger issue is audio
              control: there is no volume slider. For a platform built entirely around sound, where the core interaction is listening to what you create, the absence of a volume control is a
              meaningful gap. A user on headphones in a loud environment, or a user with hearing sensitivity,
              has no way to adjust output level without leaving the site. This is not a blocking failure,
              but it is a preventable frustration in an audio-first product.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Consistency and Standards (Score: 1)</h3>
            <p className={styles.body}>
              This is where the site excels. The grid-based step sequencer and piano-roll interface are
              consistent with conventions used in professional DAW software, which is exactly appropriate
              for a product designed to introduce users to tools they might later use seriously. The visual
              language of music production is embedded in the interface design. A user who finishes
              Learning Music and opens Ableton Live will recognize the interface metaphors they already learned.
              This is a deliberate and well-executed design decision.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Error Prevention (Score: 1)</h3>
            <p className={styles.body}>
              The guided step-by-step structure makes errors difficult. The interface constrains the user
              to valid actions at each stage. Choices that would break a musical example are not available.
              This is the right call for a beginner tool where the goal is confidence and early success,
              not exploration of edge cases.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Recognition over Recall (Score: 1)</h3>
            <p className={styles.body}>
              Every control is labeled. The user is never expected to remember a command, shortcut, or
              setting from a previous screen. Progress through the course is visually indicated. The
              interface does not require the user to hold state in their head.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Flexibility and Efficiency (Score: 2)</h3>
            <p className={styles.body}>
              No keyboard shortcuts are available. For a beginner tool with a sequential flow, this
              is acceptable. The audience is not expected to move efficiently through content they
              have not encountered before. The score reflects the gap, not a failure: a more advanced
              user revisiting content or practicing a module repeatedly would benefit from keyboard
              navigation that does not exist.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Aesthetic and Minimalist Design (Score: 1)</h3>
            <p className={styles.body}>
              The visual design is a strong example of minimalism done correctly. The interface does not
              decorate. Every element has a function. Color is used to mark state changes, not to create
              visual interest. The cognitive overhead of learning music theory is high enough that any
              unnecessary visual complexity would compete with it. The site seems to understand this.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Help Users Recognize and Recover from Errors (Score: 2)</h3>
            <p className={styles.body}>
              The site tells users when a task is complete. It does not tell them why an incomplete attempt
              was incorrect. A user who builds a pattern that does not match the exercise goal receives no
              specific feedback, only the absence of a completion signal. For an educational tool, the
              difference between &ldquo;you got it wrong&rdquo; and &ldquo;here is what was wrong&rdquo; is significant.
              Diagnostic feedback is the mechanism through which learners correct their mental models.
              Without it, some users repeat errors without understanding why.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Help and Documentation (Score: 3)</h3>
            <p className={styles.body}>
              This is the site&apos;s most significant gap. There is no searchable help system, no glossary,
              no FAQ, and no way to look up a term used in the course without leaving the site entirely.
              For a general-purpose web application, this might be acceptable. For an educational platform
              where the user&apos;s primary activity is encountering concepts for the first time,
              the absence of reference documentation creates real barriers.
            </p>
            <p className={styles.body}>
              A user who encounters &ldquo;syncopation&rdquo; in Lesson 4 and is not sure what it means has no in-context
              resource to consult. They must either continue without understanding or leave the learning
              environment to search externally. Either outcome degrades the experience. The site&apos;s content
              quality is high enough that a glossary linked from the lesson text would not feel out of place.
              Its absence feels like an oversight, not a deliberate choice.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Overall Assessment</h2>
          <p className={styles.body}>
            Learning Music is a genuinely well-designed educational tool. Most of the heuristics score 1
            or 2, minor issues not failures. The interface design reflects real craft: the minimalism is
            disciplined, the system status feedback is tight, and the decision to mirror professional DAW
            conventions is exactly right for a product designed to introduce beginners to a world they
            might continue in.
          </p>
          <p className={styles.body}>
            The gap is in the support layer. Help and Documentation (score 3) is the only heuristic that
            constitutes a priority issue. It is also the most fixable: a lightweight glossary and contextual
            term definitions would address it without requiring changes to the content or interface architecture.
          </p>
          <p className={styles.body}>
            What this evaluation confirmed for me as a researcher: the site was designed with a clear user
            model: a learner who starts at the beginning and works through in sequence. That model is
            coherent. The failures cluster precisely at the points where a different user (one who skips around, arrives at a specific module, or needs to look something up) falls outside that model.
            Good design solves for the intended user. The question is always whether the intended user
            is narrow enough to leave meaningful segments behind.
          </p>
        </section>

        {/* Recommendations */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recommendations</h2>
          <ul className={styles.reflectionList}>
            <li>
              <strong>Integrated glossary:</strong> inline term definitions or a searchable reference
              panel accessible without leaving the course. Music theory has a defined vocabulary;
              learners encountering it for the first time need a reference layer.
            </li>
            <li>
              <strong>Diagnostic error feedback:</strong> when a pattern or answer is incomplete,
              identify specifically what does not match rather than returning only a
              completion/non-completion signal. Targeted feedback corrects mental models.
              Binary feedback does not.
            </li>
            <li>
              <strong>Volume control:</strong> a persistent, accessible audio output control.
              For an audio-first learning environment, this is a basic accessibility need.
            </li>
            <li>
              <strong>Non-linear discovery paths:</strong> while the sequential structure is sound,
              a secondary navigation option for users who want to locate a specific concept or revisit
              content would serve learners who return to the site after completing it once.
            </li>
          </ul>
        </section>

        {/* Companion */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Part of an Ongoing Series</h2>
          <p className={styles.body}>
            This heuristic evaluation is part of a three-study series applying different inspection methods
            across Ableton&apos;s product range: a mobile app, a music theory course, and a synthesis tutorial.
          </p>
          <div className={styles.body}>
            <a href="/portfolio/ableton-note">Heuristic Evaluation: Ableton Note →</a>
            <br />
            <a href="/portfolio/ableton-learning-synths">Cognitive Walkthrough: Ableton Learning Synths →</a>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Nielsen's 10 Heuristics",
              "Severity rating (0–3 scale)",
              "Expert inspection methodology",
              "Educational UX evaluation",
              "Technical domain expertise (music theory and production)",
              "Structured finding documentation",
              "Redesign recommendation writing",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Original submission */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Original Submission</h2>
          <p className={styles.body}>
            <a href="/pdfs/ableton-learning-music-heuristic-eval.pdf" target="_blank" rel="noopener noreferrer">View original PDF →</a>
          </p>
        </section>

      </main>
    </div>
  );
}
