import styles from "./page.module.css";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Implementing Pretext: Solving a 30-Year Browser Problem | James Dishman",
  description:
    "How I used Cheng Lou's Pretext library to replace DOM-based text measurement with Canvas-powered character-level layout on my portfolio site.",
};

export default function PretextArticle() {
  return (
    <div className={styles.page}>
      <main className="container">
        <SmartBackLink fallbackHref="/writing" className={styles.backLink}>
          &larr; Writing
        </SmartBackLink>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.metaAccent}>Technical</span>
            <span aria-hidden="true">&middot;</span>
            <span>March 31, 2026</span>
            <span aria-hidden="true">&middot;</span>
            <span>5 min read</span>
          </div>
          <PretextTitle
            text={"Implementing Pretext:\nSolving a 30-Year Browser\nProblem on a Portfolio Site"}
            className={styles.title}
          />
          <p className={styles.lede}>
            Browsers have never had a fast, programmatic way to measure text
            without triggering layout reflow. Cheng Lou just fixed that with a
            15KB library. I put it to work.
          </p>
        </header>

        <article className={styles.article}>
          {/* ── The Problem ─────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The problem with text in browsers</h2>
            <p className={styles.body}>
              If you have ever needed to know exactly where a character sits on
              screen, you know the ritual: create an invisible DOM element, set
              its styles, inject the text, force the browser to reflow, read back
              the computed dimensions, then tear it down. One measurement costs
              one reflow. Ten headings cost ten reflows. A portfolio grid with
              responsive text costs dozens.
            </p>
            <p className={styles.body}>
              This has been the only option since Netscape Navigator. The DOM was
              never designed for pre-flight text measurement. It was designed to
              render documents.
            </p>
            <p className={styles.body}>
              <a href="https://github.com/chenglou/pretext" target="_blank" rel="noopener noreferrer">Pretext</a>,
              released March 2026 by Cheng Lou (Midjourney engineer, former React
              core team, creator of React Motion), sidesteps the DOM entirely. It
              queries the browser&apos;s Canvas font metrics engine and uses pure
              arithmetic to predict where every character, word, and line will
              land. No reflow. No invisible elements. No string allocations on
              the hot path.
            </p>
          </section>

          {/* ── Why I Cared ─────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why this mattered for a portfolio site</h2>
            <p className={styles.body}>
              I had a specific problem. Every case study on this site opens with
              a large heading rendered in Outfit at{" "}
              <span className={styles.code}>clamp(2rem, 5vw, 3.5rem)</span>.
              I wanted character-level entrance animation on those headings: each
              letter rising gently into place as the page loads, staggered across
              the title. Not a gimmick. A moment of craft that signals attention
              to detail.
            </p>
            <p className={styles.body}>
              The standard approach is to wrap every character in a{" "}
              <span className={styles.code}>&lt;span&gt;</span>, then animate
              each span individually. This works, but it means the browser is
              performing layout on dozens of inline elements per heading, and you
              lose natural word-wrapping. You end up reimplementing line breaking
              in JavaScript, or accepting that your heading wraps differently
              than it would as plain text.
            </p>
            <p className={styles.body}>
              Pretext solves this. It tells you exactly where each character will
              land at a given container width, accounting for the actual font
              metrics. I can animate characters to their correct positions
              without the browser ever laying out the text itself.
            </p>
          </section>

          {/* ── How It Works ────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Two-phase measurement</h2>
            <p className={styles.body}>
              Pretext splits work into a <strong>prepare</strong> phase and
              a <strong>layout</strong> phase. The prepare phase is the expensive
              one: it measures every character segment against the Canvas API and
              caches the widths. The layout phase is pure math.
            </p>
            <div className={styles.benchmark}>
              <div className={styles.benchmarkCard}>
                <div className={styles.benchmarkLabel}>Prepare (500 texts)</div>
                <div className={styles.benchmarkValue}>~19ms</div>
                <div className={styles.benchmarkNote}>
                  one-time cost, cached
                </div>
              </div>
              <div className={styles.benchmarkCard}>
                <div className={styles.benchmarkLabel}>Layout (500 texts)</div>
                <div className={styles.benchmarkValue}>~0.09ms</div>
                <div className={styles.benchmarkNote}>
                  runs on every resize
                </div>
              </div>
            </div>
            <p className={styles.body}>
              For my use case, the prepare cost is negligible: I measure one
              heading per page load. The layout cost is what matters. On
              window resize, recalculating character positions takes fractions of
              a millisecond instead of triggering reflow.
            </p>
          </section>

          {/* ── Implementation ──────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The implementation</h2>
            <p className={styles.body}>
              The component is a React client component that takes the title
              text as a prop. On mount, it waits for fonts to load (critical
              for accurate measurement with Google Fonts), reads the computed
              font style from a hidden reference element, then uses Canvas{" "}
              <span className={styles.code}>measureText()</span> to calculate
              character positions.
            </p>
            <pre className={styles.codeBlock}>{`// Measure each character's x position using Canvas
const ctx = canvas.getContext("2d");
ctx.font = \`\${fontWeight} \${fontSize} \${fontFamily}\`;

for (const char of line) {
  positions.push({ char, x, lineIndex });
  x += ctx.measureText(char).width;
}`}</pre>
            <p className={styles.body}>
              Each character gets a staggered CSS transition: 18ms delay per
              character, a small upward translate, and an opacity fade. The
              easing is{" "}
              <span className={styles.code}>cubic-bezier(0.22, 1, 0.36, 1)</span>,
              which gives a quick start with a gentle settle. Total animation
              time for a typical heading is under 600ms.
            </p>
            <p className={styles.body}>
              A <span className={styles.code}>ResizeObserver</span> watches the
              container. When the width changes, the component re-measures and
              replays the animation. The recalculation itself is sub-millisecond.
            </p>
          </section>

          {/* ── What I Learned ──────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I learned</h2>
            <p className={styles.body}>
              <strong>Font loading is non-negotiable.</strong> If you measure
              before Google Fonts finish loading, the Canvas API falls back to a
              system font and every width is wrong. The{" "}
              <span className={styles.code}>document.fonts.ready</span> promise
              is essential.
            </p>
            <p className={styles.body}>
              <strong>Named fonts only.</strong> Pretext&apos;s README warns that{" "}
              <span className={styles.code}>system-ui</span> resolves to
              different optical variants on macOS depending on whether you query
              via Canvas or the DOM. Since this site uses Outfit and Inter
              explicitly, this was not an issue, but it would bite anyone relying
              on system fonts.
            </p>
            <p className={styles.body}>
              <strong>Subtlety is the whole point.</strong> The first version had
              too much vertical travel and too aggressive a stagger. It looked
              like a SaaS landing page. Dialing it back to 0.15em translate and
              18ms per character made it feel like the text was always there and
              you just caught the last moment of it arriving. That is the
              difference between pizzazz and performance.
            </p>
          </section>

          {/* ── The Bigger Picture ──────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why it matters beyond animation</h2>
            <p className={styles.body}>
              Character-level animation is a narrow use case. What Pretext
              actually unlocks is a class of layout problems that browsers have
              never solved well: text flowing around arbitrary shapes (not just
              rectangles), SVG text wrapping (which the spec has lacked since
              2003), and off-main-thread text layout via Web Workers.
            </p>
            <p className={styles.body}>
              Cheng Lou built this using iterative AI-assisted development with
              Claude and Codex, feeding browser ground-truth data and having the
              models converge on arithmetic that matches real rendering. The test
              corpus included the full text of <em>The Great Gatsby</em> and
              multilingual datasets across Thai, Chinese, Korean, Japanese, and
              Arabic. Simon Willison{" "}
              <a href="https://simonwillison.net/2026/Mar/29/pretext/" target="_blank" rel="noopener noreferrer">
                called the testing methodology
              </a>{" "}
              &ldquo;particularly impressive.&rdquo;
            </p>
            <p className={styles.body}>
              The library is 15KB with zero dependencies. It works everywhere
              Canvas works. For a problem that has existed since the mid-1990s,
              that is an unreasonably elegant solution.
            </p>
          </section>

          {/* ── Tags ────────────────────────────────────────── */}
          <div className={styles.tags}>
            {[
              "Pretext",
              "Typography",
              "Canvas API",
              "React",
              "Next.js",
              "Performance",
              "Animation",
              "Cheng Lou",
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
