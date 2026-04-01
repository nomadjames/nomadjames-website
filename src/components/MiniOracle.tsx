"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./MiniOracle.module.css";

/* ── Hexagram data (all 64) ──────────────────────────── */

interface HexagramData {
  name: string;
  chinese: string;
}

const HEXAGRAMS: Record<string, HexagramData> = {
  "111111": { name: "The Creative", chinese: "\u4E7E" },
  "000000": { name: "The Receptive", chinese: "\u5764" },
  "100010": { name: "Difficulty at the Beginning", chinese: "\u5C6F" },
  "010001": { name: "Youthful Folly", chinese: "\u8499" },
  "111010": { name: "Waiting", chinese: "\u9700" },
  "010111": { name: "Conflict", chinese: "\u8BBC" },
  "010000": { name: "The Army", chinese: "\u5E08" },
  "000010": { name: "Holding Together", chinese: "\u6BD4" },
  "111011": { name: "Small Taming", chinese: "\u5C0F\u755C" },
  "110111": { name: "Treading", chinese: "\u5C65" },
  "111000": { name: "Peace", chinese: "\u6CF0" },
  "000111": { name: "Standstill", chinese: "\u5426" },
  "101111": { name: "Fellowship", chinese: "\u540C\u4EBA" },
  "111101": { name: "Great Possession", chinese: "\u5927\u6709" },
  "001000": { name: "Modesty", chinese: "\u8C26" },
  "000100": { name: "Enthusiasm", chinese: "\u8C6B" },
  "100110": { name: "Following", chinese: "\u968F" },
  "011001": { name: "Work on the Decayed", chinese: "\u86C5" },
  "110000": { name: "Approach", chinese: "\u4E34" },
  "000011": { name: "Contemplation", chinese: "\u89C2" },
  "100101": { name: "Biting Through", chinese: "\u5653\u55D1" },
  "101001": { name: "Grace", chinese: "\u8D32" },
  "000001": { name: "Splitting Apart", chinese: "\u5265" },
  "100000": { name: "Return", chinese: "\u590D" },
  "100111": { name: "Innocence", chinese: "\u65E0\u599E" },
  "111001": { name: "Great Taming", chinese: "\u5927\u755C" },
  "100001": { name: "Nourishment", chinese: "\u9890" },
  "011110": { name: "Great Preponderance", chinese: "\u5927\u8FC7" },
  "010010": { name: "The Abysmal", chinese: "\u574E" },
  "101101": { name: "The Clinging", chinese: "\u79BB" },
  "001110": { name: "Influence", chinese: "\u54B8" },
  "011100": { name: "Duration", chinese: "\u6052" },
  "001111": { name: "Retreat", chinese: "\u9041" },
  "111100": { name: "Great Power", chinese: "\u5927\u58EE" },
  "000101": { name: "Progress", chinese: "\u664B" },
  "101000": { name: "Darkening of the Light", chinese: "\u660E\u5937" },
  "101011": { name: "The Family", chinese: "\u5BB6\u4EBA" },
  "110101": { name: "Opposition", chinese: "\u777D" },
  "001010": { name: "Obstruction", chinese: "\u8E47" },
  "010100": { name: "Deliverance", chinese: "\u89E3" },
  "110001": { name: "Decrease", chinese: "\u635F" },
  "100011": { name: "Increase", chinese: "\u76CA" },
  "111110": { name: "Breakthrough", chinese: "\u592C" },
  "011111": { name: "Coming to Meet", chinese: "\u59E4" },
  "000110": { name: "Gathering Together", chinese: "\u8403" },
  "011000": { name: "Pushing Upward", chinese: "\u5347" },
  "010110": { name: "Oppression", chinese: "\u56F0" },
  "011010": { name: "The Well", chinese: "\u4E95" },
  "101110": { name: "Revolution", chinese: "\u9769" },
  "011101": { name: "The Cauldron", chinese: "\u9F0E" },
  "100100": { name: "The Arousing", chinese: "\u9707" },
  "001001": { name: "Keeping Still", chinese: "\u826E" },
  "001011": { name: "Development", chinese: "\u6E10" },
  "110100": { name: "The Marrying Maiden", chinese: "\u5F52\u59B9" },
  "101100": { name: "Abundance", chinese: "\u4E30" },
  "001101": { name: "The Wanderer", chinese: "\u65C5" },
  "011011": { name: "The Gentle", chinese: "\u5DFD" },
  "110110": { name: "The Joyous", chinese: "\u5151" },
  "010011": { name: "Dispersion", chinese: "\u6DA3" },
  "110010": { name: "Limitation", chinese: "\u8282" },
  "110011": { name: "Inner Truth", chinese: "\u4E2D\u5B5A" },
  "001100": { name: "Small Preponderance", chinese: "\u5C0F\u8FC7" },
  "101010": { name: "After Completion", chinese: "\u65E2\u6D4E" },
  "010101": { name: "Before Completion", chinese: "\u672A\u6D4E" },
};

const OBLIQUE_STRATEGIES = [
  "Honor thy error as a hidden intention",
  "Use an old idea",
  "What would your closest friend do?",
  "Emphasize differences",
  "Do nothing for as long as possible",
  "Breathe more deeply",
  "Use fewer notes",
  "Look at the order in which you do things",
  "Change instrument roles",
  "Discover the recipes you are using and abandon them",
  "Humanize something free of error",
  "What mistakes did you make last time?",
  "Remove specifics and convert to ambiguities",
  "Think of the radio",
  "Ask your body",
  "Turn it upside down",
  "Go slowly all the way round the outside",
  "Don\u2019t be frightened of clich\u00e9s",
  "What is the reality of the situation?",
  "Simple subtraction",
  "Retrace your steps",
  "The most important thing is the thing most easily forgotten",
  "Don\u2019t be afraid of things because they\u2019re easy to do",
  "Define an area as \u2018safe\u2019 and use it as an anchor",
  "Water",
  "Repetition is a form of change",
  "Give way to your worst impulse",
  "Abandon normal instruments",
  "Make a sudden, destructive unpredictable action; incorporate",
  "Lowest common denominator",
  "Only one element of each kind",
  "Is there something missing?",
  "Accept advice",
  "Tidy up",
  "State the problem in words as clearly as possible",
];

/* ── Hexagram line rendering ─────────────────────────── */

interface HexLine {
  solid: boolean;
  changing: boolean;
}

function tossCoinLine(): HexLine {
  let sum = 0;
  for (let i = 0; i < 3; i++) sum += Math.random() < 0.5 ? 3 : 2;
  return { solid: sum === 7 || sum === 9, changing: sum === 6 || sum === 9 };
}

function generateHexagram(): HexLine[] {
  return Array.from({ length: 6 }, () => tossCoinLine());
}

const SOLID = "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501";
const BROKEN = "\u2501\u2501\u2501   \u2501\u2501\u2501";

/* ── Component ───────────────────────────────────────── */

interface Reading {
  lines: HexLine[];
  hexagram: HexagramData;
  strategy: string;
}

export default function MiniOracle() {
  const [reading, setReading] = useState<Reading | null>(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [showStrategy, setShowStrategy] = useState(false);
  const [casting, setCasting] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const cast = useCallback(() => {
    clearTimers();
    setVisibleLines(0);
    setShowInfo(false);
    setShowStrategy(false);
    setCasting(true);

    const lines = generateHexagram();
    const key = lines.map((l) => (l.solid ? "1" : "0")).join("");
    const hexagram = HEXAGRAMS[key] || { name: "Unknown", chinese: "?" };
    const strategy =
      OBLIQUE_STRATEGIES[Math.floor(Math.random() * OBLIQUE_STRATEGIES.length)];

    // Brief pause, then reveal
    const t0 = setTimeout(() => {
      setReading({ lines, hexagram, strategy });
      setCasting(false);

      const newTimers: ReturnType<typeof setTimeout>[] = [];
      for (let i = 0; i < 6; i++) {
        newTimers.push(setTimeout(() => setVisibleLines(i + 1), 200 + i * 280));
      }
      newTimers.push(setTimeout(() => setShowInfo(true), 200 + 6 * 280 + 350));
      newTimers.push(
        setTimeout(() => setShowStrategy(true), 200 + 6 * 280 + 900)
      );
      timersRef.current = newTimers;
    }, 800);

    timersRef.current = [t0];
  }, [clearTimers]);

  return (
    <div className={styles.oracle}>
      <div className={styles.inner}>
        {/* Idle / intro */}
        {!reading && !casting && (
          <div className={styles.idle}>
            <p className={styles.intro}>
              I Ching hexagrams meet Brian Eno&apos;s Oblique Strategies.
              A creative divination tool I designed and built.
            </p>
            <button className={styles.castBtn} onClick={cast}>
              Cast the Coins
            </button>
          </div>
        )}

        {/* Casting */}
        {casting && (
          <div className={styles.castingState}>
            <span className={styles.castingDots}>
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        )}

        {/* Reading */}
        {reading && !casting && (
          <div className={styles.reading}>
            {/* Hexagram lines — bottom to top */}
            <div className={styles.hexLines} aria-label={`Hexagram: ${reading.hexagram.name}`}>
              {[...reading.lines].reverse().map((line, displayIdx) => {
                if (displayIdx >= visibleLines) return null;
                return (
                  <span
                    key={5 - displayIdx}
                    className={`${styles.hexLine} ${line.changing ? styles.hexLineChanging : ""}`}
                  >
                    {line.solid ? SOLID : BROKEN}
                  </span>
                );
              })}
            </div>

            {/* Hexagram name */}
            {showInfo && (
              <div className={styles.hexInfo}>
                <span className={styles.hexChinese}>{reading.hexagram.chinese}</span>
                <span className={styles.hexName}>{reading.hexagram.name}</span>
              </div>
            )}

            {/* Oblique strategy */}
            {showStrategy && (
              <div className={styles.strategy}>
                <span className={styles.strategyLabel}>Oblique Strategy</span>
                <p className={styles.strategyText}>
                  &ldquo;{reading.strategy}&rdquo;
                </p>
              </div>
            )}

            {/* Actions */}
            {showStrategy && (
              <div className={styles.actions}>
                <button className={styles.againBtn} onClick={cast}>
                  Cast Again
                </button>
                <a href="/portfolio/oblique-oracle/demo" className={styles.fullLink}>
                  Full Oracle Demo &rarr;
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
