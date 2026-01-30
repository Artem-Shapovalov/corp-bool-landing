import { ShieldCheck, Gauge, Sparkles, Radar, LineChart, Workflow } from "lucide-react";

export const nav = [
  { href: "#product", label: "Product" },
  { href: "#customers", label: "Customers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const features = [
  {
    icon: Sparkles,
    title: "AI-assisted ambiguity",
    text: "When reality is complicated, we return MAYBE with a confidence score and vibes-aware explanations.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-forward",
    text: "A policy engine that can turn any answer into MAYBE_LATER for safety and regulatory harmony.",
  },
  {
    icon: Gauge,
    title: "Latency budgets",
    text: "Strict budgets with soft guarantees. We respect your SLOs by redefining them.",
  },
  {
    icon: Workflow,
    title: "Enterprise workflows",
    text: "Audit trails, approvals, Slack emojis, and hand-offs to committees—fully automated (manually).",
  },
  {
    icon: Radar,
    title: "Observability-first",
    text: "Traces, metrics, dashboards. Watch your booleans in real time and feel in control.",
  },
  {
    icon: LineChart,
    title: "Board-ready reporting",
    text: "Quarterly truth insights with graphs that look expensive and explain nothing.",
  },
];

export const logos = [
  "ACME FINANCIAL",
  "MEGACORP CLOUD",
  "NORTHWIND HEALTH",
  "GLOBEX MANUFACTURING",
  "UMBRELLA COMPLIANCE",
  "WAYNE ENTERPRISES",
];

export const testimonials = [
  {
    quote:
      "We replaced five internal decision trees with a single MAYBE_LATER. Our incident rate dropped because nobody made decisions anymore.",
    name: "VP of Risk, Northwind Health",
  },
  {
    quote:
      "The dashboards are beautiful. We don't understand the truth pipeline, but we have 12 Grafana tabs open at all times.",
    name: "Director of Platform, Megacorp Cloud",
  },
  {
    quote:
      "corp-bool finally brought alignment across teams: everyone agrees the answer is MAYBE.",
    name: "Program Manager, Globex Manufacturing",
  },
];

export const tiers = [
  {
    name: "Starter",
    price: "$49/mo",
    desc: "For early-stage ambiguity.",
    bullets: ["1 boolean/day", "Community MAYBE", "Single-region vibes", "Email support (ASCII only)"],
    cta: "Start trial",
    featured: false,
  },
  {
    name: "Pro",
    price: "$499/mo",
    desc: "For serious indecision.",
    bullets: ["100 booleans/day", "AI-assisted MAYBE", "Latency budget hints", "SLA: aspirational"],
    cta: "Request demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$49,999/mo",
    desc: "For the board deck.",
    bullets: [
      "Unlimited booleans*",
      "Multi-region truth (simulated)",
      "Dedicated Truth Success Manager",
      "Premium MAYBE_LATER delivery",
    ],
    cta: "Talk to sales",
    featured: false,
    footnote: "*Subject to rate limits and committee availability.",
  },
];

export const faqs = [
  {
    q: "Do you guarantee TRUE/FALSE answers?",
    a: "We guarantee a response. Sometimes it is TRUE. Sometimes it is FALSE. Often it is healthier to be MAYBE.",
  },
  {
    q: "Is this AI?",
    a: "Yes. We allocate a tensor and publish the trace. The rest is confidential for competitive reasons.",
  },
  {
    q: "Can we self-host?",
    a: "Absolutely. We provide a repo, 14 dependencies, and a CI pipeline that fails unless you set CHAOS=1.",
  },
  {
    q: "How do you handle outages?",
    a: "We degrade gracefully to MAYBE_LATER while providing status updates, postmortems, and optimism.",
  },
];

export const mission = {
  title: "Our mission",
  text: "corp-bool started as a joke about over-engineering, but behind the humor is a serious idea. "
      + "Modern software systems are complex, distributed, and full of uncertainty. Pretending that "
      + "every decision is strictly TRUE or FALSE often leads to fragile systems and human conflict. "
      + "Our mission is to normalize uncertainty, make it explicit, observable, and discussable."
};

export const clients = [
  {
    lang: "C++ client",
    text: "A heavyweight, template-friendly, enterprise-grade C++ client designed for systems where "
        + "performance, determinism, and complicated build pipelines are already a fact of life. "
        + "Perfect for embedded, backend services, and places where a boolean deserves 400 lines of code."
  },
  {
    lang: "Python client",
    text: "A Python client for rapid prototyping, research, automation, and AI-heavy workflows. "
        + "Ideal for data science, experiments, and situations where MAYBE needs to be plotted, logged, "
        + "and explained in a Jupyter notebook."
  }
];

export const opensource = {
  title: "Open source & responsibility",
  text: "corp-bool is open source by design. We believe transparency is the only honest way to build "
      + "trust in tools that influence decisions. The code is public, the jokes are visible, and the "
      + "over-engineering is intentional. You can fork it, study it, laugh at it, or use parts of it "
      + "in your own projects."
};

export const author = {
  name: "Artem Shapovalov",
  text: "Software engineer with a background in C++, embedded systems, and modern infrastructure. "
      + "This project lives at the intersection of technical experience, professional irony, and a "
      + "very real observation of how software is built in large organizations.",
  github: "https://github.com/Artem-Shapovalov/corp-bool"
};
