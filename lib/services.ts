export type ServiceVariant = "c" | "t" | "r";

export type ServicePageData = {
  slug: string;
  variant: ServiceVariant;
  icon: string;
  tag: string;
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    script: string;
    description: string;
    trust: string[];
    tone?: "lavender" | "sage" | "opal";
  };
  intro: string;
  pullQuote: string;
  overview: {
    title: string;
    script: string;
    subline: string;
  };
  benefits: { title: string; text: string }[];
  sessions: {
    name: string;
    duration: string;
    format: string;
    price: string;
    description: string;
  }[];
  expectations: string[];
  faqs: { question: string; answer: string }[];
  bookingLabel: string;
  sessionsImage?: string;
  sessionsImageAlt?: string;
};

export const services: Record<string, ServicePageData> = {
  coaching: {
    slug: "coaching",
    variant: "c",
    icon: "/assets/svc-icon-coaching.png",
    tag: "Clarity",
    seo: {
      title: "Life Coaching — Opal Life Coaching",
      description:
        "One-to-one life coaching in West Sussex and online — clarity, confidence and gentle support at your pace.",
    },
    hero: {
      eyebrow: "Services",
      title: "Life Coaching",
      script: "clarity and confidence",
      description:
        "Practical, personal coaching for transitions, decisions and the life you're building — always at your pace.",
      trust: ["Free discovery call", "Online or in person", "At your pace"],
      tone: "lavender",
    },
    intro:
      "Life coaching with Cara is a calm, collaborative space to untangle what's feeling heavy, clarify what you want, and take steps that feel genuinely right for you. There's no fixed formula — sessions are shaped around your story, your goals, and where you are today.",
    pullQuote:
      "You don't need to have it all figured out before we begin. We start exactly where you are.",
    overview: {
      title: "A space shaped",
      script: "around you",
      subline: "Personal, unhurried support for the season you're in.",
    },
    benefits: [
      {
        title: "Clarity without pressure",
        text: "Explore options, priorities and next steps in a space that feels safe — never rushed or judged.",
      },
      {
        title: "Confidence that lasts",
        text: "Build self-trust and practical tools you can carry forward long after our sessions end.",
      },
      {
        title: "Transitions made gentler",
        text: "Career changes, life crossroads, burnout recovery — support tailored to your season of life.",
      },
    ],
    sessions: [
      {
        name: "Discovery call",
        duration: "30 minutes",
        format: "Online",
        price: "Free",
        description:
          "A relaxed introduction to see if coaching feels like the right fit — no obligation.",
      },
      {
        name: "Single session",
        duration: "60 minutes",
        format: "Online or in person",
        price: "£75",
        description:
          "Focused time on one theme — a decision, a block, or a moment of change you want to navigate.",
      },
      {
        name: "Coaching bundle",
        duration: "3 × 60 minutes",
        format: "Online or in person",
        price: "£210",
        description:
          "Deeper support over several weeks — ideal when you want continuity and momentum.",
      },
    ],
    expectations: [
      "We begin with a conversation about where you are and what you're hoping for",
      "Sessions blend practical coaching with intuitive, holistic support",
      "You'll leave with gentle actions — never homework that overwhelms",
      "Online sessions via video call; in person in Chichester or Eastergate",
    ],
    faqs: [
      {
        question: "Do I need a specific goal before booking?",
        answer:
          "Not at all. Many clients arrive feeling stuck or unclear. Part of our work together is helping you define what matters and what a good next step looks like.",
      },
      {
        question: "How often should we meet?",
        answer:
          "That's entirely up to you. Some people book weekly for a season; others prefer fortnightly or occasional top-up sessions. We'll find a rhythm that feels sustainable.",
      },
    ],
    bookingLabel: "Life Coaching",
  },
  tarot: {
    slug: "tarot",
    variant: "t",
    icon: "/assets/svc-icon-tarot.png",
    tag: "Reflection",
    sessionsImage: "/assets/cara-tarot-session.jpg",
    sessionsImageAlt: "Cara at the table guiding a tarot reading with cards and a crystal wand",
    seo: {
      title: "Tarot Readings — Opal Life Coaching",
      description:
        "Thoughtful tarot readings for reflection and fresh perspective — online and in person in West Sussex.",
    },
    hero: {
      eyebrow: "Services",
      title: "Tarot Readings",
      script: "reflection and insight",
      description:
        "Thoughtful, intuitive readings offering fresh perspective and space for deep reflection.",
      trust: ["Reflective, not predictive", "Online or in person", "Warm & personal"],
      tone: "lavender",
    },
    intro:
      "Tarot with Cara is not about predicting the future — it's a gentle, reflective practice that helps you see your situation more clearly, notice patterns, and explore possibilities you might have overlooked. Readings are conversational, warm and entirely personal to you.",
    pullQuote:
      "The cards open a door to reflection. You always hold the key to what you do next.",
    overview: {
      title: "Reflection with",
      script: "room to breathe",
      subline: "Insight without pressure — only what resonates with you.",
    },
    benefits: [
      {
        title: "Fresh perspective",
        text: "See your choices, relationships and challenges from a new angle — with compassion, not judgement.",
      },
      {
        title: "Space to pause",
        text: "A dedicated hour to slow down, breathe, and listen to what you already know deep down.",
      },
      {
        title: "Blended with coaching",
        text: "Readings can stand alone or weave naturally into coaching work when that feels helpful.",
      },
    ],
    sessions: [
      {
        name: "Mini reading",
        duration: "30 minutes",
        format: "Online",
        price: "£40",
        description:
          "A focused spread on one question or theme — ideal for a single decision or moment of uncertainty.",
      },
      {
        name: "Full reading",
        duration: "60 minutes",
        format: "Online or in person",
        price: "£65",
        description:
          "A deeper exploration with space to talk through what arises and how it lands for you.",
      },
      {
        name: "Reading & reflection",
        duration: "75 minutes",
        format: "Online or in person",
        price: "£80",
        description:
          "Extended session combining tarot with gentle coaching conversation and integration time.",
      },
    ],
    expectations: [
      "You are welcome to bring a question — or simply arrive open to what emerges",
      "Readings are reflective, not fortune-telling; you remain in charge of your choices",
      "Online sessions work beautifully; in-person readings available locally",
      "Notes and themes from the reading can be sent afterwards if you'd find that helpful",
    ],
    faqs: [
      {
        question: "I've never had a tarot reading — is that okay?",
        answer:
          "Absolutely. Cara explains the process as you go, and there's never any pressure to believe or interpret things a certain way. It's simply a tool for reflection.",
      },
      {
        question: "Can tarot be combined with coaching?",
        answer:
          "Yes — many clients enjoy blending both. We can talk through what that might look like when you get in touch.",
      },
    ],
    bookingLabel: "Tarot Readings",
  },
  reiki: {
    slug: "reiki",
    variant: "r",
    icon: "/assets/svc-icon-reiki.png",
    tag: "Balance",
    sessionsImage: "/assets/reiki-room.jpg",
    sessionsImageAlt: "The calm Reiki treatment room with massage table, crystals and soft light",
    seo: {
      title: "Reiki Healing — Opal Life Coaching",
      description:
        "Gentle Reiki healing in Chichester and Eastergate — release tension, restore balance and invite calm.",
    },
    hero: {
      eyebrow: "Services",
      title: "Reiki Healing",
      script: "balance and peace",
      description:
        "Release tension, restore balance, and invite profound peace through gentle energy healing.",
      trust: ["In-person sessions", "Chichester & Eastergate", "Deep relaxation"],
      tone: "lavender",
    },
    intro:
      "Reiki is a gentle, hands-on or hands-near healing practice that helps your body and mind settle into a state of deep rest. Many clients describe feeling lighter, calmer and more grounded afterwards — as though they've finally been able to exhale properly.",
    pullQuote:
      "You don't need to do anything except arrive. Rest is enough.",
    overview: {
      title: "Healing that",
      script: "meets you gently",
      subline: "Deep rest for body and mind, entirely at your pace.",
    },
    benefits: [
      {
        title: "Deep relaxation",
        text: "Switch off the noise and allow your nervous system the rest it has been craving.",
      },
      {
        title: "Emotional release",
        text: "Held tension — physical or emotional — often softens when the body feels truly safe.",
      },
      {
        title: "Holistic balance",
        text: "Reiki complements coaching and tarot beautifully as part of wider self-care.",
      },
    ],
    sessions: [
      {
        name: "Reiki session",
        duration: "60 minutes",
        format: "In person",
        price: "£60",
        description:
          "Full treatment in a calm, private space — includes a brief check-in before and gentle grounding afterwards.",
      },
      {
        name: "Extended Reiki",
        duration: "90 minutes",
        format: "In person",
        price: "£85",
        description:
          "Extra time for deeper rest — especially supportive during periods of stress or recovery.",
      },
      {
        name: "Reiki & chat",
        duration: "75 minutes",
        format: "In person",
        price: "£75",
        description:
          "Shorter Reiki treatment with time to talk through how you're feeling before and after.",
      },
    ],
    expectations: [
      "Sessions take place in person in Chichester or Eastergate",
      "You remain fully clothed and comfortable throughout",
      "There is no massage — Reiki is gentle, non-invasive energy work",
      "Some people feel immediate calm; others notice shifts over the following days",
    ],
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Comfortable, loose clothing is perfect. You'll relax on a treatment couch or chair — whatever feels best for you.",
      },
      {
        question: "Is Reiki available online?",
        answer:
          "Reiki is offered in person only, so you can fully rest in the calm treatment space. Distance Reiki may be discussed on request.",
      },
    ],
    bookingLabel: "Reiki Healing",
  },
};
