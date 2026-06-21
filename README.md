# raphaeldilag.xyz

Personal portfolio for **Juan Raphael (Apa) Dilag** — a Functional Business Analyst & QA who also ships code. Live at **[raphaeldilag.xyz](https://raphaeldilag.xyz)**.

Built deliberately as a **lean, dependency-free static site**: plain HTML, CSS, and vanilla JavaScript. No framework, no bundler, no build step, no package manager. Deploy by serving the files.

## Stack

- `index.html` — all content, statically rendered so the site works without JavaScript and is fully crawlable. Meta/OG/favicon live in the head.
- `styles.css` — design tokens (`:root` + `[data-theme="light"]`) and every component style.
- `app.js` — all interactivity (vanilla JS, no dependencies). Case-study detail content lives in a `projects` data array here, keyed by id; static cards link to it via `data-id`.
- `documents/` — résumé, certifications, and CV PDFs served alongside the site. Must ship with any deploy.

## Features

- **Theme toggle** — dark-first with a light mode; respects `prefers-color-scheme` and persists to `localStorage`.
- **Animated hero canvas** — two modes (flow field / Game of Life), persisted and automatically disabled under `prefers-reduced-motion`.
- **Filterable projects** — skill tags filter the project grid; cards open into a reusable case-study detail overlay (Esc closes, body scroll locks).
- **Accessible** — WCAG AA contrast, semantic HTML, keyboard navigation, alt text, and `prefers-reduced-motion` honored throughout.
- **Typography** — Hanken Grotesk (body/headings) + IBM Plex Mono (labels, metadata, tags), loaded from Google Fonts.

## Run locally

No build step. Either open `index.html` directly, or serve the folder:

```bash
python3 -m http.server
# then visit http://localhost:8000
```

## Deploy

Serve the static files behind any host or CDN (the site is deployed on Vercel with Vercel Web Analytics). Ensure `index.html`, `styles.css`, `app.js`, and the `documents/` folder are all included.

## Contact

- Email — [juanraphaeldilag@gmail.com](mailto:juanraphaeldilag@gmail.com)
- GitHub — [github.com/apajuan](https://github.com/apajuan)
