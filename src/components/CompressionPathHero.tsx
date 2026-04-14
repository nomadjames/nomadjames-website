"use client";

import { useEffect, useId, useState } from "react";
import styles from "./CompressionPathHero.module.css";

type Entry = {
  title: string;
  content: string;
  meta: string;
};

type RingKey = "music" | "community" | "ux" | "ai";
type TransitionKey = "music-community" | "community-ux" | "ux-ai";
type ActiveSelection =
  | { kind: "ring"; key: RingKey }
  | { kind: "transition"; key: TransitionKey }
  | null;

function selectionFromHash(hash: string): ActiveSelection {
  const value = hash.replace(/^#/, "");
  if (!value) return null;

  if (["music", "community", "ux", "ai"].includes(value)) {
    return { kind: "ring", key: value as RingKey };
  }

  if (["music-community", "community-ux", "ux-ai"].includes(value)) {
    return { kind: "transition", key: value as TransitionKey };
  }

  return null;
}

const rings: Array<{
  key: RingKey;
  label: string;
  years: string;
  className: keyof typeof styles;
  ariaLabel: string;
}> = [
  {
    key: "music",
    label: "Music",
    years: "30 years",
    className: "ringMusic",
    ariaLabel: "Music, 1994 to present",
  },
  {
    key: "community",
    label: "Community",
    years: "10 years",
    className: "ringCommunity",
    ariaLabel: "Community, 2015 to present",
  },
  {
    key: "ux",
    label: "UX",
    years: "3 years",
    className: "ringUx",
    ariaLabel: "UX, 2024 to present",
  },
  {
    key: "ai",
    label: "AI",
    years: "Current",
    className: "ringAi",
    ariaLabel: "AI, current focus",
  },
];

const transitions: Array<{
  key: TransitionKey;
  label: string;
  className: keyof typeof styles;
}> = [
  {
    key: "music-community",
    label: "Music to Community transition",
    className: "nodeMusicCommunity",
  },
  {
    key: "community-ux",
    label: "Community to UX transition",
    className: "nodeCommunityUx",
  },
  {
    key: "ux-ai",
    label: "UX to AI transition",
    className: "nodeUxAi",
  },
];

const content: {
  rings: Record<RingKey, Entry>;
  transitions: Record<TransitionKey, Entry>;
} = {
  rings: {
    music: {
      title: "Music",
      content:
        "Thirty years of electronic music production. Generative systems, ambient textures, synthesizers as thinking tools. <span class=\"highlight\">Brian Eno's oblique strategies. The I Ching as composition method.</span> A 50,000-track collection curated across three decades, not hoarding, but pattern recognition. Learning what makes a track work by feeling it thousands of times.",
      meta: "1994 → present",
    },
    community: {
      title: "Community",
      content:
        "Co-founded Pittsburgh Ableton User Group. Ten years of monthly meetups, workshops, and watching people learn. <span class=\"highlight\">The real education wasn't teaching software, it was watching where people got stuck.</span> Direct relationship with Ableton's North American team. More than 200 members who trusted us to guide them.",
      meta: "2015 → present",
    },
    ux: {
      title: "UX",
      content:
        "MS in User Experience at Kent State. Don Norman's frameworks as vocabulary. <span class=\"highlight\">Accessibility not as compliance, but as a design constraint that makes everything better.</span> Research into how tools shape cognition. The question that won't let go: what do systems do to the people who use them?",
      meta: "2024 → present",
    },
    ai: {
      title: "AI",
      content:
        "Clarence: a production AI system with thousands of memories, multi-model routing, and genuine collaboration. Not a chatbot, <span class=\"highlight\">a knowledge architecture that grows.</span> The question now: how do we design the seam between human and machine? Not AI that replaces thinking, but AI that changes what thinking can be.",
      meta: "The innermost ring, the current work",
    },
  },
  transitions: {
    "music-community": {
      title: "The First Compression",
      content:
        "Music taught pattern recognition. Community taught <span class=\"highlight\">where patterns break down for other people.</span> Watching someone struggle with Ableton's session view wasn't just a teaching moment, it was a design observation. The gap between the tool's model and the human's model became visible. That gap became the obsession.",
      meta: "Music → Community",
    },
    "community-ux": {
      title: "The Second Compression",
      content:
        "2018. Ableton Loop conference. Met a designer from NASA JPL whose path mirrored mine, music, community, then design. <span class=\"highlight\">Reverse-engineered his trajectory.</span> Realized the thing I'd been doing informally had a name, a discipline, a research tradition. The observations from ten years of community work weren't anecdotes. They were data.",
      meta: "Community → UX",
    },
    "ux-ai": {
      title: "The Third Compression",
      content:
        "UX gave the vocabulary. AI gave the material. <span class=\"highlight\">Designing for humans is hard. Designing for humans working with AI is the frontier.</span> Every prior domain, the pattern recognition from music, the gap-spotting from community, the frameworks from UX, compresses into this: making the human-AI seam something people can actually navigate.",
      meta: "UX → AI",
    },
  },
};

const particles = [
  { id: 0, left: "12%", delay: "0.4s", duration: "16s" },
  { id: 1, left: "20%", delay: "3.2s", duration: "14s" },
  { id: 2, left: "28%", delay: "1.1s", duration: "17s" },
  { id: 3, left: "36%", delay: "5.8s", duration: "13s" },
  { id: 4, left: "44%", delay: "2.4s", duration: "18s" },
  { id: 5, left: "52%", delay: "7.4s", duration: "15s" },
  { id: 6, left: "60%", delay: "4.5s", duration: "19s" },
  { id: 7, left: "68%", delay: "6.1s", duration: "14s" },
  { id: 8, left: "76%", delay: "8.3s", duration: "16s" },
  { id: 9, left: "84%", delay: "9.2s", duration: "18s" },
  { id: 10, left: "88%", delay: "10.4s", duration: "15s" },
  { id: 11, left: "93%", delay: "11.2s", duration: "17s" },
] as const;

function getEntry(selection: ActiveSelection): Entry | null {
  if (!selection) return null;
  return selection.kind === "ring"
    ? content.rings[selection.key]
    : content.transitions[selection.key];
}

export default function CompressionPathHero() {
  const [activeSelection, setActiveSelection] = useState<ActiveSelection>(null);
  const panelId = useId();

  useEffect(() => {
    function syncFromHash() {
      setActiveSelection(selectionFromHash(window.location.hash));
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveSelection(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const nextUrl = activeSelection
      ? `${window.location.pathname}${window.location.search}#${activeSelection.key}`
      : `${window.location.pathname}${window.location.search}`;

    window.history.replaceState(null, "", nextUrl);
  }, [activeSelection]);

  const activeEntry = getEntry(activeSelection);

  function handleRingSelect(key: RingKey) {
    setActiveSelection((current) =>
      current?.kind === "ring" && current.key === key ? null : { kind: "ring", key }
    );
  }

  function handleTransitionSelect(key: TransitionKey) {
    setActiveSelection((current) =>
      current?.kind === "transition" && current.key === key
        ? null
        : { kind: "transition", key }
    );
  }

  return (
    <section className={styles.hero} aria-labelledby="compression-path-heading">
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.particles} aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={styles.particle}
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>UX Designer & AI Systems Builder</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>MS User Experience</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Youngstown, OH</span>
          </div>

          <h1 id="compression-path-heading" className={styles.name}>
            James Dishman
          </h1>

          <p className={styles.kicker}>The Compression Path</p>
          <div className={styles.thesis}>
            <p>Each domain becomes a lens for the next.</p>
            <p>I design the part where technology actually makes humans better.</p>
          </div>
          <p className={styles.bio}>
            Music, community leadership, UX research, and AI systems design are not separate chapters.
            They compress into one practice: understanding how tools shape thought, where people get stuck,
            and how to design the seam so the system helps instead of dominates.
          </p>
        </div>

        <div className={styles.visualShell}>
          <p className={styles.visualLabel}>
            <span className={styles.sectionMark}>§</span>Compression Path
          </p>

          <div className={styles.visualization}>
            <div className={`${styles.axis} ${styles.axisVertical}`} aria-hidden="true" />
            <div className={`${styles.axis} ${styles.axisHorizontal}`} aria-hidden="true" />

            {rings.map((ring) => {
              const isActive =
                activeSelection?.kind === "ring" && activeSelection.key === ring.key;

              return (
                <button
                  key={ring.key}
                  type="button"
                  className={`${styles.ring} ${styles[ring.className]} ${isActive ? styles.active : ""}`.trim()}
                  onClick={() => handleRingSelect(ring.key)}
                  aria-label={ring.ariaLabel}
                  aria-pressed={isActive}
                  aria-controls={panelId}
                >
                  <span className={styles.ringLabel}>
                    {ring.label}
                    {ring.key !== "ai" ? <span className={styles.years}>{ring.years}</span> : null}
                  </span>
                </button>
              );
            })}

            {transitions.map((transition) => {
              const isActive =
                activeSelection?.kind === "transition" && activeSelection.key === transition.key;

              return (
                <button
                  key={transition.key}
                  type="button"
                  className={`${styles.node} ${styles[transition.className]} ${isActive ? styles.active : ""}`.trim()}
                  onClick={() => handleTransitionSelect(transition.key)}
                  aria-label={transition.label}
                  aria-pressed={isActive}
                  aria-controls={panelId}
                >
                  <span className={styles.srOnly}>{transition.label}</span>
                </button>
              );
            })}
          </div>

          <p className={`${styles.introHint} ${activeEntry ? styles.introHintHidden : ""}`.trim()}>
            <span>Select a ring or transition node to explore</span>
          </p>

          <div
            id={panelId}
            className={`${styles.panel} ${activeEntry ? styles.panelVisible : ""}`.trim()}
            aria-live="polite"
            aria-label="Compression Path details"
          >
            <button
              type="button"
              className={styles.closePanel}
              onClick={() => setActiveSelection(null)}
              aria-label="Close details panel"
            >
              ×
            </button>
            {activeEntry ? (
              <div className={styles.panelInner}>
                <div className={styles.panelTitle}>{activeEntry.title}</div>
                <p
                  className={styles.panelContent}
                  dangerouslySetInnerHTML={{ __html: activeEntry.content }}
                />
                <div className={styles.panelMeta}>{activeEntry.meta}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
