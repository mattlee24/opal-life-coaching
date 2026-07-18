export type CalBookingEvent = {
  title: string;
  slug: string;
  lengthInMinutes: number;
  priceGbp: number;
  description: string;
  location: "video" | "inPerson";
  note?: string;
};

export type CalBookingCategoryId = "coaching" | "tarot" | "reiki" | "combined";

export const calBookingCategories: {
  id: CalBookingCategoryId;
  label: string;
  icon?: string;
  blurb?: string;
}[] = [
  {
    id: "coaching",
    label: "Life Coaching",
    icon: "/assets/svc-icon-coaching.png",
    blurb:
      "A calm, collaborative space to untangle what's feeling heavy, clarify what you want, and take steps that feel genuinely right for you.",
  },
  {
    id: "tarot",
    label: "Tarot Readings",
    icon: "/assets/svc-icon-tarot.png",
    blurb:
      "Thoughtful readings for reflection and fresh perspective — online, by message, or in person.",
  },
  {
    id: "reiki",
    label: "Reiki Healing",
    icon: "/assets/svc-icon-reiki.png",
    blurb:
      "Gentle energy healing to restore balance, ease tension, and support your wellbeing.",
  },
  {
    id: "combined",
    label: "Combined Sessions",
    blurb:
      "Coaching, tarot and Reiki woven together in one session, shaped around what you need most.",
  },
];

export const calBookingEvents: CalBookingEvent[] = [
  {
    title: "Tarot — Phone/Zoom (30 min)",
    slug: "tarot-phone-zoom-30",
    lengthInMinutes: 30,
    priceGbp: 30,
    description:
      "A live tarot reading over phone or Zoom, where we can explore your situation in more depth.",
    location: "video",
  },
  {
    title: "Tarot — Phone/Zoom (60 min)",
    slug: "tarot-phone-zoom-60",
    lengthInMinutes: 60,
    priceGbp: 45,
    description:
      "A longer live tarot reading over phone or Zoom with more time to explore your situation in depth.",
    location: "video",
  },
  {
    title: "Tarot — Messaging (30 min)",
    slug: "tarot-messaging-30",
    lengthInMinutes: 30,
    priceGbp: 25,
    description:
      "A flexible reading via message or voice note, giving you clear insight and guidance at your own pace.",
    location: "video",
    note: "Async delivery — book a start time; reading follows by message/voice note.",
  },
  {
    title: "Tarot — Messaging (60 min)",
    slug: "tarot-messaging-60",
    lengthInMinutes: 60,
    priceGbp: 40,
    description: "Extended tarot reading via message or voice note at your own pace.",
    location: "video",
    note: "Async delivery — book a start time; reading follows by message/voice note.",
  },
  {
    title: "Tarot — In person (30 min)",
    slug: "tarot-in-person-30",
    lengthInMinutes: 30,
    priceGbp: 35,
    description:
      "A relaxed, in-person reading in a calm, private setting, with space to talk things through and gain clarity.",
    location: "inPerson",
  },
  {
    title: "Tarot — In person (60 min)",
    slug: "tarot-in-person-60",
    lengthInMinutes: 60,
    priceGbp: 55,
    description: "A deeper in-person tarot reading in a calm, private setting.",
    location: "inPerson",
  },
  {
    title: "Life Coaching — Online (60 min)",
    slug: "coaching-online-60",
    lengthInMinutes: 60,
    priceGbp: 40,
    description:
      "Coaching from the comfort of your own home. Ideal if you prefer flexibility or aren't local.",
    location: "video",
  },
  {
    title: "Life Coaching — Online (90 min)",
    slug: "coaching-online-90",
    lengthInMinutes: 90,
    priceGbp: 55,
    description:
      "Extended online coaching session with more time to work through what's keeping you stuck.",
    location: "video",
  },
  {
    title: "Life Coaching — Phone/Zoom (60 min)",
    slug: "coaching-phone-zoom-60",
    lengthInMinutes: 60,
    priceGbp: 50,
    description:
      "A calm, supportive space to talk things through, gain clarity and work out your next steps.",
    location: "video",
  },
  {
    title: "Life Coaching — Phone/Zoom (90 min)",
    slug: "coaching-phone-zoom-90",
    lengthInMinutes: 90,
    priceGbp: 65,
    description: "Extended phone or Zoom coaching session.",
    location: "video",
  },
  {
    title: "Life Coaching — In person (60 min)",
    slug: "coaching-in-person-60",
    lengthInMinutes: 60,
    priceGbp: 60,
    description: "In-person sessions in a calm, private space in Eastergate/Chichester.",
    location: "inPerson",
  },
  {
    title: "Life Coaching — In person (90 min)",
    slug: "coaching-in-person-90",
    lengthInMinutes: 90,
    priceGbp: 75,
    description: "Extended in-person coaching in a calm, private space.",
    location: "inPerson",
  },
  {
    title: "Life Coaching — Group session (90 min)",
    slug: "coaching-group-90",
    lengthInMinutes: 90,
    priceGbp: 25,
    description:
      "Small group coaching (Zoom or in person). Message or email for upcoming dates: carahunter@opallifecoaching.co.uk",
    location: "video",
  },
  {
    title: "Reiki — Distance (30 min)",
    slug: "reiki-distance-30",
    lengthInMinutes: 30,
    priceGbp: 25,
    description: "Reiki sent remotely, with a follow-up explanation of what came through.",
    location: "video",
  },
  {
    title: "Reiki — Phone/Zoom (40 min)",
    slug: "reiki-phone-zoom-40",
    lengthInMinutes: 40,
    priceGbp: 35,
    description:
      "A guided reiki session over phone or Zoom, allowing you to relax while I support you through the process.",
    location: "video",
  },
  {
    title: "Reiki — In person (40 min)",
    slug: "reiki-in-person-40",
    lengthInMinutes: 40,
    priceGbp: 40,
    description:
      "A calming, in-person reiki session in a quiet, private setting to help you fully switch off and reset.",
    location: "inPerson",
  },
  {
    title: "Combined — Messaging (60 min)",
    slug: "combined-messaging-60",
    lengthInMinutes: 60,
    priceGbp: 40,
    description:
      "A flexible session combining coaching, tarot and/or reiki via message or voice note.",
    location: "video",
    note: "Async delivery option available — tailored to what suits you.",
  },
  {
    title: "Combined — Messaging (90 min)",
    slug: "combined-messaging-90",
    lengthInMinutes: 90,
    priceGbp: 55,
    description: "Extended combined session via message or voice note.",
    location: "video",
  },
  {
    title: "Combined — Phone/Zoom (60 min)",
    slug: "combined-phone-zoom-60",
    lengthInMinutes: 60,
    priceGbp: 50,
    description:
      "A relaxed, guided session combining coaching, tarot and/or reiki over phone or Zoom.",
    location: "video",
  },
  {
    title: "Combined — Phone/Zoom (90 min)",
    slug: "combined-phone-zoom-90",
    lengthInMinutes: 90,
    priceGbp: 65,
    description: "Extended combined session over phone or Zoom.",
    location: "video",
  },
  {
    title: "Combined — In person (60 min)",
    slug: "combined-in-person-60",
    lengthInMinutes: 60,
    priceGbp: 60,
    description:
      "A calm, private session in my home, combining coaching, tarot and/or reiki, tailored to you.",
    location: "inPerson",
  },
  {
    title: "Combined — In person (90 min)",
    slug: "combined-in-person-90",
    lengthInMinutes: 90,
    priceGbp: 75,
    description: "Extended combined in-person session tailored to you.",
    location: "inPerson",
  },
];

export function getCalEventCategoryId(title: string): CalBookingCategoryId {
  if (title.startsWith("Life Coaching")) return "coaching";
  if (title.startsWith("Tarot")) return "tarot";
  if (title.startsWith("Reiki")) return "reiki";
  return "combined";
}

export function getCalEventShortTitle(title: string): string {
  return title.replace(/^[^:]+:\s*/, "");
}

export function groupCalBookingEventsByCategory() {
  return calBookingCategories.map((category) => ({
    ...category,
    events: calBookingEvents.filter(
      (event) => getCalEventCategoryId(event.title) === category.id,
    ),
  }));
}
