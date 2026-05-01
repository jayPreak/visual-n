import Image from "next/image";
import type { Background } from "@/lib/story";

const labels: Record<Background, string> = {
  airport: "Airport",
  mcdonalds: "McDonald's",
  coffee: "Coffee Shop",
  rooftop: "Rooftop Dinner",
};

export default function Scene({ background, children }: { background: Background; children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={`/backgrounds/${background}.jpg`}
        alt={labels[background]}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* very light scrim only at bottom so dialogue stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
      {children}
    </div>
  );
}
