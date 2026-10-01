"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { approachData, brandLogos } from "@/data/contentData";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const squareWrapperRef = useRef<HTMLDivElement>(null);
  const innerContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (marqueeTrackRef.current) {
        gsap.to(marqueeTrackRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 25,
          repeat: -1,
        });
      }

      if (prefersReducedMotion) {
        if (squareWrapperRef.current) {
          gsap.set(squareWrapperRef.current, { clipPath: "inset(0% 0% 0% 0% round 0px)" });
        }
        if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
        if (brandsRef.current) gsap.set(brandsRef.current, { opacity: 1, y: 0 });
        if (detailsRef.current) gsap.set(detailsRef.current, { opacity: 1, y: 0 });
        if (progressBarRef.current) gsap.set(progressBarRef.current, { scaleX: 1 });
        return;
      }

      const isMobile = window.innerWidth < 768;
      const initialClip = isMobile
        ? "inset(16% 10% 16% 10% round 6px)"
        : "inset(18% 30% 18% 30% round 8px)";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=170%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        squareWrapperRef.current,
        { clipPath: initialClip },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "power2.inOut",
          duration: 0.65,
        },
        0
      )
        .fromTo(
          imageRef.current,
          { scale: 1.25 },
          { scale: 1.0, ease: "none", duration: 0.65 },
          0
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.45 },
          0.15
        )
        .fromTo(
          brandsRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.45 },
          0.22
        )
        .fromTo(
          detailsRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.45 },
          0.26
        )
        .fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: "none", duration: 0.65 },
          0
        )
        .to(
          innerContentRef.current,
          {
            yPercent: -22,
            ease: "power1.in",
            duration: 0.35,
          },
          0.65
        );
    },
    { scope: sectionRef }
  );

  const brandsList = [...brandLogos, ...brandLogos];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0c0c0c] text-[var(--brand-bc5)] overflow-hidden select-none"
    >
      <div
        ref={squareWrapperRef}
        className="relative w-full h-full overflow-hidden will-change-[clip-path]"
      >
        <div ref={imageRef} className="absolute inset-0 h-full w-full will-change-transform">
          <Image
            src={approachData.image.src}
            alt={approachData.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />
        </div>

        <div
          ref={innerContentRef}
          className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 will-change-transform"
        >
          <div className="h-8 md:h-12" />

          <div className="my-auto max-w-4xl">
            <h2
              ref={titleRef}
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight text-white"
            >
              Our Approach
              <span className="block">To Every Build</span>
            </h2>
          </div>

          <div className="mt-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full pb-4 md:pb-6">
            <div
              ref={brandsRef}
              className="md:col-span-7 lg:col-span-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
            >
              <div ref={marqueeTrackRef} className="flex w-max items-center gap-10 sm:gap-14 md:gap-16">
                {brandsList.map((brand, idx) => (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="flex h-7 sm:h-9 md:h-10 w-20 sm:w-24 md:w-28 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
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

            <div
              ref={detailsRef}
              className="md:col-span-5 lg:col-span-4 flex flex-col items-start gap-5 sm:gap-6"
            >
              <p className="font-body text-xs sm:text-sm md:text-[0.95rem] font-light leading-relaxed text-[rgba(242,241,237,0.85)] max-w-md">
                {approachData.paragraph}
              </p>
              <Button href={approachData.ctaHref}>
                {approachData.ctaText}
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white/15">
            <div
              ref={progressBarRef}
              className="h-full w-full bg-white origin-left will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
