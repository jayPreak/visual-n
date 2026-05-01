import type { Speaker } from "@/lib/story";

const SPEAKER_META: Record<Speaker, { name: string; color: string }> = {
  ishita: { name: "Ishita", color: "text-ishita" },
  jayesh: { name: "Jayesh", color: "text-jayesh" },
  narrator: { name: "", color: "text-narrator" },
};

export default function DialogueBox({
  speaker,
  text,
  hint,
}: {
  speaker: Speaker;
  text: string;
  hint?: string;
}) {
  const meta = SPEAKER_META[speaker];
  return (
    <div className="absolute bottom-0 inset-x-0 h-[28vh] sm:h-[24vh] px-4 pb-4 sm:px-8 sm:pb-6">
      <div className="relative h-full rounded-2xl border border-white/15 bg-black/65 backdrop-blur-md px-5 py-4 sm:px-7 sm:py-5 shadow-2xl">
        {meta.name && (
          <div className={`vn-name font-semibold ${meta.color} mb-1.5`}>{meta.name}</div>
        )}
        <p className="vn-text text-white/95">{text}</p>
        <div className="absolute bottom-2 right-4 text-xs sm:text-sm text-white/50 animate-pulse">
          {hint ?? "tap to continue ▸"}
        </div>
      </div>
    </div>
  );
}
