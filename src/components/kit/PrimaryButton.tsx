import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant | undefined;
  loading?: boolean | undefined;
  fullWidth?: boolean | undefined;
  children: ReactNode;
}

const base =
  "press relative inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-semibold uppercase tracking-[0.18em] disabled:pointer-events-none disabled:opacity-45";

const variants: Record<Variant, string> = {
  primary:
    "px-7 py-4 text-primary-foreground shadow-[var(--shadow-glow)] [background-image:var(--gradient-primary)] border border-glass-border",
  outline:
    "px-6 py-3.5 border border-primary/60 text-foreground bg-primary/10 backdrop-blur-md",
  ghost: "px-5 py-3 text-muted-foreground",
};

export function PrimaryButton({
  variant = "primary",
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={cn(base, variants[variant], fullWidth && "w-full", "overflow-hidden", className)}
      {...rest}
    >
      {variant === "primary" && !disabled && !loading && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-foreground/20 blur-md animate-sheen"
        />
      )}
      {loading && <Loader2 className="size-4 animate-spin" />}
      <span className="relative">{children}</span>
    </button>
  );
}
