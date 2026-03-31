import styles from "./page.module.css";

export const metadata = {
  title: "Lab | James Dishman",
  description:
    "Creative coding experiments from EMAT-60310 at Kent State: generative art, algorithmic storytelling, and computational design sketches built with p5.js.",
};

const sketches = [
  {
    slug: "sol-lewitt",
    title: "Algorithmic Sol LeWitt",
    course: "EMAT-60310",
    year: "2025",
    description:
      "Inspired by Sol LeWitt's instruction-based wall drawings: rotating nested squares over a field of random geometry. The background shifts color every frame, the shapes accumulate on top of it.",
    interaction: "click to pause/resume · mouse Y = speed",
  },
  {
    slug: "generative-art",
    title: "Morphing Kaleidoscopic Grid",
    course: "EMAT-60310",
    year: "2025",
    description:
      "Moving rectangles bounce around the canvas and every 5 seconds deposit a nested copy of themselves onto a persistent layer. An accumulation machine.",
    interaction: "click to pause/resume",
  },
  {
    slug: "virtual-wallpaper",
    title: "Virtual Wallpaper",
    course: "EMAT-60310",
    year: "2025",
    description:
      "A fractal grid of ellipses and nested rectangles. Came out looking like a speaker. The header text serves as the interaction instruction: click to randomize.",
    interaction: "click to randomize colors and grid size",
  },
  {
    slug: "words-in-the-desert",
    title: "Words in the Desert",
    course: "EMAT-60310",
    year: "2025",
    description:
      "A poem written from the Valley of the Sun. Words scatter across a desert-colored background and animate into readable text on click.",
    interaction: "click to toggle between scattered and paragraph layouts",
  },
];

const externalSketches = [
  {
    title: "Algorithmic Storytelling",
    course: "EMAT-60310",
    year: "2025",
    description:
      "A political satire game about navigating a surveillance state. Sprite-based characters move through procedurally generated environments with sound. Three iterations: from prototype to full narrative arc.",
    interaction: "arrow keys to move · spacebar to interact",
    versions: [
      { label: "V3 (Final)", url: "https://editor.p5js.org/James_D/full/UhFInri7S" },
      { label: "V2", url: "https://editor.p5js.org/James_D/full/qbCeiR-Cd" },
      { label: "V1", url: "https://editor.p5js.org/James_D/full/NZwuhafTs" },
    ],
  },
];

export default function LabPage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <div className={styles.backLink}>
          <a href="/portfolio">← Work</a>
        </div>

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>EMAT-60310</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Generative Art</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>2025</span>
          </div>
          <h1 className={styles.title}>Lab</h1>
          <p className={styles.subtitle}>
            Creative coding experiments from EMAT-60310 (Educational Media and Technology),
            a Kent State graduate course in generative art and computational thinking.
          </p>
        </header>

        <section className={styles.grid}>
          {sketches.map((sketch) => (
            <article key={sketch.slug} className={styles.card}>
              <div className={styles.iframeWrapper}>
                <iframe
                  src={`/sketches/${sketch.slug}.html`}
                  title={sketch.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  className={styles.iframe}
                />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{sketch.title}</h2>
                <p className={styles.cardDesc}>{sketch.description}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.courseTag}>
                    {sketch.course} &middot; {sketch.year}
                  </span>
                  <span className={styles.hint}>{sketch.interaction}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {externalSketches.length > 0 && (
          <section className={styles.grid} style={{ marginTop: "2rem" }}>
            {externalSketches.map((sketch) => (
              <article key={sketch.title} className={styles.card}>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{sketch.title}</h2>
                  <p className={styles.cardDesc}>{sketch.description}</p>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    {sketch.versions.map((v) => (
                      <a
                        key={v.label}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--orange)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {v.label} ↗
                      </a>
                    ))}
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.courseTag}>
                      {sketch.course} &middot; {sketch.year}
                    </span>
                    <span className={styles.hint}>{sketch.interaction}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
