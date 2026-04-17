"use client";

import { useEffect, useRef } from "react";

interface SineWaveHeroProps {
  className?: string;
}

interface Pointer {
  x: number;
  y: number;
  inside: boolean;
  targetStrength: number;
  strength: number;
}

interface Ripple {
  x: number;
  y: number;
  t0: number;
  strength: number;
}

interface EngineState {
  pointer: Pointer;
  ripples: Ripple[];
  phase: number;
  lastT: number;
  w: number;
  h: number;
  dpr: number;
}

interface WaveParams {
  freq: number;
  amp: number;
  speed: number;
  thickness: number;
}

const DEFAULTS: WaveParams = {
  freq: 1.6,
  amp: 0.14,
  speed: 0.55,
  thickness: 1.2,
};

function waveY(
  x: number,
  w: number,
  h: number,
  phase: number,
  params: WaveParams,
  state: { pointer: Pointer; ripples: Ripple[] },
  now: number,
): number {
  const { freq, amp } = params;
  const { pointer, ripples } = state;
  const baseY = h / 2;
  const waveAmp = h * amp;
  const k = (2 * Math.PI * freq) / w;

  let y = Math.sin(k * x + phase) * waveAmp;

  if (pointer.strength > 0.01) {
    const dx = x - pointer.x;
    const sigma = w * 0.12;
    const g = Math.exp(-(dx * dx) / (2 * sigma * sigma)) * pointer.strength;
    const pullToward = (pointer.y - baseY) * 0.6 * g;
    y = y * (1 + g * 0.5) + pullToward;
  }

  for (const r of ripples) {
    const age = (now - r.t0) / 1000;
    const life = 1 - age / 2.4;
    if (life <= 0) continue;
    const dx = x - r.x;
    const front = age * 600;
    const dist = Math.abs(dx) - front;
    if (dist > 80 || dist < -80) continue;
    const shape = Math.exp(-(dist * dist) / 1800) * Math.cos(dist * 0.04);
    y += shape * 28 * life * r.strength;
  }

  return baseY + y;
}

export default function SineWaveHero({ className }: SineWaveHeroProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<EngineState>({
    pointer: { x: -9999, y: -9999, inside: false, targetStrength: 0, strength: 0 },
    ripples: [],
    phase: 0,
    lastT: 0,
    w: 0,
    h: 0,
    dpr: 1,
  });

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rootStyle = getComputedStyle(document.documentElement);
    const orange = (rootStyle.getPropertyValue("--orange") || "#E8913A").trim();
    const fg = (rootStyle.getPropertyValue("--fg") || "#e4e4e4").trim();

    const ro = new ResizeObserver(() => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      const s = stateRef.current;
      s.w = rect.width;
      s.h = rect.height;
      s.dpr = dpr;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    });
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      const s = stateRef.current;
      s.pointer.x = x;
      s.pointer.y = y;
      s.pointer.inside = inside;
      s.pointer.targetStrength = inside ? 1 : 0;
    };
    const onLeave = () => {
      stateRef.current.pointer.inside = false;
      stateRef.current.pointer.targetStrength = 0;
    };
    const onDown = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const s = stateRef.current;
      s.ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        t0: performance.now(),
        strength: 1,
      });
      if (s.ripples.length > 8) s.ripples.shift();
    };

    if (!reducedMotion) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerleave", onLeave);
      wrap.addEventListener("pointerdown", onDown);
    }

    const drawFrame = (now: number) => {
      const s = stateRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx || s.w <= 0) return;

      ctx.save();
      ctx.scale(s.dpr, s.dpr);
      ctx.clearRect(0, 0, s.w, s.h);

      const p = DEFAULTS;
      const drawState = { pointer: s.pointer, ripples: s.ripples };

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.globalAlpha = 0.18;
      ctx.lineWidth = p.thickness * 4.2;
      ctx.strokeStyle = orange;
      ctx.beginPath();
      for (let x = 0; x <= s.w; x += 2) {
        const y = waveY(x, s.w, s.h, s.phase, p, drawState, now);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      const partials: Array<{
        mult: number;
        amp: number;
        alpha: number;
        width: number;
        color: string;
      }> = [
        { mult: 1.0, amp: 1.0, alpha: 1.0, width: p.thickness * 0.84, color: orange },
        { mult: 2.0, amp: 0.55, alpha: 0.55, width: p.thickness * 0.63, color: orange },
        { mult: 3.0, amp: 0.32, alpha: 0.3, width: p.thickness * 0.49, color: fg },
        { mult: 5.0, amp: 0.18, alpha: 0.18, width: p.thickness * 0.42, color: fg },
      ];

      for (const pt of partials) {
        const pp: WaveParams = { ...p, freq: p.freq * pt.mult, amp: p.amp * pt.amp };
        ctx.globalAlpha = pt.alpha;
        ctx.lineWidth = pt.width;
        ctx.strokeStyle = pt.color;
        ctx.beginPath();
        for (let x = 0; x <= s.w; x += 2) {
          const y = waveY(
            x,
            s.w,
            s.h,
            s.phase * (1 + (pt.mult - 1) * 0.12),
            pp,
            drawState,
            now,
          );
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.restore();
    };

    let raf = 0;
    if (reducedMotion) {
      requestAnimationFrame((t) => drawFrame(t));
    } else {
      const loop = (t: number) => {
        const s = stateRef.current;
        const dt = Math.min(0.05, (t - (s.lastT || t)) / 1000);
        s.lastT = t;
        s.pointer.strength += (s.pointer.targetStrength - s.pointer.strength) * Math.min(1, dt * 8);
        s.phase += dt * DEFAULTS.speed;
        s.ripples = s.ripples.filter((r) => t - r.t0 < 2400);
        drawFrame(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
