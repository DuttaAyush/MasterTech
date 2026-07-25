'use client';

import Link from 'next/link';

export default function Logo({ className = '', size = 'md' }) {
  const height = size === 'sm' ? 18 : size === 'lg' ? 28 : 22;

  return (
    <Link
      href="/"
      aria-label="MIMAG Technologies"
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      <svg
        width={height * 3.1}
        height={height}
        viewBox="0 0 155 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-opacity group-hover:opacity-90"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="mimagLogoGrad"
            x1="0"
            y1="0"
            x2="220"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ef4444" />
            <stop offset="0.5" stopColor="#ec4899" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        <text
          x="0"
          y="38"
          fontFamily="'Inter', system-ui, sans-serif"
          fontWeight="700"
          fontSize="42"
          letterSpacing="-1.5"
          fill="url(#mimagLogoGrad)"
        >
          MIMAG
        </text>
      </svg>

      <span className="hidden sm:inline text-[13px] font-normal tracking-tight text-muted-foreground">
        Technologies
      </span>
    </Link>
  );
}