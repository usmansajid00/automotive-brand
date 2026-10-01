"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { heroData } from "@/data/contentData";
import { splitWords } from "@/utils/formatters";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            headlineRef.current?.querySelectorAll(".word-reveal"),
            subtextRef.current,
            cardsRef.current?.children,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (cardsRef.current) {
        tl.fromTo(
          cardsRef.current.children,
          { opacity: 0, scale: 0.85, y: 30 },
          {
            opacity: (i) => (i < 4 ? 0.75 : 0.45),
            scale: 1,
            y: 0,
            duration: 1.2,
            stagger: {
              each: 0.08,
              from: "random",
            },
          },
          0.2
        );
      }

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 25 },
          { opacity: 0.7, y: 0, duration: 1 },
          0.4
        );
      }

      const words = headlineRef.current?.querySelectorAll(".word-reveal");
      if (words && words.length) {
        tl.fromTo(
          words,
          { yPercent: 110, rotateZ: 2 },
          {
            yPercent: 0,
            rotateZ: 0,
            duration: 1.1,
            stagger: 0.07,
            ease: "power4.out",
          },
          0.6
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 0.85, y: 0, duration: 1 },
          1.0
        );
      }

      if (cardsRef.current && containerRef.current) {
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        cards.forEach((card, idx) => {
          const speed = ((idx % 3) + 1) * 25;
          const direction = idx % 2 === 0 ? -1 : 1;
          gsap.to(card, {
            y: direction * speed,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });

        gsap.to([headlineRef.current, eyebrowRef.current, subtextRef.current], {
          opacity: 0.1,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  const cardPositions = [
    "top-[8%] left-[2%] md:left-[5%] w-[130px] sm:w-[170px] md:w-[210px]",
    "top-[12%] right-[3%] md:right-[6%] w-[140px] sm:w-[180px] md:w-[216px]",
    "bottom-[18%] left-[3%] md:left-[8%] w-[130px] sm:w-[170px] md:w-[216px]",
    "bottom-[12%] right-[2%] md:right-[7%] w-[140px] sm:w-[190px] md:w-[220px]",
    "top-[38%] left-[0%] md:left-[1%] hidden lg:block w-[180px] opacity-40",
    "top-[35%] right-[0%] md:right-[1%] hidden lg:block w-[180px] opacity-40",
    "top-[4%] left-[35%] hidden xl:block w-[160px] opacity-30",
    "bottom-[4%] left-[30%] hidden xl:block w-[170px] opacity-35",
    "bottom-[6%] right-[28%] hidden xl:block w-[165px] opacity-35",
    "top-[22%] left-[18%] hidden 2xl:block w-[150px] opacity-25",
  ];

  const headlineWords = splitWords(heroData.title);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#0c0c0c] flex items-center justify-center pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(22,22,22,0.8)_0%,rgba(12,12,12,1)_85%)]" />

      <div
        ref={cardsRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 h-full w-full overflow-hidden select-none"
      >
        {heroData.images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute aspect-[4/5] rounded-[4px] overflow-hidden shadow-2xl transition-transform duration-700 ease-out border border-[rgba(242,241,237,0.08)] bg-[#141414] ${
              cardPositions[idx] || "hidden"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 150px, 220px"
              priority={idx < 2}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center justify-center">
        <h2
          ref={eyebrowRef}
          className="mb-4 sm:mb-6 font-body text-xs sm:text-sm md:text-base font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[rgba(242,241,237,0.7)]"
        >
          {heroData.eyebrow}
        </h2>

        <h1
          ref={headlineRef}
          className="mb-6 sm:mb-8 font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-light leading-[1.08] tracking-tight text-[var(--brand-bc5)]"
        >
          {headlineWords.map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden pb-1 sm:pb-2 align-top"
            >
              <span className="word-reveal inline-block font-extralight">
                {word}&nbsp;
              </span>
            </span>
          ))}
        </h1>

        <p
          ref={subtextRef}
          className="max-w-2xl font-body text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-normal text-[rgba(242,241,237,0.75)]"
        >
          {heroData.subtext}
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/50">
          Scroll
        </span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
