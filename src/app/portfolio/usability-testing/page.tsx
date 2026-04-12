import styles from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Usability Testing Methods | James Dishman",
  description:
    "A multi-method usability testing collection: a 15-participant moderated mobile study of the Philz Coffee app, a single-participant moderated session on Papa Johns, usability brief design, unmoderated remote testing with Loop11, and usability test planning for digital prototypes.",
};

export default function UsabilityTesting() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <SmartBackLink fallbackHref="/portfolio" className={styles.backLink}>&larr; Work</SmartBackLink>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>UX Research</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.year}>2024 / 2026</span>
          </div>
          <PretextTitle text={"Usability Testing\nMethods"} className={styles.title} />
          <div className={styles.methods}>
            {[
              "Moderated Mobile Usability Testing",
              "Multi-Facilitator Coordination",
              "Cross-Platform Testing (iOS / Android / Web)",
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
          Five usability testing projects, each using a different method. The newest is a 15-participant moderated mobile study of the Philz Coffee app, run across five facilitator groups on iOS, Android, and the web, that surfaced critical failures in the modifier system, the menu hierarchy, and the absence of ingredient and allergen information. Earlier work includes a single-participant moderated session on Papa Johns, a usability brief that reframed study design around ROI, an unmoderated remote test comparing two major e-commerce sites, and a usability test plan for a digital prototype redesign.
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
            These five projects each applied a different usability method to a different
            product. Together, they demonstrate range across the core skill set that
            usability work actually requires: facilitating sessions, coordinating with
            other facilitators on a shared study, designing studies, choosing metrics,
            working with remote testing platforms, and planning evaluations for prototypes
            still in development.
          </p>
        </section>

        {/* Moderated Mobile Usability Testing: Philz Coffee */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Moderated Mobile Usability Testing: Philz Coffee App</h2>
          <p className={styles.body}>
            <strong>Year:</strong> 2026
          </p>
          <p className={styles.body}>
            A 15-participant moderated usability study of the Philz Coffee mobile ordering
            app, run across five facilitator groups (Stacy, Tarun, Liz, Paige, and me) on
            iOS, Android, and the web. Five tasks per session: find and download the app,
            select a store location, customize an order using the modifier system, place a
            drink order with special instructions, and manage the cart through checkout.
            The goal was to identify friction in the mobile ordering experience, with
            particular attention to whether users could understand and effectively
            interact with the app&apos;s touch-based controls.
          </p>
          <p className={styles.body}>
            One participant&apos;s line during the modifier task became the title of the
            topline report: <em>&ldquo;It makes me feel like a dummy.&rdquo;</em> That
            sentence is the study in miniature. The app is not unusable. It is built on
            interaction conventions that the people using it do not recognize, and the
            consequence is that intelligent adults blame themselves for the interface.

          </p>

          {/* Video placeholder — interview footage to be added */}
          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Session Footage</h3>
            <p className={styles.body}>
              Interview videos from the moderated sessions are being added to this
              section. Once embedded, the clips will document the modifier tap failures,
              the menu navigation breakdowns, and the moments where participants
              verbalized their confusion in their own words.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Critical Finding: The Modifier System Fails Users</h3>
            <p className={styles.body}>
              The drink customization system was the single largest source of task failure
              across all 15 sessions. Roughly 8 to 10 of 15 participants could not
              successfully customize a drink using the app&apos;s built-in modifier
              controls. The controls rely on an underline visual convention to signal
              &ldquo;tappable,&rdquo; but participants did not recognize the underline as
              an interactive element. When they did attempt the tap, the interaction
              frequently failed to register or produced unexpected results. One participant
              spent two and a half minutes searching before giving up.
            </p>
            <p className={styles.body}>
              The affordance failed across age groups and platform familiarity, but
              skewed harder against older participants. Their natural tap behavior
              produced null results, which led them to assume the controls were
              display-only rather than interactive. The interface was punishing them for
              following standard mobile conventions.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Critical Finding: The Workaround Hits an Invisible Wall</h3>
            <p className={styles.body}>
              The downstream effect of the modifier failure is that participants
              abandoned the modifier system entirely and typed their customizations into
              the special instructions field instead. That workaround then collided with
              an undisclosed character limit that forced them to truncate their requests
              mid-sentence. The character count was not visible. At least 7 of 15
              participants hit this wall. The keyboard also covered the text input area
              on mobile, so participants could not see what they were typing while they
              were typing it.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>High-Severity Finding: Recommendations Obscure the Menu</h3>
            <p className={styles.body}>
              The recommended drinks section dominates the screen on first load, and
              multiple participants mistook it for the full menu. Users scrolled through
              recommendations repeatedly without realizing the actual menu existed
              elsewhere in the app. One facilitator&apos;s first participant took five
              minutes to find the menu. Another spent two to three minutes scrolling back
              and forth. The information architecture punishes the most instinctive
              mobile gesture, scrolling down to see more, by trapping users in a section
              that does not lead them to the core ordering flow.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Critical Finding: No Ingredient or Allergen Information</h3>
            <p className={styles.body}>
              Across multiple sessions, participants noted the absence of ingredient
              lists and allergen information. The flavor descriptors used by Philz
              (&ldquo;creamy,&rdquo; &ldquo;sweet&rdquo;) were called &ldquo;non-standard&rdquo;
              and unintuitive. Ingredient emblems exist in the app, but only one
              participant out of fifteen actually found them. At least five participants
              explicitly flagged this absence on their own.
            </p>
            <p className={styles.body}>
              For a food and beverage ordering app, this is not just a usability gap. It
              is a potential liability exposure. Naming the business risk alongside the
              user impact is part of what makes a usability finding actionable to a
              stakeholder who does not care about heuristics.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What Worked</h3>
            <p className={styles.body}>
              Cart and checkout was the most consistently successful task across all
              sessions. Participants found removing items, changing quantities, and
              completing checkout straightforward on both platforms. Location selection
              also performed well. The drink category structure (coffee and tea
              separation) made sense to participants once they reached it, and was
              described positively. Younger participants tended to navigate with less
              friction than older or less tech-familiar participants, which suggests the
              interface depends on conventions that are not yet universally understood.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Primary Recommendation</h3>
            <p className={styles.body}>
              Redesign the modifier interaction to use clearer visual affordances
              (toggles, steppers, or labeled buttons) with immediate visual feedback on
              selection. Reduce the screen real estate given to recommendations and make
              the menu navigation more prominent. Surface ingredient and allergen
              information at the point of product selection, and replace ambiguous flavor
              adjectives with concrete descriptions. Display the character count on the
              special instructions field, raise the limit, and ensure the keyboard does
              not obscure the input area on mobile.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What This Project Demonstrated</h3>
            <p className={styles.body}>
              This was the first study where I worked inside a multi-facilitator
              structure, which meant the data across sessions had to be comparable enough
              that patterns could be identified across groups. The findings are stronger
              than anything a solo five-participant study could produce, because the same
              behaviors recurred across facilitators and platforms. Critical findings
              that show up in 8 of 15 participants across 5 facilitators on 3 platforms
              are not noise. They are the system. That is the kind of evidence that
              changes a roadmap.
            </p>
          </div>
        </section>

        {/* Moderated Usability Testing: Papa Johns */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Moderated Usability Testing: Papa Johns</h2>
          <p className={styles.body}>
            <strong>Year:</strong> 2026
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
            <strong>Year:</strong> 2026
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
            <strong>Year:</strong> 2024 and 2026
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
              A follow-on project extended this work into a substantial unmoderated testing
              study covering test design, task scenario creation, quantitative metrics (task
              completion, time on task, error rates), qualitative analysis of participant
              behavior, and synthesis of findings into recommendations.
            </p>
          </div>
        </section>

        {/* Usability Test Plan: Digital Prototypes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Usability Test Plan: Adobe Express Prototype</h2>
          <p className={styles.body}>
            <strong>Year:</strong> 2025
          </p>
          <p className={styles.body}>
            I selected Adobe Express as a redesign target because its iOS app UX was
            cumbersome and uninspiring despite extensive personal use. I
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
            <h3 className={styles.findingTitle}>Multi-Facilitator Studies Produce Stronger Evidence</h3>
            <p className={styles.body}>
              The Philz Coffee study showed what happens when the same protocol is run
              across five facilitators and 15 participants on three platforms. Patterns
              that would look like outliers in a five-participant solo study become
              undeniable. When 8 of 15 participants fail the same task across different
              facilitators and devices, the finding is no longer about a particular user
              or a particular session. It is about the product. Coordinating a study at
              that scale is its own discipline, and it changes the kind of recommendation
              you can credibly make at the end.
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
              "Mobile usability testing (iOS / Android)",
              "Cross-platform comparative testing",
              "Multi-facilitator study coordination",
              "Topline report writing",
              "Critical finding triage and severity rating",
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
              <a href="/pdfs/philz-mobile-usability-study.pdf" target="_blank" rel="noopener noreferrer">
                Moderated Mobile Usability Study: Philz Coffee App (Topline Report)
              </a>
            </li>
            <li>
              <a href="/pdfs/usability-session-papajohns.pdf" target="_blank" rel="noopener noreferrer">
                Moderated Usability Session: Papa Johns
              </a>
            </li>
            <li>
              <a href="/pdfs/usability-brief-chipotle.pdf" target="_blank" rel="noopener noreferrer">
                Usability Brief: Chipotle
              </a>
            </li>
            <li>
              <a href="/pdfs/unmoderated-usability-testing.pdf" target="_blank" rel="noopener noreferrer">
                Unmoderated Usability Testing
              </a>
            </li>
            <li>
              <a href="/pdfs/loop11-usability-analysis.pdf" target="_blank" rel="noopener noreferrer">
                Loop11 Usability Analysis: Apple.com vs BestBuy.com
              </a>
            </li>
            <li>
              <a href="/pdfs/usability-test-plan-adobe-express.pdf" target="_blank" rel="noopener noreferrer">
                Usability Test Plan: Adobe Express Prototype
              </a>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
