import styles from "./page.module.css";

export const metadata = {
  title: "Food Insecurity Discovery Research | James Dishman",
  description: "Full-cycle discovery research on food insecurity in the Mahoning Valley - screener design, qualitative interviews, affinity mapping, and JTBD analysis.",
};

export default function FoodInsecurityResearch() {
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
            <span className={styles.course}>UX 60531 - Discovery Research · Kent State MS UX</span>
          </div>
          <h1 className={styles.title}>Food Insecurity<br />Discovery Research</h1>
          <div className={styles.methods}>
            {["Screener Design", "Semi-Structured Interviews", "Affinity Mapping", "Questionnaire Design", "JTBD Analysis", "Mixed Methods"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.body}>
            The Mahoning Valley - the post-industrial corridor straddling northeast Ohio and western Pennsylvania,
            anchored by Youngstown - is a region still working through the long aftermath of deindustrialization.
            The economic disruption that began in the late 1970s reshaped the Valley in ways that are still
            visible today: in vacancy rates, in health outcomes, in food access. Roughly one in six residents,
            approximately 90,000 people, struggles with food insecurity.
          </p>
          <p className={styles.body}>
            That number is a policy statistic. It tells you very little about what food insecurity actually
            feels like to navigate - the decisions people make, the systems they rely on, the workarounds they&apos;ve
            developed, the dignity costs embedded in the experience. Discovery research exists precisely for
            situations like this: when you need to understand a problem before you can responsibly design
            anything to address it.
          </p>
        </section>

        {/* The Research Question */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Research Question</h2>
          <p className={styles.body}>
            The guiding question for this project was framed deliberately broadly:
          </p>
          <blockquote className={styles.pullQuote}>
            &ldquo;How can we develop novel, sustainable solutions to improve food security and quality of life
            for the 90,000 residents (1 in 6 people) in the Mahoning Valley who struggle with food insecurity?&rdquo;
          </blockquote>
          <p className={styles.body}>
            A discovery question isn&apos;t a problem statement. It&apos;s an orientation - a way of bounding the
            inquiry without foreclosing the answers. Keeping it open at this stage was intentional. The goal
            was to learn what the problem actually is before deciding what to build.
          </p>
        </section>

        {/* Methods */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Methods</h2>
          <p className={styles.body}>
            This was a full mixed-methods research cycle. The qualitative and quantitative work weren&apos;t
            parallel tracks - the qualitative phase informed the survey instrument, which then tested whether
            patterns from the interviews held at broader scale.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Screener Design</h3>
            <p className={styles.body}>
              Participant recruitment started with a screener built to identify people with direct, lived
              experience of food insecurity in the Mahoning Valley - not adjacent expertise, not secondhand
              knowledge. The screener balanced specificity with sensitivity. Food insecurity carries real
              stigma; the screening instrument had to surface relevant participants without framing the
              subject in a way that caused people to disengage or self-censor before the interview even began.
              The language was plain, the questions non-leading, and the purpose transparent.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Discovery Interview Protocol</h3>
            <p className={styles.body}>
              The discussion guide was structured around semi-structured, open-ended prompts designed to
              surface behavior, not opinion. Asking someone what they think about food insecurity gives you
              responses shaped by what they believe they should say. Asking them to walk you through a specific
              week, a specific decision, a specific moment at a food bank or grocery store - that&apos;s where
              the usable data lives.
            </p>
            <p className={styles.body}>
              The guide moved through five areas: daily food acquisition routines, decision-making under
              constraint, use of and friction with existing support systems (SNAP, food banks, community
              pantries), social and emotional dimensions of food insecurity, and aspirations - what a
              meaningfully different situation would look like from where they stood. Real participants
              were interviewed. These were not hypothetical scenarios.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Affinity Diagram</h3>
            <p className={styles.body}>
              Synthesis happened through a large-scale affinity diagram built from interview transcripts.
              The process involved pulling discrete observations and quotes onto individual nodes, then
              clustering bottom-up - grouping by emergent similarity rather than imposing categories
              in advance. The final artifact ran to 90MB as a PDF, which gives some sense of the scope:
              this was not a light pass over the data. It was the kind of granular synthesis where the
              goal is to let patterns emerge rather than confirm what you already suspected.
            </p>
            <p className={styles.body}>
              Affinity diagramming at this scale forces you to sit with contradictions. Some participants
              had adapted to chronic food insecurity in ways that were remarkably resourceful; others were
              in acute crisis. The diagram had to hold both without flattening the difference.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Questionnaire</h3>
            <p className={styles.body}>
              The survey instrument was developed after the qualitative phase, not before it. Constructs
              pulled from interview synthesis were operationalized into survey items - a sequencing choice
              that matters. Starting with a questionnaire locks you into assumptions about what&apos;s worth
              measuring. Building it from interview data means you&apos;re measuring things that participants
              themselves identified as significant.
            </p>
          </div>
        </section>

        {/* What I Found */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Found</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Access is not the only problem</h3>
            <p className={styles.body}>
              Geographic access to food - proximity to grocery stores, transportation - was a real barrier
              for some participants. But it was rarely the only barrier and often not the primary one.
              The more consistent theme was the cognitive and emotional load of managing food insecurity
              over time: the constant calculation, the planning around unreliable income cycles, the
              social navigation of using programs that carry stigma. Distance to a food bank is a design
              problem with tractable solutions. Sustained psychological toll is a different category of problem.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Existing systems create their own friction</h3>
            <p className={styles.body}>
              SNAP, food pantries, and community support programs appeared consistently in participant
              accounts - but not as seamless solutions. Participants described scheduling complexity,
              eligibility bureaucracy, inconsistent availability of preferred or culturally relevant foods,
              and the visibility cost of using programs in small communities where anonymity is hard to
              maintain. A support system that works mechanically but creates friction at every human
              touchpoint is not fully working.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Resourcefulness is not the same as resilience</h3>
            <p className={styles.body}>
              Several participants had developed elaborate, effective workarounds - strategies that
              demonstrated real ingenuity about how to stretch food budgets, coordinate with neighbors,
              or time purchases around sales cycles. It would be easy to read this as evidence of
              resilience. It&apos;s also evidence of how much cognitive capacity chronic scarcity consumes.
              The workarounds are impressive. The fact that they&apos;re necessary is the finding.
            </p>
          </div>
        </section>

        {/* JTBD Question */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The JTBD Question</h2>
          <p className={styles.body}>
            One course module used a published JTBD study as a critical analysis case - evaluating how
            another research team had applied Jobs-to-Be-Done to consumer behavior data. Working through
            that paper raised questions I kept turning back toward my own data. JTBD is a framework built
            around the idea that people &ldquo;hire&rdquo; products and services to accomplish specific functional
            goals. The vocabulary maps well onto consumer product contexts - the canonical example of
            someone hiring a milkshake for a morning commute is instructive precisely because it&apos;s so banal.
          </p>
          <p className={styles.body}>
            Food insecurity is not banal. The &ldquo;job&rdquo; framing risks reducing a complex, constrained,
            dignity-laden experience to a functional transaction. If you applied JTBD to someone navigating
            chronic food scarcity, you&apos;d risk producing a clean-looking analysis that misses everything
            socially and emotionally significant about what that person is actually going through.
          </p>
          <p className={styles.body}>
            That said: the functional job layer - what people are concretely trying to accomplish when they
            engage with food assistance systems - does yield real signal. What participants wanted was
            reliable access, reduced planning burden, and options that didn&apos;t require them to sacrifice
            quality or dignity. Those are designable. The critique isn&apos;t that JTBD produces no insight
            in this domain - it&apos;s that taken alone, without the emotional and social job dimensions,
            it produces incomplete and potentially misleading insight.
          </p>
          <p className={styles.body}>
            The more honest version of a JTBD analysis in a context like this requires foregrounding the
            emotional and social job layers - not treating them as secondary to the functional. For a
            population managing chronic constraint, the functional job is often straightforward. The
            emotional job (maintain dignity, avoid judgment, preserve a sense of agency) is where the
            real design challenge lives.
          </p>
        </section>

        {/* What a professional version would add */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What a Professional Version Would Add</h2>
          <p className={styles.body}>
            Graduate coursework defines a scope boundary. A real discovery research engagement in this domain would extend in several directions:
          </p>
          <ul className={styles.reflectionList}>
            <li>
              <strong>Participatory design from the outset</strong> - community members with lived experience
              of food insecurity should be involved in shaping the research questions, not only answering them.
              That changes both what gets studied and how findings get interpreted
            </li>
            <li>
              <strong>Stakeholder mapping across the food system</strong> - interviewing food bank staff,
              SNAP case workers, community organizers, and local farmers alongside residents would surface the
              systemic constraints that participants experience downstream
            </li>
            <li>
              <strong>Longitudinal observation</strong> - food insecurity isn&apos;t a static state. A single
              interview captures a moment. Understanding how people&apos;s situations and strategies shift across
              a month, a season, a benefit cycle requires return visits or diary studies
            </li>
            <li>
              <strong>Design recommendations with implementation path</strong> - discovery findings need
              somewhere to go. A professional deliverable would include prioritized opportunity areas,
              initial concepts, and a clear line from research insight to design direction
            </li>
            <li>
              <strong>Community validation</strong> - before any recommendations go forward, the synthesis
              should be reviewed with the community it came from. The people who gave you the data should
              have a chance to say whether your interpretation of it is right
            </li>
          </ul>
        </section>

        {/* Skills Demonstrated */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Screener design for sensitive populations",
              "Semi-structured interview protocol design",
              "Qualitative interview facilitation",
              "Affinity diagramming at scale",
              "Insight synthesis from transcripts",
              "Questionnaire design (post-qualitative)",
              "Mixed methods research sequencing",
              "JTBD analysis and methodological critique",
              "Card sort analysis",
              "Research ethics awareness",
              "Discovery-to-recommendation framing",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
