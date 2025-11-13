// components/Logo.tsx
import * as React from "react";

type Props = {
  className?: string;
};

export function Logo({ className }: Props) {
  // Use a unique id in case the component renders multiple times on a page
  const gradId = React.useId();

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-label="Ederox logo"
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="32" cy="32" r="30" fill="url(#" + gradId + ")" opacity="0.15" />

      {/* Monogram / mark */}
      <g fill="none" stroke="url(#" + gradId + ")" strokeWidth="4" strokeLinecap="round">
        {/* Stylized “E” */}
        <path d="M18 22h20M18 32h16M18 42h20" />
        {/* Accent diagonal (suggests motion/automation) */}
        <path d="M36 18l10 28" />
      </g>
    </svg>
  );
}

