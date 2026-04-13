"use client";

import { useMemo, useState } from "react";
import styles from "./PracticeMap.module.css";

type NodeKind = "pillar" | "bridge" | "project";

type MapNode = {
  id: string;
  label: string;
  shortLabel?: string;
  kind: NodeKind;
  x: number;
  y: number;
  href?: string;
  blurb: string;
  meta: string;
};

type MapLink = {
  from: string;
  to: string;
};

const nodes: MapNode[] = [
  {
    id: "music",
    label: "Music",
    kind: "pillar",
    x: 16,
    y: 20,
    blurb: "Music is the oldest thread here. It is where questions about tools, expression, and learning first became concrete.",
    meta: "Practice pillar",
  },
  {
    id: "ux",
    label: "UX",
    kind: "pillar",
    x: 78,
    y: 14,
    blurb: "UX is the discipline that forces instinct into evidence: what people notice, what they miss, and where systems fail them.",
    meta: "Practice pillar",
  },
  {
    id: "ai",
    label: "AI",
    kind: "pillar",
    x: 58,
    y: 82,
    blurb: "AI makes the design question harder and more interesting. Once the tool starts acting, trust becomes part of the product.",
    meta: "Practice pillar",
  },
  {
    id: "trust",
    label: "Trust",
    kind: "bridge",
    x: 48,
    y: 34,
    blurb: "The center of the map: how much agency should a system have, and what does it owe the person using it?",
    meta: "Bridge concept",
  },
  {
    id: "research",
    label: "Research",
    kind: "bridge",
    x: 31,
    y: 56,
    blurb: "Research is how instinct earns the right to become a claim.",
    meta: "Bridge concept",
  },
  {
    id: "learning",
    label: "Learning",
    kind: "bridge",
    x: 74,
    y: 52,
    blurb: "Again and again the work returns to learning: onboarding, creative confidence, interpretation, memory.",
    meta: "Bridge concept",
  },
  {
    id: "clarence",
    label: "Clarence",
    kind: "project",
    x: 41,
    y: 72,
    href: "/portfolio/clarence",
    blurb: "A persistent AI collaborator built around memory, orchestration, and the problem of calibrated autonomy.",
    meta: "AI systems design · case study",
  },
  {
    id: "ableton",
    label: "Ableton",
    kind: "project",
    x: 24,
    y: 34,
    href: "/portfolio/ableton-evaluation-suite",
    blurb: "A UX evaluation suite shaped by years inside the ecosystem, focused on where expert tools stop welcoming newcomers.",
    meta: "UX research · case study",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    shortLabel: "Access",
    kind: "project",
    x: 70,
    y: 30,
    href: "/portfolio/accessibility-audit",
    blurb: "Accessibility is not a side constraint. It is a direct test of whether a system can actually meet people where they are.",
    meta: "Accessibility research · case study",
  },
  {
    id: "sensorsynth",
    label: "SensorSynth FM",
    shortLabel: "SensorSynth",
    kind: "project",
    x: 18,
    y: 78,
    href: "/portfolio/sensorsynth",
    blurb: "An iPad FM synthesizer that treats sensors and environment as expressive input, not background data.",
    meta: "Active build · iOS music tool",
  },
];

const links: MapLink[] = [
  { from: "music", to: "ableton" },
  { from: "music", to: "sensorsynth" },
  { from: "music", to: "research" },
  { from: "ux", to: "accessibility" },
  { from: "ux", to: "trust" },
  { from: "ux", to: "learning" },
  { from: "ai", to: "clarence" },
  { from: "ai", to: "trust" },
  { from: "ai", to: "learning" },
  { from: "trust", to: "clarence" },
  { from: "trust", to: "accessibility" },
  { from: "research", to: "ableton" },
  { from: "research", to: "clarence" },
  { from: "research", to: "sensorsynth" },
  { from: "learning", to: "ableton" },
  { from: "learning", to: "accessibility" },
  { from: "learning", to: "sensorsynth" },
];

const defaultNodeId = "trust";

function classForNode(kind: NodeKind) {
  if (kind === "pillar") return styles.nodePillar;
  if (kind === "bridge") return styles.nodeBridge;
  return styles.nodeProject;
}

export default function PracticeMap() {
  const [activeId, setActiveId] = useState(defaultNodeId);

  const activeNode = useMemo(
    () => nodes.find((node) => node.id === activeId) ?? nodes[0],
    [activeId]
  );

  const connectedIds = useMemo(() => {
    const ids = new Set<string>([activeNode.id]);
    for (const link of links) {
      if (link.from === activeNode.id) ids.add(link.to);
      if (link.to === activeNode.id) ids.add(link.from);
    }
    return ids;
  }, [activeNode.id]);

  return (
    <section className={styles.shell} aria-label="Interactive practice map">
      <div className={styles.frame}>
        <div className={styles.header}>
          <span className={styles.kicker}>Field Map</span>
          <p className={styles.lede}>
            Three recurring concerns run through the work: expression, understanding, and trust. Music, UX, and AI are where they take form.
          </p>
        </div>

        <div className={styles.canvasWrap}>
          <svg
            className={styles.linksLayer}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {links.map((link) => {
              const from = nodes.find((node) => node.id === link.from);
              const to = nodes.find((node) => node.id === link.to);
              if (!from || !to) return null;
              const highlighted = from.id === activeNode.id || to.id === activeNode.id;
              return (
                <line
                  key={`${link.from}-${link.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={highlighted ? styles.linkActive : styles.link}
                />
              );
            })}
          </svg>

          <div className={styles.glowOne} aria-hidden="true" />
          <div className={styles.glowTwo} aria-hidden="true" />

          {nodes.map((node) => {
            const isActive = node.id === activeNode.id;
            const isConnected = connectedIds.has(node.id);
            const sharedProps = {
              className: [
                styles.node,
                classForNode(node.kind),
                isActive ? styles.nodeActive : "",
                isConnected ? styles.nodeConnected : styles.nodeMuted,
              ]
                .filter(Boolean)
                .join(" "),
              style: {
                left: `${node.x}%`,
                top: `${node.y}%`,
              },
              onMouseEnter: () => setActiveId(node.id),
              onFocus: () => setActiveId(node.id),
            };

            const label = node.shortLabel ?? node.label;

            if (node.href) {
              return (
                <a
                  key={node.id}
                  href={node.href}
                  {...sharedProps}
                  aria-label={`${node.label}. ${node.meta}. ${node.blurb}`}
                >
                  <span>{label}</span>
                </a>
              );
            }

            return (
              <button
                key={node.id}
                type="button"
                {...sharedProps}
                aria-pressed={isActive}
                aria-label={`${node.label}. ${node.meta}. ${node.blurb}`}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.panel}>
          <div>
            <span className={styles.panelMeta}>{activeNode.meta}</span>
            <h2 className={styles.panelTitle}>{activeNode.label}</h2>
            <p className={styles.panelCopy}>{activeNode.blurb}</p>
          </div>

          <div className={styles.panelActions}>
            {activeNode.href ? (
              <a href={activeNode.href} className={styles.panelLink}>
                Open {activeNode.label} →
              </a>
            ) : (
              <span className={styles.panelHint}>Hover or tap to follow the throughline.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
