/** Home page testimonials — edited here in code, not in the CMS. */
export type Testimonial = {
  id: string;
  quote: string;
  cite: string;
  /** Highlights the card (works best on the middle one). */
  spotlight?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "amy",
    quote:
      "I highly recommend Cara. I felt motivated to work on areas she highlighted that was making me stuck leading to bad patterns. She is calm and practical, staying professional and responsive. I found Cara to be sensitive to my emotions and I came away clearer minded after our session. I will use Opal Life Coaching again and will be mentioning Cara's services to others.",
    cite: "Amy Patterson",
  },
  {
    id: "sue",
    quote:
      "I recently had a distance healing session with Cara and it was amazing, the effects have been felt well into the week. Don't be fooled by the fact it's not in person, what Cara did was the very powerful energy shift I needed and I am so grateful. Thank you Cara. Highly recommend!!!!!",
    cite: "Sue Mc",
    spotlight: true,
  },
  {
    id: "karen",
    quote:
      "I saw Cara earlier today and I was so impressed! Cara took the time to talk with me before doing anything and she was so easy to be around. She also did a reiki healing for me and I'll be seeing her again next week! I already feel so much calmer and relaxed.",
    cite: "Karen Cole",
  },
];
