import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

import { BottomNavigation } from "@/components/kit/BottomNavigation";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
  title?: string | undefined;
  back?: string | undefined;
  action?: ReactNode | undefined;
  bare?: boolean | undefined;
  nav?: boolean | undefined;
  className?: string | undefined;
}

export function AppShell({
  children,
  title,
  back,
  action,
  bare = false,
  nav = true,
  className,
}: AppShellProps) {
  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-[430px] bg-background">
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[60vh] stage-glow" />

      {!bare && (
        <header className="sticky top-0 z-30 grid grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-center gap-2 bg-background/80 px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] backdrop-blur-xl">
          {back ? (
            <Link
              to={back}
              className="press grid size-9 place-items-center rounded-full bg-muted/50 text-foreground"
              aria-label="Back"
            >
              <ChevronLeft className="size-5" />
            </Link>
          ) : (
            <span />
          )}
          <h1 className="truncate text-center font-display text-sm font-semibold uppercase tracking-[0.22em]">
            {title}
          </h1>
          <div className="flex justify-end">{action}</div>
        </header>
      )}

      <main
        className={cn(
          "relative z-10 px-4",
          bare ? "pt-0" : "pt-1",
          nav ? "pb-[calc(6.5rem+env(safe-area-inset-bottom))]" : "pb-10",
          className,
        )}
      >
        {children}
      </main>

      {nav && <BottomNavigation />}
    </div>
  );
}
