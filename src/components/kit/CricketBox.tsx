import { assets } from "@/components/assets";
import { Sparkles } from "@/components/kit/Sparkles";
import { cn } from "@/lib/utils";

export type BoxPhase = "idle" | "charging" | "opening" | "disabled";

interface Props {
  phase?: BoxPhase | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  className?: string | undefined;
}

const sizes = { sm: "size-32", md: "size-52", lg: "size-64" } as const;

export function CricketBox({ phase = "idle", size = "md", className }: Props) {
  return (
    <div className={cn("relative grid place-items-center", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute size-[78%] rounded-full bg-primary/35 blur-3xl",
          phase === "charging" ? "animate-glow-pulse [animation-duration:0.8s]" : "animate-glow-pulse",
          phase === "disabled" && "opacity-30",
        )}
      />
      {phase === "opening" && <Sparkles count={16} />}
      <img
        src={assets.cricketBox}
        alt="Cricket Box"
        width={1024}
        height={1024}
        className={cn(
          "relative object-contain drop-shadow-[0_24px_40px_oklch(0.05_0.02_340_/_80%)]",
          sizes[size],
          phase === "idle" && "animate-float",
          phase === "charging" && "animate-shake",
          phase === "opening" && "scale-105 transition-transform duration-500",
          phase === "disabled" && "opacity-45 grayscale",
        )}
      />
    </div>
  );
}
