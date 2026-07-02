import Link from "next/link";
import type { ReactNode } from "react";
import { OpalSep } from "@/components/ui/OpalSep";
import { cn } from "@/lib/cn";

type PageShellProps = {
  eyebrow: string;
  title: string;
  script?: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  script,
  description,
  children,
}: PageShellProps) {
  return (
    <section className={cn("pb-[var(--section-y)] pt-[var(--page-offset)]")}>
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <header className={"text-center max-w-[640px] mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] [&_h2]:text-[clamp(2rem,4vw,2.75rem)] [&_h2]:mb-3 [&_p]:text-muted [&_p]:text-[1.02rem] [&_p]:leading-[1.78] [&_p]:max-w-[48ch] [&_p]:mt-3 [&_p]:mx-auto"}>
          <p className={"inline-flex items-center justify-center h-[34px] px-[.85rem] text-[.68rem] font-bold tracking-[.18em] uppercase leading-none text-[#9580f5] mb-4 bg-white/55 border border-pastel-lilac/20 rounded-full box-border"}>{eyebrow}</p>
          <h2>
            {title}
            {script ? (
              <>
                <br />
                <span className={"font-script font-normal text-pastel-lilac leading-[1.1]"}>{script}</span>
              </>
            ) : null}
          </h2>
          <p>{description}</p>
          <OpalSep center wide />
        </header>
        {children ?? (
          <p style={{ textAlign: "center" }}>
            <Link href="/contact" className={"inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]"}>
              Book a session
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
