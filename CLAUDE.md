# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Next.js / ESLint

There is no test suite.

## Architecture

This is a single-page Next.js (App Router) "visual novel" app. It is intentionally tiny: one client component drives a linear script and renders three layered presentational components on top of a full-bleed background.

**Data flow per frame:**
1. `app/page.tsx` mounts `<VisualNovel />` (the only stateful component).
2. `VisualNovel` (client component) holds an index `i` into the `story` array from `lib/story.ts`, and renders:
   - `<Scene background={story[i].background}>` — full-bleed `next/image` + scrim, with a label for the location.
   - `<CharacterLayer layout={story[i].layout} speaker={story[i].speaker}>` — placed inside `Scene`. `layout` is `'left' | 'right' | 'both'`; `speaker` controls which character is highlighted/animated and which is dimmed.
   - `<DialogueBox speaker={...} text={...}>` — pinned to bottom; runs a typewriter effect over `text` and looks up name + color in `SPEAKER_META`.
3. Input handlers on the main element advance/rewind `i`: tap, `→`/`Space`/`Enter` advance; ← Back button, `←`/`Backspace` rewind. After the last line a replay card is shown.

**Where to make changes:**
- **Dialogue / story content** — edit only `lib/story.ts`. Each entry is `{ background, layout, speaker, text }` and optional emotion fields. The `Background` and `Speaker` union types are also defined here.
- **New background** — add `public/backgrounds/<slug>.jpg`, extend the `Background` union in `lib/story.ts`, and add a label entry in the `labels` map in `components/Scene.tsx`.
- **New character** — add `public/characters/<name>.png` (transparent), extend the `Speaker` union and `SPEAKER_META` in `components/DialogueBox.tsx` (name + Tailwind color), and update layouts in `components/CharacterLayer.tsx`.
- **Emotions / face animations** — emotion-driven facial reactions live in `CharacterLayer.tsx`; animations are tied to typewriter progress in `VisualNovel`/`DialogueBox` and stop when the line finishes typing (see recent commits).

## Conventions specific to this repo

- Sizes use viewport units (`vh`, `clamp()`) so layout scales on phones; `touch-none` + `select-none` keep taps clean. Don't introduce fixed pixel layouts that break this.
- Backgrounds use `object-cover`, characters use `object-contain` — keep filenames stable when swapping art.
- The placeholder PNGs/JPGs in `public/` are programmatically generated scaffolding, not final art.
- Tailwind v3 + a small `globals.css`; no component library.
