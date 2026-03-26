import styles from "../ableton-learning-synths/page.module.css";

export const metadata = {
  title: "Ableton UX Evaluation Suite | James Dishman",
  description:
    "A four-study UX evaluation suite across Ableton's product ecosystem: stakeholder analysis, heuristic evaluations, and cognitive walkthrough. Conducted with 30 years of music production domain expertise and a decade as Pittsburgh Ableton User Group leader.",
};

export default function AbletonEvaluationSuite() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>← Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>UX Research · Interaction Design</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2024 / 2026</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>Kent State MS UX (UX 60501, UX 60503, UX 60504, UX 60541)</span>
          </div>
          <h1 className={styles.title}>Ableton UX<br />Evaluation Suite</h1>
          <div className={styles.methods}>
            {[
              "Stakeholder Analysis",
              "Nielsen's 10 Heuristics",
              "Cognitive Walkthrough",
              "Severity Rating",
              "Expert Inspection",
              "Ecosystem Design Analysis",
              "iOS / Mobile UX",
              "Educational UX",
              "Novice User Modeling",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* Context */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why This Suite Exists</h2>
          <p className={styles.body}>
            I have been making electronic music for thirty years. I have led the Pittsburgh
            Ableton User Group for over a decade, serving as a direct liaison to Ableton&apos;s
            North American team. I have watched countless beginners encounter synthesis,
            music theory, and production workflows for the first time. The way Ableton
            communicates ideas about music shaped how I think about UX and why I decided
            to pursue it professionally.
          </p>
          <p className={styles.body}>
            This is not a collection of unrelated class assignments. Over four courses in
            Kent State&apos;s MS UX program, I deliberately chose Ableton products as evaluation
            targets, applying a different method each time. The result is a multi-method
            evaluation suite that covers Ableton&apos;s ecosystem from the corporate structure
            down to individual interaction patterns on a mobile screen.
          </p>
          <p className={styles.body}>
            That domain expertise is what makes these evaluations different from generic
            student work. I can distinguish between a design decision and a design failure
            because I understand the ecosystem from the inside. I know who uses these
            products, how they use them, and what Ableton is actually trying to accomplish
            with each one.
          </p>
        </section>

        {/* Stakeholder Analysis */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stakeholder Analysis: Ableton Live</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60501, Fundamentals of User Experience (Fall 2024)
          </p>
          <p className={styles.body}>
            Before evaluating any interface, I mapped the full stakeholder landscape
            surrounding Ableton Live. This was research into who has a stake in how the
            product behaves, and why that matters for design decisions.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Core Stakeholders</h3>
            <p className={styles.body}>
              Ableton AG is privately held by co-founders Gerhard Behles (42.9%) and Bernd
              Roggendorf (33.7%), with CFO Jan Bohl holding the remainder. The company is
              actively transitioning to employee ownership in perpetuity. This is not a
              company optimizing for quarterly returns. That ownership structure directly
              shapes design priorities: long-term user investment over short-term engagement
              metrics.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Ecosystem Layer</h3>
            <p className={styles.body}>
              Live sits at the center of an ecosystem that includes Push hardware (now
              standalone with Push 3), Ableton Note for mobile capture, Ableton Cloud for
              project transfer, Max for Live for user-created devices, Ableton Link for
              cross-application sync, and the Learning Music and Learning Synths educational
              sites. Partner companies (Akai, Novation, Cycling &apos;74) and a global network of
              certified trainers, user groups, and educational institutions all orbit the
              core product.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>User Diversity</h3>
            <p className={styles.body}>
              The user base spans professional producers, DJs, live performers, installation
              artists, sound designers, film composers, worship directors, educators,
              students, podcasters, game developers, and Max/MSP developers. Most are
              hobbyists. Most are male, with the majority in North America. Users tend to
              stay loyal to a single DAW for years due to the cost and learning investment.
              Behles has publicly stated that piracy is of minimal concern and leads to
              conversions.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Why This Matters for Evaluation</h3>
            <p className={styles.body}>
              Understanding the stakeholder landscape changes how you read every design
              decision in the products that follow. Ableton&apos;s educational sites are not
              advertising. They are free, platform-agnostic resources that exist because the
              company believes in expanding who makes music. The choice to prioritize Live
              ecosystem consistency over platform-native conventions in Note is not an
              oversight. It is a bet on the loyalty of an installed base that measures in the
              thousands of hours per user. These are design decisions you can only evaluate
              correctly if you know who made them and why.
            </p>
          </div>
        </section>

        {/* Heuristic Evaluation: Ableton Note */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Heuristic Evaluation: Ableton Note</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60503, Fundamentals of Interaction Design (2025)
          </p>
          <p className={styles.body}>
            Ableton Note is a mobile musical sketchpad for iOS. Not a companion app, not a
            simplified version of Live, but a purpose-built tool for capturing musical ideas
            wherever they happen. The design brief is inherently tense: a professional-grade
            iOS instrument that needs to be fast enough to capture a fleeting idea, deep
            enough to be worth using seriously, and connected enough to integrate with one
            of the most complex creative environments in the world.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Visibility of System Status: Strong with One Gap</h3>
            <p className={styles.body}>
              Play/stop transforms with a progress ring. Clips show color-fill that advances
              during playback. Note and modulation data is visible in the session grid.
              Confident, readable implementations within small-screen constraints.
            </p>
            <p className={styles.body}>
              The gap: Sample View has no playback position marker. For an app built around
              microphone recording as a core instrument type, this is a missing feedback layer.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Match Between System and Real World: Partial, by Design</h3>
            <p className={styles.body}>
              The interface mirrors Ableton Live extensively: the Session view grid, the clip
              color system, the mixer layout. For Live users, the mapping is exact. For a
              beginner encountering Note as a first instrument, many interface elements are
              opaque. The icon language is the most concrete problem. Multiple icons activate
              significant functions without descriptive labels. Even experienced Live users
              sometimes cannot identify what an icon does without pressing it.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>User Control and Freedom: Exceptional</h3>
            <p className={styles.body}>
              This is Note&apos;s strongest heuristic. Undo/Redo are prominent and work
              throughout the entire application. Perpetual save means the user never thinks
              about whether their work is safe.
            </p>
            <p className={styles.body}>
              The standout is the Capture function. Capture records whatever the user just
              played, even if they were not in record mode. Note is always listening. If you
              improvise something interesting and only realize it afterward, Capture retrieves
              it. This reflects a deep understanding of how musicians actually work: the best
              moments often happen before you think to press record. Designing for that
              reality is not common.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Consistency and Standards: A Deliberate Jakob&apos;s Law Exception</h3>
            <p className={styles.body}>
              Jakob&apos;s Law says users prefer interfaces that work like the ones they already
              know. The standard application would push Note toward iOS conventions.
              Ableton made the opposite choice: Note is internally consistent with Ableton
              Live, not with the iOS ecosystem. This is defensible. Live has been the most
              widely used professional DAW for over two decades. Its users have invested
              thousands of hours learning its conventions. Note extends that investment
              rather than replacing it. The cost is that Note is not a good introduction for
              someone who has never touched Live.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Error Prevention: Designed Around the Musician&apos;s Actual Risks</h3>
            <p className={styles.body}>
              The most important errors in music production are not typos. They are losing a
              good idea and accidentally overwriting a clip you meant to keep. Undo prevents
              accidental overwrites. Clip Duplicate preserves versions before experimenting.
              Perpetual save means nothing is lost by closing the app. Capture prevents the
              error of not having record running when inspiration struck. One gap: no way to
              lock a clip to protect it from accidental editing.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Recognition Rather Than Recall: Core Clear, Advanced Buried</h3>
            <p className={styles.body}>
              The primary workflow is navigable without memorization. Advanced
              functionality (effects routing, automation, performance mode, sampler
              configuration) requires exploration through icon-based menus. Once learned,
              the layout is logical. Before it is learned, it is opaque.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Flexibility and Efficiency: One Significant Bottleneck</h3>
            <p className={styles.body}>
              Touch-screen constraints eliminate keyboard shortcuts entirely. The more
              actionable issue is note editing: moving individual notes in a clip requires
              imprecise touch interactions in a dense grid. Adjusting note length requires
              precise dragging with little room for error.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Aesthetic and Minimalist Design: Complex Handled Well</h3>
            <p className={styles.body}>
              Note manages significant functional density without visual clutter. Dark theme,
              consistent color system, deliberate suppression of decorative elements. This is
              a multi-instrument sequencer with effects routing on a 6-inch screen, and the
              interface does not amplify the complexity.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Error Recovery and Help: Designed Out or Absent</h3>
            <p className={styles.body}>
              Error recovery is near non-issue by design: perpetual save, perpetual undo, and
              constraint-based workflows mean recoverable errors are rarely severe. Help and
              documentation is entirely external. A 56-page manual, onboarding videos on
              YouTube, and the Ableton community. No in-app help, no contextual tooltips, no
              onboarding flow. For experienced Live users, not a problem. For anyone arriving
              cold, a real barrier.
            </p>
          </div>
        </section>

        {/* Cognitive Walkthrough: Learning Synths */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cognitive Walkthrough: Ableton Learning Synths</h2>
          <p className={styles.body}>
            <strong>Course:</strong> UX 60541, Evaluation Fundamentals (2026)
          </p>
          <p className={styles.body}>
            Learning Synths (<em>learningsynths.ableton.com</em>) teaches the fundamentals
            of subtractive synthesis to complete beginners. It attempts to break down
            abstract, technically dense concepts for users who do not yet have the vocabulary
            to ask the right questions. The cognitive walkthrough method evaluates
            learnability by walking through specific tasks as a target user, asking four
            questions at each step: Is the user trying to achieve the right outcome? Is the
            correct action visible? Can the user connect the action to the goal? Does the
            feedback confirm that the right thing happened?
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Persona</h3>
            <p className={styles.body}>
              An aspiring music producer just getting started. No equipment, no production
              software, no understanding of synthesis terminology. One specific goal:
              approximate a West Coast-style synth lead they heard in a track. That persona
              is not hypothetical. It is every beginner who has ever opened a synthesizer
              manual and bounced off the first page.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Sequential Learning: Genuinely Effective</h3>
            <p className={styles.body}>
              When a user commits to the linear path, Learning Synths works. Buttons are
              consistent and follow standard conventions. Interactive audio-visual feedback
              connects abstract concepts to audible results quickly, which accelerates
              understanding. The progressive structure means each concept builds on the
              last, and the pacing respects the learner&apos;s intelligence.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Outcome-Motivated Navigation: Where It Breaks</h3>
            <p className={styles.body}>
              A user who arrives with a specific goal (&ldquo;I want to make that sound&rdquo;)
              does not start at the beginning. They scan the menu. They look for something
              that sounds like what they are trying to make. The West Coast Lead page exists
              under a section called &ldquo;Recipes.&rdquo; To find it, the user must first know that a
              West Coast-style lead is a &ldquo;recipe,&rdquo; then open that section, then correctly
              associate &ldquo;Envelopes: CHANGE OVER TIME&rdquo; (a technical label using undefined
              vocabulary) with the legato quality they are trying to achieve. At each step,
              this is a Question 3 failure: the user cannot connect the available action to
              their goal.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Key Insight</h3>
            <p className={styles.body}>
              The site is organized around a theory-first framework: learn the concept, then
              hear how it applies. Most beginner learners approach synthesis the other way.
              They have a sound in their head and want to understand enough theory to
              produce it. The theory-first approach is pedagogically defensible, but the
              navigation assumes the user already knows which concepts are relevant to
              their goal. That assumption breaks for anyone arriving with a musical outcome
              rather than a learning agenda.
            </p>
            <p className={styles.body}>
              Educational interfaces in technical domains almost universally underinvest in
              the motivational layer. Learning Synths is better than most. The failure is not
              poor design. It is an assumption about the user&apos;s orientation that is baked into
              the information architecture.
            </p>
          </div>
        </section>

        {/* Heuristic Evaluation: Learning Music */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Heuristic Evaluation: Ableton Learning Music</h2>
          <p className={styles.body}>
            <strong>Courses:</strong> UX 60541 (2026) and UX 60504, Accessibility and
            Universal Design (2025)
          </p>
          <p className={styles.body}>
            Learning Music (<em>learningmusic.ableton.com</em>) is a free, browser-based
            music theory course that teaches rhythm, melody, and basic composition to
            complete beginners. No downloads, no sign-in, no cost. The evaluation applied
            Nielsen&apos;s 10 Heuristics with a four-point severity scale.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Strengths (Scores 1)</h3>
            <p className={styles.body}>
              <strong>Visibility of System Status:</strong> Controls and audio tightly synced.
              The playhead gives unambiguous feedback. For an audio-first educational
              interface, this is the most important heuristic, and the site handles it well.
            </p>
            <p className={styles.body}>
              <strong>Consistency and Standards:</strong> The grid-based step sequencer and
              piano-roll interface are consistent with professional DAW conventions. A user
              who finishes Learning Music and opens Ableton Live will recognize the
              interface metaphors they already learned. This is deliberate and well-executed.
            </p>
            <p className={styles.body}>
              <strong>Error Prevention:</strong> The guided structure constrains users to valid
              actions. Choices that would break a musical example are not available. The
              right call for a beginner tool where the goal is confidence and early success.
            </p>
            <p className={styles.body}>
              <strong>Aesthetic and Minimalist Design:</strong> Every element has a function.
              Color marks state changes, not visual interest. The cognitive overhead of
              learning music theory is high enough that any unnecessary visual complexity
              would compete with it.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Moderate Issues (Scores 2)</h3>
            <p className={styles.body}>
              <strong>Match Between System and Real World:</strong> Standard music
              terminology is used accurately, but terms like &ldquo;bars&rdquo; and &ldquo;tempo&rdquo; appear
              without definition on first encounter. The site assumes a slightly higher
              baseline than its beginner audience may have.
            </p>
            <p className={styles.body}>
              <strong>User Control and Freedom:</strong> Navigation between modules is clear.
              The significant gap: no volume slider. For a platform built entirely around
              sound, the absence of audio output control is a preventable frustration.
            </p>
            <p className={styles.body}>
              <strong>Error Recovery:</strong> The site tells users when a task is complete but
              not why an incomplete attempt was incorrect. For an educational tool, the
              difference between &ldquo;you got it wrong&rdquo; and &ldquo;here is what was wrong&rdquo; is
              significant. Diagnostic feedback corrects mental models. Binary feedback does
              not.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Priority Issue (Score 3): Help and Documentation</h3>
            <p className={styles.body}>
              No searchable help system, no glossary, no FAQ, and no way to look up a term
              used in the course without leaving the site. A user who encounters
              &ldquo;syncopation&rdquo; in Lesson 4 and is unsure what it means has no in-context
              resource. They must either continue without understanding or leave the
              learning environment to search externally. The site&apos;s content quality is high
              enough that a glossary would not feel out of place. Its absence feels like an
              oversight, not a deliberate choice.
            </p>
          </div>
        </section>

        {/* Cross-Product Insights */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Cross-Product Insights</h2>
          <p className={styles.body}>
            Evaluating three products from the same company with different methods reveals
            patterns that no single evaluation could surface.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Insider Assumption</h3>
            <p className={styles.body}>
              Every Ableton product evaluated here assumes prior familiarity with the
              Ableton ecosystem. Note mirrors Live&apos;s interface conventions rather than iOS
              norms. Learning Synths organizes content around technical vocabulary that
              beginners do not have. Learning Music uses industry-standard terminology
              without defining it on first encounter. The pattern is consistent: Ableton
              designs for the user who already speaks their language. This is a coherent
              philosophy, not an accident. It works for the core audience. It creates a real
              onboarding gap for everyone else.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Sequential Design, Non-Sequential Users</h3>
            <p className={styles.body}>
              All three products assume a linear user journey. Note assumes you learned Live
              first. Learning Synths assumes you will start at lesson one. Learning Music
              assumes you will work through the curriculum in order. Each product works well
              for users who follow the intended path. Each product creates friction for users
              who arrive with a specific goal and try to navigate directly to it. The cognitive
              walkthrough of Learning Synths made this most visible, but the pattern holds
              across the suite.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Minimalism as UX Philosophy</h3>
            <p className={styles.body}>
              Ableton&apos;s visual restraint is consistent and intentional across every product.
              Note suppresses decorative elements on a 6-inch screen. Learning Music uses
              color for state, not decoration. Learning Synths lets the audio-visual feedback
              carry the cognitive load. This is not a style preference. It is a design posture
              that respects the complexity of the domain and trusts the user to focus on the
              content rather than the chrome.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Help Is the Consistent Gap</h3>
            <p className={styles.body}>
              Note has no in-app help. Learning Music has no glossary. Learning Synths has
              no contextual prerequisites. The stakeholder analysis revealed that Ableton
              relies on a network of certified trainers, user groups, community forums, and
              external documentation. This is not laziness. It is a model that externalizes
              the support layer to the community. The model works for engaged users who
              already know where to look. It fails for the exact users Ableton&apos;s educational
              products are supposedly designed to reach: people who are encountering this
              world for the first time.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Domain Expertise Changes What You See</h3>
            <p className={styles.body}>
              The stakeholder analysis contextualized Ableton&apos;s ownership structure and
              community investment model. The heuristic evaluations identified specific
              interface-level violations. The cognitive walkthrough revealed information
              architecture assumptions invisible to heuristic inspection alone. No single
              method would have produced this picture. The suite format is the point.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Nielsen's 10 Heuristics",
              "Cognitive walkthrough (CW four-question framework)",
              "Stakeholder analysis",
              "Severity rating (0-3 scale)",
              "Expert inspection methodology",
              "Novice user persona construction",
              "Information architecture critique",
              "Jakob's Law application",
              "iOS mobile UX evaluation",
              "Educational UX evaluation",
              "Ecosystem design analysis",
              "Music production domain expertise (30 years)",
              "Cross-method synthesis",
              "Redesign recommendation writing",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Original submissions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Original Submissions</h2>
          <ul className={styles.reflectionList}>
            <li>
              <a href="/pdfs/ableton-stakeholder-analysis.pdf" target="_blank" rel="noopener noreferrer">
                Stakeholder Analysis of Ableton Live (UX 60501)
              </a>
            </li>
            <li>
              <a href="/pdfs/ableton-note-heuristic-eval.pdf" target="_blank" rel="noopener noreferrer">
                Heuristic Evaluation: Ableton Note (UX 60503)
              </a>
            </li>
            <li>
              <a href="/pdfs/ableton-learning-synths-cognitive-walkthrough.pdf" target="_blank" rel="noopener noreferrer">
                Cognitive Walkthrough: Ableton Learning Synths (UX 60541)
              </a>
            </li>
            <li>
              <a href="/pdfs/ableton-learning-music-heuristic-eval.pdf" target="_blank" rel="noopener noreferrer">
                Heuristic Evaluation: Ableton Learning Music (UX 60541 / UX 60504)
              </a>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
