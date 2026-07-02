"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeroVisual3DProps = {
  children: ReactNode;
  className?: string;
};

export function HeroVisual3D({ children, className = "" }: HeroVisual3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--tilt-x", `${y * -14}deg`);
      el.style.setProperty("--tilt-y", `${x * 16}deg`);
      el.style.setProperty("--glow-x", `${50 + x * 28}%`);
      el.style.setProperty("--glow-y", `${42 + y * 24}%`);
    };

    const onLeave = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
      el.style.setProperty("--glow-x", "50%");
      el.style.setProperty("--glow-y", "42%");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "hero-visual-3d relative mx-auto h-auto w-full max-w-[min(420px,100%)] min-h-[clamp(360px,92vw,440px)] overflow-visible [perspective:1400px] [--glow-x:50%] [--glow-y:42%] [--tilt-x:0deg] [--tilt-y:0deg] max-md:max-w-[min(320px,88vw)] max-md:min-h-[clamp(340px,96vw,420px)]",
        className,
      )}
    >
      <div className={"hero-visual-3d-glow absolute inset-[8%] rounded-full"} aria-hidden="true" />
      <div className={"hero-visual-3d-stage relative h-auto min-h-full w-full overflow-visible [transform:rotateX(var(--tilt-x))_rotateY(var(--tilt-y))] [transform-style:preserve-3d] transition-transform duration-[450ms] ease-opal motion-reduce:transition-none"}>{children}</div>
    </div>
  );
}
