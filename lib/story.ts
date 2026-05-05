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
    layout: "both",
    speaker: "narrator",
    text: "bonjour monsieur pussy cat",
    ishitaEmotion: "happy",
    jayeshEmotion: "happy",
  },
  {
    background: "airport",
    layout: "both",
    speaker: "ishita",
    text: "omg hiii",
    ishitaEmotion: "happy",
    jayeshEmotion: "happy",
  },
  {
    background: "airport",
    layout: "both",
    speaker: "jayesh",
    text: "omg hii youre so short omg sorry your earphones fell off",
    ishitaEmotion: "laughing",
    jayeshEmotion: "laughing",
  },
  {
    background: "airport",
    layout: "both",
    speaker: "ishita",
    text: "omg youre so fat, you fatty",
    ishitaEmotion: "laughing",
    jayeshEmotion: "laughing",
  },
  {
    background: "airport",
    layout: "both",
    speaker: "jayesh",
    text: "youre a cutie",
    ishitaEmotion: "happy",
    jayeshEmotion: "content",
  },

  // ── Scene 2: McDonald's ───────────────────────────────────────────────────
  {
    background: "mcdonalds",
    layout: "both",
    speaker: "ishita",
    text: "hi can i have hotcakes",
    ishitaEmotion: "happy",
    jayeshEmotion: "happy",
  },
  {
    background: "mcdonalds",
    layout: "both",
    speaker: "jayesh",
    text: "nooo you need to get the salad",
    ishitaEmotion: "surprised",
    jayeshEmotion: "angry",
  },

  // ── Scene 3: Coffee Shop ──────────────────────────────────────────────────
  {
    background: "coffee",
    layout: "both",
    speaker: "ishita",
    text: "can i get a croffle a waffle and a croissant :D",
    ishitaEmotion: "happy",
    jayeshEmotion: "happy",
  },
  {
    background: "coffee",
    layout: "both",
    speaker: "ishita",
    text: "*takes a photo*",
    ishitaEmotion: "happy",
    jayeshEmotion: "happy",
  },
  {
    background: "coffee",
    layout: "both",
    speaker: "jayesh",
    text: "can i get in the photo too",
    ishitaEmotion: "annoyed",
    jayeshEmotion: "happy",
  },
  {
    background: "coffee",
    layout: "both",
    speaker: "ishita",
    text: "no this is my food photo",
    ishitaEmotion: "angry",
    jayeshEmotion: "surprised",
  },

  // ── Scene 4: Rooftop Dinner ───────────────────────────────────────────────
  {
    background: "rooftop",
    layout: "both",
    speaker: "narrator",
    text: "they are on bastion at the top for a romantic dinner",
    ishitaEmotion: "surprised",
    jayeshEmotion: "love",
  },
  {
    background: "rooftop",
    layout: "both",
    speaker: "jayesh",
    text: "happy birthday ishita :3",
    ishitaEmotion: "love",
    jayeshEmotion: "happy",
  },
];
