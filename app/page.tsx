"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ArrowRight, Calendar, Mail, Play } from "lucide-react";

const CONFIG = {
  brand: "Ederox",
  tagline: "AI automation for every business.",
  sub: "We design, build, and operate assistants, agents, and end‑to‑end automations across sales, operations, support, and digital presence.",
  calendly: "https://calendly.com/PLACEHOLDER/intro",
  nav: [
    { href: "#solutions", label: "Solutions" },
    { href: "#work-with-us", label: "Work with us" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
};

export default function Page() {
  return (
    <main id="main">
      <Header />
      <Hero />
      <Solutions />
      <WorkWithUs />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-base-950/70 backdrop-blur supports-[backdrop-filter]:bg-base-950/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-3 no-underline">
          <Logo className="h-8 w-8" />
          <span className="font-semibold tracking-tight">{CONFIG.brand}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm md:flex">
          {CONFIG.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white/90">
              {n.label}
            </a>
          ))}
          <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-primary no-underline">
            Book a consult <Calendar className="ml-2 h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="section bg-hero-mesh">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 className="h1" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
            {CONFIG.tagline}
          </motion.h1>
          <p className="mt-4 text-lg leading-relaxed muted">{CONFIG.sub}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-primary no-underline">
              Book on Calendly <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#solutions" className="btn btn-ghost no-underline">Explore solutions</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const groups = [
    { title: "Sales & Marketing Automation", items: ["AI outreach & follow-up sequences","Lead qualification bots","CRM & lead scoring automation","Social content & scheduling","Ad campaign optimization"] },
    { title: "Operations & Delivery Automation", items: ["Service delivery pipelines","Document & contract automation","Scheduling & task orchestration","Finance & invoice workflows","HR & recruitment automation"] },
    { title: "Communication & Support Automation", items: ["AI phone callers / voice agents","Tier‑1 support agents","Appointment reminders & confirmations","Sentiment & intent analysis","FAQ & knowledge bots"] },
    { title: "Digital Presence & Commerce", items: ["Websites & web apps","E‑commerce automations","Website chatbots & lead capture","Analytics & user insights"] },
  ];
  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">Solutions</h2>
          <p className="mt-3 muted">Four categories. Click to explore the automations inside.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <details key={g.title} className="group card">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <svg className="h-5 w-5 text-white/70 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </summary>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {g.items.map((it) => (<li key={it} className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-brand-400/80"></span><span>{it}</span></li>))}
              </ul>
              <div className="mt-4">
                <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-ghost no-underline">Book a call about {g.title}</a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkWithUs() {
  const [submitted, setSubmitted] = React.useState(false);
  function onSubmit(e){ e.preventDefault(); setSubmitted(true); setTimeout(()=>setSubmitted(false), 4000); }
  return (
    <section id="work-with-us" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">Work with Ederox</h2>
          <p className="mt-3 muted">Every business is different — so is your automation plan.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="card">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-brand-400/80"></span><span>No fixed pricing — every solution is tailored to your goals.</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-brand-400/80"></span><span>From startups to enterprises — we scale with your ambitions.</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-brand-400/80"></span><span>Empowering businesses to operate smarter, faster, and more efficiently — in any industry.</span></li>
            </ul>
            <div className="mt-6">
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-primary no-underline">Book a call <Calendar className="ml-2 h-4 w-4" /></a>
            </div>
            <p className="muted mt-3 text-xs">Prefer a written plan? Share a few details and we’ll tailor one for you.</p>
          </div>
          <form onSubmit={onSubmit} className="card space-y-4" aria-label="Custom plan form">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name" className="block text-sm font-medium">Name</label><input id="name" name="name" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="Jane Doe" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium">Email</label><input type="email" id="email" name="email" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="jane@company.com" /></div>
            </div>
            <div><label htmlFor="company" className="block text-sm font-medium">Company / Business type</label><input id="company" name="company" className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="Acme Inc. — B2B services" /></div>
            <div><label htmlFor="budget" className="block text-sm font-medium">Approximate budget (optional)</label><select id="budget" name="budget" className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-brand-400 focus:ring-brand-400"><option value="">Prefer not to say</option><option value="5-10">$5k–$10k</option><option value="10-25">$10k–$25k</option><option value="25-50">$25k–$50k</option><option value="50plus">$50k+</option></select></div>
            <div><label htmlFor="message" className="block text-sm font-medium">What would you like to automate?</label><textarea id="message" name="message" rows={4} required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="Goals, systems, and timeline" /></div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="btn btn-primary w-full sm:w-auto" type="submit">Get my custom plan</button>
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-ghost w-full sm:w-auto no-underline">Or book a call</a>
            </div>
            {submitted && (<p className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">Thank you — an Ederox specialist will contact you shortly.</p>)}
          </form>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">How we work</h2>
          <p className="mt-3 muted">A crisp path from brief to business value.</p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl grid gap-6 sm:grid-cols-2">
          <div className="card"><div className="chip mb-3">Step 1</div><h3 className="font-semibold">Discovery</h3><p className="mt-2 text-sm text-white/80">Goals, constraints, data sources, and success metrics.</p></div>
          <div className="card"><div className="chip mb-3">Step 2</div><h3 className="font-semibold">Design</h3><p className="mt-2 text-sm text-white/80">Architecture, safety, evaluations, and rollout plan.</p></div>
          <div className="card"><div className="chip mb-3">Step 3</div><h3 className="font-semibold">Build</h3><p className="mt-2 text-sm text-white/80">Integrations, agents, and dashboards with observability.</p></div>
          <div className="card"><div className="chip mb-3">Step 4</div><h3 className="font-semibold">Launch</h3><p className="mt-2 text-sm text-white/80">Guardrails, monitoring, and iteration on real usage.</p></div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Which tools do you integrate?", a: "HubSpot, Salesforce, Zendesk, Intercom, Notion, Postgres, S3, Google Drive, Slack, and custom APIs." },
    { q: "How do you handle safety?", a: "Evals, rate limits, content filters, human‑in‑the‑loop options, and full observability with quick rollback." },
    { q: "What’s the typical timeline?", a: "Discovery in days, first value within two weeks, production rollout depending on scope." },
  ];
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">FAQ</h2>
          <p className="mt-3 muted">Short answers. Ask for more details on a call.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10">
          {items.map((it) => (
            <details key={it.q} className="group p-5">
              <summary className="cursor-pointer list-none font-medium">{it.q}</summary>
              <p className="mt-3 text-sm text-white/80">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">Let’s talk</h2>
          <p className="mt-3 muted">Book a quick call or send a note. We respond within 1 business day.</p>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <form className="card space-y-4" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name2" className="block text-sm font-medium">Name</label><input id="name2" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="Jane Doe" /></div>
              <div><label htmlFor="email2" className="block text-sm font-medium">Email</label><input type="email" id="email2" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="jane@brand.com" /></div>
            </div>
            <div><label htmlFor="msg2" className="block text-sm font-medium">Message</label><textarea id="msg2" rows={4} className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="How can we help?" /></div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="btn btn-primary w-full sm:w-auto" type="button">Send message <Mail className="ml-2 h-4 w-4" /></button>
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-ghost w-full sm:w-auto no-underline">Or book on Calendly</a>
            </div>
            <p className="muted text-xs">We’ll only use your info to respond. No spam.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm muted">© {new Date().getFullYear()} {CONFIG.brand}. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#work-with-us">Work with us</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
