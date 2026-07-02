import { cn } from "@/lib/cn";

type OpalSepProps = {
  center?: boolean;
  wide?: boolean;
  className?: string;
};

export function OpalSep({ center, wide, className }: OpalSepProps) {
  return (
    <div
      className={cn(
        "opal-sep flex items-center gap-4",
        center && "justify-center w-full max-w-[400px] mx-auto",
        wide && "max-w-[480px]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="flex-1 min-w-[2.5rem] h-0.5 rounded-sm bg-gradient-to-r from-pastel-lilac/0 via-pastel-lilac/55 to-pastel-mint/70" />
      <span className="shrink-0 w-[26px] h-[26px] drop-shadow-[0_3px_10px_rgba(179,162,254,.32)]">
        <img src="/assets/icon-opal-heart.svg" alt="" className="block w-full h-full" />
      </span>
      <span className="flex-1 min-w-[2.5rem] h-0.5 rounded-sm bg-gradient-to-r from-pastel-mint/70 via-pastel-lilac/55 to-pastel-lilac/0" />
    </div>
  );
}
