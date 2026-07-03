import type { ServiceVariant } from "@/lib/services";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { cn } from "@/lib/cn";
import { HeroVisual3D } from "./HeroVisual3D";

type ServiceHeroVisualProps = {
  icon: string;
  variant: ServiceVariant;
  tag: string;
  title: string;
};

export function ServiceHeroVisual({
  icon,
  variant,
  tag,
  title,
}: ServiceHeroVisualProps) {
  return (
    <HeroVisual3D className={"hero-service-visual"}>
      <div className={cn("hero-orbit pointer-events-none absolute rounded-full border border-pastel-lilac/22 animate-[hero-orbit-spin_28s_linear_infinite] motion-reduce:animate-none", "hero-orbit--outer inset-[2%] border-pastel-mint/35")} aria-hidden="true" />
      <div className={cn("hero-orbit pointer-events-none absolute rounded-full border border-pastel-lilac/22 animate-[hero-orbit-spin_28s_linear_infinite] motion-reduce:animate-none", "hero-orbit--inner inset-[14%] animate-[hero-orbit-spin_22s_linear_infinite_reverse] border-dashed border-pastel-lilac/28 motion-reduce:animate-none")} aria-hidden="true" />
      <div className={cn("hero-float pointer-events-none absolute z-[4] opacity-55 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.18))] animate-[hero-float-drift_7s_ease-in-out_infinite] motion-reduce:animate-none", "hero-float--a top-[6%] right-[2%] w-[min(52px,14vw)] [animation-delay:-1.5s]")} aria-hidden="true">
        <DecorativeImage src="/assets/nature-leaf-opal.svg" width={80} height={80} className={"block h-auto w-full"} />
      </div>
      <div className={cn("hero-float pointer-events-none absolute z-[4] opacity-55 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.18))] animate-[hero-float-drift_7s_ease-in-out_infinite] motion-reduce:animate-none", "hero-float--b bottom-[10%] left-0 w-[min(64px,16vw)] [animation-delay:-3.2s]")} aria-hidden="true">
        <DecorativeImage src="/assets/sprig-delicate.svg" width={40} height={80} className={"block h-auto w-full"} />
      </div>
      <div className={cn("hero-float pointer-events-none absolute z-[4] opacity-55 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.18))] animate-[hero-float-drift_7s_ease-in-out_infinite] motion-reduce:animate-none", "hero-float--c top-[18%] left-[4%] w-[min(44px,12vw)] [animation-delay:-4.8s]")} aria-hidden="true">
        <DecorativeImage src="/assets/sprig-fern.svg" width={48} height={96} className={"block h-auto w-full"} />
      </div>
      <article className={cn("hero-service-card pointer-events-none relative z-[3] mx-auto w-[min(100%,340px)] [transform:translateZ(48px)] shadow-[0_1px_0_rgba(255,255,255,.95)_inset,0_28px_70px_rgba(93,138,111,.14),0_12px_36px_rgba(179,162,254,.12)] hover:[transform:translateZ(48px)]", "svc-card relative flex h-auto flex-col isolate overflow-hidden rounded-[26px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fdfffe_0%,#f3f9f6_55%,#f8f6fc_100%)] pb-[clamp(1.65rem,4vw,2.35rem)] shadow-[0_1px_0_rgba(255,255,255,.95)_inset,0_20px_54px_rgba(93,138,111,.08),0_8px_26px_rgba(179,162,254,.05)] transition-[transform,box-shadow] duration-500 ease-opal hover:-translate-y-2.5 hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_32px_70px_rgba(93,138,111,.13),0_14px_36px_rgba(179,162,254,.12)] motion-reduce:hover:translate-y-0", "svc-card", variant)}>
        <span className={"svc-opal-sheen pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"} aria-hidden="true" />
        <div className={"svc-icon-hero relative z-[2] flex min-h-[clamp(200px,21vw,240px)] items-center justify-center px-4 pt-[clamp(1.65rem,4vw,2rem)] pb-[clamp(1.15rem,3vw,1.65rem)] max-md:min-h-[170px] max-md:pt-6 max-md:pb-4 lg:min-h-[200px] xl:min-h-[230px] xl:pt-10"}>
          <div className={"svc-icon-halo relative flex aspect-square w-[min(176px,76%)] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(244,252,248,.95)_35%,rgba(212,235,228,.75)_62%,rgba(188,228,222,.35)_82%,transparent_94%)] shadow-[0_14px_44px_rgba(93,138,111,.13),0_0_0_2px_rgba(122,171,142,.14)_inset,0_0_0_6px_rgba(255,255,255,.7)] transition-[transform,box-shadow] duration-[550ms] ease-opal max-md:w-[min(152px,68%)] lg:w-[min(172px,76%)] xl:w-[188px]"}>
            <DecorativeImage
              src={icon}
              width={400}
              height={266}
              className={"relative z-[1] h-auto w-[min(146px,82%)] object-contain [filter:saturate(1.12)_contrast(1.06)_drop-shadow(0_10px_22px_rgba(93,138,111,.18))] transition-transform duration-[550ms] ease-opal lg:w-[min(142px,82%)] xl:w-[156px]"}
            />
          </div>
        </div>
        <div className={"svc-divider relative z-[2] mx-auto mb-[.25rem] h-px w-[min(100px,42%)] bg-[linear-gradient(90deg,transparent,rgba(179,162,254,.38)_20%,rgba(188,228,222,.45)_50%,rgba(179,162,254,.38)_80%,transparent)]"} aria-hidden="true" />
        <div className={"svc-card-body relative z-[2] flex min-h-0 flex-1 flex-col items-center px-[1.65rem] pt-[.65rem] text-center"}>
          <span
            className={cn(
              "svc-tag mb-[.75rem] inline-block rounded-full px-[.65rem] py-[.28rem] text-[.6rem] font-bold uppercase tracking-[.13em]",
              variant === "c" && "border border-[#a2bffe]/25 bg-[rgba(232,240,255,.7)] text-[#5f4fd4]",
              variant === "t" && "border border-pastel-lilac/22 bg-[rgba(244,240,255,.75)] text-[#7d68e8]",
              variant === "r" && "border border-pastel-mint/32 bg-[rgba(236,248,245,.8)] text-[#4a8f7a]",
            )}
          >
            {tag}
          </span>
          <h3 className={"text-[clamp(1.58rem,2.2vw,1.95rem)] leading-[1.1] tracking-[-.015em] text-blue transition-colors"}>{title}</h3>
        </div>
      </article>
    </HeroVisual3D>
  );
}
