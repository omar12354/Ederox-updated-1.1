"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ArrowRight, Calendar, Mail, Check, Play, ShoppingCart } from "lucide-react";
import clsx from "clsx";
import React from "react";

const CONFIG = {
  brand: "Ederox",
  tagline: "AI agents that grow your store.",
  sub: "Custom agents and CRM integrations for e-commerce—implemented fast, measured by revenue, and safeguarded with evals & guardrails.",
  calendly: "https://calendly.com/YOUR_CALENDLY_LINK/intro",
  emailTo: "hello@yourdomain.com",
  nav: [
    { href: "#solutions", label: "Solutions" },
    { href: "#demos", label: "Demos" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "Process" },
    { href: "#contact", label: "Contact" },
  ],
  tiers: [
    {
      name: "Launch",
      tagline: "Foundation to first value",
      price: 750,
      features: [
        "Discovery & success metrics",
        "Single agent or CRM integration",
        "Eval harness & guardrails",
        "Deployment checklist",
      ],
      cta: "Get started",
      popular: false,
    },
    {
      name: "Scale",
      tagline: "Revenue-ready implementation",
      price: 1650,
      features: [
        "Everything in Launch",
        "2–3 integrations (CRM/Helpdesk/Docs)",
        "Conversion tracking & dashboards",
        "Team training & handoff",
      ],
      cta: "Most popular",
      popular: true,
    },
    {
      name: "Prime",
      tagline: "Maximum impact, fast",
      price: 1850,
      features: [
        "Everything in Scale",
        "Multi-agent orchestration",
        "Private data pipelines",
        "SLOs, observability & optimization",
      ],
      cta: "Best value",
      popular: true,
    },
  ],
};

export default function Page() {
  return (
    <main id="main">
      <Header />
      <Hero />
      <Trust />
      <Solutions />
      <Demos />
      <Stats />
      <Pricing />
      <Process />
      <Testimonials />
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
        <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-sm">
          {CONFIG.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white/90">
              {n.label}
            </a>
          ))}
          <a
            href={CONFIG.calendly}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary no-underline"
          >
            Book a consult <Calendar className="ml-2 h-4 w-4" />
          </a>
        </nav>
        <details className="group md:hidden">
          <summary className="btn btn-ghost list-none">Menu</summary>
          <div className="absolute right-4 mt-2 w-64 rounded-xl border border-white/10 bg-base-950 p-2 shadow-lg">
            {CONFIG.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href={CONFIG.calendly}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-base-950 hover:bg-slate-200"
            >
              Book a consult
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="section bg-hero-mesh">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip mb-6">
            <ShoppingCart className="h-3.5 w-3.5" />
            E-commerce • Agents • CRM
          </span>
          <motion.h1
            className="h1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {CONFIG.tagline}
          </motion.h1>
          <p className="mt-4 text-lg leading-relaxed muted">{CONFIG.sub}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-primary no-underline">
              Book on Calendly <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost no-underline">Get a proposal</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const anonymized = ["Top DTC Apparel", "Premium Beauty", "Gourmet Food", "Home & Living", "Fitness Gear", "Electronics"];
  return (
    <section aria-label="Trusted by" className="section pt-0">
      <div className="container">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="muted text-sm">Trusted by e-commerce teams (anonymized)</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {anonymized.map((name) => (
              <div
                key={name}
                className="flex h-10 items-center justify-center rounded-lg border border-dashed border-white/10 text-xs text-white/60"
                aria-label={`${name} (anonymized)`}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  // ✅ Type-safe submit handler
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">Let’s talk</h2>
          <p className="mt-3 muted">Book a quick call or send a note. We respond within 1 business day.</p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={onSubmit} className="card space-y-4" aria-label="Custom plan form">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input id="name" name="name" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="jane@brand.com" />
              </div>
            </div>

            <div>
              <label htmlFor="store" className="block text-sm font-medium">Store URL</label>
              <input id="store" name="store" required className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="https://yourstore.com" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="platform" className="block text-sm font-medium">Platform</label>
                <select id="platform" name="platform" className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-brand-400 focus:ring-brand-400">
                  <option>Shopify</option>
                  <option>WooCommerce</option>
                  <option>Magento</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="orders" className="block text-sm font-medium">Monthly orders</label>
                <select id="orders" name="orders" className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-brand-400 focus:ring-brand-400">
                  <option>0–500</option>
                  <option>500–2k</option>
                  <option>2k–10k</option>
                  <option>10k+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium">What are you interested in?</label>
              <select id="interest" name="interest" className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-brand-400 focus:ring-brand-400">
                <option>Support Copilot</option>
                <option>Sales Assist</option>
                <option>Ops Automations</option>
                <option>Custom Agent</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Notes</label>
              <textarea id="message" name="message" rows={4} className="mt-2 block w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/50 focus:border-brand-400 focus:ring-brand-400" placeholder="Goals, timeline, and any context" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="btn btn-primary w-full sm:w-auto" type="submit">
                Send message <Mail className="ml-2 h-4 w-4" />
              </button>
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="btn btn-ghost w-full sm:w-auto no-underline">
                Or book on Calendly
              </a>
            </div>

            {submitted && (
              <p className="text-sm text-green-400 mt-2">Thanks! Your message has been sent.</p>
            )}
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
            <a href="#pricing">Pricing</a>
            <a href="#about">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
