import { DecorativeImage } from "@/components/ui/DecorativeImage";

type ServiceHeroBackdropProps = {
  icon: string | null;
};

const RINGS = [
  { r: 150, o: 0.5 },
  { r: 215, o: 0.38 },
  { r: 290, o: 0.28 },
  { r: 380, o: 0.2 },
  { r: 480, o: 0.13 },
];

/**
 * Layered hero atmosphere: aurora washes, fine concentric hairlines and the
 * service icon as a large, soft watermark that fades into the copy side.
 */
export function ServiceHeroBackdrop({ icon }: ServiceHeroBackdropProps) {
  if (!icon) return null;

  return (
    <div className={"pointer-events-none absolute inset-0 z-[1] overflow-hidden"} aria-hidden="true">
      {/* aurora washes */}
      <div className={"absolute top-[-12%] right-[-8%] h-[70%] w-[62%] bg-[radial-gradient(ellipse_at_center,rgba(179,162,254,.2),transparent_68%)] blur-2xl"} />
      <div className={"absolute right-[8%] bottom-[-18%] h-[62%] w-[52%] bg-[radial-gradient(ellipse_at_center,rgba(188,228,222,.3),transparent_70%)] blur-2xl"} />

      {/* emblem: rings + glow + icon, centred ~66% across */}
      <div
        className={
          "absolute top-1/2 left-[70%] aspect-square w-[min(1040px,92vw)] -translate-x-1/2 -translate-y-[48%] max-md:left-1/2 max-md:w-[150vw] [mask-image:radial-gradient(circle_closest-side,#000_55%,transparent_100%)]"
        }
      >
        <svg viewBox="-500 -500 1000 1000" className={"absolute inset-0 h-full w-full"}>
          <defs>
            <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#b3a2fe" />
              <stop offset="0.55" stopColor="#a2bffe" />
              <stop offset="1" stopColor="#8fd6c8" />
            </linearGradient>
          </defs>
          {RINGS.map(({ r, o }) => (
            <circle key={r} r={r} fill="none" stroke="url(#hero-ring)" strokeWidth="1" opacity={o} />
          ))}
          <circle r="250" fill="none" stroke="url(#hero-ring)" strokeWidth="1.5" strokeDasharray="1 11" strokeLinecap="round" opacity="0.55" />
          <circle r="430" fill="none" stroke="url(#hero-ring)" strokeWidth="1.5" strokeDasharray="1 14" strokeLinecap="round" opacity="0.4" />
        </svg>
        <div className={"absolute inset-[26%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.85)_0%,rgba(222,240,238,.5)_45%,transparent_72%)]"} />
        <DecorativeImage
          src={icon}
          width={400}
          height={266}
          className={"absolute inset-[16%] h-[68%] w-[68%] object-contain opacity-[.4] [filter:saturate(1.15)_drop-shadow(0_18px_40px_rgba(179,162,254,.25))] max-md:opacity-[.28]"}
        />
      </div>

      {/* keep copy side clean */}
      <div className={"absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,rgba(252,251,255,.85)_0%,rgba(252,251,255,.5)_55%,transparent_100%)] max-md:w-full max-md:bg-[linear-gradient(180deg,rgba(252,251,255,.55),rgba(252,251,255,.25))]"} />
    </div>
  );
}
