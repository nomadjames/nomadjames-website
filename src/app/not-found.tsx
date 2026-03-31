import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--fg-muted)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "1.5rem",
          color: "var(--fg)",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "var(--fg-muted)",
          maxWidth: "480px",
          marginBottom: "2.5rem",
        }}
      >
        Whatever you were looking for is not here. It may have moved, or it may
        never have existed in the first place.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          letterSpacing: "0.04em",
          color: "var(--orange)",
          textDecoration: "none",
          transition: "opacity 0.2s ease",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
