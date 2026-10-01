"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { finalCtaData } from "@/data/contentData";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1, yPercent: -4 },
          {
            scale: 1,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90dvh] w-full overflow-hidden bg-[#0c0c0c] flex items-center justify-center text-[var(--brand-bc5)] py-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imageRef} className="relative h-[115%] w-full -top-[7%]">
          <Image
            src={finalCtaData.image.src}
            alt={finalCtaData.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/55 to-[#0c0c0c]/80" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div
        ref={textRef}
        className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center flex flex-col items-center gap-6 md:gap-8"
      >
        <p className="font-body text-xs sm:text-sm md:text-base font-light tracking-[0.25em] uppercase text-[rgba(242,241,237,0.7)]">
          {finalCtaData.eyebrow}
        </p>

        <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[var(--brand-bc5)]">
          {finalCtaData.heading}
        </h2>

        <div className="mt-4">
          <Button href={finalCtaData.buttonHref}>
            {finalCtaData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
