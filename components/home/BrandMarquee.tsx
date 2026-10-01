"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { brandLogos } from "@/data/contentData";
import { gsap, useGSAP } from "@/lib/gsap";

export default function BrandMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || !trackRef.current) return;

      const track = trackRef.current;
      const tween = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });

      const el = marqueeRef.current;
      if (el) {
        const handleMouseEnter = () => tween.pause();
        const handleMouseLeave = () => tween.play();

        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
          tween.kill();
        };
      }
    },
    { scope: marqueeRef }
  );

  const brandsList = [...brandLogos, ...brandLogos];

  return (
    <div
      ref={marqueeRef}
      className="relative w-full overflow-hidden py-10 select-none [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]"
      aria-label="Supported vehicle brands marquee"
    >
      <div ref={trackRef} className="flex w-max items-center gap-12 sm:gap-16 md:gap-24">
        {brandsList.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex h-10 w-24 sm:h-12 sm:w-32 md:h-14 md:w-36 items-center justify-center opacity-50 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src={brand.src}
              alt={`${brand.name} logo`}
              width={brand.width}
              height={brand.height}
              className="max-h-full max-w-full object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
