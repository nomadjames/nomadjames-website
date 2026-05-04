import styles from "./page.module.css";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Why Clarence Needed a System Wiki | James Dishman",
  description:
    "Why Clarence needed a durable system wiki, what the Obsidian vault failure exposed, and why not every important system truth should live in chat logs.",
};

export default function ClarenceSystemWikiArticle() {
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
            <span>April 11, 2026</span>
            <span aria-hidden="true">&middot;</span>
            <span>7 min read</span>
          </div>
          <PretextTitle
            text={"Why Clarence Needed\na System Wiki"}
            className={styles.title}
          />
          <p className={styles.lede}>
            The more capable Clarence became, the less acceptable it was to let
            important system knowledge live only in chat history, scattered repo
            docs, and a vault that could silently point at the wrong place.
          </p>
        </header>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Chat history is not system architecture</h2>
            <p className={styles.body}>
              Clarence produces a lot of chronology. There are chats, Discord
              reports, cron outputs, notes, commits, and handoffs. That is useful
              if you want to know what happened yesterday. It is terrible if you
              want to know what is true now.
            </p>
            <p className={styles.body}>
              A system this layered needs a durable explanation of itself. Which
              runtime is active. Which model is actually pinned. Where the memory
              lives. Which surfaces are user-facing. Which parts are legacy. What
              changed because of a migration. Without that, every serious session
              starts by reconstructing the machine from fragments.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Obsidian failure made the problem obvious</h2>
            <p className={styles.body}>
              The vault disaster forced the issue. The system had durable,
              operationally important knowledge tied up in notes, but the note
              surface itself had become unreliable. One vault was real. Another
              looked real enough to be dangerous. Sync behavior depended on what
              the app had actually opened, not just what existed on disk.
            </p>
            <p className={styles.body}>
              That is not a note-taking inconvenience. That is a system integrity
              problem. If the wrong vault can silently become your reality, then
              architecture notes, recovery steps, and operational rules cannot
              live there alone.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What the system wiki actually captures</h2>
            <p className={styles.body}>
              The wiki gives Clarence a durable self-description: Hermes as the
              active runtime, GPT-5.5 as the pinned primary model, the gateway
              and cron surfaces, the layered memory design, and the fact that
              important legacy data still lives under the old OpenClaw tree even
              though OpenClaw is no longer the active runtime.
            </p>
            <p className={styles.body}>
              It also captures failure modes that are too expensive to rediscover
              the hard way. Wrong-vault attachment. Stale path references.
              Cron sharp edges. Transitional data living in the wrong place.
              Those are not random debugging anecdotes. They are system truths.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why this matters for AI UX</h2>
            <p className={styles.body}>
              One of the design problems in persistent AI systems is that the
              system gradually becomes too complex to explain casually. At that
              point, trust starts depending on whether the system can describe its
              own boundaries honestly. A system wiki is part of that honesty.
            </p>
            <p className={styles.body}>
              It is also a guardrail against mythology. AI projects accumulate
              lore fast. If you do not write down which parts are current, which
              parts are legacy, and which parts are aspirational, the whole thing
              turns into self-fanfiction.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What should be public and what should not</h2>
            <p className={styles.body}>
              I do think Clarence deserves public documentation, but not as a raw
              dump of the full internal wiki. That would be reckless. The live
              system wiki contains operational paths, infrastructure details,
              recovery notes, and enough implementation texture to become an
              unnecessary security gift.
            </p>
            <p className={styles.body}>
              The public version should be a curated architecture layer: system
              overview, design principles, memory philosophy, migration lessons,
              and selected incidents that teach something without exposing the
              guts of the machine.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The real reason the wiki exists</h2>
            <p className={styles.body}>
              Clarence is supposed to be a collaborator, not a parlor trick. A
              collaborator needs continuity. The wiki is one of the structures
              that makes continuity real instead of theatrical.
            </p>
            <p className={styles.body}>
              The public-safe architecture notes currently live in the public repo at <a href="https://github.com/nomadjames/clarence-architecture" target="_blank" rel="noopener noreferrer">github.com/nomadjames/clarence-architecture</a>.
            </p>
            <p className={styles.body}>
              You can read the full case study for the broader system design frame
              at <a href="/portfolio/clarence">Clarence</a>.
            </p>
          </section>

          <div className={styles.tags}>
            {[
              "Clarence",
              "Hermes",
              "AI Systems",
              "Knowledge Architecture",
              "Memory",
              "Obsidian",
              "System Design",
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
