"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const characters = Array.from(children);

  const innerContent = (
    <>
      <span className="relative z-10 block overflow-hidden font-body text-[0.85rem] md:text-[0.95rem] font-semibold uppercase tracking-[0.25rem] text-[var(--brand-bc5)]">
        {characters.map((char, index) => (
          <span
            key={index}
            style={{
              transitionDelay: `${index * 0.02}s`,
            }}
            className="inline-block transition-transform duration-500 [transition-timing-function:cubic-bezier(0.43,0.195,0.02,1)] group-hover:translate-y-[4em] [text-shadow:0_-4em_0_rgba(242,241,237,0.7)]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
      >
        <span className="absolute inset-0 border border-[rgba(242,241,237,0.12)] transition-colors duration-500 group-hover:border-[rgba(242,241,237,0.35)]" />
      </span>
    </>
  );

  const baseClasses = cn(
    "group relative inline-grid place-items-center whitespace-nowrap px-7 py-3 md:px-8 md:py-3.5 bg-black/40 backdrop-blur-sm border border-[rgba(242,241,237,0.15)] transition-all duration-500 hover:border-[rgba(242,241,237,0.4)]",
    className
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel || children} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel || children}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
}
