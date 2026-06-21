# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A personal portfolio for Juan Raphael Dilag, deliberately built as a **lean, dependency-free static site** — plain `index.html` + `styles.css` + `app.js`, no framework, no build step, no package manager, no test/lint pipeline. That is an intentional choice for a single-page portfolio, not a gap to fill: deploy by serving the files. Do not introduce React, a bundler, or tooling unless the user asks.

It replaces the placeholder at the existing domain **raphaeldilag.xyz** (which previously only served a résumé download). Keeping the résumé download prominent — in both hero and footer — is a primary requirement.

### Live files (the actual site)

- `index.html` — all content, server-rendered statically (cards, sections, copy) so it works without JS and is crawlable. Meta/OG/favicon live in the head.
- `styles.css` — design tokens (`:root` + `[data-theme="light"]`) and all component styles ported from the prototype's inline styles.
- `app.js` — vanilla logic: theme toggle + persistence, tag filtering, project modal → full case-study overlay (Esc / scroll-lock), and the hero canvas background. Project case-study detail content lives in a `projects` data array here, keyed by id; the static cards link to it via `data-id`.
- `resume.pdf` — **not yet present.** Referenced by the hero/nav/footer download links; must be supplied.

### Origin (design source — reference only, not served)

The site was converted from a Claude Design handoff in `project/`. Those files are the design source of truth for *intent and content*, not runtime code:

## Source of truth

- `project/uploads/portfolio_prompt.md` — the **full brief**: positioning, audience, aesthetic direction, anti-cliché rules, complete project/experience/skills content. Read this first; it is the authoritative spec for content and intent.
- `project/Portfolio.dc.html` — the **design prototype** (the user's primary file). Recreate its *visual output* pixel-perfectly; do not copy its internal structure unless it happens to fit the target stack.
- `project/support.js` — **generated DC runtime, do not edit and do not port**. It is a small React-based interpreter for the `.dc.html` template format. Treat it as a black box that makes the prototype render.

Read the HTML/CSS source directly to extract dimensions, colors, and layout rules. Per the bundle README, do **not** render these files in a browser or screenshot them unless the user explicitly asks.

When mining the prototype for content/intent: it is a single-file component in Claude Design's template format, not plain HTML. Markup lives inside `<x-dc>` with `{{ expr }}` bindings and custom `<sc-for>` / `<sc-if>` elements; the logic is a `class Component extends DCLogic` in the `<script type="text/x-dc">` block. **The real content lives in JS, not markup** — the `_projects` getter holds all five case studies, and `renderVals()` builds `skillGroups`, `experience`, and `credentials`. Those have already been ported into `app.js` / `index.html`; treat the prototype as the canonical reference if anything looks off.

## Design tokens

The live tokens are in `styles.css` (`:root` + `[data-theme="light"]`), ported verbatim from the prototype's `:root`:

- **Theme:** dark-first with a light toggle. Dark bg `#121512`, accent `#7fb487`; light bg `#f3f5f1`, accent `#3c7a4a`. Full token sets for both themes (`--bg/bg2/bg3`, `--line/line2`, `--text/muted/faint`, `--accent/accentSoft/accentInk`).
- **Type:** `Hanken Grotesk` (sans, body/headings) + `IBM Plex Mono` (labels, metadata, tags, code-like accents), loaded from Google Fonts.
- **Behaviors:** theme respects `prefers-color-scheme` and persists to `localStorage`; the hero canvas has two modes (Flow field / Game of Life), persisted and disabled under `prefers-reduced-motion`; the canvas is **full-bleed (spans the full viewport width)** while the rest of the content is capped at 1200px; projects filter by tag; case studies open in a modal that escalates to a full detail overlay (Esc closes, body scroll locks).

## Hard constraints (do not violate)

- **NDA on Project 1 (the FMCG internship).** Never name the employer or any client/system/product. Refer only to "a major FMCG / food-manufacturing company in the Philippines." Use approximate metrics only (`~`, `1,000+`). Use only generic, illustrative diagrams — never anything resembling a real artifact. Keep the "Confidential / NDA — details generalized" badge on that case study.
- **Anti-cliché direction is central, not decorative.** The brief explicitly forbids: progress bars / fake proficiency percentages, typewriter hero effects, generic agency-template flow, gradient-mesh/blob heros, custom cursors, scroll-jacking, pre-loaders, staggered text fade-ups, a separate "My Process" timeline, and "passionate / bridge the gap" adjective-soup bios. Read the "Anti-cliché direction" section of the prompt before adding any element. Animate images/mockups only — never delay readable text.
- **Terminal aesthetic is earned in exactly one place:** the subtitle-tool CLI case study (`id: 'subtitle'`, `terminal: true`). Do not spread terminal motifs across the site.
- **Accessibility is a requirement:** WCAG AA contrast, semantic HTML, keyboard navigation, alt text, `prefers-reduced-motion` honored. The prototype already models focus-visible rings and ARIA wiring — preserve that intent.

## Site structure (fixed order)

Hero/intro → Skills & competencies (tag chips, no bars; groups cross-link to filtered projects) → Projects (centerpiece: filterable card grid → case-study detail view, one reusable template) → Experience timeline → About → Contact/footer. Include a clearly-marked LinkedIn URL placeholder; GitHub is `github.com/apajuan`, email `juanraphaeldilag@gmail.com`.

## Working norms for this repo

- There is no build step. To preview, open `index.html` directly or serve the folder (e.g. `python3 -m http.server`). Don't add tooling, frameworks, or a package manager unless the user explicitly asks — the static-file simplicity is the point.
- Keep all content in `index.html` statically rendered (crawlable, works without JS); use `app.js` only for interaction, not for injecting primary content.
- When anything about scope or interpretation is ambiguous, **ask the user before implementing** — the brief stresses clarifying up front over building the wrong thing.
