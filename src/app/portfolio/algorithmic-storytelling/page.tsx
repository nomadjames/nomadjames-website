import styles from "../accessibility-audit/page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";

export const metadata = {
  title: "Algorithmic Storytelling v3 | James Dishman",
  description:
    "An interactive narrative built in p5.js exploring revolutionary behavior in a surveillance state. Sprite animation, collision detection, political satire, and narrative branching. Final project for EMAT-60310 Creative Coding Fundamentals.",
};

export default function AlgorithmicStorytelling() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>&larr; Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Creative Coding</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.year}>2025</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.course}>EMAT-60310 &middot; Final Project</span>
          </div>
          <PretextTitle text={"Algorithmic Storytelling v3:\nInteractive Narrative as Political Act"} className={styles.title} />
          <div className={styles.methods}>
            {["p5.js", "Sprite Animation", "Collision Detection", "Interactive Narrative", "Political Satire"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          A playable interactive narrative built in p5.js where the game mechanics themselves carry political meaning. Sprite animation, collision detection, interactive zones, and narrative branching. Third and final version. You can play it right now.
        </Tldr>

        {/* The Project */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Project</h2>
          <p className={styles.body}>
            Algorithmic Storytelling started as a simple p5.js sketch and grew across three versions into
            something that actually says something. Version 1 was proof of concept: can you tell a story
            inside a canvas? Version 2 added sprite animation and basic interaction. Version 3 is the one
            that matters. It has collision detection, interactive zones, narrative branching, and a political
            layer that turns the gameplay itself into commentary.
          </p>
          <p className={styles.body}>
            This was the final project for EMAT-60310 Creative Coding Fundamentals (Spring 2025). The
            assignment was open-ended: synthesize everything from the semester. I built a game that is
            also an argument.
          </p>
        </section>

        {/* Technical Implementation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Implementation</h2>
          <p className={styles.body}>
            The whole thing runs in the p5.js web editor using p5.play for sprite management. No
            frameworks, no build tools, no backend. Just JavaScript drawing to a canvas.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Sprite Animation</h3>
            <p className={styles.body}>
              Character sprites use p5.play, a library I picked up in Assignment 11. The sprites have
              animation states, directional movement, and respond to player input in real time. Getting
              sprite sheets to load and animate correctly in the p5.js web editor was its own challenge.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Collision Detection and Interactive Zones</h3>
            <p className={styles.body}>
              The narrative world is divided into interactive zones. When the player sprite enters a zone,
              it triggers events: dialogue, scene transitions, story branches. The collision detection
              handles both spatial boundaries and object interaction. Walk into the wrong place and the
              story responds.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Narrative Branching</h3>
            <p className={styles.body}>
              The story is not linear. Player choices and movement patterns determine which threads
              activate. The branching is built directly into the game loop. The code and the story
              are the same thing.
            </p>
          </div>
        </section>

        {/* The Political Layer */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Political Layer</h2>
          <p className={styles.body}>
            This is not a game that happens to have political themes. The politics are the mechanics.
          </p>
          <p className={styles.body}>
            From my author&apos;s note: &ldquo;This project is a reflection of revolutionary behavior in a
            system which is increasingly headed towards an authoritarian surveillance state. The point of
            this part of the game is to reinforce that protecting one&apos;s self from this surveillance
            state is important.&rdquo;
          </p>
          <p className={styles.body}>
            Mary Flanagan&apos;s <em>Critical Play</em> was a direct influence. Flanagan argues that games
            have always been political. They model systems, reward certain behaviors, punish others. The
            question is not whether a game carries values. The question is whether the designer is conscious
            of which values they are encoding. Algorithmic Storytelling v3 encodes its values deliberately:
            surveillance is a mechanic, resistance is a mechanic, self-protection is a win condition.
          </p>
          <p className={styles.body}>
            Games teach through repetition and consequence. Every time the player navigates a surveillance
            zone, the game is reinforcing a real-world instinct. That is the point.
          </p>
        </section>

        {/* Play It */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Play It</h2>
          <p className={styles.body}>
            The sketch runs live in the p5.js web editor. No install, no download. Open the link and play.
          </p>
          <p className={styles.body}>
            <a
              href="https://editor.p5js.org/James_D/sketches/UhFInri7S"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--orange)", fontWeight: 600 }}
            >
              Open Algorithmic Storytelling v3 &rarr;
            </a>
          </p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills and Concepts</h2>
          <div className={styles.skills}>
            {["p5.js", "p5.play sprite library", "Collision detection", "Interactive zone design", "Narrative branching", "Sprite animation", "Critical Play (Flanagan)", "Political game design", "Creative coding"].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
