"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ordinaryData } from "@/data/contentData";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Ordinary() {
  const sectionRef = useRef<HTMLElement>(null);
  const strikeLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (strikeLineRef.current) {
        gsap.fromTo(
          strikeLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: strikeLineRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0.15, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              end: "top 45%",
              scrub: true,
            },
          }
        );
      }

      if (imagesRef.current) {
        const cols = imagesRef.current.children;
        if (cols[0]) {
          gsap.fromTo(
            cols[0],
            { y: 60 },
            {
              y: -60,
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
        if (cols[1]) {
          gsap.fromTo(
            cols[1],
            { y: -40 },
            {
              y: 40,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.6,
              },
            }
          );
        }
        if (cols[2]) {
          gsap.fromTo(
            cols[2],
            { y: 80 },
            {
              y: -80,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            }
          );
        }
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
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
      className="relative w-full bg-[#0c0c0c] py-24 md:py-36 text-[var(--brand-bc5)] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,25,25,0.6)_0%,transparent_70%)]" />

      <div className="w-full px-6 sm:px-12 md:px-16">
        <div className="relative mb-20 text-center flex flex-col items-center justify-center">
          <div className="relative inline-block mb-2">
            <span className="font-heading italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-white/40 tracking-tight">
              {ordinaryData.italicWord}
            </span>
            <div
              ref={strikeLineRef}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-red-800/80 origin-left"
            />
          </div>

          <h2
            ref={headingRef}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[var(--brand-bc5)] will-change-[opacity,transform]"
          >
            {ordinaryData.heading}
          </h2>

          <p
            ref={textRef}
            className="mt-6 max-w-xl font-body text-sm sm:text-base md:text-lg font-light leading-relaxed text-[rgba(242,241,237,0.7)]"
          >
            {ordinaryData.subtext}
          </p>
        </div>

        <div
          ref={imagesRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center w-full max-w-[1920px] mx-auto px-0 sm:px-2"
        >
          {ordinaryData.images.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] sm:aspect-[3/5] md:aspect-[2/3] lg:aspect-[3/5] w-full overflow-hidden shadow-2xl bg-[#141414] will-change-transform"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
