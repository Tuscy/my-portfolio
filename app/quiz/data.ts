export type QuizOption = {
  label: string;
  weight: number;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "What's the main goal for your business website?",
    options: [
      { label: "Just to have an online presence", weight: 0 },
      { label: "To share information", weight: 3 },
      { label: "To generate leads or enquiries", weight: 6 },
      { label: "To sell and convert visitors into customers", weight: 10 },
    ],
  },
  {
    id: "q2",
    question: "How clear are the next steps for visitors on your site? (e.g. Book, Contact, Buy)",
    options: [
      { label: "Not sure / we don't have obvious actions", weight: 0 },
      { label: "We have a contact form somewhere", weight: 3 },
      { label: "We have visible buttons or links to get in touch", weight: 6 },
      { label: "Clear calls-to-action on every key page", weight: 10 },
    ],
  },
  {
    id: "q3",
    question: "How does your site perform on mobile devices?",
    options: [
      { label: "We haven't really checked", weight: 0 },
      { label: "It works but isn't designed for mobile", weight: 3 },
      { label: "It's responsive and usable on mobile", weight: 6 },
      { label: "Mobile experience is a priority and tested", weight: 10 },
    ],
  },
  {
    id: "q4",
    question: "How important is page speed and load time to you?",
    options: [
      { label: "Not something we think about", weight: 0 },
      { label: "We'd like it to be faster", weight: 3 },
      { label: "We care and have tried to optimise", weight: 6 },
      { label: "We monitor and prioritise fast loading", weight: 10 },
    ],
  },
  {
    id: "q5",
    question: "Does your site show trust and credibility? (e.g. testimonials, reviews, credentials)",
    options: [
      { label: "We don't have any", weight: 0 },
      { label: "A few mentions or one or two reviews", weight: 3 },
      { label: "Testimonials or reviews on the site", weight: 6 },
      { label: "Multiple references, reviews, and clear credentials", weight: 10 },
    ],
  },
  {
    id: "q6",
    question: "How clear is your value proposition above the fold? (what you offer, why it matters)",
    options: [
      { label: "Visitors have to scroll or dig to understand", weight: 0 },
      { label: "It's there but could be clearer", weight: 4 },
      { label: "We have clear headline and benefit-focused copy", weight: 7 },
      { label: "Immediate clarity on who we are and what we do for them", weight: 10 },
    ],
  },
  {
    id: "q7",
    question: "Do you track how visitors behave or convert on your site?",
    options: [
      { label: "No tracking", weight: 0 },
      { label: "Basic page views only", weight: 3 },
      { label: "We track key actions (e.g. form submits, clicks)", weight: 6 },
      { label: "We measure behaviour and conversions and use it to improve", weight: 10 },
    ],
  },
  {
    id: "q8",
    question: "How easy is it for visitors to get in touch or buy? (forms, steps, friction)",
    options: [
      { label: "Long forms or many steps", weight: 0 },
      { label: "It works but could be simpler", weight: 4 },
      { label: "Short, clear forms and minimal steps", weight: 7 },
      { label: "As few steps as possible with clear progress", weight: 10 },
    ],
  },
];

/** Maximum possible raw score (sum of max weight per question). */
export const MAX_RAW_SCORE = QUIZ_QUESTIONS.reduce(
  (sum, q) => sum + Math.max(...q.options.map((o) => o.weight)),
  0
);

/** Score bands for results messaging (low / medium / high). */
export const SCORE_BANDS = {
  low: {
    max: 40,
    message:
      "There's clear room to grow—and that's a great place to start. A few targeted changes to your site could make a big difference to how many visitors convert. We often start with a free audit that shows exactly where visitors drop off and which pages to fix first, so you know where to focus.",
  },
  medium: {
    min: 40,
    max: 70,
    message:
      "You're on the right track. You're already thinking about conversion; with some focused effort you can get even better results. We can help by optimising things like your calls-to-action and landing copy so more visitors take the next step—often starting with a free audit to pinpoint the biggest wins.",
  },
  high: {
    min: 70,
    message:
      "Great job—you're well set up. Keep maintaining and iterating to stay ahead. We can help with ongoing optimisation, from A/B testing to refining messaging as your audience changes. A free audit can show you the next level of improvements so you don't leave conversions on the table.",
  },
} as const;

/** Bonus tip on results page: AI + trust (not covered in quiz). */
export const RESULTS_AI_TIP = {
  label: "Get ahead of the curve",
  text: "As search and discovery shift with AI, it's more important than ever to target specific signals that help your business get surfaced. One of the most powerful is widespread trust: multiple references, reviews, and credentials in one place so both people and systems can see you're the real deal. Building that now will put you ahead.",
} as const;

export const CALENDLY_AUDIT_URL = "https://calendly.com/rhyse-business/30min";
