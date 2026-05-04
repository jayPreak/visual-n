"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Speaker, Emotion } from "@/lib/story";

const SPEAKER_META: Record<Speaker, { name: string; color: string }> = {
  ishita: { name: "Ishita", color: "text-ishita" },
  jayesh: { name: "Jayesh", color: "text-jayesh" },
  narrator: { name: "", color: "text-narrator" },
};

const EMOTION_ANIM: Record<Emotion, string> = {
  happy:     "anim-happy",
  love:      "anim-love",
  surprised: "anim-surprised",
  laughing:  "anim-laughing",
  kiss:      "anim-kiss",
  angry:     "anim-angry",
  annoyed:   "anim-annoyed",
  sad:       "anim-sad",
  content:   "anim-content",
  smart:     "anim-smart",
  calm:      "anim-calm",
  wink:      "anim-wink",
};

function EmotionFace({
  who,
  emotion,
  active,
  side,
}: {
  who: "ishita" | "jayesh";
  emotion: Emotion;
  active: boolean;
  side: "left" | "right";
}) {
  return (
    <div
      className={`absolute top-0 ${side === "left" ? "left-3 sm:left-4" : "right-3 sm:right-4"} -translate-y-[48%] w-[26vw] sm:w-[15vw] aspect-square z-10 transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-30"
      }`}
    >
      {/* inner wrapper takes the animation so it doesn't fight the translate-y above */}
      <div className={`w-full h-full ${EMOTION_ANIM[emotion]}`}>
        <Image
          src={`/characters/${who}-${emotion}.png`}
          alt={`${who} ${emotion}`}
          fill
          sizes="26vw"
          className="object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  );
}

export default function DialogueBox({
  speaker,
  text,
  hint,
  ishitaEmotion = "happy",
  jayeshEmotion = "happy",
}: {
  speaker: Speaker;
  text: string;
  hint?: string;
  ishitaEmotion?: Emotion;
  jayeshEmotion?: Emotion;
}) {
  const meta = SPEAKER_META[speaker];

  // Typewriter effect — resets whenever `text` changes
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let idx = 0;
    const id = setInterval(() => {
      idx++;
      setDisplayed(text.slice(0, idx));
      if (idx >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div className="absolute bottom-0 inset-x-0 h-[34vh] sm:h-[28vh] px-4 pb-4 sm:px-8 sm:pb-6">
      <div className="relative h-full rounded-2xl border border-white/15 bg-black/65 backdrop-blur-md shadow-2xl overflow-visible">

        <EmotionFace
          who="ishita"
          emotion={ishitaEmotion}
          active={speaker === "ishita"}
          side="left"
        />
        <EmotionFace
          who="jayesh"
          emotion={jayeshEmotion}
          active={speaker === "jayesh"}
          side="right"
        />

        <div className="h-full flex flex-col justify-center px-[20vw] sm:px-[14vw] py-3 sm:py-4">
          {meta.name && (
            <div className={`vn-name font-semibold ${meta.color} mb-1.5`}>{meta.name}</div>
          )}
          {/* Reserve space with the full text (invisible) so layout doesn't jump */}
          <div className="relative vn-text leading-snug">
            <span className="invisible whitespace-pre-wrap">{text}</span>
            <span className="absolute inset-0 text-white/95 whitespace-pre-wrap">{displayed}</span>
          </div>
        </div>

        <div className="absolute bottom-2 right-[16vw] sm:right-[12vw] text-xs sm:text-sm text-white/50 animate-pulse">
          {hint ?? "tap to continue ▸"}
        </div>
      </div>
    </div>
  );
}
