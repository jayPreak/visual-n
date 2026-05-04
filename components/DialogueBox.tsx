import Image from "next/image";
import type { Speaker, Emotion } from "@/lib/story";

const SPEAKER_META: Record<Speaker, { name: string; color: string }> = {
  ishita: { name: "Ishita", color: "text-ishita" },
  jayesh: { name: "Jayesh", color: "text-jayesh" },
  narrator: { name: "", color: "text-narrator" },
};

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

  return (
    <div className="absolute bottom-0 inset-x-0 h-[28vh] sm:h-[24vh] px-4 pb-4 sm:px-8 sm:pb-6">
      <div className="relative h-full rounded-2xl border border-white/15 bg-black/65 backdrop-blur-md shadow-2xl overflow-visible">

        {/* Ishita emotion avatar — floats above left of panel */}
        <div
          className={`absolute bottom-full left-2 sm:left-4 mb-1 w-[18vw] sm:w-[11vw] aspect-square transition-opacity duration-300 ${
            speaker === "ishita" || speaker === "narrator" ? "opacity-100" : "opacity-45"
          }`}
        >
          <Image
            src={`/characters/ishita-${ishitaEmotion}.png`}
            alt={`Ishita ${ishitaEmotion}`}
            fill
            sizes="18vw"
            className="object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Jayesh emotion avatar — floats above right of panel */}
        <div
          className={`absolute bottom-full right-2 sm:right-4 mb-1 w-[18vw] sm:w-[11vw] aspect-square transition-opacity duration-300 ${
            speaker === "jayesh" || speaker === "narrator" ? "opacity-100" : "opacity-45"
          }`}
        >
          <Image
            src={`/characters/jayesh-${jayeshEmotion}.png`}
            alt={`Jayesh ${jayeshEmotion}`}
            fill
            sizes="18vw"
            className="object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Text content — padded so it doesn't clash with avatars */}
        <div className="h-full flex flex-col justify-center px-[22vw] sm:px-[14vw] py-3 sm:py-4">
          {meta.name && (
            <div className={`vn-name font-semibold ${meta.color} mb-1.5`}>{meta.name}</div>
          )}
          <p className="vn-text text-white/95">{text}</p>
        </div>

        <div className="absolute bottom-2 right-[20vw] sm:right-[13vw] text-xs sm:text-sm text-white/50 animate-pulse">
          {hint ?? "tap to continue ▸"}
        </div>
      </div>
    </div>
  );
}
