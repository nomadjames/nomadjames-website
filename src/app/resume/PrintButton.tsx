"use client";

export default function PrintButton({ className }: { className?: string }) {
  return (
    <button
      className={className}
      onClick={() => window.print()}
    >
      Save as PDF ↓
    </button>
  );
}
