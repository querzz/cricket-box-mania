import { rewardArt } from "@/components/assets";
import { Modal } from "@/components/kit/Modal";
import { PrimaryButton } from "@/components/kit/PrimaryButton";
import { Sparkles } from "@/components/kit/Sparkles";
import type { Reward } from "@/lib/types";

interface Props {
  reward: Reward | null;
  onClaim: () => void;
  onSpinAgain?: (() => void) | undefined;
  spinAgainDisabled?: boolean | undefined;
  claiming?: boolean | undefined;
}

export function RewardModal({ reward, onClaim, onSpinAgain, spinAgainDisabled, claiming }: Props) {
  if (!reward) return null;
  const empty = reward.kind === "EMPTY";

  return (
    <Modal open onClose={onClaim} className="text-center">
      <div className="relative pb-2 pt-2">
        {!empty && <Sparkles count={18} />}
        <p className="font-display text-xs uppercase tracking-[0.3em] text-primary-glow">
          {empty ? "No luck" : "You won"}
        </p>

        <div className="relative mx-auto mt-5 grid size-40 place-items-center">
          <div
            aria-hidden
            className="absolute size-32 rounded-full bg-primary/40 blur-3xl animate-glow-pulse"
          />
          <img
            src={rewardArt[reward.kind]}
            alt={reward.title}
            width={512}
            height={512}
            className="relative size-32 object-contain animate-pop-in drop-shadow-[0_0_28px_oklch(0.75_0.15_350_/_55%)]"
          />
        </div>

        <h2 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.1em] animate-rise">
          {reward.title}
        </h2>
        <p className="mt-1.5 text-xs text-muted-foreground">
          {empty ? "The box was empty. Try another spin." : (reward.subtitle ?? "Congratulations!")}
        </p>

        <div className="mt-6 space-y-2">
          <PrimaryButton fullWidth loading={claiming} onClick={onClaim}>
            {empty ? "Close" : "Claim"}
          </PrimaryButton>
          {onSpinAgain && (
            <PrimaryButton
              variant="ghost"
              fullWidth
              disabled={spinAgainDisabled || claiming}
              onClick={onSpinAgain}
            >
              Spin again
            </PrimaryButton>
          )}
        </div>
      </div>
    </Modal>
  );
}
