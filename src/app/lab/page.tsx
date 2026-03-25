import styles from "./page.module.css";

const sketches = [
  {
    slug: "sol-lewitt",
    title: "Algorithmic Sol LeWitt",
    course: "EMAT-60310",
    year: "2025",
    description:
      "Inspired by Josef Albers — rotating nested squares over a field of random geometry. The background shifts color every frame, the shapes accumulate on top of it.",
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
      "A fractal grid of ellipses and nested rectangles. Came out looking like a speaker. The header text is the instruction.",
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

export default function LabPage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <div className={styles.backLink}>
          <a href="/">← Work</a>
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
            Creative coding experiments from EMAT-60310 — a graduate course in
            generative art and computational thinking.
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
      </main>
    </div>
  );
}
