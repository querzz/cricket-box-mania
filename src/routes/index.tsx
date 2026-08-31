import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Heart } from "lucide-react";

import { assets } from "@/components/assets";
import { AppShell } from "@/components/kit/AppShell";
import { Countdown } from "@/components/kit/Countdown";
import { GiftButton } from "@/components/kit/GiftCard";
import { GlassCard } from "@/components/kit/GlassCard";
import { PrimaryButton } from "@/components/kit/PrimaryButton";
import { PrizeStrip } from "@/components/kit/PrizePool";
import { Avatar } from "@/components/kit/ProfileHeader";
import { StatusBadge } from "@/components/kit/StatusBadge";
import { ErrorState, LoadingState, NoticeBar } from "@/components/kit/States";
import { StarsBalance } from "@/components/kit/StarsBalance";
import { seasonUi } from "@/lib/season";
import { formatRange } from "@/lib/format";
import { useSession } from "@/store/session";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRICKET BOX — Seasonal prize box mini app" },
      {
        name: "description",
        content:
          "Enter the CRICKET BOX season, spin the box, collect internal Stars and claim your daily gift.",
      },
      { property: "og:title", content: "CRICKET BOX — Seasonal prize box mini app" },
      {
        property: "og:description",
        content: "Spin the Cricket Box, collect rewards and internal Stars each season.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomeScreen,
});

function HomeScreen() {
  const { snapshot, loading, error, refresh } = useSession();
  const navigate = useNavigate();

  if (loading && !snapshot)
    return (
      <AppShell bare>
        <LoadingState label="Opening the box" />
      </AppShell>
    );
  if (!snapshot)
    return (
      <AppShell bare>
        <div className="pt-24">
          <ErrorState onRetry={() => void refresh()} description={error?.message} />
        </div>
      </AppShell>
    );

  const ui = seasonUi(snapshot);
  const attempts = snapshot.spin.freeSpins;

  return (
    <AppShell bare className="pt-[env(safe-area-inset-top)]">
      <section className="relative -mx-4 overflow-hidden rounded-b-[2rem]">
        <img
          src={assets.mascot}
          alt="Cricket Box mascot"
          width={768}
          height={1024}
          className="absolute inset-0 size-full object-cover object-top opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background"
        />

        <div className="relative px-4 pb-6 pt-[calc(0.75rem+env(safe-area-inset-top))]">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2">
            <Link to="/profile" aria-label="Profile">
              <Avatar size={40} />
            </Link>
            <div className="flex justify-end">
              <Link
                to="/withdraw"
                className="press glass-panel flex items-center gap-1.5 rounded-full px-3 py-1.5"
              >
                <StarsBalance balance={snapshot.stars} size="sm" showMax={false} />
              </Link>
            </div>
            <GiftButton gift={snapshot.gift} />
          </div>

          <div className="mt-8">
            <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.04em] text-gradient-primary drop-shadow-[0_0_24px_oklch(0.7_0.18_350_/_35%)]">
              Cricket
              <br />
              Box
            </h1>
            <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {snapshot.season.code} · {formatRange(snapshot.season.startsAt, snapshot.season.endsAt)}
            </p>
          </div>

          <GlassCard className="mt-6 px-4 py-3.5">
            <div className="flex items-start justify-between gap-3">
              <Countdown target={snapshot.season.endsAt} label="Season ends in" />
              <StatusBadge status={{ type: "season", value: snapshot.season.state }} />
            </div>
            <div className="mt-3 border-t border-glass-border pt-3 text-[11px] text-muted-foreground">
              <p>{ui.note}</p>
              <p className="mt-1">
                {snapshot.user.isParticipant ? "You are participating" : "Not participating yet"} ·{" "}
                {attempts} free attempt{attempts === 1 ? "" : "s"}
              </p>
            </div>
          </GlassCard>

          <div className="mt-5">
            <PrimaryButton
              fullWidth
              disabled={!ui.canSpin}
              onClick={() => void navigate({ to: "/draw" })}
            >
              {ui.ctaLabel}
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Possible prizes
          </h2>
          <Link
            to="/prizes"
            className="flex items-center gap-0.5 text-[11px] text-muted-foreground"
          >
            See all <ChevronRight className="size-3.5" />
          </Link>
        </div>
        <PrizeStrip prizes={snapshot.prizes} />
      </section>

      {!snapshot.user.isSubscribed && (
        <NoticeBar tone="warning" className="mt-4">
          Subscribe to the channel to unlock spins and the daily gift.
        </NoticeBar>
      )}

      <GlassCard className="mt-4 flex items-center gap-3 px-3.5 py-3">
        <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-muted-foreground">
          Subscribe to the channel and get more chances to win each season.
        </p>
        <span className="press grid size-9 shrink-0 place-items-center rounded-full [background-image:var(--gradient-primary)]">
          <Heart className="size-4 text-primary-foreground" />
        </span>
      </GlassCard>
    </AppShell>
  );
}
