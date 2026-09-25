/**
 * Initial site content, moved verbatim from the original hard-coded components.
 * Image fields reference files in /public/assets by filename; the seed script
 * uploads them to the Media collection and swaps in the resulting ids.
 */

type MediaRef = { media: string };
const media = (file: string): MediaRef => ({ media: file });
const texts = (...items: string[]) => items.map((text) => ({ text }));
const link = (label: string, href: string) => ({ label, href });

export const mediaFiles: { file: string; alt: string }[] = [
  { file: "hero-woodland-v3.jpg", alt: "Soft, sunlit woodland" },
  { file: "cara-meet.jpg", alt: "Cara, life coach and healer" },
  { file: "cara-about-hero.jpg", alt: "Cara smiling during a tarot reading at the table" },
  { file: "about-story-room.jpg", alt: "A calm session space with a wooden table, chairs and soft natural light" },
  { file: "cara-tarot-session.jpg", alt: "Cara at the table guiding a tarot reading with cards and a crystal wand" },
  { file: "reiki-room.jpg", alt: "The calm Reiki treatment room with massage table, crystals and soft light" },
  { file: "cara-speaking.png", alt: "Cara, ready to welcome you" },
  { file: "cara-tarot.png", alt: "Cara with tarot cards" },
  { file: "svc-icon-coaching.png", alt: "Life coaching icon" },
  { file: "svc-icon-tarot.png", alt: "Tarot readings icon" },
  { file: "svc-icon-reiki.png", alt: "Reiki healing icon" },
];

export const services = [
  {
    slug: "coaching",
    title: "Life Coaching",
    shortName: "Coaching",
    tag: "Clarity",
    icon: media("svc-icon-coaching.png"),
    cardDescription:
      "Clarify goals, navigate transitions, and build lasting confidence in the life you're creating.",
    navShort: "Goals, transitions & confidence for the life you're creating.",
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
      trust: texts("Free discovery call", "Online or in person", "At your pace"),
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
    sessionsImage: null,
    sessions: [
      {
        name: "Discovery call",
        duration: "30 minutes",
        format: "Online",
        price: "Free",
        description: "A relaxed introduction to see if coaching feels like the right fit — no obligation.",
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
        description: "Deeper support over several weeks — ideal when you want continuity and momentum.",
      },
    ],
    expectations: texts(
      "We begin with a conversation about where you are and what you're hoping for",
      "Sessions blend practical coaching with intuitive, holistic support",
      "You'll leave with gentle actions — never homework that overwhelms",
      "Online sessions via video call; in person in Chichester or Eastergate",
    ),
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
  {
    slug: "tarot",
    title: "Tarot Readings",
    shortName: "Tarot",
    tag: "Reflection",
    icon: media("svc-icon-tarot.png"),
    cardDescription:
      "Thoughtful, intuitive readings offering fresh perspective and space for deep reflection.",
    navShort: "Intuitive readings with space for perspective & inner wisdom.",
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
      trust: texts("Reflective, not predictive", "Online or in person", "Warm & personal"),
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
    sessionsImage: media("cara-tarot-session.jpg"),
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
        description: "A deeper exploration with space to talk through what arises and how it lands for you.",
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
    expectations: texts(
      "You are welcome to bring a question — or simply arrive open to what emerges",
      "Readings are reflective, not fortune-telling; you remain in charge of your choices",
      "Online sessions work beautifully; in-person readings available locally",
      "Notes and themes from the reading can be sent afterwards if you'd find that helpful",
    ),
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
  {
    slug: "reiki",
    title: "Reiki Healing",
    shortName: "Reiki",
    tag: "Balance",
    icon: media("svc-icon-reiki.png"),
    cardDescription:
      "Release tension, restore balance, and invite profound peace through gentle energy healing.",
    navShort: "Gentle energy healing to release tension & restore calm.",
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
      trust: texts("In-person sessions", "Chichester & Eastergate", "Deep relaxation"),
      tone: "lavender",
    },
    intro:
      "Reiki is a gentle, hands-on or hands-near healing practice that helps your body and mind settle into a state of deep rest. Many clients describe feeling lighter, calmer and more grounded afterwards — as though they've finally been able to exhale properly.",
    pullQuote: "You don't need to do anything except arrive. Rest is enough.",
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
    sessionsImage: media("reiki-room.jpg"),
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
        description: "Extra time for deeper rest — especially supportive during periods of stress or recovery.",
      },
      {
        name: "Reiki & chat",
        duration: "75 minutes",
        format: "In person",
        price: "£75",
        description: "Shorter Reiki treatment with time to talk through how you're feeling before and after.",
      },
    ],
    expectations: texts(
      "Sessions take place in person in Chichester or Eastergate",
      "You remain fully clothed and comfortable throughout",
      "There is no massage — Reiki is gentle, non-invasive energy work",
      "Some people feel immediate calm; others notice shifts over the following days",
    ),
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
];

export const testimonials = [
  {
    theme: "Feeling calmer & clearer",
    quote:
      "I came in feeling overwhelmed and left with a real sense of calm. Cara helped me see things more clearly and find a way forward that actually felt right for me.",
    cite: "Coaching client",
    spotlight: false,
  },
  {
    theme: "Feeling understood & supported",
    quote:
      "Cara has a wonderful way of making you feel truly heard. There was no judgement — just warmth, compassion and gentle guidance exactly when I needed it.",
    cite: "Reiki client",
    spotlight: true,
  },
  {
    theme: "Gaining confidence & direction",
    quote:
      "After our sessions I felt so much more confident about the decisions I was facing. I finally had direction and the belief that I could move forward on my own terms.",
    cite: "Tarot & coaching client",
    spotlight: false,
  },
];

export const faqs = [
  {
    question: "What happens in a first session?",
    answer:
      "We'll start with a relaxed conversation about where you are and what you're hoping for. There's no pressure — it's simply a chance to get to know each other and explore whether my approach feels like the right fit for you.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "Not sure whether coaching, Reiki, tarot or a blend is best? That's completely normal. We can talk it through together and I'll help you find an approach that feels supportive and right for where you are now.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes — many of my coaching and tarot sessions are available online, so you can access support from wherever feels most comfortable. Reiki sessions are typically in person.",
  },
  {
    question: "Where are in-person sessions held?",
    answer:
      "I offer in-person sessions in Chichester and Eastergate, West Sussex — in a calm, private space designed to help you feel at ease from the moment you arrive.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Simply get in touch via the form above, email me directly, or send a message on social media. I'll respond within 24 hours and we can find a time that works for you.",
  },
];

export const globals = {
  "site-settings": {
    name: "Opal Life Coaching",
    tagline: "With Cara",
    email: "hello@opallifecoaching.com",
    location: "Chichester & Eastergate, West Sussex",
    social: { facebook: null, instagram: null },
    seo: {
      description:
        "Holistic life coaching, Reiki healing and tarot readings in West Sussex and online.",
      image: media("cara-tarot.png"),
    },
  },

  header: {
      linksBeforeServices: [link("About Cara", "/about")],
      servicesLabel: "Services",
      linksAfterServices: [link("Contact", "/contact")],
      bookCta: link("Book a session", "/bookings"),
      mobileContactCta: link("Get in touch", "/contact"),
      dropdown: {
        eyebrow: "Explore offerings",
        script: "Find your path",
        lead: "Three gentle ways to be supported — each one personal, unhurried, and entirely yours.",
        cta: link("Book a session", "/bookings"),
        footnote: "Not sure yet?",
        footnoteLink: link("Let's find what fits", "/contact"),
      },
  },
  footer: {
      title: "You're welcome here",
      script: "Take a breath. You're in the right place.",
      calmText: "There's no rush here — whenever you feel ready, I'm here to support you.",
      blurb:
        "Holistic life coaching, Reiki healing and tarot readings — gentle, personal support for your journey.",
      brandScript: "Everything is personal. Everything is at your pace.",
      exploreHeading: "Explore",
      exploreLinks: [
        link("Home", "/"),
        link("About Cara", "/about"),
        link("Bookings", "/bookings"),
        link("Coaching", "/coaching"),
        link("Tarot", "/tarot"),
        link("Reiki", "/reiki"),
        link("Contact", "/contact"),
        link("FAQs", "/#faqs"),
      ],
      contactHeading: "Get in touch",
      locationLines: texts("Chichester & Eastergate", "West Sussex"),
      cta: link("Start your journey", "/bookings"),
      bottomLink: link("Book a session", "/bookings"),
      copyrightName: "Opal Life Coaching",
  },

  "home-page": {
    hero: {
      eyebrow: "Life coaching with Cara",
      title: "Support for your journey.",
      script: "Guidance for your life.",
      lead: "Holistic life coaching, Reiki healing and tarot readings — gentle, personal support when you're ready to move forward.",
      primaryCta: link("Book a session", "/bookings"),
      secondaryCta: link("Explore my services", "#services"),
      trust: texts("Chichester & Eastergate", "In person & online", "At your pace"),
      backgroundImage: media("hero-woodland-v3.jpg"),
    },
    values: [
      {
        icon: "pace",
        title: "At your pace",
        description: "No pressure, no rush — we move forward only when you feel ready.",
      },
      {
        icon: "personal",
        title: "Entirely personal",
        description: "Every session is tailored to you — your story, your goals, your path.",
      },
      {
        icon: "holistic",
        title: "Holistic care",
        description: "Coaching, Reiki and tarot woven together for mind, body and spirit.",
      },
    ],
    servicesSection: {
      eyebrow: "Services",
      title: "Find the support",
      script: "that's right for you",
      lead: "Whether you're seeking clarity, calm, or a fresh perspective — each offering is gentle, personal, and shaped entirely around you. Take your time exploring what resonates.",
      cardButtonLabel: "Find out more",
      footerBefore: "Not sure where to start? Every path can be blended —",
      footerLink: link("get in touch", "#contact"),
      footerAfter: "and we'll find what fits.",
      cards: [
        {
          slug: "coaching",
          title: "Life Coaching",
          tag: "Clarity",
          icon: media("svc-icon-coaching.png"),
          cardDescription:
            "Clarify goals, navigate transitions, and build lasting confidence in the life you're creating.",
        },
        {
          slug: "tarot",
          title: "Tarot Readings",
          tag: "Reflection",
          icon: media("svc-icon-tarot.png"),
          cardDescription:
            "Thoughtful, intuitive readings offering fresh perspective and space for deep reflection.",
        },
        {
          slug: "reiki",
          title: "Reiki Healing",
          tag: "Balance",
          icon: media("svc-icon-reiki.png"),
          cardDescription:
            "Release tension, restore balance, and invite profound peace through gentle energy healing.",
        },
      ],
    },
    meetCara: {
      eyebrow: "Meet Cara",
      greeting: "Hi, I'm",
      name: "Cara",
      quote:
        "I help people who feel stuck, overwhelmed or at a crossroads to find clarity, confidence and a way forward.",
      body: "My approach combines practical coaching, intuition and gentle support to help you create a calmer, happier life — one step at a time.",
      essence: texts("Practical coaching", "Intuitive guidance", "Gentle support"),
      cta: link("Read more about me", "/about"),
      note: "Warm, personal sessions — online or in person.",
      badge: "One step at a time",
      portrait: media("cara-meet.jpg"),
    },
    testimonialsSection: {
      eyebrow: "Client stories",
      title: "Kind words",
      script: "from those I've supported",
      lead: "Every journey is different — here's what clients often share after working together.",
      footerText: "Real stories from real sessions — shared with warmth and permission.",
      cta: link("Read more reviews", "/contact"),
    },
    seo: {
      title: "Opal Life Coaching — With Cara",
      description:
        "Holistic life coaching, Reiki healing and tarot readings — gentle, personal support when you're ready to move forward.",
    },
  },

  "about-page": {
    hero: {
      eyebrow: "About Cara",
      title: "A calm space to",
      script: "be heard",
      lead: "I help people who feel stuck, overwhelmed or at a crossroads find clarity and confidence — with warmth, intuition and absolutely no judgement.",
      primaryCta: link("Book a session", "/bookings"),
      secondaryCta: link("Read my story", "#page-content"),
      trust: texts("West Sussex", "In person & online", "At your pace"),
      badge: "Warm, personal & unhurried",
      portrait: media("cara-about-hero.jpg"),
    },
    story: {
      eyebrow: "My story",
      title: "Warmth, intuition &",
      script: "real life",
      sub: "I'm not here to fix you. You're not broken. I'm here to walk beside you while you find your footing again.",
      lead: "I came to this work after navigating my own seasons of change — the kind that leave you questioning everything and wondering if you're the only one who feels this way. That experience taught me how much difference it makes when someone meets you with genuine warmth, not judgement.",
      detail:
        "Based in West Sussex, I offer sessions in Chichester and Eastergate, as well as online coaching and tarot for clients further afield. Everything is unhurried, confidential and tailored to you.",
      facts: texts("West Sussex", "In person & online", "At your pace"),
      image: media("about-story-room.jpg"),
      caption: "Real conversations, real support",
    },
    essence: {
      kicker: "What guides me",
      title: "Three threads,",
      script: "one conversation",
      intro:
        "The work is never one fixed method. It is a gentle weaving — personal, holistic, and always at a pace that feels kind.",
      watermark: "woven together",
      items: [
        {
          icon: "personal",
          accent: "personal",
          title: "Entirely personal",
          text: "Sessions shaped around your story — never a template. We start where you are, and let the conversation find its own shape.",
        },
        {
          icon: "holistic",
          accent: "holistic",
          title: "Many strands",
          text: "Coaching, intuitive guidance and gentle healing — woven in when it helps, left aside when it doesn't.",
        },
        {
          icon: "pace",
          accent: "pace",
          title: "At your pace",
          text: "Unhurried, confidential support with no pressure to perform. There is room to pause, breathe, and begin again.",
        },
      ],
    },
    path: {
      kicker: "My approach",
      title: "How I work",
      script: "with you",
      intro:
        "A calm, collaborative space — practical when you need direction, intuitive when you need perspective, gentle when you need rest.",
      steps: [
        {
          icon: "personal",
          accent: "coaching",
          tag: "Clarity",
          title: "Practical coaching",
          text: "Grounded conversations, honest reflection and tools you can use in everyday life. We slow things down enough to notice what's true — then find a next step that feels doable, not overwhelming.",
          note: "Ideal when you're stuck, undecided, or ready for clearer direction.",
        },
        {
          icon: "holistic",
          accent: "tarot",
          tag: "Perspective",
          title: "Intuitive guidance",
          text: "Tarot and inner wisdom woven in when it feels supportive — never forced. Sometimes a fresh perspective helps you see what your mind has been circling, so you can move with more trust.",
          note: "Offered gently, only when it deepens the conversation.",
        },
        {
          icon: "pace",
          accent: "reiki",
          tag: "Rest",
          title: "Gentle healing",
          text: "Reiki and restful practices to help your body and mind feel safe again. There's no need to perform or explain everything — rest itself can be the work.",
          note: "A soft place to land when you've been carrying too much.",
        },
      ],
    },
    seo: {
      title: "About Cara — Opal Life Coaching",
      description: "Meet Cara — holistic life coach, Reiki healer and tarot reader in West Sussex.",
    },
  },

  "contact-page": {
    contact: {
      eyebrow: "Next steps",
      title: "Ready to take",
      script: "the next step?",
      lead: "I'd love to support you on your journey. Get in touch or book a session today.",
      emailLabel: "Email me directly",
      emailNote: "The simplest way to start — I'll reply personally.",
      socialLabel: "Or find me on social",
      locationTitle: "In person",
      locationText: "Sessions in Chichester & Eastergate, West Sussex",
      trust: texts("Reply within 24 hours", "In person & online", "West Sussex"),
    },
    form: {
      title: "I'd love to hear from you",
      note: "Share as much or as little as you like — there's no pressure, and every message is met with warmth and care.",
      promise: "I'll reply personally within 24 hours",
      nameLabel: "Your name",
      namePlaceholder: "How should I address you?",
      emailLabel: "Your email",
      emailPlaceholder: "you@email.com",
      emailHint: "I'll use this to reply to you directly",
      serviceLabel: "What are you interested in?",
      servicePlaceholder: "Select an option",
      serviceOptions: [
        { value: "coaching", label: "Life coaching" },
        { value: "tarot", label: "Tarot readings" },
        { value: "reiki", label: "Reiki healing" },
        { value: "unsure", label: "Not sure yet" },
      ],
      messageLabel: "Your message",
      messagePlaceholder:
        "Tell me a little about where you are and what kind of support you're looking for…",
      submitLabel: "Send my message",
    },
    faqsSection: {
      eyebrow: "FAQs",
      title: "Questions you might have",
      lead: "Gentle, honest answers — so you know what to expect before reaching out.",
    },
    seo: {
      title: "Contact — Opal Life Coaching",
      description: "Get in touch or book a session with Cara.",
    },
  },

  "service-page-sections": {
    hero: {
      primaryCta: link("Book this service", "/bookings"),
      secondaryCta: link("Ask a question", "/contact"),
    },
    overview: {
      captionScript: "Cara",
      captionNote: "Warm, confidential, and entirely personal",
    },
    benefits: {
      kicker: "How it helps",
      title: "What you can",
      script: "expect",
      sub: "Three things people often feel after working together — soft, steady, and entirely at your pace.",
    },
    sessions: {
      kicker: "Your gentle invitation",
      title: "Whenever you're ready,",
      script: "the door is open",
      lead: "There's no rush to decide. When it feels right, you'll find session options, transparent pricing and availability — or reach out first if you'd rather talk it through.",
      steps: [
        { title: "Browse sessions", text: "Explore session types and pricing on the bookings page" },
        { title: "Pick a time", text: "Choose a slot that suits you — online or in person" },
        { title: "Or talk first", text: "Begin with a free discovery call if you'd like to chat before booking" },
      ],
      primaryCta: link("View bookings & pricing", "/bookings"),
      secondaryCta: link("Ask a question first", "/contact"),
      caption: "With warmth, whenever you're ready",
      fallbackImage: media("cara-speaking.png"),
    },
  },

  "closing-cta": {
    eyebrow: "Take the first step",
    title: "I'd love to meet you",
    script: "whenever you're ready",
    lead: "Book a free discovery call, explore a service, or simply send a message. There's no pressure to have it all figured out.",
    assurances: texts("Free discovery call", "No pressure", "At your pace"),
    cardTitle: "Your invitation",
    cardText: "Start with a conversation — we'll figure out together what feels right for you.",
    primaryCta: link("Book a session", "/bookings"),
    secondaryCta: link("Get in touch", "/contact"),
  },
} as const;
