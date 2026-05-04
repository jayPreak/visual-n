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
  const ishitaSpeaking = speaker === "ishita";
  const jayeshSpeaking = speaker === "jayesh";

  return (
    <div className="absolute bottom-0 inset-x-0 h-[36vh] sm:h-[30vh] px-4 pb-4 sm:px-8 sm:pb-6">
      <div className="relative h-full rounded-2xl border border-white/15 bg-black/65 backdrop-blur-md shadow-2xl overflow-hidden">

        {/* Ishita face — left side, rises when speaking, sinks when listening */}
        <div
          className={`absolute left-2 sm:left-3 aspect-square transition-all duration-400 ${
            ishitaSpeaking
              ? "top-2 w-[22vw] sm:w-[13vw] opacity-100"
              : "bottom-5 w-[15vw] sm:w-[9vw] opacity-35"
          }`}
        >
          <Image
            src={`/characters/ishita-${ishitaEmotion}.png`}
            alt={`Ishita ${ishitaEmotion}`}
            fill
            sizes="22vw"
            className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Jayesh face — right side, rises when speaking, sinks when listening */}
        <div
          className={`absolute right-2 sm:right-3 aspect-square transition-all duration-400 ${
            jayeshSpeaking
              ? "top-2 w-[22vw] sm:w-[13vw] opacity-100"
              : "bottom-5 w-[15vw] sm:w-[9vw] opacity-35"
          }`}
        >
          <Image
            src={`/characters/jayesh-${jayeshEmotion}.png`}
            alt={`Jayesh ${jayeshEmotion}`}
            fill
            sizes="22vw"
            className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Text — always centered between the two faces */}
        <div className="h-full flex flex-col justify-center px-[22vw] sm:px-[15vw] py-3 sm:py-4">
          {meta.name && (
            <div className={`vn-name font-semibold ${meta.color} mb-1.5`}>{meta.name}</div>
          )}
          <p className="vn-text text-white/95 leading-snug">{text}</p>
        </div>

        <div className="absolute bottom-2 right-[18vw] sm:right-[12vw] text-xs sm:text-sm text-white/50 animate-pulse">
          {hint ?? "tap to continue ▸"}
        </div>
      </div>
    </div>
  );
}
