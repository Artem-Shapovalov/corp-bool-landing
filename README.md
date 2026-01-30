# corp-bool™ Landing (working)

This repo is a **working** fancy corporate landing page for corp-bool.

Tech:
- Next.js (static export via `output: "export"`)
- Tailwind CSS
- Framer Motion
- GitHub Pages deploy via GitHub Actions

## Local dev (hot reload)

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Static build + Python preview (GitHub Pages equivalent)

```bash
npm install
npm run build
cd out
python3 -m http.server 8000
```

Open: http://localhost:8000

> Note: with `output: "export"`, `next build` already produces the `out/` folder.
> No separate `next export` step is needed.

## Fix applied

Pinned ESLint to **v8** (Next.js 14 is not compatible with ESLint 9 yet).

Generated: 2026-01-30
