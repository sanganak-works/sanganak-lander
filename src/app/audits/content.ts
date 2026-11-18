// All copy for /audits lives in this file. Edit freely; the page only lays it out.
//
// DRAFT COPY (2026-11-15). Written as a first pass for Sam to rewrite. Nothing
// here has been approved yet.
//
// Rules for this page (readers arrive from AI-assistant disclosure emails):
// - Never name an organisation we've audited or quote a finding. Nothing has
//   been disclosed yet.
// - No prices, certifications, guarantees or "official" claims.
// - No fear-based selling. Plain, short sentences.
// - The limits section must match the audit guardrails: public interface only,
//   made-up data, light touch, no breaking in, nothing published, deeper
//   testing only with written permission, and an independent reviewer that can
//   stop any live test.

export const CONTACT_EMAIL = "contact@sanganak.ai";

// Both "ask for a call" buttons read from this one constant.
export const CALL_REQUEST_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "AI assistant audit: short call",
)}`;

export const auditsContent = {
  meta: {
    title: "AI Audits · Sanganak",
    description:
      "We check public AI chat assistants for wrong, outdated and made-up answers, and help your team fix them.",
  },

  hero: {
    eyebrow: "AI AUDITS · FOR TEAMS THAT RUN A PUBLIC AI ASSISTANT",
    headline: "We check your AI assistant the way your users meet it.",
    subhead:
      "Through the public chat, like any visitor. We look for wrong answers, outdated rules, made-up specifics, answers that contradict each other, and answers that wander off the question.",
    cta: "Ask for a short call →",
  },

  whatYouGet: {
    label: "WHAT YOU GET",
    heading: "Evidence first, then fixes.",
    lead: "We'd rather help you fix a few real problems than hand you a long list.",
    items: [
      {
        number: "01",
        title: "A written report",
        body: "Each issue shows the question we asked, the answer we got, and what your own official source says instead.",
      },
      {
        number: "02",
        title: "What can be fixed",
        body: "A plain list of fixes, most important first, written for the team that runs the assistant.",
      },
      {
        number: "03",
        title: "Help fixing it, if you want it",
        body: "Tests that run before every release so the same mistakes don't come back, checks that notice when your policy documents change, and a re-check after the fixes.",
      },
    ],
  },

  limits: {
    label: "HOW WE WORK",
    heading: "Our limits.",
    items: [
      {
        figure: "01",
        text: "When we check an assistant without being asked, we use only the public chat, made-up details and a light touch.",
      },
      {
        figure: "02",
        text: "We never break in, never touch other users' data, and never publish what we find.",
      },
      {
        figure: "03",
        text: "Deeper testing, such as your APIs, whether users can see each other's data, or a staging copy, happens only with your written permission and a scope we agree together.",
      },
      {
        figure: "04",
        text: "Every live test runs under a second, independent reviewer that checks each step and can stop it.",
      },
    ],
    closing: "What we find goes to you, and no one else.",
  },

  audience: {
    label: "WHO IT'S FOR",
    heading: "Teams that answer the public with AI.",
    items: [
      "Government departments and new schemes with a public assistant.",
      "Education, test-prep and admissions-counselling companies with an AI tutor or counsellor.",
    ],
  },

  engagement: {
    label: "WAYS TO WORK TOGETHER",
    heading: "Start with one review.",
    body: "A one-off review of your assistant first. After that, optional re-checks on a schedule that suits you, such as after each release or when your rules change. Every assistant is different, so get in touch and we'll scope it together.",
  },

  cta: {
    heading: "Ask for a short call.",
    body: "If we've written to you about your assistant, or you'd like us to look at one, write to us. A short call is enough to walk through it.",
    button: "Ask for a short call →",
    emailLabel: "OR WRITE TO",
  },
} as const;
