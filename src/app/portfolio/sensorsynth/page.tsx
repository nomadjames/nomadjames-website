"use client";

import { useEffect } from "react";

export default function SensorSynthRedirect() {
  useEffect(() => {
    window.location.replace("/building/sensorsynth");
  }, []);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "640px" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600 }}>
          This page has moved
        </h1>
        <p style={{ marginBottom: "2rem", opacity: 0.7, lineHeight: 1.7 }}>
          SensorSynthFM is now in the Building section alongside other active projects.
        </p>
        <p>
          <a
            href="/building/sensorsynth"
            style={{ color: "var(--orange)", textDecoration: "underline" }}
          >
            Continue to /building/sensorsynth →
          </a>
        </p>
      </div>
    </div>
  );
}
