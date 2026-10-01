"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { statementData } from "@/data/contentData";
import { gsap, useGSAP } from "@/lib/gsap";

const headlineLines = [
  { words: ["A", "vehicle", "should", "say"] },
  { words: ["something", "before", "it", "moves."] },
  { words: ["Every", "line,", "material,"] },
  {
    words: [
      { type: "text", text: "and" },
      { type: "finish" },
      { type: "text", text: "is" },
      { type: "text", text: "considered." },
    ],
  },
];

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        const words = headlineRef.current?.querySelectorAll(".statement-word");
        words?.forEach((w) => {
          gsap.set(w, {
            opacity: 1,
            color: w.classList.contains("accent-ish") ? "#ba282b" : "#f2f1ed",
          });
        });
        if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
        return;
      }

      const words = headlineRef.current?.querySelectorAll(".statement-word");
      if (words && words.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
          },
        });

        words.forEach((word) => {
          const isRed = word.classList.contains("accent-ish");
          tl.fromTo(
            word,
            { opacity: 0.18, color: "#2d2d2d" },
            {
              opacity: 1,
              color: isRed ? "#ba282b" : "#f2f1ed",
              duration: 0.2,
              ease: "none",
            },
            ">"
          );
        });
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0c0c0c] text-[var(--brand-bc5)] overflow-hidden flex items-center select-none"
    >
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[54%] xl:w-[52%] px-6 sm:px-12 md:px-16 lg:pl-16 xl:pl-24 lg:pr-8 py-20 lg:py-28 flex flex-col justify-center">
          <h2
            ref={headlineRef}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] font-light leading-[1.08] tracking-tight mb-10 md:mb-12"
          >
            {headlineLines.map((line, lIdx) => (
              <span key={lIdx} className="block">
                {line.words.map((item, wIdx) => {
                  if (typeof item === "string") {
                    return (
                      <span
                        key={wIdx}
                        className="statement-word inline-block mr-2 sm:mr-3.5 transition-colors will-change-[color,opacity]"
                      >
                        {item}
                      </span>
                    );
                  }
                  if (item.type === "finish") {
                    return (
                      <span key={wIdx} className="inline-block mr-2 sm:mr-3.5">
                        <span className="statement-word inline-block transition-colors will-change-[color,opacity]">
                          fin
                        </span>
                        <span className="statement-word accent-ish inline-block transition-colors will-change-[color,opacity]">
                          ish
                        </span>
                      </span>
                    );
                  }
                  return (
                    <span
                      key={wIdx}
                      className="statement-word inline-block mr-2 sm:mr-3.5 transition-colors will-change-[color,opacity]"
                    >
                      {item.text}
                    </span>
                  );
                })}
              </span>
            ))}
          </h2>

          <div ref={contentRef} className="max-w-xl flex flex-col items-start gap-8">
            <p className="font-body text-xs sm:text-sm md:text-base font-light leading-relaxed text-[rgba(242,241,237,0.7)]">
              {statementData.paragraph}
            </p>

            <Button href={statementData.ctaHref}>
              {statementData.ctaText}
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[46%] xl:w-[48%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:h-full h-[60vh] sm:h-[75vh] overflow-hidden">
          <div
            ref={imageRef}
            className="relative h-[116%] -top-[8%] w-full will-change-transform"
          >
            <Image
              src={statementData.image.src}
              alt={statementData.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent lg:w-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]/40 lg:hidden pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
