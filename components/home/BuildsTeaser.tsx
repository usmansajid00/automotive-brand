"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { buildsTeaserData } from "@/data/contentData";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function BuildsTeaser() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.15, yPercent: -5 },
          {
            scale: 1,
            yPercent: 5,
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

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
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
      className="relative min-h-[85dvh] lg:min-h-[100dvh] w-full overflow-hidden bg-[#0c0c0c] flex items-center justify-center text-[var(--brand-bc5)] py-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imageRef} className="relative h-[115%] w-full -top-[7%]">
          <Image
            src={buildsTeaserData.image.src}
            alt={buildsTeaserData.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center flex flex-col items-center gap-8"
      >
        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[var(--brand-bc5)]">
          {buildsTeaserData.heading}
        </h2>

        <p className="max-w-2xl font-body text-base sm:text-lg md:text-xl font-light leading-relaxed text-[rgba(242,241,237,0.8)]">
          {buildsTeaserData.text}
        </p>

        <div>
          <Button href={buildsTeaserData.buttonHref}>
            {buildsTeaserData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
