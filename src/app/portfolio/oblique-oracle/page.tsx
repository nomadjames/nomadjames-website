import styles from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";

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
          <PretextTitle text={"Oblique Oracle:\nAlgorithmic Divination as Design Research"} className={styles.title} />
          <div className={styles.methods}>
            {["I Ching Hexagram Generation", "Oblique Strategies", "AI Synthesis", "Ritual Interaction Design", "Creativity Support Tools", "Expo / React Native", "Groq API"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          A divination app that combines I Ching hexagram generation, Brian Eno&apos;s Oblique Strategies, and AI synthesis into a single reading. The point is not prediction. It is studying what happens to human reflection and judgment when algorithmic output is framed as wisdom instead of information.
        </Tldr>

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
          <p className={styles.body}>
            This is not a novelty project. HCI literature has a recognized tradition of studying
            ambiguity as a design resource (Gaver et al.), generative constraints as creative
            catalysts (Le Masson, Hatchuel &amp; Weil, 2022), and randomness-based interventions
            as a legitimate category within the Creativity Support Tools taxonomy. Divination
            artifacts appear in CHI, DIS, and C&amp;C proceedings not as entertainment but as
            interactional systems that supply resources for meaning-making. The Oracle sits
            squarely in this research tradition.
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
              All 64 hexagrams use James Legge&apos;s 1882 public domain translation.
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
              The AI receives the user&apos;s question, the hexagram interpretation, and the oblique
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
          <p className={styles.body}>
            The specific gap this project occupies: no peer-reviewed study combines a classical
            divination system with an LLM to generate contextual, synthesized interpretations. ML-generated
            tarot decks exist. Web-based Oblique Strategies randomizers exist. AI prophecy devices exist.
            But the three-system synthesis (hexagram structure + lateral provocation + interpretive AI)
            has no direct precedent in the CHI, DIS, or C&amp;C literature. That gap is what makes
            this a research question rather than just an app.
          </p>
        </section>

        {/* Interaction Design: The Ritual Frame */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interaction Design: The Ritual Frame</h2>
          <p className={styles.body}>
            The interaction model is deliberately not a chat interface. The user&apos;s mental model
            should be &ldquo;consulting an oracle,&rdquo; not &ldquo;using a chatbot.&rdquo; That
            distinction shapes every design decision.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Casting Ritual</h3>
            <p className={styles.body}>
              The hexagram generation simulates the traditional three-coin method: three coins, six throws,
              using yarrow stalk probabilities. The user watches each line form, bottom to top, with
              changing lines (old yin, old yang) highlighted. This is not decoration. The pacing creates
              a contemplative pause between asking a question and receiving an answer. In Don Norman&apos;s
              terms, the affordance of the casting ritual is contemplation itself: the structure invites
              the user to sit with their question rather than rush to an answer.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>CRT Terminal Aesthetic</h3>
            <p className={styles.body}>
              The visual language is CRT green on void black: phosphor text, scanlines, monospace type
              (Share Tech Mono). The aesthetic is visceral in Norman&apos;s emotional design framework.
              It signals depth over polish, something ancient mediated through something electronic. The
              Eye of Providence, Elder Futhark runes, and Chinese sacred characters reinforce the ritual
              frame without requiring the user to understand any of the symbol systems. They create
              atmosphere, and atmosphere changes how people receive information.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Synthesis as Revelation, Not Generation</h3>
            <p className={styles.body}>
              The AI response streams in character: terse, symbolic, second-person. The system prompt
              instructs the model to speak as &ldquo;the Oracle&rdquo; and weave the hexagram and
              oblique strategy into a single unified voice. The synthesis is capped at 200 words. No
              headers. No lists. This constraint is a design choice: the output should feel like
              revelation arriving, not content being generated. The pacing and presentation matter as
              much as the content.
            </p>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Architecture</h2>
          <p className={styles.body}>
            Expo/React Native with TypeScript, built for web and mobile from a single codebase.
            The hexagram engine implements the full I Ching casting system: coin-toss simulation with
            correct yin/yang probabilities, trigram lookup via a reverse-mapped table of all 64
            hexagrams, changing line detection, and relating hexagram derivation. All 64 hexagrams
            use James Legge&apos;s 1882 public domain translation. The Oblique Strategies deck is a
            complete implementation of Eno and Schmidt&apos;s original cards.
          </p>
          <p className={styles.body}>
            A web demo runs as a Next.js static site on GitHub Pages with Cloudflare. A pre-loaded
            bank of 110 oracle readings provides instant responses without requiring an API call.
            Live AI synthesis routes through Groq API via a Cloudflare Worker proxy, keeping API
            keys off the client. The architecture separates the deterministic systems (hexagram
            generation, strategy draw) from the non-deterministic system (AI synthesis) so the
            app works fully offline for everything except the live oracle voice.
          </p>
        </section>

        {/* Try the Demo */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Try It</h2>
          <p className={styles.body}>
            A live web demo of the oracle is available. CRT terminal aesthetic, coin-toss hexagram
            generation, oblique strategy draw, and AI synthesis, all running in the browser.
          </p>
          <p className={styles.body}>
            <a href="/portfolio/oblique-oracle/demo" className={styles.demoLink}>
              Try the live demo &rarr;
            </a>
          </p>
        </section>

        {/* What's Next */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What&apos;s Next</h2>
          <p className={styles.body}>
            Voice/tone calibration (balancing mystical register and practical usefulness), visual
            hierarchy redesign, and past reading history so users can track how their questions
            evolve over time.
          </p>
          <p className={styles.body}>
            The core research question is a comparative study: does the Oracle change how people
            reflect compared to a raw I Ching reading, a standalone Oblique Strategy, or a
            freeform ChatGPT prompt? An existing preprint found that Oblique Strategies were
            perceived as more challenging but more rewarding and engaging than ChatGPT for creative
            ideation. The Oracle sits between these conditions: structured enough to provoke,
            synthesized enough to be accessible. The evaluation battery would include ideation
            metrics (fluency, novelty, variety), the Creativity Support Index (a validated
            psychometric), homogenization analysis (does the tool make everyone&apos;s output
            converge or diverge?), and think-aloud sessions to capture how users interpret
            ambiguous prompts.
          </p>
          <p className={styles.body}>
            This is a publishable research direction. The natural venues are CHI alt.chi, DIS
            (as a pictorial, given the visual design emphasis), or Creativity &amp; Cognition.
            No peer-reviewed study has evaluated an LLM-augmented divination system against
            classical divination alone. The gap exists and the tool exists. What remains is the
            study.
          </p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills and Concepts</h2>
          <div className={styles.skills}>
            {[
              "I Ching scholarship",
              "Prompt engineering",
              "Expo / React Native",
              "Next.js",
              "TypeScript",
              "Groq API integration",
              "Cloudflare Workers",
              "Interaction design for indeterminate systems",
              "Creativity Support Tools (CST) research",
              "Don Norman emotional design framework",
              "HCI research positioning",
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
