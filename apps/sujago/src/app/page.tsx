import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Layers3,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type IconType = typeof Sparkles;

const contactEmail = "sujagotechnologies@gmail.com";

const services: Array<{
  title: string;
  description: string;
  items: string[];
  icon: IconType;
}> = [
  {
    title: "Custom Web Applications",
    description:
      "Product-grade web apps for customers or internal teams with clear success metrics and measurable outcomes.",
    items: [
      "From scoping to deployment on Vercel/AWS",
      "API-first builds with fast, resilient UI",
      "Instrumentation for insight, not guesswork",
    ],
    icon: Rocket,
  },
  {
    title: "Portfolio & Marketing Sites",
    description:
      "Story-driven portfolios and launch pages that highlight your work, craft, and credibility without extra overhead.",
    items: [
      "Premium layouts with flexible content blocks",
      "SEO-friendly, responsive, and performance tuned",
      "CMS-ready so updates stay effortless",
    ],
    icon: Palette,
  },
  {
    title: "Product Modernization",
    description:
      "Refine existing products with clearer UX, stronger performance, and maintainable architecture.",
    items: [
      "Audits with quick-win fixes baked in",
      "Component systems and design tokens",
      "Performance budgets with ongoing guardrails",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Delivery Pods",
    description:
      "A cross-functional squad that ships every week—design, engineering, and QA moving together.",
    items: [
      "Weekly demos and transparent roadmaps",
      "Backlog shaping with founders and teams",
      "Release playbooks and handover docs",
    ],
    icon: Workflow,
  },
];

const workSamples: Array<{
  title: string;
  summary: string;
  highlights: string[];
}> = [
  {
    title: "Founder Portfolio Engine",
    summary:
      "A reusable template system that launches bespoke portfolio sites in weeks, with analytics and CMS baked in.",
    highlights: [
      "Case-study storytelling and interactive galleries",
      "SEO-ready, blazing fast on mobile and desktop",
      "Content updates in minutes, not sprints",
    ],
  },
  {
    title: "Client Portals & Dashboards",
    summary:
      "Secure, role-aware portals that surface the metrics and workflows your partners care about most.",
    highlights: [
      "Data visualizations tuned for clarity",
      "Exports, notifications, and auditability",
      "Authentication optional today; ready when you are",
    ],
  },
  {
    title: "Product Refresh & Launches",
    summary:
      "Homepage, onboarding, and feature revamps that make a better first impression and convert more customers.",
    highlights: [
      "Narrative-led sections with purposeful motion",
      "A/B and analytics hooks from day one",
      "Accessibility and performance as defaults",
    ],
  },
];

const processSteps: Array<{
  title: string;
  detail: string;
}> = [
  {
    title: "Discover & Frame",
    detail:
      "Align on the problem, success measures, and the smallest version of the product that proves value.",
  },
  {
    title: "Design the Experience",
    detail:
      "Translate the story into flows, content, and UI states. We prototype early so feedback is fast.",
  },
  {
    title: "Build & Integrate",
    detail:
      "Ship in weekly slices with code reviews, QA, and instrumentation. We keep releases always shippable.",
  },
  {
    title: "Launch & Support",
    detail:
      "Stabilize, monitor, and document handoffs. Stay on for care plans or empower your team to run with it.",
  },
];

const capabilities = [
  "Next.js & React",
  "TypeScript-first engineering",
  "Design systems & Tailwind",
  "Headless CMS & content ops",
  "Postgres/Supabase foundations",
  "Analytics & observability",
];

const quickFacts = [
  { title: "Kickoff", detail: "Projects start in 1–2 weeks." },
  { title: "Cadence", detail: "Weekly demos and decisions together." },
  { title: "Focus", detail: "Web apps, client portals, portfolios." },
  { title: "Stack", detail: "Next.js, TypeScript, Supabase, design systems." },
];

const differentiators: Array<{
  title: string;
  description: string;
  icon: IconType;
  points: string[];
}> = [
  {
    title: "Design and engineering, unified",
    description:
      "You work with one team that shapes the story, builds the product, and keeps the polish consistent.",
    icon: Layers3,
    points: [
      "UI states, motion, and content planned together",
      "Component systems that stay easy to evolve",
      "Reviews grounded in real user flows",
    ],
  },
  {
    title: "Launch-ready from day one",
    description:
      "We design for public launch: performance budgets, accessibility, SEO, analytics, and future auth hooks.",
    icon: ShieldCheck,
    points: [
      "Best practices baked into every slice",
      "Auth optional now; ready when you need it",
      "Instrumentation for confident releases",
    ],
  },
  {
    title: "Transparent delivery",
    description:
      "We keep momentum visible with weekly demos, decision logs, and shipping milestones you can track.",
    icon: Rocket,
    points: [
      "Clear scope, no surprises",
      "Progress artifacts you can share",
      "Handovers with docs and playbooks",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <Backdrop />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Image
            src="/sujago_light.png"
            alt="Sujago Technologies logo"
            width={160}
            height={42}
            priority
            className="h-10 w-auto"
          />
          <span className="hidden text-sm text-slate-300 sm:inline">
            Technologies Private Limited
          </span>
        </div>
        <nav className="hidden flex-wrap items-center gap-4 text-sm text-slate-200 sm:flex">
          <AnchorLink href="#services">Services</AnchorLink>
          <AnchorLink href="#work">Work</AnchorLink>
          <AnchorLink href="#process">Process</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </nav>
        <div className="hidden sm:flex">
          <Button
            asChild
            className="bg-emerald-400 px-5 text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
          >
            <Link href={`mailto:${contactEmail}`}>Start a project</Link>
          </Button>
        </div>
        <div className="flex sm:hidden">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/30 bg-white/10 text-white"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 sm:gap-24">
        <Hero />
        <QuickFacts />
        <Services />
        <WhyUs />
        <Work />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-[-8%] top-[-10%] h-[460px] w-[460px] rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute right-[-12%] top-[-6%] h-[380px] w-[380px] rounded-full bg-cyan-500/25 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function QuickFacts() {
  return (
    <section className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
      {quickFacts.map((fact) => (
        <div
          key={fact.title}
          className="rounded-2xl border border-white/5 bg-slate-900/60 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
            {fact.title}
          </p>
          <p className="mt-2 text-sm text-slate-100/90">{fact.detail}</p>
        </div>
      ))}
    </section>
  );
}

function Hero() {
  return (
    <section className="relative grid gap-10 pt-4 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-100">
          <Sparkles className="size-4" />
          Building web apps people trust.
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Product-grade web apps, portfolios, and launches—built with intent.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/90">
            Sujago Technologies crafts fast, reliable digital experiences. We
            combine design, engineering, and delivery so you can launch publicly
            with confidence—no authentication required today, ready for it when
            you need it.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="bg-emerald-400 px-6 text-base font-semibold text-slate-950 shadow-[0_20px_80px_-24px_rgba(16,185,129,0.6)] transition hover:translate-y-[-1px] hover:bg-emerald-300"
          >
            <Link href={`mailto:${contactEmail}`}>
              Talk to the team
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/5 text-base text-white transition hover:border-emerald-300/60 hover:bg-white/10"
          >
            <Link href="#services">Explore services</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Product thinkers who ship with clarity.",
            "Design + engineering in one lane.",
            "Transparent weekly demos and decisions.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-6 bottom-0 top-12 rounded-3xl bg-gradient-to-b from-white/5 via-white/10 to-transparent blur-3xl" />
        <div className="relative space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-emerald-600/20 backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/90">
              Delivery Tracks
            </span>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-100">
              Built by Sujago
            </span>
          </div>
          <div className="grid gap-3">
            {[
              {
                title: "Launch-ready web apps",
                detail: "Feature slices that can ship independently.",
              },
              {
                title: "Signature portfolios",
                detail: "Storytelling, motion, and CMS powered content.",
              },
              {
                title: "Product refreshes",
                detail: "Performance, UX, and polish without rewrites.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-300/90">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-cyan-500/10 to-white/0 p-4">
            {[Globe2, Layers3, ShieldCheck].map((Icon, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200"
              >
                <Icon className="size-4 text-emerald-200" />
                {["Global ready", "Layered architecture", "Secure foundations"][
                  index
                ]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="space-y-6">
      <SectionHeader
        eyebrow="Services"
        title="Built for teams that want to move and launch fast."
        description="Product strategy, design, and engineering in one lane—so you can see progress every week."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10 transition hover:-translate-y-1 hover:border-emerald-300/50"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/20">
                <service.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-200/85">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-100/90">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="space-y-6">
      <SectionHeader
        eyebrow="How we work"
        title="Intentional delivery that keeps your launch in focus."
        description="We combine narrative, UX, and engineering so every release tells a clear story and earns trust."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {differentiators.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-emerald-500/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-emerald-200">
                <item.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-200/85">{item.description}</p>
            <ul className="space-y-2 text-sm text-slate-100/90">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="space-y-6">
      <SectionHeader
        eyebrow="Example Builds"
        title="A few ways we bring products to life."
        description="Everything we ship is designed for real users—fast, reliable, and ready to go live."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {workSamples.map((work) => (
          <article
            key={work.title}
            className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-500/20">
                <Sparkles className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">{work.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-200/85">{work.summary}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-100/90">
              {work.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2"
                >
                  <ShieldCheck className="mt-0.5 size-4 text-cyan-200" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <div className="flex items-center gap-2 text-sm text-cyan-100">
                <span className="flex size-7 items-center justify-center rounded-full bg-cyan-500/15">
                  <ArrowUpRight className="size-4" />
                </span>
                Launch-ready handoff with docs, QA, and monitoring hooks.
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="space-y-6">
      <SectionHeader
        eyebrow="Process"
        title="A clear path from idea to launch."
        description="We keep the workflow visible, collaborative, and paced for weekly releases."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5"
          >
            <div className="absolute right-4 top-4 text-4xl font-black text-white/5">
              {index + 1}
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                <Sparkles className="size-4" />
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-200/85">{step.detail}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/90">
        {capabilities.map((capability) => (
          <span
            key={capability}
            className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1"
          >
            {capability}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-cyan-500/10 to-white/5 p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            Let&apos;s build
          </p>
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            Tell us what you need, and we&apos;ll ship the plan and timeline.
          </h3>
          <p className="max-w-2xl text-sm text-slate-100/90">
            Whether it&apos;s a new web app, a portfolio that stands out, or a
            product refresh, we&apos;ll scope it quickly and get a public-ready
            version live.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="bg-emerald-400 px-5 text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
          >
            <Link href={`mailto:${contactEmail}`}>Send a note</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/10 text-white transition hover:border-cyan-200/60 hover:bg-white/20"
          >
            <Link href="#services">See how we work</Link>
          </Button>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-100/80">
        <span className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-emerald-200" />
          Public site today—authentication ready when you are.
        </span>
        <span className="flex items-center gap-2">
          <Workflow className="size-4 text-cyan-200" />
          Weekly progress demos and transparent roadmaps.
        </span>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <span className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-100/90">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <p className="max-w-3xl text-sm text-slate-200/85">{description}</p>
    </div>
  );
}

function AnchorLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-200 transition hover:text-emerald-200"
    >
      {children}
    </Link>
  );
}
