"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./demo.module.css";
import SmartBackLink from "@/components/SmartBackLink";

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
  "010111": { name: "Conflict", chinese: "讼", upperTrigram: "Heaven", lowerTrigram: "Water" },
  "010000": { name: "The Army", chinese: "师", upperTrigram: "Earth", lowerTrigram: "Water" },
  "000010": { name: "Holding Together", chinese: "比", upperTrigram: "Water", lowerTrigram: "Earth" },
  "111011": { name: "Small Taming", chinese: "小畜", upperTrigram: "Wind", lowerTrigram: "Heaven" },
  "110111": { name: "Treading", chinese: "履", upperTrigram: "Heaven", lowerTrigram: "Lake" },
  "111000": { name: "Peace", chinese: "泰", upperTrigram: "Earth", lowerTrigram: "Heaven" },
  "000111": { name: "Standstill", chinese: "否", upperTrigram: "Heaven", lowerTrigram: "Earth" },
  "101111": { name: "Fellowship", chinese: "同人", upperTrigram: "Heaven", lowerTrigram: "Fire" },
  "111101": { name: "Great Possession", chinese: "大有", upperTrigram: "Fire", lowerTrigram: "Heaven" },
  "001000": { name: "Modesty", chinese: "谦", upperTrigram: "Earth", lowerTrigram: "Mountain" },
  "000100": { name: "Enthusiasm", chinese: "豫", upperTrigram: "Thunder", lowerTrigram: "Earth" },
  "100110": { name: "Following", chinese: "随", upperTrigram: "Lake", lowerTrigram: "Thunder" },
  "011001": { name: "Work on the Decayed", chinese: "蛊", upperTrigram: "Mountain", lowerTrigram: "Wind" },
  "110000": { name: "Approach", chinese: "临", upperTrigram: "Earth", lowerTrigram: "Lake" },
  "000011": { name: "Contemplation", chinese: "观", upperTrigram: "Wind", lowerTrigram: "Earth" },
  "100101": { name: "Biting Through", chinese: "噬嗑", upperTrigram: "Fire", lowerTrigram: "Thunder" },
  "101001": { name: "Grace", chinese: "贲", upperTrigram: "Mountain", lowerTrigram: "Fire" },
  "000001": { name: "Splitting Apart", chinese: "剥", upperTrigram: "Mountain", lowerTrigram: "Earth" },
  "100000": { name: "Return", chinese: "复", upperTrigram: "Earth", lowerTrigram: "Thunder" },
  "100111": { name: "Innocence", chinese: "无妄", upperTrigram: "Heaven", lowerTrigram: "Thunder" },
  "111001": { name: "Great Taming", chinese: "大畜", upperTrigram: "Mountain", lowerTrigram: "Heaven" },
  "100001": { name: "Nourishment", chinese: "颐", upperTrigram: "Mountain", lowerTrigram: "Thunder" },
  "011110": { name: "Great Preponderance", chinese: "大过", upperTrigram: "Lake", lowerTrigram: "Wind" },
  "010010": { name: "The Abysmal", chinese: "坎", upperTrigram: "Water", lowerTrigram: "Water" },
  "101101": { name: "The Clinging", chinese: "离", upperTrigram: "Fire", lowerTrigram: "Fire" },
  "001110": { name: "Influence", chinese: "咸", upperTrigram: "Lake", lowerTrigram: "Mountain" },
  "011100": { name: "Duration", chinese: "恒", upperTrigram: "Thunder", lowerTrigram: "Wind" },
  "001111": { name: "Retreat", chinese: "遁", upperTrigram: "Heaven", lowerTrigram: "Mountain" },
  "111100": { name: "Great Power", chinese: "大壮", upperTrigram: "Thunder", lowerTrigram: "Heaven" },
  "000101": { name: "Progress", chinese: "晋", upperTrigram: "Fire", lowerTrigram: "Earth" },
  "101000": { name: "Darkening of the Light", chinese: "明夷", upperTrigram: "Earth", lowerTrigram: "Fire" },
  "101011": { name: "The Family", chinese: "家人", upperTrigram: "Wind", lowerTrigram: "Fire" },
  "110101": { name: "Opposition", chinese: "睽", upperTrigram: "Fire", lowerTrigram: "Lake" },
  "001010": { name: "Obstruction", chinese: "蹇", upperTrigram: "Water", lowerTrigram: "Mountain" },
  "010100": { name: "Deliverance", chinese: "解", upperTrigram: "Thunder", lowerTrigram: "Water" },
  "110001": { name: "Decrease", chinese: "损", upperTrigram: "Mountain", lowerTrigram: "Lake" },
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
  "001011": { name: "Development", chinese: "渐", upperTrigram: "Wind", lowerTrigram: "Mountain" },
  "110100": { name: "The Marrying Maiden", chinese: "归妹", upperTrigram: "Thunder", lowerTrigram: "Lake" },
  "101100": { name: "Abundance", chinese: "丰", upperTrigram: "Thunder", lowerTrigram: "Fire" },
  "001101": { name: "The Wanderer", chinese: "旅", upperTrigram: "Fire", lowerTrigram: "Mountain" },
  "011011": { name: "The Gentle", chinese: "巽", upperTrigram: "Wind", lowerTrigram: "Wind" },
  "110110": { name: "The Joyous", chinese: "兑", upperTrigram: "Lake", lowerTrigram: "Lake" },
  "010011": { name: "Dispersion", chinese: "涣", upperTrigram: "Wind", lowerTrigram: "Water" },
  "110010": { name: "Limitation", chinese: "节", upperTrigram: "Water", lowerTrigram: "Lake" },
  "110011": { name: "Inner Truth", chinese: "中孚", upperTrigram: "Wind", lowerTrigram: "Lake" },
  "001100": { name: "Small Preponderance", chinese: "小过", upperTrigram: "Thunder", lowerTrigram: "Mountain" },
  "101010": { name: "After Completion", chinese: "既济", upperTrigram: "Water", lowerTrigram: "Fire" },
  "010101": { name: "Before Completion", chinese: "未济", upperTrigram: "Fire", lowerTrigram: "Water" },
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
  value: number;
  solid: boolean;
  changing: boolean;
}

function tossCoinLine(): HexagramLine {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += Math.random() < 0.5 ? 3 : 2;
  }
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

/* ── Atmospheric background elements ─────────────────── */

/* Elder Futhark runes (left column) */
const LEFT_RUNES = [
  "\u16A0", // ᚠ Fehu — wealth, abundance
  "\u16A2", // ᚢ Uruz — strength, power
  "\u16A8", // ᚨ Ansuz — god, Odin
  "\u16B1", // ᚱ Raido — journey, ride
  "\u16B7", // ᚷ Gebo — gift, exchange
  "\u16C1", // ᛁ Isa — ice,停滞
  "\u16C7", // ᛇ Eiwaz — yew, death/transformation
  "\u16D2", // ᛒ Berkano — birch, birth
  "\u16D6", // ᛖ Ehwaz — horse, partnership
  "\u16DA", // ᛚ Laguz — water, flow
  "\u16DC", // ᛜ Ingwaz — grain, fertility
  "\u16DF", // ᛟ Othala — homeland, heritage
];

/* Chinese / mystical characters (right column) */
const RIGHT_CHARS = [
  "\u4E00", // 一 — one, unity
  "\u4E8C", // 二 — two, duality
  "\u4E09", // 三 — three, trinity
  "\u56DB", // 四 — four, elements
  "\u4E94", // 五 — five, change
  "\u516B", // 八 — eight, fortune
  "\u4E5D", // 九 — nine, completion
  "\u5341", // 十 — ten, full circle
  "\u5317", // 北 — north, winter
  "\u5357", // 南 — south, summer
  "\u4E1C", // 东 — east, dawn
  "\u897F", // 西 — west, dusk
  "\u4E2D", // 中 — center, void
  "\u9633", // 阳 — yang, light
  "\u9634", // 阴 — yin, shadow
  "\u5149", // 光 — light
  "\u6697", // 暗 — darkness
  "\u547D", // 命 — fate, destiny
  "\u8A00", // 言 — word, utterance
  "\u9053", // 道 — the Way
  "\u5929", // 天 — heaven
  "\u5730", // 地 — earth
];

/* ── Synthesis fallback ───────────────────────────────── */

async function fetchFallbackSynthesis(
  hexagramName: string,
  strategy: string,
  question: string
): Promise<string> {
  try {
    const res = await fetch("/data/oracle-bank.json");
    if (res.ok) {
      const bank: Array<{ hexagram?: string; text: string }> = await res.json();
      const match = bank.find(
        (e) =>
          e.hexagram &&
          hexagramName.toLowerCase().includes(e.hexagram.toLowerCase())
      );
      if (match) return match.text;
      return bank[Math.floor(Math.random() * bank.length)].text;
    }
  } catch { /* silent */ }

  return generateLocalSynthesis(hexagramName, strategy, question);
}

function generateLocalSynthesis(
  hexagramName: string,
  strategy: string,
  _question: string
): string {
  const syntheses = [
    `The hexagram ${hexagramName} speaks to the conditions already present in your situation. You did not arrive here by accident. The pattern was forming before you asked the question.\n\nThe strategy "${strategy}" is not advice. It is a mirror held at an angle you have been avoiding. Consider what changes if you stop trying to solve this and instead let the solution announce itself.\n\nThe oracle does not predict. It reveals what you already know but have not yet admitted.`,
    `${hexagramName} describes a moment of transition. The ground has been shifting beneath you for some time. This reading only makes it legible.\n\n"${strategy}": sit with this. Not as instruction, but as a lens. What does your situation look like through it? What becomes visible that was hidden before?\n\nThe coins do not lie. They create a space where truth can surface on its own terms.`,
    `There is a quality to ${hexagramName} that resists easy interpretation. That resistance is the point. The hexagram is not a fortune. It is a field of meaning that you must walk through yourself.\n\nThe oblique strategy, "${strategy}", arrives as a companion for that walk. Not a map. Not a destination. A way of seeing.\n\nYour question matters less than your willingness to remain in uncertainty. The oracle's gift is not clarity. It is the courage to stay in the question.`,
    `${hexagramName}. Three thousand years of accumulated reflection stand behind these lines. The situations described, uncertainty, transition, the need for right action, have not changed.\n\n"${strategy}" intersects your question at an unexpected angle. Follow that angle. The expected angles have already failed you, or you would not be here.\n\nThis is not mysticism. This is structured reflection wearing the mask of divination. The mask is the point.`,
    `${hexagramName}. The ancient text describes this as a condition, not a verdict. Conditions change. But first they must be seen clearly, without the distortion of wanting them to be other than they are.\n\n"${strategy}": this is the lateral move. The step sideways when forward and backward both feel impossible.\n\nWhat you asked about is already in motion. The reading does not change its trajectory. It changes yours.`,
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

  // Typewriter
  useEffect(() => {
    if (!showSynthesis || !reading) return;
    const text = reading.synthesis;
    if (typedChars >= text.length) {
      setTypingDone(true);
      return;
    }
    typingRef.current = setTimeout(() => setTypedChars((c) => c + 1), 28);
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [showSynthesis, typedChars, reading]);

  // Hexagram reveal sequence
  useEffect(() => {
    if (phase !== "reading" || !reading) return;
    const lineTimers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < 6; i++) {
      lineTimers.push(
        setTimeout(() => setVisibleLines(i + 1), 500 + i * 400)
      );
    }
    lineTimers.push(
      setTimeout(() => setShowInfo(true), 500 + 6 * 400 + 500)
    );
    lineTimers.push(
      setTimeout(() => setShowStrategy(true), 500 + 6 * 400 + 1200)
    );
    lineTimers.push(
      setTimeout(() => setShowSynthesis(true), 500 + 6 * 400 + 2000)
    );
    return () => lineTimers.forEach(clearTimeout);
  }, [phase, reading]);

  const consult = useCallback(async () => {
    if (!question.trim()) return;
    setPhase("loading");

    const lines = generateHexagram();
    const hexagram = lookupHexagram(lines);
    const strategy =
      OBLIQUE_STRATEGIES[
        Math.floor(Math.random() * OBLIQUE_STRATEGIES.length)
      ];

    let synthesis = "";
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
          if (!data.fallback && data.text) synthesis = data.text;
        }
      } catch { /* fall through */ }
    }

    if (!synthesis) {
      synthesis = await fetchFallbackSynthesis(
        hexagram.name,
        strategy,
        question.trim()
      );
    }

    await new Promise((r) => setTimeout(r, 1800));

    setReading({
      lines,
      hexagram,
      strategy,
      synthesis,
      question: question.trim(),
    });
    setPhase("reading");
  }, [question]);

  return (
    <div className={styles.page}>
      {/* Layered atmospheric overlays */}
      <div className={styles.scanlines} />
      <div className={styles.vignette} />
      <div className={styles.noise} />

      {/* Background atmosphere — floating runes and sacred geometry */}
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.atmoLeft}>
          {LEFT_RUNES.map((r, i) => (
            <span
              key={i}
              className={
                i % 3 === 0
                  ? styles.runeEmerald
                  : i % 3 === 1
                    ? styles.runeRuby
                    : styles.runeGold
              }
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {r}
            </span>
          ))}
        </div>

        {/* Sacred geometry center mark */}
        <div className={styles.sacredCenter}>
          <div className={styles.sacredOuter}>&#x25CB;</div>
          <div className={styles.sacredMiddle}>&#x25C9;</div>
          <div className={styles.sacredInner}>&#x25CE;</div>
          <div className={styles.sacredDot} />
        </div>

        <div className={styles.atmoRight}>
          {RIGHT_CHARS.map((r, i) => (
            <span
              key={i}
              className={
                i % 3 === 0
                  ? styles.runeEmerald
                  : i % 3 === 1
                    ? styles.runeRuby
                    : styles.runeGold
              }
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* Temple frame — sacred border */}
      <div className={styles.templeFrame} aria-hidden="true">
        {/* Top border with eye motif */}
        <div className={styles.templeTop}>
          <span className={styles.borderLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
          <span className={styles.templeEye}>&#x1F54D;</span>
          <span className={styles.borderLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
        </div>
        {/* Corner ornaments */}
        <span className={styles.cornerTL}>&#x2610;</span>
        <span className={styles.cornerTR}>&#x2610;</span>
        <span className={styles.cornerBL}>&#x2610;</span>
        <span className={styles.cornerBR}>&#x2610;</span>
        {/* Side pillars */}
        <span className={styles.pillarLeft}>&#x2503;</span>
        <span className={styles.pillarRight}>&#x2503;</span>
      </div>

      {/* Main content */}
      <div className={styles.container}>
        {/* Back link */}
        <SmartBackLink fallbackHref="/portfolio/oblique-oracle" className={styles.backLink}>
          &#x2190; Return to the Outer Court
        </SmartBackLink>

        {/* Oracle header */}
        <header className={styles.oracleHeader}>
          {/* All-seeing eye above title */}
          <div className={styles.eyeOfProvidence} aria-hidden="true">
            <div className={styles.eyeTriangle}>&#x25B3;</div>
            <div className={styles.eyeOrb}>&#x25CE;</div>
            <div className={styles.eyePupil} />
            <div className={styles.eyeRays} />
          </div>

          <div className={styles.headerSep}>
            <span className={styles.sepRune}>&#x2726;</span>
            <span className={styles.sepLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
            <span className={styles.sepRune}>&#x2726;</span>
            <span className={styles.sepLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
            <span className={styles.sepRune}>&#x2726;</span>
          </div>

          <h1 className={styles.oracleTitle}>
            <span className={styles.titlePre}>The</span>
            <span className={styles.titleMain}>Oblique Oracle</span>
          </h1>

          <div className={styles.headerSep}>
            <span className={styles.sepRune}>&#x2726;</span>
            <span className={styles.sepLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
            <span className={styles.sepRune}>&#x2726;</span>
            <span className={styles.sepLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
            <span className={styles.sepRune}>&#x2726;</span>
          </div>

          <p className={styles.oracleSubtitle}>
            易经 · The I Ching · 八八六十四卦
          </p>
          <p className={styles.oracleSubtitleTwo}>
            &#x2726; Oblique Strategies · Brian Eno · Creative Divination &#x2726;
          </p>

          {/* Ouroboros divider */}
          <div className={styles.ouroboros} aria-hidden="true">
            &#x229B; &#x2606; &#x2727; &#x2606; &#x229B; &#x2606; &#x2727; &#x2606; &#x229B;
          </div>
        </header>

        {/* ══ INPUT PHASE ══ */}
        {phase === "input" && (
          <div className={styles.inputSection}>
            <div className={styles.templeDivider}>
              <span className={styles.divRune}>&#x2726;</span>
              <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
              <span className={styles.divSymbol}>&#x25C6;</span>
              <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
              <span className={styles.divRune}>&#x2726;</span>
            </div>

            <div className={styles.invocationLabel}>
              &#x1F54D; State your question to the Oracle &#x1F54D;
            </div>

            <p className={styles.prompt}>
              The ancient pattern awaits. Ask what you must know.
            </p>

            {/* Input with temple border */}
            <div className={styles.inputTemple}>
              <div className={styles.inputCornerTL} aria-hidden="true">&#x250C;</div>
              <div className={styles.inputCornerTR} aria-hidden="true">&#x2510;</div>
              <div className={styles.inputCornerBL} aria-hidden="true">&#x2514;</div>
              <div className={styles.inputCornerBR} aria-hidden="true">&#x2518;</div>
              <textarea
                className={styles.questionInput}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Speak your question into the void..."
                rows={3}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    consult();
                  }
                }}
              />
            </div>

            <button
              className={styles.consultButton}
              onClick={consult}
              disabled={!question.trim()}
            >
              <span className={styles.btnSymbol}>&#x2727;</span>
              Cast the Coins
              <span className={styles.btnSymbol}>&#x2727;</span>
            </button>

            <div className={styles.coinHint}>
              &#x2696; Three coins · Six casts · One truth &#x2696;
            </div>
          </div>
        )}

        {/* ══ LOADING PHASE ══ */}
        {phase === "loading" && (
          <div className={styles.loading}>
            <div className={styles.loadingSymbols} aria-hidden="true">
              <span className={styles.loadingYin}>&#x262F;</span>
              <span className={styles.loadingYang}>&#x2625;</span>
              <span className={styles.loadingYin}>&#x262F;</span>
            </div>
            <div className={styles.loadingTitle}>The Oracle Contemplates</div>
            <div className={styles.loadingSub}>
              <span className={styles.loadingDots}>
                <span>.</span><span>.</span><span>.</span>
              </span>
              <span className={styles.loadingSubText}>Consulting the ancient patterns</span>
            </div>
            <div className={styles.loadingSymbols} aria-hidden="true">
              <span className={styles.loadingYin}>&#x262F;</span>
              <span className={styles.loadingYang}>&#x2625;</span>
              <span className={styles.loadingYin}>&#x262F;</span>
            </div>
          </div>
        )}

        {/* ══ READING PHASE ══ */}
        {phase === "reading" && reading && (
          <div className={styles.reading}>
            {/* Question */}
            <div className={styles.questionEcho}>
              <div className={styles.questionLabel}>
                <span className={styles.qLabelIcon}>&#x1F54D;</span>
                <span>The Question Put to the Oracle</span>
                <span className={styles.qLabelIcon}>&#x1F54D;</span>
              </div>
              <p className={styles.questionEchoText}>
                &ldquo;{reading.question}&rdquo;
              </p>
            </div>

            {/* Hexagram */}
            <div className={styles.hexagramSection}>
              {/* Hexagram art — lines revealed bottom to top */}
              <div className={styles.hexagramArt}>
                {[...reading.lines].reverse().map((line, displayIdx) => {
                  const lineIdx = 5 - displayIdx;
                  if (displayIdx >= visibleLines) return null;
                  return (
                    <span
                      key={lineIdx}
                      className={
                        line.changing
                          ? styles.hexLineChanging
                          : line.solid
                            ? styles.hexLineYang
                            : styles.hexLineYin
                      }
                      style={{ animationDelay: `${displayIdx * 0.06}s` }}
                    >
                      {line.solid ? SOLID_LINE : BROKEN_LINE}
                    </span>
                  );
                })}
              </div>

              {/* Hexagram info revealed after lines */}
              {showInfo && (
                <div className={styles.hexagramInfo}>
                  <div className={styles.hexChinese}>{reading.hexagram.chinese}</div>
                  <div className={styles.hexName}>{reading.hexagram.name}</div>
                  <div className={styles.hexTrigrams}>
                    <span className={styles.trigramUpper}>
                      {reading.hexagram.upperTrigram}
                    </span>
                    <span className={styles.trigramOver}>&#x2022;</span>
                    <span className={styles.trigramLower}>
                      {reading.hexagram.lowerTrigram}
                    </span>
                  </div>
                  {reading.lines.some((l) => l.changing) && (
                    <div className={styles.changingBadge}>
                      <span className={styles.changingIcon}>&#x2726;</span>
                      <span>Lines in flux</span>
                      <span className={styles.changingIcon}>&#x2726;</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Divider */}
            {showStrategy && (
              <div className={styles.templeDivider}>
                <span className={styles.divRune}>&#x2726;</span>
                <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
                <span className={styles.divSymbol}>&#x25C6;</span>
                <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
                <span className={styles.divRune}>&#x2726;</span>
              </div>
            )}

            {/* Oblique Strategy */}
            {showStrategy && (
              <div className={styles.strategySection}>
                <div className={styles.strategyLabel}>
                  <span className={styles.stratIcon}>&#x2728;</span>
                  <span>Oblique Strategy Drawn</span>
                  <span className={styles.stratIcon}>&#x2728;</span>
                </div>
                <p className={styles.strategyText}>
                  &ldquo;{reading.strategy}&rdquo;
                </p>
              </div>
            )}

            {/* Synthesis */}
            {showSynthesis && (
              <div className={styles.synthesisSection}>
                <div className={styles.templeDivider}>
                  <span className={styles.divRune}>&#x2605;</span>
                  <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
                  <span className={styles.divSymbol}>&#x25C7;</span>
                  <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
                  <span className={styles.divRune}>&#x2605;</span>
                </div>

                <div className={styles.synthesisLabel}>
                  <span className={styles.synthIcon}>&#x2728;</span>
                  <span>The Oracle Speaks</span>
                  <span className={styles.synthIcon}>&#x2728;</span>
                </div>

                {/* Synthesis text with ornate border */}
                <div className={styles.synthesisTemple}>
                  <div className={styles.synthCornerTL} aria-hidden="true">&#x250C;</div>
                  <div className={styles.synthCornerTR} aria-hidden="true">&#x2510;</div>
                  <div className={styles.synthCornerBL} aria-hidden="true">&#x2514;</div>
                  <div className={styles.synthCornerBR} aria-hidden="true">&#x2518;</div>
                  <div className={styles.synthMidTL} aria-hidden="true">&#x252C;</div>
                  <div className={styles.synthMidTR} aria-hidden="true">&#x2524;</div>
                  <div className={styles.synthMidBL} aria-hidden="true">&#x2534;</div>
                  <div className={styles.synthMidBR} aria-hidden="true">&#x251C;</div>
                  <div className={styles.synthText}>
                    {reading.synthesis.slice(0, typedChars)}
                    {!typingDone && <span className={styles.cursor} />}
                  </div>
                </div>
              </div>
            )}

            {/* Footer / reset */}
            {typingDone && (
              <div className={styles.resetSection}>
                <div className={styles.templeDivider}>
                  <span className={styles.divRune}>&#x2726;</span>
                  <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
                  <span className={styles.divSymbol}>&#x25C6;</span>
                  <span className={styles.divLine}>&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;&#x2015;</span>
                  <span className={styles.divRune}>&#x2726;</span>
                </div>
                <button className={styles.resetButton} onClick={resetAll}>
                  <span className={styles.btnSymbol}>&#x2727;</span>
                  Cast Again
                  <span className={styles.btnSymbol}>&#x2727;</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer sigil */}
        <footer className={styles.footer}>
          <div className={styles.footerSigil} aria-hidden="true">
            &#x262F; &#x2726; &#x2625; &#x2726; &#x262F;
          </div>
          <p className={styles.footerText}>
            &#x4E2D;&#x6587;&#x4E5F;&#x9053; &#x66F0; &#x3002;.&nbsp;&nbsp;
            &#x2605; &#x2726; &#x2605;
          </p>
        </footer>
      </div>
    </div>
  );
}
