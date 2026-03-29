import styles from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "About | James Dishman",
  description:
    "Grad student, electronic music producer, AI builder. This is who I actually am.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/" className={styles.backLink}>&larr; Home</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>About</span>
          </div>
          <h1 className={styles.title}>James Dishman</h1>
          <p className={styles.subtitle}>
            Youngstown, OH. Still building things.
          </p>
        </header>

        <Tldr>
          MS UX candidate at Kent State, electronic music producer, co-founder of the Pittsburgh
          Ableton User Group, currently building AI agent systems as both creative tools and research
          platforms. Every piece of work in this portfolio exists because I cared about the subject
          before I cared about the credential.
        </Tldr>

        {/* The Short Version */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Short Version</h2>
          <p className={styles.body}>
            I design things at the intersection of AI, creativity, and human decision-making. I am
            finishing an MS in User Experience Design at Kent State University. Before that, I got a
            BA from the University of Pittsburgh in English, Philosophy, and Political Science,
            which turns out to be a surprisingly good foundation for thinking about how people
            actually use things.
          </p>
          <p className={styles.body}>
            I produce electronic music. I co-founded the Pittsburgh Ableton User Group with Paul
            Miller and Steve Knots. I serve as the direct liaison to Ableton&apos;s international community team.
          </p>
        </section>

        {/* What I Actually Believe */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Actually Believe</h2>
          <p className={styles.body}>
            Technology should make humans better. I design the part where that actually happens.
          </p>
          <p className={styles.body}>
            That is not a tagline. It is a filter. Every project I take on, every system I build,
            gets measured against that. If the technology does not make the person using it more
            capable, more creative, or more connected to the thing they care about, I am not
            interested in building it.
          </p>
          <p className={styles.body}>
            I see design through Don Norman&apos;s frameworks as a standing lens. Affordances,
            signifiers, mapping, feedback, conceptual models. Not because they are trendy (they are
            decades old), but because they work. They are the vocabulary for asking whether
            something actually serves the person in front of it.
          </p>
          <p className={styles.body}>
            I am influenced by Hunter S. Thompson&apos;s radical honesty, not his substance abuse.
            The part where you look at the thing clearly and say what you see, even when it is
            uncomfortable. That matters more in design than people want to admit.
          </p>
        </section>

        {/* The Differentiator */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Differentiator</h2>
          <p className={styles.body}>
            I do my best work when I know the subject deeply. The Ableton evaluations in my
            portfolio are credible because I have lived inside that ecosystem for years. The Oblique
            Oracle exists because I cherish the I Ching, not because I saw a market opportunity.
            Clarence is not a demo project. It is a system I use every day, one that runs 26 cron
            jobs while I sleep and has over 2,600 memories in its knowledge database.
          </p>
          <p className={styles.body}>
            That depth is what I bring to a team. I learn the domain, I learn the users, and I
            build things that reflect both.
          </p>
        </section>

        {/* What is Next */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Next</h2>
          <p className={styles.body}>
            I am in the capstone phase of my MS at Kent State. After that, I am applying to PhD
            programs in Human-Computer Interaction. The research questions I care about sit at the
            boundary of AI and creativity: what happens when the tool starts having opinions, and how
            do you design for that without pretending it is simple?
          </p>
          <p className={styles.body}>
            If you are working on research problems or building tools that need someone who
            understands both the design and the system underneath it, I would like to talk.
          </p>
        </section>

        {/* Building This Site */}
        <section className={`${styles.section} ${styles.sectionAccent}`}>
          <h2 className={styles.sectionTitle}>Building This Site</h2>
          <p className={styles.body}>
            This site was built over about three days in late March 2026. The stack is Next.js,
            TypeScript, CSS Modules, deployed to GitHub Pages with Cloudflare in front of it. No
            templates. No themes. Built from scratch.
          </p>
          <p className={styles.body}>
            It was a collaboration between me and Clarence, my AI agent system running on Claude.
            I directed every decision. Clarence executed. That distinction matters. I chose the
            typography, the layout, the voice, the color palette, the information architecture.
            Clarence wrote the code, ran the builds, managed the deployments, and kept track of
            forty things at once while I was out in the field swapping meters.
          </p>

          <h3 className={styles.subheading}>How It Actually Worked</h3>
          <p className={styles.body}>
            I would review the site on my iPad and phone between stops on my meter route, then send
            corrections via Telegram. Clarence would pick them up and push changes. Sometimes this
            worked beautifully. Sometimes the build broke at 5am and I would wake up to error logs.
          </p>
          <p className={styles.body}>
            The process was messy. There were em dash hunts across every page because I kept finding
            them in body text. Cached pages that would not update no matter what we tried. Fights
            about delegation when Clarence tried to make decisions I had not approved. At one point,
            Clarence ran on the wrong model (Sonnet instead of Opus) for an entire day because a
            settings file could not be edited from the interface we were using. The output quality
            dropped noticeably and we did not figure out why until that evening.
          </p>
          <p className={styles.body}>
            The part that matters most: Clarence has a knowledge database with over 2,600 memories
            built from our conversations, my coursework, and every correction I have ever given it.
            It distills what I care about, how I think, and what I will not tolerate. The portfolio
            content was not generated from a generic prompt. It was extracted from a system that
            knows my voice, my work, and my standards because I spent months teaching it. That
            database is the real artifact. The site is just what it looks like when you render it.
          </p>

          <h3 className={styles.subheading}>What Each Side Brought</h3>
          <div className={styles.splitGrid}>
            <div className={styles.splitCard}>
              <span className={styles.splitLabel}>James</span>
              <ul className={styles.splitList}>
                <li>Vision and creative direction</li>
                <li>Taste. Knowing when something looked wrong even if it was technically correct</li>
                <li>Domain expertise in UX, music, and the subject matter of every case study</li>
                <li>Quality control from a real device in real lighting conditions</li>
                <li>The word &quot;no&quot; when Clarence got ahead of itself</li>
              </ul>
            </div>
            <div className={styles.splitCard}>
              <span className={styles.splitLabel}>Clarence</span>
              <ul className={styles.splitList}>
                <li>Execution speed. Parallel agents building multiple pages simultaneously</li>
                <li>Memory systems that tracked every decision and preference across sessions</li>
                <li>Code generation, build management, deployment pipeline</li>
                <li>The ability to hold the full context of a growing codebase in working memory</li>
                <li>Patience for the fifteenth round of &quot;make this two pixels smaller&quot;</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.subheading}>What is Honest About This</h3>
          <p className={styles.body}>
            The portfolio content comes directly from my grad school coursework at Kent State.
            Every case study is grounded in real academic work, not made up for a portfolio site.
            The images are still missing. It is text-only right now. That is honest, not a failure.
            The words came first because the words are the work.
          </p>
          <p className={styles.body}>
            The changelog tracks every commit and who made it. This is not a &quot;look how amazing
            AI is&quot; story. It is a &quot;we built something real with a lot of friction and it
            works&quot; story. The friction is the interesting part. It is where the design questions
            live.
          </p>
        </section>

      </main>
    </div>
  );
}
