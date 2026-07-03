import { cn } from "@/lib/cn";

type DecorativeImageProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

/** Decorative-only image with explicit dimensions for layout / Lighthouse best practices. */
export function DecorativeImage({
  src,
  width,
  height,
  className,
}: DecorativeImageProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      decoding="async"
      className={cn(className)}
    />
  );
}
