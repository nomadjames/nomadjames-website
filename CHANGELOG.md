# nomadjames.com — Build Log

Sequential record of all changes to the portfolio site. Includes both Clarence-executed and James-executed changes. Used for rollback reference and build history.

---

## 2026-03-27

### 3f4d7c7 -- Fix About page: remove age, trim grandstanding, honest voice
- **Who:** Clarence
- Removed all age references (50) from about page metadata, header, and closing paragraph
- Deleted entire smart meter technician paragraph (truck/swapping meters copy)
- Removed "work during day, design at night" line from TLDR
- Changed all "30 years" / "thirty years" of music production to simple present tense across 5 files
- Rewrote Pittsburgh Ableton User Group section: factual, includes Paul Miller, no grandstanding
- Files changed: about/page.tsx, page.tsx, resume/page.tsx, portfolio/page.tsx, portfolio/ableton-evaluation-suite/page.tsx

### Add Google Analytics (GA4)
- **Who:** Clarence
- Added GA4 tracking with measurement ID G-VWV4GHNHV7
- Uses next/script with afterInteractive strategy in layout.tsx

## 2026-03-26

### aa72e08 — Clarence case study reflects system overhaul
- **Who:** Clarence (delegated to subagent)
- Opus 4.6 pinned throughout (was "Opus 4 / Sonnet 4")
- SessionStart/Stop hooks documented
- clarence.db consolidation noted (workspace.db + sqlite_mcp_server.db retired)
- RAG vectors updated to 200+
- 26 staggered cron jobs (was 21)
- Delegation architecture added (3 agent types, background execution)
- $100 session ceiling documented
- Telegram brief mode (270x faster) noted
- 3 system cron jobs distinguished from 26 OpenClaw jobs

### 58bbd0b — Stale items cleanup
- **Who:** Clarence (delegated to 2 parallel subagents)
- Clarence page: 21 → 26 cron jobs (5 instances)
- Homepage: Substack link → Medium
- Footer: X/Twitter link removed
- Deleted old individual Ableton pages (ableton-note, ableton-learning-music, ableton-learning-synths)

### 2bba2de — Build artifact cleanup
- **Who:** Clarence
- Removed tracked `out/` build artifacts that were in .gitignore but committed

## 2026-03-25

### b6427c5 — Portfolio overhaul: consolidate Ableton suite, enrich case studies, fix nav
- **Who:** Clarence (delegated to 4 parallel subagents)
- Consolidated 3 Ableton pages into single Ableton Evaluation Suite with stakeholder analysis
- Enriched Food Insecurity with screener, questionnaire, persona, JTBD critique, new findings
- Enriched Card Sort with Lyssna methodology, similarity matrix data, IA analysis
- Added Contact to nav, removed empty Writings section
- Added OG meta tags for social sharing
- Deleted unused SocialLinks component
- Portfolio index renumbered to 5 items

### 20f910f — Code art lab
- **Who:** James (external Claude Code session)
- Added Lab page with 4 live p5.js sketches

### 34722ab — Substack link added
- **Who:** James
- Added Substack to hero links (later replaced with Medium on 2026-03-26)

### c17d5c7 — Mixcloud link
- **Who:** James
- Added Mixcloud to music sections

### a187c75 — Voice pass + location fix
- **Who:** James
- Live performances added to music blurb
- Location corrected to Youngstown OH

### 577ea1e — Voice pass + SensorSynth fixes
- **Who:** James
- Fixed factual errors on home and resume pages related to SensorSynth

### b833edb — SensorSynth cleanup
- **Who:** Clarence
- Removed WIP badge and GitHub link from SensorSynth FM page

### 14dd0e2 — SensorSynth FM page
- **Who:** Clarence
- Added SensorSynth FM portfolio page and index entry

### 897c728 — Fact-check corrections
- **Who:** Clarence
- Verified against Google Drive source docs

### 50a9470 — Two new case studies
- **Who:** Clarence
- Added portfolio pages from Google Drive source material

### d4107fa — Contact form + privacy
- **Who:** Clarence
- Added contact form page
- Removed email and phone from public-facing pages

## 2026-03-24

### 43a012f — Contrast audit fix
- **Who:** Clarence
- Fixed contrast findings to match source document

### d71c500 — Instagram alt text fix
- **Who:** Clarence
- Corrected: alt text was auto-generated, not absent

### d31ee66 — Clarence case study security cleanup
- **Who:** Clarence
- Updated agent names, knowledge DB references
- Removed internal details that shouldn't be public

### 8c8d7df — Remove port number
- **Who:** Clarence
- Removed internal port number from public architecture diagram

### 0dab0ff — Remove cc-forge references
- **Who:** Clarence
- Replaced cc-forge with generic "model bridge" on public site

### 80b72df — WCAG 2.1 AA accessibility fix
- **Who:** Clarence
- Fixed accessibility violations site-wide

### 158ef46 — Clarence case study page
- **Who:** Clarence
- Added full Clarence autonomous AI case study

## 2026-03-23

### cd0b9d9 — Em dash cleanup
- **Who:** Clarence
- Replaced em dashes with arrows in portfolio list bullets

### d3e49dd — Resume enhancements
- **Who:** Clarence
- Print-to-PDF button with clean print styles

### c0695ff — Resume page
- **Who:** Clarence
- Added résumé page and nav link

### d9d2fb2 — Hero links
- **Who:** Clarence
- Added LinkedIn, GitHub, and email links to homepage hero

### 4b6d24f — GitHub Pages fix
- **Who:** James
- Added .nojekyll to prevent Jekyll processing

### 8abe09d — Portfolio content
- **Who:** Clarence
- Added Food Insecurity and Health Translator case studies

### 4107d0b — Metadata fix
- **Who:** James
- Merged fix-metadata branch

## 2026-03-22

### 27d0b38 — Full editorial redesign
- **Who:** James + Clarence
- Complete site rebuild with orange palette

### 73bfea6 — GitHub Actions
- **Who:** James
- Added GitHub Actions workflow for GitHub Pages deployment

### aa5fd6f — Real portfolio content
- **Who:** Clarence
- Populated portfolio with actual grad school work

### e883c78 + 92b2a8a — Content updates
- **Who:** James
- Initial content builds

### d765647 — Custom domain
- **Who:** James
- Added CNAME for nomadjames.com

### 8ca46a7 — Static export
- **Who:** James
- Added static export configuration for GitHub Pages

### 46a5098 — Initial commit
- **Who:** James
- Create Next App scaffold
