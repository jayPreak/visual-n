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
        className="fixed inset-0 grid place-items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fce7f3 0%, #fde2e4 50%, #fef2f2 100%)",
        }}
        onClick={() => setI(0)}
      >
        {/* Confetti particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10px",
                opacity: 0.6 + Math.random() * 0.4,
                animation: `confetti ${2 + Math.random() * 2}s linear forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {["🎉", "✨", "💝", "🎀"][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>

        {/* Card container */}
        <div className="relative z-10 max-w-sm">
          {/* Glow background */}
          <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
            }}
          />

          {/* Main card */}
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 text-center rounded-3xl backdrop-blur-sm border border-white/40"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
            }}
          >
            {/* Cake emoji with animation */}
            <div className="mb-6 inline-block animate-bounce"
              style={{
                animationDuration: "2.5s",
              }}
            >
              <div className="text-8xl sm:text-9xl drop-shadow-lg" style={{
                filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.4))"
              }}>🎂</div>
            </div>

            {/* Birthday message */}
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-3 leading-tight"
              style={{
                color: "#be185d",
                fontFamily: "Georgia, serif",
                animation: "fadeInUp 0.8s ease-out 0.2s both",
              }}
            >
              Happy 20th
            </h1>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6"
              style={{
                color: "#be185d",
                fontFamily: "Georgia, serif",
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              Ishita
            </h2>

            {/* Signature */}
            <p className="text-lg text-pink-800/70 font-light italic mb-8 vn-text"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.6s both",
              }}
            >
              — Jayesh
            </p>

            {/* Decorative line */}
            <div className="w-12 h-1 mx-auto mb-6 rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, #ec4899, transparent)",
                animation: "fadeInUp 0.8s ease-out 0.8s both",
              }}
            />

            {/* Tap to replay */}
            <p className="text-sm text-pink-600/60 tracking-widest uppercase font-medium"
              style={{
                animation: "fadeInUp 0.8s ease-out 1s both, pulse 2s ease-in-out 1.8s infinite",
              }}
            >
              tap anywhere to replay
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes confetti {
            0% {
              transform: translateY(0) rotateZ(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotateZ(720deg);
              opacity: 0;
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
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
