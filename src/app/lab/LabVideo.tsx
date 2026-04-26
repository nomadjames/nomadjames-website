"use client";

import { useEffect, useRef, useState } from "react";

type LabVideoProps = {
  className: string;
  src: string;
  poster: string;
  ariaLabel: string;
};

export default function LabVideo({ className, src, poster, ariaLabel }: LabVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setMotionAllowed(!mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (motionAllowed) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [motionAllowed]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={motionAllowed}
      controls
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      aria-label={ariaLabel}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
