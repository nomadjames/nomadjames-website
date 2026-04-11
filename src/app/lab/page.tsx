import styles from "./page.module.css";

export const metadata = {
  title: "Lab | James Dishman",
  description:
    "Interactive experiments, creative coding, and small prototype systems. Featured: Micro-Museum of Broken Interfaces.",
};

const featuredProject = {
  title: "Micro-Museum of Broken Interfaces",
  category: "Interactive UX Critique",
  year: "2026",
  description:
    "An interactive portfolio piece that turns UX critique into something you can actually feel. Instead of writing about bad interface patterns, it lets you use them, experience why they fail, and compare them directly to redesigns that fix the underlying problem.",
  purpose:
    "The museum covers 15 infamous interface failures drawn from real products, FTC complaints, and dark patterns research. Each exhibit follows the same structure: experience the broken version, read the principle-level analysis, then see a better version side by side. The point is simple: critique is cheap, redesign is not.",
  url: "/micro-museum/",
  cta: "Open the Micro-Museum",
};

const sketches = [
  {
    slug: "sol-lewitt",
    title: "Algorithmic Sol LeWitt",
    course: "p5.js",
    year: "2025",
    description:
      "Inspired by Sol LeWitt's instruction-based wall drawings: rotating nested squares over a field of random geometry. The background shifts color every frame, the shapes accumulate on top of it.",
    interaction: "click to pause/resume · mouse Y = speed",
  },
  {
    slug: "generative-art",
    title: "Morphing Kaleidoscopic Grid",
    course: "p5.js",
    year: "2025",
    description:
      "Moving rectangles bounce around the canvas and every 5 seconds deposit a nested copy of themselves onto a persistent layer. An accumulation machine.",
    interaction: "click to pause/resume",
  },
];

const externalSketches = [
  {
    title: "Algorithmic Storytelling",
    course: "p5.js",
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
            <span className={styles.eyebrowLabel}>Experiments</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Creative Coding</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Interactive Prototypes</span>
          </div>
          <h1 className={styles.title}>Lab</h1>
          <p className={styles.subtitle}>
            Small builds, interactive experiments, and prototypes that help me work through ideas in public.
            Some are playful. Some are pointed. The common thread is making the idea tangible.
          </p>
        </header>

        <section className={styles.featuredSection}>
          <article className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <span className={styles.featuredKicker}>Featured project</span>
              <h2 className={styles.featuredTitle}>{featuredProject.title}</h2>
              <div className={styles.cardMeta}>
                <span className={styles.courseTag}>
                  {featuredProject.category} &middot; {featuredProject.year}
                </span>
              </div>
              <p className={styles.featuredBody}>{featuredProject.description}</p>
              <p className={styles.featuredBody}>{featuredProject.purpose}</p>
              <div className={styles.featuredNotes}>
                <span className={styles.featuredNote}>15 exhibits</span>
                <span className={styles.featuredNote}>broken pattern → analysis → fix</span>
                <span className={styles.featuredNote}>standalone project</span>
              </div>
              <div className={styles.featuredActions}>
                <a
                  href={featuredProject.url}
                  className={styles.featuredLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featuredProject.cta} ↗
                </a>
                <span className={styles.featuredUrl}>nomadjames.com/micro-museum</span>
              </div>
            </div>
          </article>
        </section>

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
