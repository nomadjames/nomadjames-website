"use client";

import { useEffect, useRef, useState } from "react";

interface PretextTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

interface CharPosition {
  char: string;
  x: number;
  y: number;
  lineIndex: number;
}

export default function PretextTitle({
  text,
  className,
  as: Tag = "h1",
}: PretextTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chars, setChars] = useState<CharPosition[]>([]);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const style = getComputedStyle(el);
      const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.1;
      const maxWidth = el.clientWidth;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = font;

      // Split on <br> markers (we use \n in the text prop)
      const lines = text.split("\n");
      const positions: CharPosition[] = [];
      let globalLineIndex = 0;

      for (const line of lines) {
        // Word-wrap each line segment
        const words = line.split(" ");
        let currentLine = "";
        let lineX = 0;

        for (let w = 0; w < words.length; w++) {
          const testLine = currentLine ? currentLine + " " + words[w] : words[w];
          const metrics = ctx.measureText(testLine);

          if (metrics.width > maxWidth && currentLine) {
            // Emit current line characters
            emitLine(currentLine, lineX, globalLineIndex, positions, ctx);
            globalLineIndex++;
            currentLine = words[w];
            lineX = 0;
          } else {
            currentLine = testLine;
          }
        }

        if (currentLine) {
          emitLine(currentLine, lineX, globalLineIndex, positions, ctx);
          globalLineIndex++;
        }
      }

      setChars(positions);
      setReady(true);

      // Trigger reveal on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setRevealed(true));
      });
    };

    function emitLine(
      line: string,
      _startX: number,
      lineIndex: number,
      positions: CharPosition[],
      ctx: CanvasRenderingContext2D
    ) {
      let x = 0;
      for (const char of line) {
        positions.push({ char, x, y: 0, lineIndex });
        x += ctx.measureText(char).width;
      }
    }

    // Wait for fonts to load before measuring
    document.fonts.ready.then(measure);

    const resizeObserver = new ResizeObserver(() => {
      setReady(false);
      setRevealed(false);
      measure();
    });
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [text]);

  // Render hidden measurer + animated characters
  return (
    <div style={{ position: "relative" }}>
      {/* Invisible reference element for font/size measurement */}
      <Tag
        ref={containerRef}
        className={className}
        style={{
          visibility: ready ? "hidden" : "visible",
          position: ready ? "absolute" : "relative",
          pointerEvents: "none",
        }}
        aria-hidden={ready}
      >
        {text.split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </Tag>

      {/* Animated characters */}
      {ready && (
        <Tag className={className} aria-label={text.replace("\n", " ")}>
          {(() => {
            let charIndex = 0;
            const lineGroups: CharPosition[][] = [];

            for (const c of chars) {
              if (!lineGroups[c.lineIndex]) lineGroups[c.lineIndex] = [];
              lineGroups[c.lineIndex].push(c);
            }

            return lineGroups.map((lineChars, lineIdx) => (
              <span
                key={lineIdx}
                style={{ display: "block" }}
                aria-hidden="true"
              >
                {lineChars.map((c) => {
                  const i = charIndex++;
                  const delay = i * 18;
                  return (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        transform: revealed
                          ? "translateY(0)"
                          : "translateY(0.15em)",
                        opacity: revealed ? 1 : 0,
                        transition: `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 0.35s ease ${delay}ms`,
                        whiteSpace: c.char === " " ? "pre" : undefined,
                      }}
                    >
                      {c.char}
                    </span>
                  );
                })}
              </span>
            ));
          })()}
        </Tag>
      )}
    </div>
  );
}
