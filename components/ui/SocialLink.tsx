import { useSiteSettings } from "@/components/layout/LayoutDataContext";

type SocialLinkProps = {
  network: "facebook" | "instagram";
  className?: string;
  showLabel?: boolean;
};

const socialMeta = {
  facebook: {
    label: "Facebook",
    icon: "/assets/icon-social-facebook.svg",
  },
  instagram: {
    label: "Instagram",
    icon: "/assets/icon-social-instagram.svg",
  },
} as const;

export function SocialLink({ network, className = "", showLabel = true }: SocialLinkProps) {
  const settings = useSiteSettings();
  const meta = socialMeta[network];
  const href = settings.social?.[network];
  if (!href) return null;

  return (
    <a
      className={className}
      href={href}
      aria-label={meta.label}
      rel="noopener noreferrer"
    >
      <img src={meta.icon} alt="" width={20} height={20} className={"block h-5 w-5"} />
      {showLabel ? <span>{meta.label}</span> : null}
    </a>
  );
}

export function useHasSocialLinks() {
  const { social } = useSiteSettings();
  return Boolean(social?.facebook || social?.instagram);
}
