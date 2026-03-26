import styles from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "Card Sort Analysis: AmeriCorps | James Dishman",
  description:
    "Card sort study on AmeriCorps navigation terms, and what broken site search UX reveals about where navigation research ends and systemic design failure begins.",
};

export default function CardSortAmericorps() {
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
            <span className={styles.year}>2024</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>UX 60501 - Foundations of UX · Kent State MS UX</span>
          </div>
          <h1 className={styles.title}>Card Sort Analysis:<br />Methodology in Non-IA Contexts</h1>
          <div className={styles.methods}>
            {["Card Sorting", "Information Architecture", "Navigation Taxonomy", "Lyssna", "Similarity Matrix", "UX Audit"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          An open card sort with 10 participants on AmeriCorps navigation taxonomy, using Lyssna. The sort produced clean, actionable IA recommendations, but the real finding was what it could not fix: AmeriCorps.gov&apos;s search is so broken that better navigation labels would not solve the actual usability problem.
        </Tldr>

        {/* Context */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Study</h2>
          <p className={styles.body}>
            Card sorting is a foundational UX research method for information architecture work.
            It reveals how users mentally organize content and surfaces the vocabulary they use to describe it.
            The canonical use case is navigation menu design: give participants content cards, ask them to
            group similar items, and use the resulting clusters to inform your IA.
          </p>
          <p className={styles.body}>
            This study applied an <strong>open card sort</strong> to AmeriCorps navigation taxonomy using <strong>Lyssna</strong>.
            I selected 30 terms drawn from AmeriCorps.gov content and recruited <strong>10 participants</strong> through
            Lyssna&apos;s panel, all based in the United States. Participants created their own category labels
            and sorted all 30 cards into groups of their choosing. The study also included a follow-up
            question: &quot;How would you help your community if you could?&quot;
          </p>
          <p className={styles.body}>
            The goal was to surface how potential volunteers and applicants mentally structure the AmeriCorps
            mission, programs, and services: what belongs together, and under what conceptual umbrella.
          </p>
        </section>

        {/* Methodology detail */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Methodology</h2>
          <p className={styles.body}>
            The 30 card terms were generated through analysis of AmeriCorps.gov&apos;s content and navigation
            structure: Community, Health, Education, Disaster, Environment, Outreach, Service, Program,
            Volunteer, Skill, National, Support, Development, Youth, Training, Mentor, Housing, Relief,
            Initiative, Full-time, Part-time, Veterans, Security, Engagement, Inclusion, Team, Employment,
            Social, Impact, and Connection.
          </p>
          <p className={styles.body}>
            Because this was an open sort, participants created their own category names. This produced
            significant lexical variation: <strong>48 unique category labels</strong> across 10 participants.
            Only one label, &quot;Work,&quot; appeared as an exact match across multiple participants. That
            divergence is the point. Open sorts trade clean agreement for honest mental models. The
            vocabulary participants choose tells you as much as the groupings they create.
          </p>
          <p className={styles.body}>
            I performed a physical card sort first using sticky notes to develop my own baseline taxonomy,
            then compared those clusters against the Lyssna results. The comparison between my four-category
            model and the 48 participant-generated labels became the core analytical challenge of the study.
          </p>
        </section>

        {/* Results: Similarity Matrix */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Similarity Matrix Results</h2>
          <p className={styles.body}>
            Lyssna&apos;s similarity matrix revealed where participants agreed most strongly, regardless of the
            labels they used. The strongest pairings:
          </p>
          <ul className={styles.methodList}>
            <li><strong>Full-time, Part-time, and Employment</strong> grouped together at 100% agreement. Every participant placed these three cards in the same category.</li>
            <li><strong>Skill and Education</strong> paired at 90% agreement, a surprisingly strong signal given how differently participants labeled their categories.</li>
            <li>At <strong>80% agreement</strong>: Engagement/Support, Health/Housing, Health/Disaster, and Disaster/Environment.</li>
            <li>The <strong>Community cluster</strong> (Community, Inclusion, Engagement, Support) showed 60-80% internal similarity, indicating strong conceptual cohesion around social infrastructure.</li>
          </ul>
          <p className={styles.body}>
            Three cards were statistical outliers with low, inconsistent similarity scores: <strong>Impact, Initiative, and Team</strong>.
            These terms have multiple valid meanings depending on context. &quot;Impact&quot; could refer to
            organizational outcomes or community effects. &quot;Initiative&quot; could mean a specific program or a
            personal quality. &quot;Team&quot; could describe something you join or something you build. Ambiguous
            cards generate noisy data. That finding itself is useful: it flags terminology that would perform
            poorly in navigation labels.
          </p>
        </section>

        {/* Findings: Clusters */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What the Clusters Revealed</h2>
          <p className={styles.body}>
            Synthesizing the similarity matrix with the participant-generated categories, I consolidated
            the results into four clusters. These emerged from both the quantitative similarity data and
            thematic analysis of the 48 category labels participants created.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What We Help (6 cards)</h3>
            <p className={styles.body}>
              Environment, Disaster, Veterans, Social, National, Youth: the <em>causes</em> AmeriCorps
              addresses. Participants consistently separated these from organizational mechanics, treating
              them as the primary identity layer of the brand. The Disaster/Environment pair showed 80%
              similarity, and Youth was strongly associated with the Demographics meta-category at 50%.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What We Build (6 cards)</h3>
            <p className={styles.body}>
              Development, Impact, Program, Skill, Initiative, Team: the <em>outputs</em> of service.
              This cluster captured how participants understood AmeriCorps&apos;s value proposition to the
              volunteer: you develop skills, you build something, you have measurable impact. Skill and
              Education paired at 90%, the second-highest similarity score in the entire matrix. Impact,
              Initiative, and Team were the weakest cards here, with low similarity scores and inconsistent
              placement across participants.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What We Need (12 cards)</h3>
            <p className={styles.body}>
              Relief, Security, Community, Education, Support, Housing, Health, Training, Engagement,
              Inclusion, Employment, Connection: the largest cluster, and the most telling. Participants
              grouped these as <em>needs the communities served have</em>, not organizational priorities.
              Health/Housing paired at 80%. Engagement/Support paired at 80%. The cluster functions as an
              empathy map of the populations AmeriCorps works with. When I narrowed the 48 participant
              categories into consolidated groups, the Needs, Community, and Education meta-categories all
              fed into this cluster.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>How We Work (6 cards)</h3>
            <p className={styles.body}>
              Volunteer, Outreach, Mentor, Service, Full-time, Part-time: the <em>mechanics</em> of
              participation. Full-time/Part-time/Employment hit 100% similarity, the only perfect
              agreement in the study. Participants distinguished how AmeriCorps operates from what it
              addresses or builds, treating process and structure as a separate conceptual layer. The
              &quot;Work&quot; label was the only exact category match across participants, reinforcing how
              clearly this cluster stood apart.
            </p>
          </div>
        </section>

        {/* IA Problems */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What This Reveals About AmeriCorps.gov&apos;s IA</h2>
          <p className={styles.body}>
            The card sort exposed a structural mismatch between how AmeriCorps.gov organizes its content
            and how users think about it. Participants consistently organized terms around
            a <strong>purpose-first mental model</strong>: what does this organization address, what does it
            build, what do communities need, and how do people participate? That is four conceptual layers,
            cleanly separated.
          </p>
          <p className={styles.body}>
            AmeriCorps.gov does not reflect this structure. The site mixes program types, causes, and
            participation mechanics into overlapping navigation paths. A user trying to find disaster relief
            volunteering has to navigate organizational taxonomy (NCCC, VISTA, State and National) rather
            than cause-based taxonomy (Disaster, Environment, Veterans). The card sort says users think in
            causes first and program structures second. The site is built the opposite way.
          </p>
          <p className={styles.body}>
            The ambiguous-card problem also has IA implications. Terms like &quot;Impact,&quot; &quot;Initiative,&quot;
            and &quot;Team&quot; scattered across participant categories because they carry no inherent specificity.
            If these terms appear in navigation labels, they will mean different things to different users.
            That is not a vocabulary preference; it is a navigational dead end.
          </p>
        </section>

        {/* The bigger finding */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Where Navigation Research Ends</h2>
          <p className={styles.body}>
            Card sorting produced a clear, actionable taxonomy. But while working through AmeriCorps.gov
            to gather cards and validate the navigation context, a different problem became impossible
            to ignore: the site&apos;s search UX is deeply broken.
          </p>
          <p className={styles.body}>
            You cannot search by keyword. Location search is limited to certain metro areas, excluding
            anyone in rural or smaller metro regions. Search results don&apos;t surface where programs are
            located, a foundational piece of information for anyone deciding whether to apply.
            The site regularly times out during search. There are two separate search flows, a program
            matcher and a program directory, with inconsistent results and no clear guidance on which
            to use.
          </p>
          <p className={styles.body}>
            These aren&apos;t edge-case issues. They sit at the critical conversion point: someone interested
            in serving has found AmeriCorps, decided they want to apply, and is trying to locate a program.
            Every friction point in that flow is a lost applicant. These failures most certainly result
            in people not completing their program search.
          </p>
          <p className={styles.body}>
            The card sort told us how to organize the navigation. The site audit told us that the
            navigation isn&apos;t the problem.
          </p>
        </section>

        {/* What I learned about the method */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What This Taught Me About Card Sorting</h2>
          <p className={styles.body}>
            Card sorting is a focused instrument. It answers a specific question well: how should
            this content be organized? It doesn&apos;t tell you whether the navigation is the site&apos;s primary
            usability problem, and it doesn&apos;t tell you what happens after the user makes a selection.
          </p>
          <p className={styles.body}>
            The open sort format produced 48 unique categories from 10 participants. That is not a failure
            of the method. It is the method working correctly: surfacing genuine variation in how people
            conceptualize a domain. The analytical challenge is collapsing that variation into actionable
            structure without discarding the signal in the noise. Thematic grouping of participant categories
            revealed strong conceptual agreement even where exact labels diverged.
          </p>
          <p className={styles.body}>
            Applied to AmeriCorps, the method produced actionable, valid findings about taxonomy.
            But a practitioner who delivered a navigation recommendation here without flagging the
            search dysfunction would be handing a client a polished door in front of a collapsing wall.
            Research methods have scope boundaries. Part of doing them well is knowing when you&apos;ve
            found something outside that scope that matters more.
          </p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Open card sort study design",
              "Lyssna (remote research platform)",
              "Similarity matrix analysis",
              "Cluster analysis and taxonomy development",
              "Information architecture",
              "Physical card sort (sticky note method)",
              "UX audit alongside formal research method",
              "Ambiguous-term identification",
              "Research scope awareness",
              "Actionable findings communication",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Original submission */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Original Submission</h2>
          <p className={styles.body}>
            <a href="/pdfs/card-sort-americorps.pdf" target="_blank" rel="noopener noreferrer">View original PDF →</a>
          </p>
        </section>

      </main>
    </div>
  );
}
