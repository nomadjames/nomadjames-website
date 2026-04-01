"use client";

export default function DownloadPdfButton({ className }: { className?: string }) {
  return (
    <a
      href="/pdfs/james-dishman-resume.pdf"
      download
      className={className}
    >
      Download PDF ↓
    </a>
  );
}
