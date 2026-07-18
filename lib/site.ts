export const site = {
  name: "Opal Life Coaching",
  tagline: "With Cara",
  email: "hello@opallifecoaching.com",
  location: "Chichester & Eastergate, West Sussex",
  url: "https://opal-life-coaching.vercel.app",
  ogImage: "/assets/cara-tarot.png",
  /** Flip to true when ready for search engines. */
  allowIndexing: false,
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

export const serviceLinks = [
  { href: "/coaching", label: "Life Coaching" },
  { href: "/tarot", label: "Tarot Readings" },
  { href: "/reiki", label: "Reiki Healing" },
] as const;

export const mainNavLinks = [
  { href: "/about", label: "About Cara" },
  { href: "/contact", label: "Contact" },
] as const;

export const contactServiceOptions = [
  { value: "coaching", label: "Life coaching" },
  { value: "tarot", label: "Tarot readings" },
  { value: "reiki", label: "Reiki healing" },
  { value: "unsure", label: "Not sure yet" },
] as const;
