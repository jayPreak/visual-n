"use client";

import { useCallback, useEffect, useState } from "react";
import { story } from "@/lib/story";
import Scene from "./Scene";
import CharacterLayer from "./CharacterLayer";
import DialogueBox from "./DialogueBox";

export default function VisualNovel() {
  const [i, setI] = useState(0);
  const total = story.length;
  const ended = i >= total;

  const next = useCallback(() => setI((n) => Math.min(n + 1, total)), [total]);
  const prev = useCallback(() => setI((n) => Math.max(n - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") next();
      if (e.key === "ArrowLeft" || e.key === "Backspace") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (ended) {
    return (
      <main
        className="fixed inset-0 grid place-items-center bg-gradient-to-br from-pink-500 via-fuchsia-600 to-indigo-700 text-center px-6"
        onClick={() => setI(0)}
      >
        <div>
          <div className="text-6xl sm:text-8xl mb-4">🎂</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">Happy 20th, Ishita</h1>
          <p className="text-white/80 vn-text">— Jayesh</p>
          <p className="mt-8 text-white/60 text-sm">tap anywhere to replay</p>
        </div>
      </main>
    );
  }

  const line = story[i];

  return (
    <main className="fixed inset-0 select-none touch-none" onClick={next}>
      <Scene background={line.background}>
        <CharacterLayer layout={line.layout} />
        <DialogueBox
          speaker={line.speaker}
          text={line.text}
          hint={i === total - 1 ? "tap to finish ▸" : undefined}
          ishitaEmotion={line.ishitaEmotion}
          jayeshEmotion={line.jayeshEmotion}
        />
      </Scene>

      {/* Back button — stop click from bubbling to the main next() handler */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        disabled={i === 0}
        className="absolute top-3 left-3 z-10 rounded-full bg-black/50 hover:bg-black/70 disabled:opacity-30 backdrop-blur px-3.5 py-2 text-sm font-medium border border-white/15"
        aria-label="Previous line"
      >
        ← Back
      </button>

      {/* Progress pip */}
      <div className="absolute top-3 right-3 z-10 rounded-full bg-black/50 backdrop-blur px-3 py-1.5 text-xs text-white/80 border border-white/15 tabular-nums">
        {i + 1} / {total}
      </div>
    </main>
  );
}
