import styles from "./page.module.css";

export const metadata = {
  title: "Card Sort Analysis: AmeriCorps | James Dishman",
  description:
    "Card sort study on AmeriCorps navigation terms — and what broken site search UX reveals about where navigation research ends and systemic design failure begins.",
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
            {["Card Sorting", "Information Architecture", "Navigation Taxonomy", "Lyssna", "UX Audit"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* Context */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Study</h2>
          <p className={styles.body}>
            Card sorting is a foundational UX research method for information architecture work — it
            reveals how users mentally organize content and surfaces the vocabulary they use to describe it.
            The canonical use case is navigation menu design: give participants content cards, ask them to
            group similar items, and use the resulting clusters to inform your IA.
          </p>
          <p className={styles.body}>
            This study applied card sorting to AmeriCorps navigation taxonomy — 30 terms drawn from
            AmeriCorps.gov content — using Lyssna. The goal was to surface how potential volunteers
            and applicants mentally structure the AmeriCorps mission, programs, and services: what
            belongs together, and under what conceptual umbrella.
          </p>
        </section>

        {/* Findings: Clusters */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What the Clusters Revealed</h2>
          <p className={styles.body}>
            Four clusters emerged from the sort:
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What We Help</h3>
            <p className={styles.body}>
              Environment, Disaster, Veterans, Social, National, Youth — the <em>causes</em> AmeriCorps
              addresses. Participants consistently separated these from organizational mechanics, treating
              them as the primary identity layer of the brand.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What We Build</h3>
            <p className={styles.body}>
              Development, Impact, Program, Skill, Initiative, Team — the <em>outputs</em> of service.
              This cluster captured how participants understood AmeriCorps&apos;s value proposition to the
              volunteer: you develop skills, you build something, you have measurable impact.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What We Need</h3>
            <p className={styles.body}>
              Relief, Security, Community, Education, Support, Housing, Health, Training, Engagement,
              Inclusion, Employment, Connection — the largest cluster, and the most telling. Participants
              grouped these as <em>needs the communities served have</em>, not organizational priorities.
              The cluster functions as an empathy map of the populations AmeriCorps works with.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>How We Work</h3>
            <p className={styles.body}>
              Volunteer, Outreach, Mentor, Service, Full-time, Part-time — the <em>mechanics</em> of
              participation. Notably, participants distinguished how AmeriCorps operates from what it
              addresses or builds, treating process and structure as a separate conceptual layer.
            </p>
          </div>
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
            located — a foundational piece of information for anyone deciding whether to apply.
            The site regularly times out during search. There are two separate search flows — a program
            matcher and a program directory — with inconsistent results and no clear guidance on which
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
              "Card sort study design",
              "Lyssna (remote research tool)",
              "Cluster analysis and taxonomy development",
              "Information architecture",
              "UX audit alongside formal research method",
              "Research scope awareness",
              "Actionable findings communication",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
