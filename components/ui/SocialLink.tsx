import { site } from "@/lib/site";

type SocialLinkProps = {
  network: "facebook" | "instagram";
  className?: string;
  showLabel?: boolean;
};

const socialMeta = {
  facebook: {
    label: "Facebook",
    icon: "/assets/icon-social-facebook.svg",
    href: site.social.facebook,
  },
  instagram: {
    label: "Instagram",
    icon: "/assets/icon-social-instagram.svg",
    href: site.social.instagram,
  },
} as const;

export function SocialLink({ network, className = "", showLabel = true }: SocialLinkProps) {
  const meta = socialMeta[network];
  if (!meta.href) return null;

  return (
    <a
      className={className}
      href={meta.href}
      aria-label={meta.label}
      rel="noopener noreferrer"
    >
      <img src={meta.icon} alt="" width={20} height={20} className={"block h-5 w-5"} />
      {showLabel ? <span>{meta.label}</span> : null}
    </a>
  );
}

export function hasSocialLinks() {
  return Boolean(site.social.facebook || site.social.instagram);
}
