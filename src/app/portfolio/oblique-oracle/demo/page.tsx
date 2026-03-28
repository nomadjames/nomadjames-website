"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./demo.module.css";

/* ── Config ───────────────────────────────────────────── */

const ORACLE_API = process.env.NEXT_PUBLIC_ORACLE_API || "";

/* ── I Ching hexagram data (all 64) ──────────────────── */

interface HexagramData {
  name: string;
  chinese: string;
  upperTrigram: string;
  lowerTrigram: string;
}

const HEXAGRAMS: Record<string, HexagramData> = {
  "111111": { name: "The Creative", chinese: "乾", upperTrigram: "Heaven", lowerTrigram: "Heaven" },
  "000000": { name: "The Receptive", chinese: "坤", upperTrigram: "Earth", lowerTrigram: "Earth" },
  "100010": { name: "Difficulty at the Beginning", chinese: "屯", upperTrigram: "Water", lowerTrigram: "Thunder" },
  "010001": { name: "Youthful Folly", chinese: "蒙", upperTrigram: "Mountain", lowerTrigram: "Water" },
  "111010": { name: "Waiting", chinese: "需", upperTrigram: "Water", lowerTrigram: "Heaven" },
  "010111": { name: "Conflict", chinese: "訟", upperTrigram: "Heaven", lowerTrigram: "Water" },
  "010000": { name: "The Army", chinese: "師", upperTrigram: "Earth", lowerTrigram: "Water" },
  "000010": { name: "Holding Together", chinese: "比", upperTrigram: "Water", lowerTrigram: "Earth" },
  "111011": { name: "Small Taming", chinese: "小畜", upperTrigram: "Wind", lowerTrigram: "Heaven" },
  "110111": { name: "Treading", chinese: "履", upperTrigram: "Heaven", lowerTrigram: "Lake" },
  "111000": { name: "Peace", chinese: "泰", upperTrigram: "Earth", lowerTrigram: "Heaven" },
  "000111": { name: "Standstill", chinese: "否", upperTrigram: "Heaven", lowerTrigram: "Earth" },
  "101111": { name: "Fellowship", chinese: "同人", upperTrigram: "Heaven", lowerTrigram: "Fire" },
  "111101": { name: "Great Possession", chinese: "大有", upperTrigram: "Fire", lowerTrigram: "Heaven" },
  "001000": { name: "Modesty", chinese: "謙", upperTrigram: "Earth", lowerTrigram: "Mountain" },
  "000100": { name: "Enthusiasm", chinese: "豫", upperTrigram: "Thunder", lowerTrigram: "Earth" },
  "100110": { name: "Following", chinese: "隨", upperTrigram: "Lake", lowerTrigram: "Thunder" },
  "011001": { name: "Work on the Decayed", chinese: "蠱", upperTrigram: "Mountain", lowerTrigram: "Wind" },
  "110000": { name: "Approach", chinese: "臨", upperTrigram: "Earth", lowerTrigram: "Lake" },
  "000011": { name: "Contemplation", chinese: "觀", upperTrigram: "Wind", lowerTrigram: "Earth" },
  "100101": { name: "Biting Through", chinese: "噬嗑", upperTrigram: "Fire", lowerTrigram: "Thunder" },
  "101001": { name: "Grace", chinese: "賁", upperTrigram: "Mountain", lowerTrigram: "Fire" },
  "000001": { name: "Splitting Apart", chinese: "剝", upperTrigram: "Mountain", lowerTrigram: "Earth" },
  "100000": { name: "Return", chinese: "復", upperTrigram: "Earth", lowerTrigram: "Thunder" },
  "100111": { name: "Innocence", chinese: "無妄", upperTrigram: "Heaven", lowerTrigram: "Thunder" },
  "111001": { name: "Great Taming", chinese: "大畜", upperTrigram: "Mountain", lowerTrigram: "Heaven" },
  "100001": { name: "Nourishment", chinese: "頤", upperTrigram: "Mountain", lowerTrigram: "Thunder" },
  "011110": { name: "Great Preponderance", chinese: "大過", upperTrigram: "Lake", lowerTrigram: "Wind" },
  "010010": { name: "The Abysmal", chinese: "坎", upperTrigram: "Water", lowerTrigram: "Water" },
  "101101": { name: "The Clinging", chinese: "離", upperTrigram: "Fire", lowerTrigram: "Fire" },
  "001110": { name: "Influence", chinese: "咸", upperTrigram: "Lake", lowerTrigram: "Mountain" },
  "011100": { name: "Duration", chinese: "恆", upperTrigram: "Thunder", lowerTrigram: "Wind" },
  "001111": { name: "Retreat", chinese: "遯", upperTrigram: "Heaven", lowerTrigram: "Mountain" },
  "111100": { name: "Great Power", chinese: "大壯", upperTrigram: "Thunder", lowerTrigram: "Heaven" },
  "000101": { name: "Progress", chinese: "晉", upperTrigram: "Fire", lowerTrigram: "Earth" },
  "101000": { name: "Darkening of the Light", chinese: "明夷", upperTrigram: "Earth", lowerTrigram: "Fire" },
  "101011": { name: "The Family", chinese: "家人", upperTrigram: "Wind", lowerTrigram: "Fire" },
  "110101": { name: "Opposition", chinese: "睽", upperTrigram: "Fire", lowerTrigram: "Lake" },
  "001010": { name: "Obstruction", chinese: "蹇", upperTrigram: "Water", lowerTrigram: "Mountain" },
  "010100": { name: "Deliverance", chinese: "解", upperTrigram: "Thunder", lowerTrigram: "Water" },
  "110001": { name: "Decrease", chinese: "損", upperTrigram: "Mountain", lowerTrigram: "Lake" },
  "100011": { name: "Increase", chinese: "益", upperTrigram: "Wind", lowerTrigram: "Thunder" },
  "111110": { name: "Breakthrough", chinese: "夬", upperTrigram: "Lake", lowerTrigram: "Heaven" },
  "011111": { name: "Coming to Meet", chinese: "姤", upperTrigram: "Heaven", lowerTrigram: "Wind" },
  "000110": { name: "Gathering Together", chinese: "萃", upperTrigram: "Lake", lowerTrigram: "Earth" },
  "011000": { name: "Pushing Upward", chinese: "升", upperTrigram: "Earth", lowerTrigram: "Wind" },
  "010110": { name: "Oppression", chinese: "困", upperTrigram: "Lake", lowerTrigram: "Water" },
  "011010": { name: "The Well", chinese: "井", upperTrigram: "Water", lowerTrigram: "Wind" },
  "101110": { name: "Revolution", chinese: "革", upperTrigram: "Lake", lowerTrigram: "Fire" },
  "011101": { name: "The Cauldron", chinese: "鼎", upperTrigram: "Fire", lowerTrigram: "Wind" },
  "100100": { name: "The Arousing", chinese: "震", upperTrigram: "Thunder", lowerTrigram: "Thunder" },
  "001001": { name: "Keeping Still", chinese: "艮", upperTrigram: "Mountain", lowerTrigram: "Mountain" },
  "001011": { name: "Development", chinese: "漸", upperTrigram: "Wind", lowerTrigram: "Mountain" },
  "110100": { name: "The Marrying Maiden", chinese: "歸妹", upperTrigram: "Thunder", lowerTrigram: "Lake" },
  "101100": { name: "Abundance", chinese: "豐", upperTrigram: "Thunder", lowerTrigram: "Fire" },
  "001101": { name: "The Wanderer", chinese: "旅", upperTrigram: "Fire", lowerTrigram: "Mountain" },
  "011011": { name: "The Gentle", chinese: "巽", upperTrigram: "Wind", lowerTrigram: "Wind" },
  "110110": { name: "The Joyous", chinese: "兌", upperTrigram: "Lake", lowerTrigram: "Lake" },
  "010011": { name: "Dispersion", chinese: "渙", upperTrigram: "Wind", lowerTrigram: "Water" },
  "110010": { name: "Limitation", chinese: "節", upperTrigram: "Water", lowerTrigram: "Lake" },
  "110011": { name: "Inner Truth", chinese: "中孚", upperTrigram: "Wind", lowerTrigram: "Lake" },
  "001100": { name: "Small Preponderance", chinese: "小過", upperTrigram: "Thunder", lowerTrigram: "Mountain" },
  "101010": { name: "After Completion", chinese: "既濟", upperTrigram: "Water", lowerTrigram: "Fire" },
  "010101": { name: "Before Completion", chinese: "未濟", upperTrigram: "Fire", lowerTrigram: "Water" },
};

/* ── Oblique Strategies ───────────────────────────────── */

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
  "Don't be frightened of clichés",
  "What is the reality of the situation?",
  "Simple subtraction",
  "Retrace your steps",
  "The most important thing is the thing most easily forgotten",
  "Don't be afraid of things because they're easy to do",
  "Define an area as 'safe' and use it as an anchor",
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

/* ── Hexagram line types ──────────────────────────────── */

interface HexagramLine {
  value: number; // 6, 7, 8, 9
  solid: boolean;
  changing: boolean;
}

function tossCoinLine(): HexagramLine {
  // 3 coins: heads=3, tails=2
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += Math.random() < 0.5 ? 3 : 2;
  }
  // sum: 6=old yin (broken, changing), 7=young yang (solid),
  //       8=young yin (broken), 9=old yang (solid, changing)
  return {
    value: sum,
    solid: sum === 7 || sum === 9,
    changing: sum === 6 || sum === 9,
  };
}

function generateHexagram(): HexagramLine[] {
  return Array.from({ length: 6 }, () => tossCoinLine());
}

function hexagramKey(lines: HexagramLine[]): string {
  return lines.map((l) => (l.solid ? "1" : "0")).join("");
}

function lookupHexagram(lines: HexagramLine[]): HexagramData {
  const key = hexagramKey(lines);
  return HEXAGRAMS[key] || { name: "Unknown", chinese: "?", upperTrigram: "?", lowerTrigram: "?" };
}

/* ── ASCII rendering ──────────────────────────────────── */

const SOLID_LINE = "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501";
const BROKEN_LINE = "\u2501\u2501\u2501\u0020\u0020\u0020\u2501\u2501\u2501";

/* ── Fallback synthesis ───────────────────────────────── */

async function fetchFallbackSynthesis(
  hexagramName: string,
  strategy: string,
  question: string
): Promise<string> {
  try {
    const res = await fetch("/data/oracle-bank.json");
    if (res.ok) {
      const bank: Array<{ hexagram?: string; text: string }> = await res.json();
      // Try to find a matching hexagram entry
      const match = bank.find(
        (e) => e.hexagram && hexagramName.toLowerCase().includes(e.hexagram.toLowerCase())
      );
      if (match) return match.text;
      // Otherwise pick random
      return bank[Math.floor(Math.random() * bank.length)].text;
    }
  } catch {
    // Silently fall through
  }

  // Hardcoded final fallback
  return generateLocalSynthesis(hexagramName, strategy, question);
}

function generateLocalSynthesis(
  hexagramName: string,
  strategy: string,
  _question: string
): string {
  const syntheses = [
    `The hexagram ${hexagramName} speaks to the conditions already present in your situation. You did not arrive here by accident. The pattern was forming before you asked the question.\n\nThe strategy "${strategy}" is not advice. It is a mirror held at an angle you have been avoiding. Consider what changes if you stop trying to solve this and instead let the solution announce itself.\n\nThe oracle does not predict. It reveals what you already know but have not yet admitted.`,
    `${hexagramName} describes a moment of transition. Not the dramatic kind — the slow, almost imperceptible kind. The ground has been shifting beneath you for some time. This reading only makes it legible.\n\n"${strategy}" — sit with this. Not as instruction, but as a lens. What does your situation look like through it? What becomes visible that was hidden before?\n\nThe coins do not lie, but they do not tell the truth either. They create a space where truth can surface on its own terms.`,
    `There is a quality to ${hexagramName} that resists easy interpretation. That resistance is the point. The hexagram is not a fortune. It is a field of meaning that you must walk through yourself.\n\nThe oblique strategy — "${strategy}" — arrives as a companion for that walk. Not a map. Not a destination. A way of seeing.\n\nYour question matters less than your willingness to sit with uncertainty. The oracle's gift is not clarity. It is the courage to remain in the question.`,
    `${hexagramName}. The ancient text describes this as a condition, not a verdict. Conditions change. But first they must be seen clearly, without the distortion of wanting them to be other than they are.\n\n"${strategy}" — this is the lateral move. The step sideways when forward and backward both feel impossible. Not escape, but reorientation.\n\nWhat you asked about is already in motion. The reading does not change its trajectory. It changes yours.`,
    `The pattern of ${hexagramName} has appeared. Three thousand years of accumulated reflection stand behind these lines. Not because the ancients were wiser, but because the situations they described — uncertainty, transition, the need for right action — have not changed.\n\n"${strategy}" intersects your question at an unexpected angle. Follow that angle. The expected angles have already failed you, or you would not be here.\n\nThis is not mysticism. This is structured reflection wearing the mask of divination. The mask is the point.`,
  ];
  return syntheses[Math.floor(Math.random() * syntheses.length)];
}

/* ── Component ────────────────────────────────────────── */

type Phase = "input" | "loading" | "reading";

interface ReadingData {
  lines: HexagramLine[];
  hexagram: HexagramData;
  strategy: string;
  synthesis: string;
  question: string;
}

export default function OracleDemo() {
  const [phase, setPhase] = useState<Phase>("input");
  const [question, setQuestion] = useState("");
  const [reading, setReading] = useState<ReadingData | null>(null);

  // Animation state
  const [visibleLines, setVisibleLines] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [showStrategy, setShowStrategy] = useState(false);
  const [showSynthesis, setShowSynthesis] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetAll = useCallback(() => {
    if (typingRef.current) clearTimeout(typingRef.current);
    setPhase("input");
    setQuestion("");
    setReading(null);
    setVisibleLines(0);
    setShowInfo(false);
    setShowStrategy(false);
    setShowSynthesis(false);
    setTypedChars(0);
    setTypingDone(false);
  }, []);

  // Typewriter effect for synthesis
  useEffect(() => {
    if (!showSynthesis || !reading) return;
    const text = reading.synthesis;
    if (typedChars >= text.length) {
      setTypingDone(true);
      return;
    }
    typingRef.current = setTimeout(() => {
      setTypedChars((c) => c + 1);
    }, 30);
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [showSynthesis, typedChars, reading]);

  // Hexagram line animation sequence
  useEffect(() => {
    if (phase !== "reading" || !reading) return;

    // Animate lines appearing one by one (bottom to top display, but array is bottom=0)
    const lineTimers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < 6; i++) {
      lineTimers.push(
        setTimeout(() => setVisibleLines(i + 1), 400 + i * 350)
      );
    }

    // Show hexagram info after all lines
    lineTimers.push(
      setTimeout(() => setShowInfo(true), 400 + 6 * 350 + 300)
    );

    // Show strategy
    lineTimers.push(
      setTimeout(() => setShowStrategy(true), 400 + 6 * 350 + 900)
    );

    // Show synthesis
    lineTimers.push(
      setTimeout(() => setShowSynthesis(true), 400 + 6 * 350 + 1600)
    );

    return () => lineTimers.forEach(clearTimeout);
  }, [phase, reading]);

  const consult = useCallback(async () => {
    if (!question.trim()) return;

    setPhase("loading");

    const lines = generateHexagram();
    const hexagram = lookupHexagram(lines);
    const strategy =
      OBLIQUE_STRATEGIES[Math.floor(Math.random() * OBLIQUE_STRATEGIES.length)];

    let synthesis = "";

    // Try API if configured
    if (ORACLE_API) {
      try {
        const res = await fetch(ORACLE_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: question.trim(),
            hexagram: hexagram.name,
            hexagramChinese: hexagram.chinese,
            upperTrigram: hexagram.upperTrigram,
            lowerTrigram: hexagram.lowerTrigram,
            changingLines: lines
              .map((l, i) => (l.changing ? i + 1 : null))
              .filter(Boolean),
            strategy,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (!data.fallback && data.text) {
            synthesis = data.text;
          }
        }
      } catch {
        // Fall through to fallback
      }
    }

    if (!synthesis) {
      synthesis = await fetchFallbackSynthesis(
        hexagram.name,
        strategy,
        question.trim()
      );
    }

    // Deliberate pause — the oracle contemplates
    await new Promise((r) => setTimeout(r, 1500));

    setReading({ lines, hexagram, strategy, synthesis, question: question.trim() });
    setPhase("reading");
  }, [question]);

  return (
    <div className={styles.page}>
      <div className={styles.scanlines} />

      <div className={styles.container}>
        {/* Back link */}
        <a href="/portfolio/oblique-oracle" className={styles.backLink}>
          &larr; Back to case study
        </a>

        {/* Header */}
        <header className={styles.oracleHeader}>
          <h1 className={styles.oracleTitle}>Oblique Oracle</h1>
          <p className={styles.oracleSubtitle}>
            I Ching &middot; Oblique Strategies &middot; AI Synthesis
          </p>
        </header>

        {/* ── Input Phase ─────────────────────────────── */}
        {phase === "input" && (
          <div className={styles.inputSection}>
            <p className={styles.prompt}>
              What question do you bring to the oracle?
            </p>
            <textarea
              className={styles.questionInput}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              rows={3}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  consult();
                }
              }}
            />
            <button
              className={styles.consultButton}
              onClick={consult}
              disabled={!question.trim()}
            >
              Consult the Oracle
            </button>
          </div>
        )}

        {/* ── Loading Phase ───────────────────────────── */}
        {phase === "loading" && (
          <div className={styles.loading}>
            <p className={styles.loadingText}>
              . . . casting the coins . . .
            </p>
          </div>
        )}

        {/* ── Reading Phase ───────────────────────────── */}
        {phase === "reading" && reading && (
          <div className={styles.reading}>
            {/* Question echo */}
            <div className={styles.questionEcho}>
              <p className={styles.questionEchoLabel}>Your question</p>
              <p className={styles.questionEchoText}>
                &ldquo;{reading.question}&rdquo;
              </p>
            </div>

            {/* Hexagram */}
            <div className={styles.hexagramSection}>
              <div className={styles.hexagramArt}>
                {/* Display top to bottom: line 6 (index 5) to line 1 (index 0) */}
                {[...reading.lines].reverse().map((line, displayIdx) => {
                  const lineIdx = 5 - displayIdx; // actual line number (0-based from bottom)
                  if (displayIdx >= visibleLines) return null;
                  return (
                    <span
                      key={lineIdx}
                      className={
                        line.changing
                          ? styles.hexagramLineChanging
                          : styles.hexagramLine
                      }
                      style={{ animationDelay: `${displayIdx * 0.05}s` }}
                    >
                      {line.solid ? SOLID_LINE : BROKEN_LINE}
                    </span>
                  );
                })}
              </div>

              {showInfo && (
                <div className={styles.hexagramInfo}>
                  <p className={styles.hexagramName}>
                    {reading.hexagram.chinese} {reading.hexagram.name}
                  </p>
                  <p className={styles.hexagramTrigrams}>
                    {reading.hexagram.upperTrigram} over{" "}
                    {reading.hexagram.lowerTrigram}
                  </p>
                </div>
              )}
            </div>

            {/* Divider */}
            {showStrategy && (
              <div className={styles.divider}>---</div>
            )}

            {/* Oblique Strategy */}
            {showStrategy && (
              <div className={styles.strategySection}>
                <p className={styles.strategyLabel}>Oblique Strategy</p>
                <p className={styles.strategyText}>
                  &ldquo;{reading.strategy}&rdquo;
                </p>
              </div>
            )}

            {/* Synthesis */}
            {showSynthesis && (
              <div className={styles.synthesisSection}>
                <p className={styles.synthesisLabel}>Oracle Synthesis</p>
                <div className={styles.synthesisText}>
                  {reading.synthesis.slice(0, typedChars)}
                  {!typingDone && <span className={styles.cursor} />}
                </div>
              </div>
            )}

            {/* Reset button */}
            {typingDone && (
              <div className={styles.resetSection}>
                <button className={styles.resetButton} onClick={resetAll}>
                  Consult Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
