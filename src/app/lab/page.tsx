import styles from "./page.module.css";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Lab | James Dishman",
  description:
    "Interactive experiments, creative coding, and small prototype systems. Featured: Micro-Museum of Broken Interfaces and my horizons.",
};

const featuredProjects = [
  {
    title: "Micro-Museum of Broken Interfaces",
    category: "Interactive UX Critique",
    year: "2026",
    description:
      "An interactive portfolio piece that turns UX critique into something you can actually feel. Instead of writing about bad interface patterns, it lets you use them, experience why they fail, and compare them directly to redesigns that fix the underlying problem.",
    purpose:
      "The museum covers 15 infamous interface failures drawn from real products, FTC complaints, and dark patterns research. Each exhibit follows the same structure: experience the broken version, read the principle-level analysis, then see a better version side by side. The point is simple: critique is cheap, redesign is not.",
    url: "/micro-museum/",
    cta: "Open the Micro-Museum",
    notes: ["15 exhibits", "broken pattern → analysis → fix", "standalone project"],
  },
  {
    title: "my horizons",
    category: "Interactive Artwork",
    year: "2026",
    description:
      "A preserved creative-coding composition translated into six animated color worlds: the original plus five Warhol-style variations. It keeps the geometry and tension of the first piece, then lets color do the emotional remixing.",
    purpose:
      "The page behaves like one artwork instead of six disconnected sketches. Hover over any horizon to wake it up, move the mouse to bend the atmosphere, and click to pull a single variation into focus before dropping back into the full field.",
    url: "/my-horizons/",
    cta: "Open my horizons",
    notes: ["original + five variations", "hover and click responsive", "standalone project"],
  },
];

const liveSystems = [
  {
    slug: "pulse",
    title: "Clarence Pulse",
    category: "Live System Metrics",
    year: "2026",
    description:
      "Public-safe system pulse showing live knowledge metrics, system health, and architecture signals from Clarence.",
    url: "/lab/pulse",
    cta: "View System Pulse",
  },
];

const sketches = [
  {
    slug: "sol-lewitt",
    title: "Algorithmic Sol LeWitt",
    course: "p5.js",
    year: "2025",
    description:
      "Inspired by Sol LeWitt's instruction-based wall drawings: rotating nested squares over a field of random geometry. Clickable: click to pause or resume, and move the mouse vertically to change the speed.",
    interaction: "clickable · click to pause/resume · mouse Y = speed",
  },
  {
    slug: "generative-art",
    title: "Morphing Kaleidoscopic Grid",
    course: "p5.js",
    year: "2025",
    description:
      "Moving rectangles bounce around the canvas and every 5 seconds deposit a nested copy of themselves onto a persistent layer. Clickable: click to pause or resume the accumulation.",
    interaction: "clickable · click to pause/resume",
  },
  {
    slug: "nested-grid-echoes",
    title: "Nested Grid Echoes",
    course: "p5.js",
    year: "2025",
    description:
      "A drifting grid where each cell slowly accumulates recursive color blocks over time. Motion stays temporary. The nested geometry persists. Not clickable: this one just evolves on its own.",
    interaction: "not clickable · watch it evolve every 5 seconds",
  },
  {
    slug: "chromatic-crossfield",
    title: "Chromatic Crossfield",
    course: "p5.js",
    year: "2025",
    description:
      "A field of moving diagonal crosses with noise-driven stroke weights and a jittering square overlay. Loud, geometric, and unstable in a good way. Clickable: click to pause or resume.",
    interaction: "clickable · click to pause/resume",
  },
  {
    slug: "spectrum-cross-drift",
    title: "Spectrum Cross Drift",
    course: "p5.js",
    year: "2025",
    description:
      "One hundred full-frame diagonal crosses drift horizontally and vertically while Perlin noise thickens and thins each stroke. It feels like a CRT test pattern learning how to breathe. Clickable: click to pause or resume.",
    interaction: "clickable · click to pause/resume",
  },
  {
    slug: "virtual-wallpaper-redux",
    title: "Virtual Wallpaper Redux",
    course: "p5.js",
    year: "2025",
    description:
      "A speaker-like wallpaper grid of ellipses and nested rectangles under a command-heavy mantra. Clickable: click to randomize the color and cell scale, and press-hold to trigger the rotating rectangle behavior.",
    interaction: "clickable · click to recolor/rescale · press-hold to rotate inner forms",
  },
  {
    slug: "crimson-noise-dots",
    title: "Crimson Noise Dots",
    course: "p5.js",
    year: "2025",
    description:
      "A simple but effective hypnotic field: translucent red-pink dots bloom across a black canvas until it feels like afterimages burned into your eyes. Clickable: click to clear the canvas.",
    interaction: "clickable · click to clear the canvas",
  },
  {
    slug: "stochastic-shape-storm",
    title: "Stochastic Shape Storm",
    course: "p5.js",
    year: "2025",
    description:
      "A slow-cycling blast of ellipses, rectangles, and triangles over a constantly mutating background. Less composition, more sudden visual weather. Clickable: click to force a fresh random frame.",
    interaction: "clickable · click to force a new frame",
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

const loopStudies = [
  {
    slug: "01-prism-bloom",
    title: "Prism Bloom",
    note: "Radial rainbow bloom with a slow inward pull.",
  },
  {
    slug: "02-cathedral-wheel",
    title: "Cathedral Wheel",
    note: "Stained-glass symmetry with a cooler color rotation.",
  },
  {
    slug: "03-spiral-tide",
    title: "Spiral Tide",
    note: "Liquid spiral motion with a brighter magenta-cyan bias.",
  },
  {
    slug: "04-mosaic-sun",
    title: "Mosaic Sun",
    note: "Tile-like sunburst with a warmer high-contrast finish.",
  },
  {
    slug: "05-opal-labyrinth",
    title: "Opal Labyrinth",
    note: "Iridescent maze energy with a darker jewel-tone drift.",
  },
  {
    slug: "06-rosette-current",
    title: "Rosette Current",
    note: "Electric petal loop with the fastest hue travel in the set.",
  },
  {
    slug: "07-glass-flower",
    title: "Glass Flower",
    note: "Layered stained-glass bloom with a gentler pulse.",
  },
  {
    slug: "08-tile-comet",
    title: "Tile Comet",
    note: "Radial tile burst with a sharper push through the frame.",
  },
  {
    slug: "09-ribbon-orbit",
    title: "Ribbon Orbit",
    note: "Ribbon-like spiral motion with a brighter orbiting palette.",
  },
  {
    slug: "10-aurora-emblem",
    title: "Aurora Emblem",
    note: "Cool aurora gradients and a slower, calmer turn.",
  },
];

export default function LabPage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <div className={styles.backLink}>
          <SmartBackLink fallbackHref="/portfolio">← Work</SmartBackLink>
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
          {featuredProjects.map((project, index) => (
            <article key={project.url} className={styles.featuredCard}>
              <div className={styles.featuredContent}>
                <span className={styles.featuredKicker}>
                  {index === 0 ? "Featured project" : "Featured artwork"}
                </span>
                <h2 className={styles.featuredTitle}>{project.title}</h2>
                <div className={styles.cardMeta}>
                  <span className={styles.courseTag}>
                    {project.category} &middot; {project.year}
                  </span>
                </div>
                <p className={styles.featuredBody}>{project.description}</p>
                <p className={styles.featuredBody}>{project.purpose}</p>
                <div className={styles.featuredNotes}>
                  {project.notes.map((note) => (
                    <span key={note} className={styles.featuredNote}>{note}</span>
                  ))}
                </div>
                <div className={styles.featuredActions}>
                  <a
                    href={project.url}
                    className={styles.featuredLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.cta} ↗
                  </a>
                  <span className={styles.featuredUrl}>
                    nomadjames.com{project.url.replace(/\/$/, "")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Live Systems */}
        <section className={styles.liveSection}>
          <h2 className={styles.sectionHeading}>Live Systems</h2>
          <div className={styles.liveGrid}>
            {liveSystems.map((system) => (
              <article key={system.slug} className={styles.liveCard}>
                <div className={styles.liveCardBody}>
                  <span className={styles.liveKicker}>{system.category}</span>
                  <h3 className={styles.liveCardTitle}>{system.title}</h3>
                  <p className={styles.liveCardDesc}>{system.description}</p>
                  <div className={styles.liveCardActions}>
                    <a href={system.url} className={styles.liveLink}>
                      {system.cta} →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
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

        <section className={styles.loopSection}>
          <h2 className={styles.sectionHeading}>Loop Studies</h2>
          <p className={styles.loopIntro}>
            Ten short motion studies from the current psychedelic clip factory, built from hosted FLUX stills and finished locally.
            Muted, inline, and looping by default.
          </p>
          <div className={styles.loopGrid}>
            {loopStudies.map((study) => (
              <article key={study.slug} className={styles.loopCard}>
                <video
                  className={styles.loopVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster={`/lab/loop-studies/${study.slug}.jpg`}
                  aria-label={study.title}
                >
                  <source src={`/lab/loop-studies/${study.slug}.mp4`} type="video/mp4" />
                </video>
                <div className={styles.loopBody}>
                  <h3 className={styles.loopStudyTitle}>{study.title}</h3>
                  <p className={styles.loopStudyNote}>{study.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
