import styles from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";
import CompressionPathHero from "@/components/CompressionPathHero";

export const metadata = {
  title: "About | James Dishman",
  description:
    "UX designer, electronic music producer, AI systems builder. This is who I actually am.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <SmartBackLink fallbackHref="/" className={styles.backLink}>&larr; Home</SmartBackLink>

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
          UX designer and electronic music producer with a decade leading Pittsburgh&apos;s Ableton
          User Group, currently building AI agent systems as both creative tools and research
          platforms. Finishing an MS in User Experience at Kent State. Every piece of work
          in this portfolio exists because I cared about the subject before I cared about the credential.
        </Tldr>

        {/* The Short Version */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Short Version</h2>
          <p className={styles.body}>
            I design things at the intersection of AI, creativity, and human decision-making.
            My background is unusual: a BA in English Writing from the University of Pittsburgh,
            with related studies in Philosophy, Political Science, and a certificate in Latin
            American Studies, which turns out to be a surprisingly good foundation for thinking
            about how people actually use things.
          </p>
          <p className={styles.body}>
            I produce electronic music. I co-founded the Pittsburgh Ableton User Group with Paul
            Miller and Steve Knots and serve as the direct liaison to Ableton&apos;s international
            community team. I am completing an MS in User Experience at Kent State, where
            the formal training meets the instinct I have been building for years.
          </p>
        </section>

        <section className={styles.wideSection}>
          <div className={styles.wideIntro}>
            <h2 className={styles.sectionTitle}>The Compression Path</h2>
            <p className={styles.body}>
              This is the clearest way to see how the pieces connect: music, community work,
              UX, and AI systems design.
            </p>
          </div>
          <CompressionPathHero variant="section" />
        </section>

        {/* What I Actually Believe */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Actually Believe</h2>
          <p className={styles.body}>
            Technology should make people more capable, more creative, or more connected to the thing
            they care about. That is how I decide what is worth building.
          </p>
          <p className={styles.body}>
            If a system does not help the person using it do better work, think more clearly, or stay
            closer to the reason they came to the tool in the first place, I am not interested in it.
          </p>
          <p className={styles.body}>
            I see design through Don Norman&apos;s frameworks as a default lens. Affordances,
            signifiers, mapping, feedback, conceptual models. Not because they are trendy (they are
            decades old), but because they work. They are the vocabulary for asking whether
            something actually serves the person in front of it.
          </p>
          <p className={styles.body}>
            I am influenced by Hunter S. Thompson&apos;s radical honesty, not his substance abuse:
            the part where you look at the thing clearly and say what you see, even when it is
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
            Clarence is not a demo project. It is a system I use every day, built through repeated
            correction, daily use, and overnight pipeline runs.
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
            I am in the capstone phase of my MS at Kent State. Long-term, I am interested in
            doctoral research in Human-Computer Interaction. The research questions I care about sit
            at the boundary of AI and creativity: what happens when the tool starts having opinions,
            and how do you design for that without pretending it is simple?
          </p>
          <p className={styles.body}>
            If you are working on research problems or building tools that need someone who
            understands both the design and the system underneath it, I would like to talk.
          </p>
        </section>

        {/* Practical Links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Practical Links</h2>
          <p className={styles.body}>
            The main site hierarchy is Work, Lab, Writing, and About. The practical pages live here.
          </p>
          <ul className={styles.splitList}>
            <li><a href="/resume">Résumé</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
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
            It was a collaboration between Clarence and me, but the hierarchy was clear. I reviewed the
            site on my iPad and phone between stops on my meter route, sent corrections through Telegram,
            and made the decisions about design, voice, layout, and information architecture. Clarence
            handled code generation, build management, and deployment.
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
            Clarence ran on the wrong runtime configuration for an entire day because a settings file
            could not be edited from the interface we were using. The output quality dropped noticeably
            and we did not figure out why until that evening.
          </p>
          <p className={styles.body}>
            The portfolio content was not generated from a generic prompt. It came out of repeated
            correction and daily use. Clarence could move quickly because it had already learned my
            standards, but the calls about what stayed, what got cut, and how the work should sound
            were mine.
          </p>

          <h3 className={styles.subheading}>What is Honest About This</h3>
          <p className={styles.body}>
            The portfolio content comes directly from my graduate research at Kent State.
            Every case study is grounded in real work, not made up for a portfolio site.
            The images are still missing. It is text-only right now. That is honest, not a failure.
            The words came first because the words are the work.
          </p>
          <p className={styles.body}>
            The <a href="https://github.com/nomadjames/nomadjames-website" target="_blank" rel="noopener noreferrer">git history</a> tracks every commit and who made it. This is not a &quot;look how amazing
            AI is&quot; story. It is a &quot;we built something real with a lot of friction and it
            works&quot; story. The friction is the interesting part. It is where the design questions
            live.
          </p>
        </section>

      </main>
    </div>
  );
}
