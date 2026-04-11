import styles from "./page.module.css";
import PretextTitle from "@/components/PretextTitle";

export const metadata = {
  title: "Why SensorSynth FM Needed a Wiki Before It Needed More Features | James Dishman",
  description:
    "Why I built a durable project wiki for SensorSynth FM, what documentation drift was hiding, and how the wiki keeps the thesis-demo work honest.",
};

export default function SensorSynthWikiArticle() {
  return (
    <div className={styles.page}>
      <main className="container">
        <a href="/writing" className={styles.backLink}>
          &larr; Writing
        </a>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.metaAccent}>Project Documentation</span>
            <span aria-hidden="true">&middot;</span>
            <span>April 11, 2026</span>
            <span aria-hidden="true">&middot;</span>
            <span>6 min read</span>
          </div>
          <PretextTitle
            text={"Why SensorSynth FM Needed\na Wiki Before It Needed\nMore Features"}
            className={styles.title}
          />
          <p className={styles.lede}>
            SensorSynth FM did not have an idea problem. It had a truth problem.
            The repo, the design docs, the README, and the actual prototype had
            drifted apart. The wiki exists to make the next move obvious.
          </p>
        </header>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The problem was not lack of ideas</h2>
            <p className={styles.body}>
              SensorSynth FM already had plenty of ambition: passive sensing,
              embodied interaction, FM synthesis, environmental modulation,
              camera and motion inputs, live performance, a broader research
              frame around musical expression. More features were not the hard
              part. The hard part was knowing which claims were still true.
            </p>
            <p className={styles.body}>
              By the time I stopped to audit it, the project had several layers
              of truth sitting on top of each other. The live Swift files showed
              one reality. The README described an older one. The planning docs
              described a larger future. All of them were useful. None of them
              were interchangeable.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What the audit actually found</h2>
            <p className={styles.body}>
              The most important finding was simple: the codebase is ahead of the
              README and behind the master plan. That one sentence explained most
              of the confusion.
            </p>
            <p className={styles.body}>
              The repo already contains a real AudioKit FM prototype, a real
              SensorManager, a real SensorFMBridge, and a real SensorFMTestView.
              The integrated lane exists. But the app still boots into
              FMTestView, not the integrated sensor-plus-FM view. So the project
              is not mockup-only, and it is also not at the finish line.
            </p>
            <p className={styles.body}>
              That matters because the project bottleneck is no longer “start
              building someday.” The bottleneck is “activate and validate the
              thesis-demo lane now.”
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The wiki changed the question</h2>
            <p className={styles.body}>
              Before the wiki, the project encouraged the wrong kind of thinking.
              Every time I looked at it, I could ask for another feature,
              another system, another input modality. That is how ambitious work
              turns into sludge.
            </p>
            <p className={styles.body}>
              The wiki forced a better question: what is the next milestone that
              actually matters? The answer was not “finish the whole instrument.”
              It was “produce a one-screen thesis demo where passive or lightly
              active sensing audibly and visibly shapes FM timbre in a way that
              feels musical, intentional, and easy to explain.”
            </p>
            <p className={styles.body}>
              That is a much better target. It is bounded. It is testable. It
              is honest about the fact that interaction has to survive contact
              with reality, not just read well in a design document.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why a wiki instead of more notes</h2>
            <p className={styles.body}>
              Chat logs and Discord updates are good at preserving chronology.
              They are bad at preserving durable truth. A wiki does the opposite.
              It answers the questions future-me will actually ask: what does the
              prototype do right now, what is stale, what decisions are settled,
              what research matters, and what should happen next.
            </p>
            <p className={styles.body}>
              That distinction matters more on AI-assisted projects. When part of
              the implementation loop is distributed across handoffs, prompts,
              repo docs, and code generation sessions, the documentation layer is
              not decoration. It is part of the system design.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What the public version should be</h2>
            <p className={styles.body}>
              I do think SensorSynth FM deserves a public documentation surface.
              This project benefits from open development. The right public shape
              is not a giant note dump. It is a curated project wiki: thesis
              demo definition, architecture notes, key decisions, research map,
              and milestone updates that explain how the instrument is evolving.
            </p>
            <p className={styles.body}>
              That is useful to collaborators, hiring managers, other creative
              technologists, and honestly to me. It makes the project legible.
              It gives the case study a proof surface instead of asking visitors
              to take my word for it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What happens next</h2>
            <p className={styles.body}>
              The immediate next step is not another rewrite. It is to activate
              the integrated sensor-plus-FM lane, test it on actual hardware, and
              record what remains true after that test. If the wiki does its job,
              it will keep the project from disappearing into ambition again.
            </p>
            <p className={styles.body}>
              The public docs layer lives at <a href="https://nomadjames.github.io/SensorSynthFM/" target="_blank" rel="noopener noreferrer">nomadjames.github.io/SensorSynthFM</a>.
            </p>
            <p className={styles.body}>
              You can read the case study for the broader design framing at
              <a href="/portfolio/sensorsynth"> SensorSynth FM</a>.
            </p>
          </section>

          <div className={styles.tags}>
            {[
              "SensorSynth FM",
              "Documentation",
              "Design Research",
              "AudioKit",
              "SwiftUI",
              "Embodied Interaction",
              "Creative Technology",
            ].map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
