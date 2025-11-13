"use client";
import * as React from "react";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-label="Ederox logo" role="img">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y1="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="10" y="12" width="44" height="8" rx="4" fill="url(#g)" filter="url(#glow)" />
      <rect x="10" y="28" width="30" height="8" rx="4" fill="url(#g)" />
      <path d="M10 44h44v8H10z" fill="url(#g)" />
      <path d="M42 24l12 12" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
