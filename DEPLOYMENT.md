# nomadjames-website — Deployment Plan

## Project Status

**What exists:** Next.js 16 portfolio site at `~/projects/coding/nomadjames-website/`
**Build status:** ✅ `npm run build` passes clean (static export, 6 pages)
**Remote:** ❌ None — not pushed to GitHub yet
**Deployment pipeline:** ❌ None

### Pages built:
- `/` — Home (hero, bio, social links)
- `/portfolio` — Portfolio grid (placeholder content)
- `/writings` — Writings page
- `/_not-found`

### Stack:
- Next.js 16.0.10 (App Router)
- React 19.2.1
- TypeScript
- CSS Modules (dark theme, #050505 background, purple/pink gradient accents)

---

## Domain Status

**nomadjames.com** — ✅ Registered and active
- **Registrar:** GoDaddy (IP 160.153.56.5)
- **Email:** Google Workspace (MX records pointing to Google)
- **Current website:** Unknown — GoDaddy hosting at that IP

---

## Deployment Options

### Option A — Vercel (Recommended)

**Steps:**
1. Create GitHub repo: `github.com/meridianhouse/nomadjames-website` (or similar)
2. Push code to GitHub
3. Log into Vercel, import the repo
4. Vercel auto-detects Next.js — deploys
5. Add domain `nomadjames.com` in Vercel dashboard
6. Update DNS: remove A record at GoDaddy, add CNAME `cname.vercel-dns.com` or similar per Vercel's instructions
7. Email stays with Google Workspace — MX records unchanged

**Pros:** Zero cost, auto-SSL, fast CDN, Next.js optimized
**Cons:** Two places to manage (GoDaddy for DNS + Vercel for hosting)

### Option B — GoDaddy Hosting (Already Paid)

**Steps:**
1. Run `npm run build` on local machine
2. Upload `.next/` output to GoDaddy FileManager or via FTP
3. DNS stays as-is — site serves from GoDaddy

**Pros:** Single provider, already paid
**Cons:** Next.js requires Node.js server — static export won't work without adjustment. If GoDaddy doesn't support Node, Option A is required.

---

## Portfolio Content — What Needs Work

The `/portfolio` page has placeholder project data:

```typescript
const projects = [
    { title: "Project Alpha", category: "Production", year: "2024", description: "..." },
    { title: "Neon Nights", category: "DJ Set", year: "2023", description: "..." },
    { title: "Tech Noir", category: "Engineering", year: "2023", description: "..." },
];
```

**Needs real content:**
- Actual project names, descriptions, categories
- Project images/screenshots
- Links to live projects or case studies
- Categories that reflect James's actual work (UX Research, Music Production, Technical Writing)

---

## Build Order

1. **Add real portfolio content** — Replace placeholder data in `src/app/portfolio/page.tsx`
2. **Create GitHub repo** and push code
3. **Deploy to Vercel** and test at temporary Vercel URL
4. **Update DNS** at GoDaddy to point to Vercel
5. **Verify SSL + email** — confirm everything works

---

## Blocker / Question

Is the GoDaddy hosting at 160.153.56.5 a Linux or Windows plan? If Linux with Node.js support, Option B works. If not, Vercel is required.

**Time estimate:** 30-60 minutes if GoDaddy supports Node.js. 2-3 hours if we need full Vercel migration including DNS cutover.
