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
export type Emotion =
  | "happy" | "love" | "surprised" | "laughing" | "kiss"
  | "angry" | "sad" | "content" | "smart" | "annoyed"
  | "calm" | "wink";

export type Line = {
  background: Background;
  layout: Layout;
  speaker: Speaker;
  text: string;
  ishitaEmotion?: Emotion;
  jayeshEmotion?: Emotion;
};

export const story: Line[] = [
  // ── Scene 1: Airport ──────────────────────────────────────────────────────
  {
    background: "airport",
    layout: "left",
    speaker: "ishita",
    text: "[Ishita's first line at the airport — replace me.]",
    ishitaEmotion: "happy",
    jayeshEmotion: "happy",
  },
  {
    background: "airport",
    layout: "both",
    speaker: "jayesh",
    text: "[Jayesh meets her — replace me.]",
    ishitaEmotion: "surprised",
    jayeshEmotion: "love",
  },

  // ── Scene 2: McDonald's ───────────────────────────────────────────────────
  {
    background: "mcdonalds",
    layout: "right",
    speaker: "jayesh",
    text: "[McDonald's line — replace me.]",
    ishitaEmotion: "laughing",
    jayeshEmotion: "happy",
  },
  {
    background: "mcdonalds",
    layout: "both",
    speaker: "ishita",
    text: "[Her reply over fries — replace me.]",
    ishitaEmotion: "laughing",
    jayeshEmotion: "laughing",
  },

  // ── Scene 3: Coffee Shop ──────────────────────────────────────────────────
  {
    background: "coffee",
    layout: "left",
    speaker: "ishita",
    text: "[Coffee shop line — replace me.]",
    ishitaEmotion: "content",
    jayeshEmotion: "happy",
  },
  {
    background: "coffee",
    layout: "both",
    speaker: "narrator",
    text: "[Quiet moment over coffee — replace me.]",
    ishitaEmotion: "content",
    jayeshEmotion: "calm",
  },

  // ── Scene 4: Rooftop Dinner ───────────────────────────────────────────────
  {
    background: "rooftop",
    layout: "both",
    speaker: "jayesh",
    text: "[Rooftop dinner build-up — replace me.]",
    ishitaEmotion: "surprised",
    jayeshEmotion: "wink",
  },
  {
    background: "rooftop",
    layout: "both",
    speaker: "jayesh",
    text: "Happy 20th birthday, Ishita. 🎂",
    ishitaEmotion: "love",
    jayeshEmotion: "kiss",
  },
];
