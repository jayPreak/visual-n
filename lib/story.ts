// ─────────────────────────────────────────────────────────────────────────────
// THE STORY
// Edit the `story` array below to change the dialogue. That's it.
//
// Each line picks:
//   background : which scene image is shown
//   layout     : who's on screen — 'left' (Ishita), 'right' (Jayesh), 'both' (center)
//   speaker    : who's talking — 'ishita' | 'jayesh' | 'narrator'
//   text       : what they say
//
// Backgrounds live in /public/backgrounds/<slug>.jpg
// Character art lives in /public/characters/<name>.png
// ─────────────────────────────────────────────────────────────────────────────

export type Background = "airport" | "mcdonalds" | "coffee" | "rooftop";
export type Layout = "left" | "right" | "both";
export type Speaker = "ishita" | "jayesh" | "narrator";

export type Line = {
  background: Background;
  layout: Layout;
  speaker: Speaker;
  text: string;
};

export const story: Line[] = [
  // ── Scene 1: Airport ──────────────────────────────────────────────────────
  {
    background: "airport",
    layout: "left",
    speaker: "ishita",
    text: "[Ishita's first line at the airport — replace me.]",
  },
  {
    background: "airport",
    layout: "both",
    speaker: "jayesh",
    text: "[Jayesh meets her — replace me.]",
  },

  // ── Scene 2: McDonald's ───────────────────────────────────────────────────
  {
    background: "mcdonalds",
    layout: "right",
    speaker: "jayesh",
    text: "[McDonald's line — replace me.]",
  },
  {
    background: "mcdonalds",
    layout: "both",
    speaker: "ishita",
    text: "[Her reply over fries — replace me.]",
  },

  // ── Scene 3: Coffee Shop ──────────────────────────────────────────────────
  {
    background: "coffee",
    layout: "left",
    speaker: "ishita",
    text: "[Coffee shop line — replace me.]",
  },
  {
    background: "coffee",
    layout: "both",
    speaker: "narrator",
    text: "[Quiet moment over coffee — replace me.]",
  },

  // ── Scene 4: Rooftop Dinner ───────────────────────────────────────────────
  {
    background: "rooftop",
    layout: "both",
    speaker: "jayesh",
    text: "[Rooftop dinner build-up — replace me.]",
  },
  {
    background: "rooftop",
    layout: "both",
    speaker: "jayesh",
    text: "Happy 20th birthday, Ishita. 🎂",
  },
];
