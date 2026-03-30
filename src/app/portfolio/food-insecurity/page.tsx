import styles from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "Food Insecurity Discovery Research | James Dishman",
  description: "Full-cycle discovery research on food insecurity in the Mahoning Valley - screener design, qualitative interviews, affinity mapping, questionnaire design, and JTBD analysis.",
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
            {["Screener Design", "Semi-Structured Interviews", "Affinity Mapping", "Questionnaire Design", "JTBD Analysis", "Persona Development", "Mixed Methods"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          Full-cycle discovery research in the Mahoning Valley, from screener design through interviews, affinity mapping, and questionnaire construction. The core finding: food insecurity is not primarily an access problem. It is a sustained cognitive and emotional burden, and the systems meant to help often add friction instead of removing it.
        </Tldr>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.body}>
            The Mahoning Valley, the post-industrial corridor straddling northeast Ohio and western Pennsylvania,
            anchored by Youngstown, is a region still working through the long aftermath of deindustrialization.
            The economic disruption that began in the late 1970s reshaped the Valley in ways that are still
            visible today: in vacancy rates, in health outcomes, in food access. Roughly one in six residents,
            approximately 90,000 people, struggles with food insecurity.
          </p>
          <p className={styles.body}>
            That number is a policy statistic. It tells you very little about what food insecurity actually
            feels like to navigate: the decisions people make, the systems they rely on, the workarounds they have
            developed, the dignity costs embedded in the experience. Discovery research exists precisely for
            situations like this, when you need to understand a problem before you can responsibly design
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
            A discovery question is not a problem statement. It is an orientation, a way of bounding the
            inquiry without foreclosing the answers. Keeping it open at this stage was intentional. The goal
            was to learn what the problem actually is before deciding what to build.
          </p>
        </section>

        {/* Research Design */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Design</h2>
          <p className={styles.body}>
            Before any interviews could happen, I needed to solve a recruitment problem. The screener had
            to identify people with direct, lived experience of food insecurity in the Mahoning Valley
            without framing the subject in a way that triggered disengagement or self-censoring. Food
            insecurity carries real stigma. The instrument had to be precise enough to recruit the right
            participants and careful enough not to lose them before the interview began.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Inclusion Criteria</h3>
            <p className={styles.body}>
              Three gates determined eligibility. First, age: participants had to be 18 or older, keeping
              the study clear of the ethical and methodological complexity of conducting research with minors. Second,
              geography: participants had to live within Mahoning Valley zip codes, since this was a
              regional study and location shaped the food access landscape. Third, active food acquisition:
              participants needed to be people who actually shopped for or otherwise obtained food, not
              someone entirely removed from that process. The screener verified all three through simple,
              non-leading questions.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Exclusion Criteria</h3>
            <p className={styles.body}>
              Professional background mattered. People working in food retail, public health, social
              services, market research, or food assistance programs were excluded to avoid conflating
              professional knowledge with lived experience. Participants who had been in a food or nutrition
              study within the past year were also excluded to guard against research fatigue. Internet
              access was a practical requirement, since later phases of the study (the questionnaire,
              potential prototype testing) would happen online.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Language and Framing</h3>
            <p className={styles.body}>
              The screener introduced the study as research into &ldquo;food shopping habits in the Mahoning
              Valley&rdquo; rather than &ldquo;food insecurity.&rdquo; That framing was intentional. Describing the topic
              neutrally reduced the chance that participants would feel pre-labeled or defensive before
              any conversation took place. The closing question asked participants to briefly describe
              their last grocery shopping experience, a concrete, low-stakes prompt that gave an early
              signal about how someone talks about food access without requiring them to self-identify
              as food-insecure.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Two-Population Consideration</h3>
            <p className={styles.body}>
              I considered recruiting two subpopulations: individuals experiencing food insecurity
              directly, and social workers or case managers who encounter it professionally. The logic
              was that frontline professionals could provide a systemic view that individual participants
              might not have. This dual-population approach was ultimately scoped down for the coursework,
              but the interview with a family services administrator did surface a valuable finding:
              people in administrative roles at relevant agencies did not always know what food resources
              were available in their own region. That gap between institutional position and actual
              knowledge became a data point in its own right.
            </p>
          </div>
        </section>

        {/* Methods */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Methods</h2>
          <p className={styles.body}>
            This was a full mixed-methods research cycle. The qualitative and quantitative work were not
            parallel tracks. The qualitative phase informed the survey instrument, which then tested whether
            patterns from the interviews held at broader scale.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Discovery Interview Protocol</h3>
            <p className={styles.body}>
              The discussion guide was structured around semi-structured, open-ended prompts designed to
              surface behavior, not opinion. Asking someone what they think about food insecurity gives you
              responses shaped by what they believe they should say. Asking them to walk you through a specific
              week, a specific decision, a specific moment at a food bank or grocery store: that is where
              the usable data lives.
            </p>
            <p className={styles.body}>
              The guide moved through five areas: daily food acquisition routines, decision-making under
              constraint, use of and friction with existing support systems (SNAP, food banks, community
              pantries), social and emotional dimensions of food insecurity, and aspirations, what a
              meaningfully different situation would look like from where they stood. Real participants
              were interviewed. These were not hypothetical scenarios.
            </p>
            <p className={styles.body}>
              One early interview revealed something instructive about discovery work. The participant, an
              administrator at a family services agency (not the Ohio Department of Job and Family Services, but a family-based organization),
              disclosed that her agency provided food vouchers to clients in acute need. But she had
              limited knowledge of the broader food assistance landscape in the region. This gap between
              institutional access and resource awareness reinforced a pattern that would surface again
              in the quantitative phase: people who should know what resources exist often do not.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Affinity Diagram</h3>
            <p className={styles.body}>
              Synthesis happened through a large-scale affinity diagram built from interview transcripts.
              The process involved pulling discrete observations and quotes onto individual nodes, then
              clustering bottom-up, grouping by emergent similarity rather than imposing categories
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
            <h3 className={styles.findingTitle}>Questionnaire Design</h3>
            <p className={styles.body}>
              The survey instrument was developed after the qualitative phase, not before it. Constructs
              pulled from interview synthesis were operationalized into survey items, a sequencing choice
              that matters. Starting with a questionnaire locks you into assumptions about what is worth
              measuring. Building it from interview data means you are measuring things that participants
              themselves identified as significant.
            </p>
            <p className={styles.body}>
              The questionnaire used five questions, each chosen for a specific analytical purpose.
              A frequency measure asked how many meals were skipped or reduced in the past seven days,
              producing a concrete behavioral baseline rather than a self-assessment of how food-insecure
              someone felt. A resource usage question (select all that apply) covered food banks, SNAP,
              WIC, free meal programs, church organizations, food vouchers, mobile food markets, and
              community gardens. This generated data on which services were actually used and how many
              services an individual relied on simultaneously.
            </p>
            <p className={styles.body}>
              A transportation question anchored to the participant&apos;s most recent grocery or food
              resource trip captured real behavior rather than generalized habits. The interview data
              had surfaced transportation as a significant barrier, and this question provided
              quantitative data on whether that pattern held at scale. A Likert-scale ranking question
              forced prioritization across five barriers: money, transportation cost, distance to
              resources, time constraints, and awareness of available programs. Forcing a rank order
              rather than allowing independent ratings revealed relative importance, not just presence.
            </p>
            <p className={styles.body}>
              The final question was open-ended, a deliberate catch-all for information the structured
              items might miss. This served a secondary function: testing whether the structured questions
              were even asking about the right things. If the open-ended responses consistently surfaced
              themes the closed questions had not captured, that would be a signal to revise the instrument.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Persona Development</h3>
            <p className={styles.body}>
              The course also included persona creation as a synthesis method. The persona assignment
              explored bias-aware construction techniques: using sketches instead of photographs to
              avoid triggering gender and racial assumptions, omitting demographic fields (like sex)
              when they were not relevant to the design context, and structuring &ldquo;Needs and Goals&rdquo;
              to capture pain points and desired outcomes without reducing them to a flat requirements
              list. These were principles I carried back into the food insecurity work when thinking
              about how to represent participants without flattening their experience.
            </p>
          </div>
        </section>

        {/* What I Found */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Found</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Access is not the only problem</h3>
            <p className={styles.body}>
              Geographic access to food (proximity to grocery stores, transportation) was a real barrier
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
              accounts, but not as seamless solutions. Participants described scheduling complexity,
              eligibility bureaucracy, inconsistent availability of preferred or culturally relevant foods,
              and the visibility cost of using programs in small communities where anonymity is hard to
              maintain. A support system that works mechanically but creates friction at every human
              touchpoint is not fully working.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Resourcefulness is not the same as resilience</h3>
            <p className={styles.body}>
              Several participants had developed elaborate, effective workarounds: strategies that
              demonstrated real ingenuity about how to stretch food budgets, coordinate with neighbors,
              or time purchases around sales cycles. It would be easy to read this as evidence of
              resilience. It is also evidence of how much cognitive capacity chronic scarcity consumes.
              The workarounds are impressive. The fact that they&apos;re necessary is the finding.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Poverty is the root, but policy creates compounding failures</h3>
            <p className={styles.body}>
              Interview participants and the questionnaire data both pointed to poverty as the primary
              driver of food insecurity, which is not a surprise. What was more revealing were the
              specific mechanisms by which policy and institutional structure compounded that baseline
              problem. One interview surfaced a concrete example: when a caretaker takes custody of a
              minor who is not from the same immediate family, they cannot get food stamps for that child.
              The policy logic makes sense from an eligibility standpoint. The human outcome is that a
              child in a new home goes without adequate food assistance during a period of acute
              vulnerability.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Resource awareness is lower than expected, even among professionals</h3>
            <p className={styles.body}>
              The questionnaire included &ldquo;don&apos;t know what resources are available&rdquo; as a rankable
              barrier, and participants rated it more highly than anticipated. This aligned with the
              qualitative data: even the family services administrator interviewed in the qualitative
              phase had limited awareness of available food resources in the region. If people working
              in adjacent professional roles do not know what is available, it is unreasonable to expect
              residents navigating food insecurity on their own to have better information.
            </p>
          </div>
        </section>

        {/* JTBD Question */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The JTBD Question</h2>
          <p className={styles.body}>
            One course module used a published JTBD study as a critical analysis case. The paper
            (Domenici et al., 2025) claimed to apply Jobs-to-Be-Done to consumer meat product innovation,
            using a three-phase study with interviews, semiotic analysis, and concept validation. Working
            through that paper raised questions I kept turning back toward my own data.
          </p>
          <p className={styles.body}>
            The central problem with the Domenici study was that it called its findings &ldquo;jobs&rdquo; when
            they were actually requirements. Statements like &ldquo;it should be easy and quick to
            prepare&rdquo; or &ldquo;it should elicit positive emotions&rdquo; do not follow the JTBD
            format: &ldquo;When I am in [context], I want to [job] so I can [outcome] because
            [motivation].&rdquo; The researchers also skipped observation entirely, going straight to
            interviews, and never classified their findings into functional, emotional, or social job
            layers. The result was an elaborate study that uncovered consumer preferences and called
            them innovations. The concepts they validated (meal boxes, recipe recommendations) already
            existed in the market.
          </p>
          <p className={styles.body}>
            That critique sharpened how I thought about applying JTBD to my own food insecurity data.
            JTBD is a framework built around the idea that people &ldquo;hire&rdquo; products and services
            to accomplish specific functional goals. The vocabulary maps well onto consumer product
            contexts. The canonical example of someone hiring a milkshake for a morning commute is
            instructive precisely because it is so banal.
          </p>
          <p className={styles.body}>
            Food insecurity is not banal. The &ldquo;job&rdquo; framing risks reducing a complex, constrained,
            dignity-laden experience to a functional transaction. If you applied JTBD to someone navigating
            chronic food scarcity, you would risk producing a clean-looking analysis that misses everything
            socially and emotionally significant about what that person is actually going through.
          </p>
          <p className={styles.body}>
            That said: the functional job layer (what people are concretely trying to accomplish when they
            engage with food assistance systems) does yield real signal. What participants wanted was
            reliable access, reduced planning burden, and options that did not require them to sacrifice
            quality or dignity. Those are designable. The critique is not that JTBD produces no insight
            in this domain. It is that taken alone, without the emotional and social job dimensions,
            it produces incomplete and potentially misleading insight.
          </p>
          <p className={styles.body}>
            The more honest version of a JTBD analysis in a context like this requires foregrounding the
            emotional and social job layers, not treating them as secondary to the functional. For a
            population managing chronic constraint, the functional job is often straightforward. The
            emotional job (maintain dignity, avoid judgment, preserve a sense of agency) is where the
            real design challenge lives. The Domenici study demonstrated what happens when you skip
            that work: you end up with requirements dressed as insights.
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
              <strong>Participatory design from the outset.</strong> Community members with lived experience
              of food insecurity should be involved in shaping the research questions, not only answering them.
              That changes both what gets studied and how findings get interpreted
            </li>
            <li>
              <strong>Stakeholder mapping across the food system</strong> . Interviewing food bank staff,
              SNAP case workers, community organizers, and local farmers alongside residents would surface the
              systemic constraints that participants experience downstream
            </li>
            <li>
              <strong>Longitudinal observation</strong> . Food insecurity is not a static state. A single
              interview captures a moment. Understanding how people&apos;s situations and strategies shift across
              a month, a season, a benefit cycle requires return visits or diary studies
            </li>
            <li>
              <strong>Design recommendations with implementation path</strong> . Discovery findings need
              somewhere to go. A professional deliverable would include prioritized opportunity areas,
              initial concepts, and a clear line from research insight to design direction
            </li>
            <li>
              <strong>Community validation</strong> . Before any recommendations go forward, the synthesis
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
              "Survey item construction and rationale",
              "Mixed methods research sequencing",
              "JTBD analysis and methodological critique",
              "Persona development (bias-aware)",
              "Card sort analysis",
              "Research ethics awareness",
              "Discovery-to-recommendation framing",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Research Artifacts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Artifacts</h2>
          <ul className={styles.reflectionList}>
            <li>
              <a href="/pdfs/food-insecurity-discovery-research.pdf" target="_blank" rel="noopener noreferrer">
                Final research report (PDF)
              </a>
            </li>
            <li>
              <a href="/pdfs/food-insecurity-screener.pdf" target="_blank" rel="noopener noreferrer">
                Participant screener
              </a>
            </li>
            <li>
              <a href="/pdfs/food-insecurity-questionnaire.pdf" target="_blank" rel="noopener noreferrer">
                Questionnaire design and rationale
              </a>
            </li>
            <li>
              <a href="/pdfs/food-insecurity-affinity-diagram.pdf" target="_blank" rel="noopener noreferrer">
                Affinity diagram (90MB synthesis artifact)
              </a>
            </li>
            <li>
              <a href="/pdfs/food-insecurity-jtbd-analysis.pdf" target="_blank" rel="noopener noreferrer">
                JTBD case study analysis
              </a>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
