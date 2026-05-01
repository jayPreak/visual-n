import Image from "next/image";
import type { Layout } from "@/lib/story";

// Character art is stored as transparent PNGs in /public/characters/.
// Heights use vh so the sprites scale on phones; they sit above the dialogue box (~30vh).
const SPRITE_CLASSES =
  "pointer-events-none select-none object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]";

function Sprite({ who, position }: { who: "ishita" | "jayesh"; position: "left" | "right" | "center" }) {
  const sideClass =
    position === "left"
      ? "left-[2%] sm:left-[8%]"
      : position === "right"
      ? "right-[2%] sm:right-[8%]"
      : "left-1/2 -translate-x-1/2";

  return (
    <div className={`absolute bottom-[28vh] h-[58vh] w-[55vw] sm:w-[35vw] ${sideClass}`}>
      <Image
        src={`/characters/${who}.png`}
        alt={who === "ishita" ? "Ishita" : "Jayesh"}
        fill
        sizes="(max-width: 640px) 55vw, 35vw"
        className={SPRITE_CLASSES}
        priority
      />
    </div>
  );
}

export default function CharacterLayer({ layout }: { layout: Layout }) {
  if (layout === "left") return <Sprite who="ishita" position="left" />;
  if (layout === "right") return <Sprite who="jayesh" position="right" />;

  // 'both' — Ishita slightly left of center, Jayesh slightly right of center
  return (
    <>
      <div className="absolute bottom-[28vh] h-[58vh] w-[55vw] sm:w-[32vw] left-[15%] -translate-x-1/4">
        <Image src="/characters/ishita.png" alt="Ishita" fill sizes="(max-width: 640px) 55vw, 32vw" className={SPRITE_CLASSES} priority />
      </div>
      <div className="absolute bottom-[28vh] h-[58vh] w-[55vw] sm:w-[32vw] right-[15%] translate-x-1/4">
        <Image src="/characters/jayesh.png" alt="Jayesh" fill sizes="(max-width: 640px) 55vw, 32vw" className={SPRITE_CLASSES} priority />
      </div>
    </>
  );
}
