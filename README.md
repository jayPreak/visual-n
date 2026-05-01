# visn — a tiny visual novel for Ishita 🎂

A mobile-friendly classic-style visual novel built with Next.js. Tap to advance, back button to rewind. Dialogue is one editable file.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Go to https://vercel.com/new, import the repo.
3. Click Deploy. Zero config — Next.js is detected automatically.

## How it works (3-minute tour)

```
app/
  page.tsx          → renders <VisualNovel/>
  layout.tsx        → root HTML, fonts, metadata
  globals.css       → Tailwind + a tiny bit of fluid VN typography

components/
  VisualNovel.tsx   → the controller: tracks current line, handles tap/back/keys
  Scene.tsx         → full-bleed background <Image> + a soft scrim
  CharacterLayer.tsx→ renders Ishita / Jayesh / both based on `layout`
  DialogueBox.tsx   → the bottom dialogue box with speaker name + text

lib/
  story.ts          → ⭐ THE FILE YOU EDIT — the whole script lives here

public/
  backgrounds/      → airport.jpg, mcdonalds.jpg, coffee.jpg, rooftop.jpg
  characters/       → ishita.png, jayesh.png  (transparent)
```

The flow each frame:

1. `VisualNovel` reads `story[i]` from `lib/story.ts`.
2. It renders `<Scene background={...}>` with `<CharacterLayer layout={...}>` inside, and a `<DialogueBox>` pinned to the bottom.
3. Tap anywhere → `i++`. Press **← Back** → `i--`. Keyboard: `→`/`Space`/`Enter` advance, `←`/`Backspace` go back.
4. After the last line, a "Happy 20th, Ishita" card appears. Tap to replay.

## Editing the dialogue

Open **`lib/story.ts`** and edit the `story` array. Each entry:

```ts
{
  background: 'airport' | 'mcdonalds' | 'coffee' | 'rooftop',
  layout:     'left' | 'right' | 'both',   // left=Ishita, right=Jayesh, both=together
  speaker:    'ishita' | 'jayesh' | 'narrator',
  text:       'whatever they say',
}
```

Add as many lines as you want, in any order. The screen automatically updates to match the line's `background` and `layout`.

## Swapping the art

- **Characters:** replace `public/characters/ishita.png` and `public/characters/jayesh.png` with transparent PNGs (any size — they're scaled with `object-contain`). Keep the filenames.
- **Backgrounds:** replace any of `public/backgrounds/*.jpg`. Keep the filenames. Aspect ratio doesn't matter — they're rendered with `object-cover`.

The placeholder PNGs/JPGs that ship are generated programmatically and intended only as scaffolding.

## Adding a new scene/background

1. Drop `public/backgrounds/<slug>.jpg`.
2. Add `<slug>` to the `Background` union in `lib/story.ts`:
   ```ts
   export type Background = 'airport' | 'mcdonalds' | 'coffee' | 'rooftop' | '<slug>';
   ```
3. Add a label for it in `components/Scene.tsx` (`labels` map).
4. Use it in the `story` array.

## Adding a third character

1. Drop `public/characters/<name>.png`.
2. Extend the `Speaker` union and `SPEAKER_META` in `components/DialogueBox.tsx` with their name + a Tailwind color class.
3. Extend `CharacterLayer.tsx` with a new layout (e.g. `'three'`) that renders all three, or repurpose existing slots.

## Notes on responsiveness

- Backgrounds use `object-cover` so they fill any viewport without letterboxing.
- Character heights are in `vh`, dialogue box height is in `vh` — everything scales with the screen.
- Body text uses `clamp()` so it stays readable on phones and doesn't get massive on desktop.
- `touch-none` + `select-none` on the main element keeps tapping smooth on phones.
