"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  id?: string;
  /** Stretch to parent grid/flex cell */
  fill?: boolean;
};

function shouldReveal(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewport = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewport * 0.92 && rect.bottom > viewport * 0.06;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  id,
  fill = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => element.classList.add("is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      show();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: [0, 0.05, 0.12],
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(element);

    const checkVisible = () => {
      if (shouldReveal(element)) {
        reveal();
        observer.unobserve(element);
      }
    };

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(checkVisible);
    });
    window.addEventListener("scroll", checkVisible, { passive: true });
    window.addEventListener("resize", checkVisible, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", checkVisible);
      window.removeEventListener("resize", checkVisible);
    };
  }, []);

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "reveal",
        `reveal--${variant}`,
        fill && "reveal--fill",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  staggerMs?: number;
};

export function RevealStagger({
  children,
  className = "",
  itemClassName = "",
  staggerMs = 110,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => element.classList.add("is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      show();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);

    const checkVisible = () => {
      if (shouldReveal(element)) {
        reveal();
        observer.unobserve(element);
      }
    };

    checkVisible();
    requestAnimationFrame(checkVisible);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal-stagger", className)}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn("reveal-stagger__item", itemClassName)}
              style={{ "--stagger-index": index, "--stagger-ms": `${staggerMs}ms` } as CSSProperties}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
