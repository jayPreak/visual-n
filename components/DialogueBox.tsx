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
    <div className="absolute bottom-0 inset-x-0 h-[34vh] sm:h-[28vh] px-4 pb-4 sm:px-8 sm:pb-6">
      <div className="relative h-full rounded-2xl border border-white/15 bg-black/65 backdrop-blur-md shadow-2xl overflow-visible">

        {/* Ishita face — left, straddling the top edge */}
        <div
          className={`absolute left-3 sm:left-4 top-0 -translate-y-[48%] w-[26vw] sm:w-[15vw] aspect-square z-10 transition-opacity duration-300 ${
            speaker === "ishita" ? "opacity-100" : "opacity-30"
          }`}
        >
          <Image
            src={`/characters/ishita-${ishitaEmotion}.png`}
            alt={`Ishita ${ishitaEmotion}`}
            fill
            sizes="26vw"
            className="object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]"
          />
        </div>

        {/* Jayesh face — right, straddling the top edge */}
        <div
          className={`absolute right-3 sm:right-4 top-0 -translate-y-[48%] w-[26vw] sm:w-[15vw] aspect-square z-10 transition-opacity duration-300 ${
            speaker === "jayesh" ? "opacity-100" : "opacity-30"
          }`}
        >
          <Image
            src={`/characters/jayesh-${jayeshEmotion}.png`}
            alt={`Jayesh ${jayeshEmotion}`}
            fill
            sizes="26vw"
            className="object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]"
          />
        </div>

        {/* Text */}
        <div className="h-full flex flex-col justify-center px-[20vw] sm:px-[14vw] py-3 sm:py-4">
          {meta.name && (
            <div className={`vn-name font-semibold ${meta.color} mb-1.5`}>{meta.name}</div>
          )}
          <p className="vn-text text-white/95 leading-snug">{text}</p>
        </div>

        <div className="absolute bottom-2 right-[16vw] sm:right-[12vw] text-xs sm:text-sm text-white/50 animate-pulse">
          {hint ?? "tap to continue ▸"}
        </div>
      </div>
    </div>
  );
}
