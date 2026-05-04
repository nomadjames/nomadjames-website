import styles from "../clarence-needed-a-system-wiki/page.module.css";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Working With Clarence | James Dishman",
  description:
    "How I use Clarence for UX critique, creative prototyping, and system workflow without handing off judgment.",
};

export default function WorkingWithClarenceArticle() {
  return (
    <div className={styles.page}>
      <main className="container">
        <SmartBackLink fallbackHref="/writing" className={styles.backLink}>
          &larr; Writing
        </SmartBackLink>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.metaAccent}>AI Systems</span>
            <span aria-hidden="true">&middot;</span>
            <span>May 4, 2026</span>
            <span aria-hidden="true">&middot;</span>
            <span>5 min read</span>
          </div>
          <PretextTitle
            text={"Working With\nClarence"}
            className={styles.title}
          />
          <p className={styles.lede}>
            Clarence is the AI collaborator I built for my own work. I use it
            for critique, research continuity, prototype scaffolding, and boring
            verification. I do not use it to outsource judgment.
          </p>
        </header>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The boundary is the point</h2>
            <p className={styles.body}>
              Clarence can search, compare, draft, audit, run tools, and carry
              context across sessions. That does not make it the author of the
              work. It makes it infrastructure around the work.
            </p>
            <p className={styles.body}>
              I decide the frame. I decide what belongs under my name. I decide
              whether a claim is fair, whether a prototype fits the project, and
              whether a page is ready to publish. Clarence can make those
              decisions more visible. It does not get to make them for me.
            </p>
            <p className={styles.body}>
              That boundary matters because my portfolio is not one kind of
              work. Ableton evaluation, accessibility audits, food insecurity
              research, Health Translator, usability testing, SensorSynthFM,
              Oblique Oracle, PAUG, creative coding, and Clarence itself all ask
              for different kinds of evidence. A single AI workflow would flatten
              them. I do not want that.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>UX critique: make the weak spots visible</h2>
            <p className={styles.body}>
              For UX critique, I use Clarence as a hard reviewer. Its job is to
              find unsupported claims, stale numbers, missing source context,
              broken interaction paths, vague language, and copy that sounds
              better than it is.
            </p>
            <p className={styles.body}>
              That is useful on research-heavy pages because the danger is not
              usually a typo. The danger is a sentence that turns careful work
              into a cleaner story than the evidence supports. The accessibility
              audit has to keep evidence ahead of moral posture. Health
              Translator has to keep trust as a design constraint, not a slogan.
              The food insecurity study has to preserve the emotional burden
              people described, not just the system diagram. Clarence is useful
              when it catches that kind of drift before I ship it.
            </p>
            <p className={styles.body}>
              The output is not automatically correct. Sometimes it over-flags.
              Sometimes it misses the point. The value is that it gives me a
              second surface to argue with. I accept the critique only after I can
              trace it back to the work.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Creative prototyping: protect the project from the idea</h2>
            <p className={styles.body}>
              Creative work creates too many tempting directions. Clarence can
              help find APIs, sketch interaction models, generate quick scaffolds,
              and test whether an idea has enough shape to become a prototype.
              That is useful. It is also dangerous if every spark gets treated as
              belonging inside the nearest serious project.
            </p>
            <p className={styles.body}>
              SensorSynthFM is the clearest example. It is a self-contained iPad
              instrument. It should not become a landfill for every sensor idea,
              public API, visual experiment, or AI interaction pattern that looks
              interesting for five minutes. Clarence helps most when it helps me
              separate a real product decision from a good side experiment.
            </p>
            <p className={styles.body}>
              Oblique Oracle asks for a different kind of restraint. The product
              is about ritual, agency, and interpretation. More AI output does
              not automatically make it better. In that context, Clarence is more
              useful as a critic of tone and interaction boundaries than as a
              feature generator.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Workflow: make the boring checks repeatable</h2>
            <p className={styles.body}>
              The least glamorous use is the one I trust most. Clarence runs
              checks. It compares public claims against live system state. It
              catches stale numbers. It reads diffs before a commit. It reminds me
              when a page uses hardcoded proof where a machine-readable source
              would be safer.
            </p>
            <p className={styles.body}>
              That matters on this site because the Clarence case study changes
              with the system. Memory counts move. Fact counts move. Cron counts
              move. If I hand-edit those numbers and forget them, the page starts
              lying slowly. The drift audit exists because polished stale proof is
              worse than no proof.
            </p>
            <p className={styles.body}>
              This is also where autonomy has a real boundary. Clarence can run a
              build, check TypeScript, inspect a route, and monitor a deploy. It
              still needs the public-action boundary: do not publish new pages
              under my name unless I have approved that page. That rule exists
              because the site is not a sandbox. It is my public surface.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I do not let it do</h2>
            <p className={styles.body}>
              I do not let Clarence launder uncertainty. If something is not
              verified, the answer has to say that. I do not let it turn a source
              document into cleaner numbers than the document supports. I do not
              let it agree with me because I sounded confident.
            </p>
            <p className={styles.body}>
              I do not let it speak for me in public rooms. I do not let it
              collapse every project into Clarence. I do not let it treat
              SensorSynthFM as the default destination for unrelated prototypes.
              I do not let it hide behind "AI" when the real issue is taste,
              evidence, or responsibility.
            </p>
            <p className={styles.body}>
              Those limits are not decoration. They are the design of the
              collaboration. Without them, Clarence would be faster and less
              trustworthy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The actual loop</h2>
            <p className={styles.body}>
              The loop is simple: ground the work, draft only what should be
              drafted, attack the first answer, edit in my voice, verify what can
              be verified, then ship only when the public boundary is clear.
            </p>
            <p className={styles.body}>
              That is the useful part of working with Clarence. It does not make
              the work less mine. It makes the weak parts harder to ignore.
            </p>
            <p className={styles.body}>
              The broader system design case study is here: <a href="/portfolio/clarence">Clarence</a>.
            </p>
          </section>

          <div className={styles.tags}>
            {[
              "Clarence",
              "Human-AI Collaboration",
              "AI Systems",
              "UX Critique",
              "Creative Technology",
              "Portfolio Operations",
              "Verification",
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
