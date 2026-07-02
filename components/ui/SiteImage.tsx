import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type SiteImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
};

export function SiteImage({ className, alt, ...props }: SiteImageProps) {
  return <Image alt={alt} className={cn(className)} {...props} />;
}

type SiteImageFillProps = Omit<ImageProps, "alt" | "fill"> & {
  alt: string;
  className?: string;
};

export function SiteImageFill({ className, alt, ...props }: SiteImageFillProps) {
  return <Image alt={alt} fill className={cn(className)} {...props} />;
}
