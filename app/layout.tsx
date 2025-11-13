import type { Metadata } from "next";
import "./globals.css";
import { sora, inter } from "./fonts";

const SITE = {
  name: "Ederox",
  domain: "ederox.com",
  title: "Ederox — AI automation for every business",
  description:
    "We design, build, and operate assistants, agents, and end‑to‑end automations across sales, operations, support, and digital presence. Implemented fast, measured by outcomes, and safeguarded with evals & guardrails.",
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans [--font-sans:var(--font-inter)] [--font-display:var(--font-sora)]">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-base-950">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
