import { rewardArt } from "@/components/assets";
import { GlassCard } from "@/components/kit/GlassCard";
import { cn } from "@/lib/utils";
import type { Prize } from "@/lib/types";

export function PrizePool({ prizes, className }: { prizes: Prize[]; className?: string }) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {prizes.map((prize) => {
        const pct = prize.total > 0 ? Math.round((prize.remaining / prize.total) * 100) : 0;
        return (
          <GlassCard key={prize.id} className="flex items-center gap-3 px-3.5 py-3">
            <img
              src={rewardArt[prize.kind]}
              alt=""
              width={512}
              height={512}
              loading="lazy"
              className="size-10 shrink-0 object-contain"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{prize.title}</p>
              {prize.subtitle && (
                <p className="truncate text-[11px] text-muted-foreground">{prize.subtitle}</p>
              )}
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full [background-image:var(--gradient-primary)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-display text-base leading-none">{prize.remaining}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted-foreground">left</p>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}

export function PrizeStrip({ prizes }: { prizes: Prize[] }) {
  return (
    <ul className="no-scrollbar flex gap-2.5 overflow-x-auto pb-1">
      {prizes.map((prize) => (
        <li key={prize.id} className="shrink-0">
          <div className="glass-panel grid size-14 place-items-center rounded-2xl">
            <img
              src={rewardArt[prize.kind]}
              alt={prize.title}
              width={512}
              height={512}
              loading="lazy"
              className="size-9 object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
