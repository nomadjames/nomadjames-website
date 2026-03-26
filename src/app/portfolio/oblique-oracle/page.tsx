import styles from "./page.module.css";

export const metadata = {
  title: "Oblique Oracle | James Dishman",
  description:
    "A divination app synthesizing the I Ching, Brian Eno's Oblique Strategies, and AI to explore human agency in algorithmic decision-making.",
};

export default function ObliqueOracle() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>&larr; Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Product Design &middot; AI Integration</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.year}>2026</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.course}>Independent Project &middot; In Progress</span>
          </div>
          <h1 className={styles.title}>Oblique Oracle:<br />Algorithmic Divination as Design Research</h1>
          <div className={styles.methods}>
            {["I Ching Hexagram Generation", "Oblique Strategies", "AI Synthesis", "Embodied Interaction", "React Native / Expo", "Claude API Integration"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* The Idea */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Idea</h2>
          <p className={styles.body}>
            Most AI interactions are transactional: you ask a question, you get an answer. Oblique
            Oracle inverts that relationship. Instead of optimizing for the &ldquo;right&rdquo; answer,
            it deliberately introduces indeterminacy: ancient divination systems and lateral
            thinking prompts, then asks AI to find meaning in the collision.
          </p>
          <p className={styles.body}>
            The question isn&apos;t whether the oracle is &ldquo;accurate.&rdquo; The question is what
            happens to human judgment when algorithmic output is framed as wisdom rather than information.
          </p>
        </section>

        {/* How It Works */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.body}>
            Three systems converge on every reading:
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>I Ching Hexagram Generation</h3>
            <p className={styles.body}>
              Simulates the traditional coin-toss method (three coins, six throws) using yarrow stalk
              probabilities. Generates a primary hexagram with changing lines and a relating hexagram.
              All 64 hexagrams use James Legge&apos;s 1899 public domain translation.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Oblique Strategies</h3>
            <p className={styles.body}>
              Draws a random card from Brian Eno and Peter Schmidt&apos;s creative prompt deck:
              lateral thinking tools originally designed to break creative blocks in the recording studio.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>AI Synthesis</h3>
            <p className={styles.body}>
              Claude receives the user&apos;s question, the hexagram interpretation, and the oblique
              strategy, then streams a unified oracle response that weaves all three into a coherent reading.
            </p>
          </div>
        </section>

        {/* The Design Question */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Design Question</h2>
          <p className={styles.body}>
            What does it mean to design a system where the user cannot distinguish between algorithmic
            pattern-matching and genuine insight? The I Ching has survived three thousand years not
            because it predicts the future, but because it creates a structured space for reflection.
            Oblique Strategies work the same way: they don&apos;t solve problems, they reframe them.
          </p>
          <p className={styles.body}>
            AI adds a third layer: the synthesis feels authoritative because it&apos;s fluent, but
            fluency is not wisdom. Oblique Oracle sits at that intersection deliberately. It&apos;s a
            research artifact as much as a product: a way to study how people relate to algorithmic
            authority when the frame is explicitly non-rational.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Architecture</h2>
          <p className={styles.body}>
            React Native + Expo (cross-platform iOS/Android/web), TypeScript, local proxy server that
            routes through Claude CLI authentication (no API key management needed). CRT phosphor green
            aesthetic with ASCII art hexagrams, haptic feedback on coin throws, and streaming text display.
            Currently tested on web; mobile deployment pending.
          </p>
        </section>

        {/* What's Next */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What&apos;s Next</h2>
          <p className={styles.body}>
            Voice/tone calibration (balancing mystical and practical), visual hierarchy redesign, past
            reading history, and the core research question: a comparative study of user trust and
            reflection depth when interacting with deterministic vs. indeterminate AI systems.
          </p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills and Concepts</h2>
          <div className={styles.skills}>
            {[
              "I Ching scholarship",
              "Prompt engineering",
              "React Native / Expo",
              "TypeScript",
              "AI API integration",
              "Interaction design for indeterminate systems",
              "Creative coding",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
