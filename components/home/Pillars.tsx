"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { pillarItems } from "@/data/contentData";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedPillarIndex } from "@/redux/slices/projectSlice";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Pillars() {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!containerRef.current || !desktopWrapperRef.current) return;

        const slides = gsap.utils.toArray<HTMLElement>(".pillar-slide");
        const images = gsap.utils.toArray<HTMLElement>(".pillar-bg-img");

        const totalDuration = (pillarItems.length - 1) * 1000;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalDuration}`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const idx = Math.min(
                pillarItems.length - 1,
                Math.floor(self.progress * pillarItems.length)
              );
              setActiveIndex(idx);
              dispatch(setSelectedPillarIndex(idx));
            },
          },
        });

        slides.forEach((slide, i) => {
          if (i > 0) {
            tl.to(
              images[i],
              { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" },
              (i - 1) * 1.5
            );
            tl.to(
              images[i - 1],
              { opacity: 0, scale: 1.05, duration: 1, ease: "power2.inOut" },
              (i - 1) * 1.5
            );
            tl.fromTo(
              slide,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              (i - 1) * 1.5 + 0.2
            );
            tl.to(
              slides[i - 1],
              { opacity: 0, y: -40, duration: 0.8, ease: "power3.in" },
              (i - 1) * 1.5
            );
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".mobile-pillar-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full bg-[#161616] text-[var(--brand-bc5)]">
      <div
        ref={desktopWrapperRef}
        className="hidden lg:flex relative h-[100dvh] w-full items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {pillarItems.map((item, idx) => (
            <div
              key={`bg-${item.id}`}
              className={`pillar-bg-img absolute inset-0 transition-transform duration-1000 ${
                idx === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-12 lg:px-20 grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6 relative min-h-[420px] flex items-center">
            {pillarItems.map((item, idx) => (
              <div
                key={item.id}
                className={`pillar-slide absolute inset-0 flex flex-col justify-center ${
                  idx === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="mb-4">
                  <span className="font-heading text-lg tracking-widest text-[rgba(242,241,237,0.5)]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mb-6 font-heading text-6xl xl:text-8xl font-light tracking-tight text-[var(--brand-bc5)]">
                  {item.title}
                </h3>

                <p className="mb-10 max-w-xl font-body text-base xl:text-lg font-light leading-relaxed text-[rgba(242,241,237,0.8)]">
                  {item.description}
                </p>

                <div>
                  <Button href={item.ctaHref}>{item.ctaText}</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex col-span-5 xl:col-span-6 justify-end items-center pr-6">
            <div className="flex flex-col gap-4 items-end">
              <span className="font-heading text-4xl xl:text-5xl font-extralight tracking-widest text-white/90">
                0{activeIndex + 1}
                <span className="text-white/30 text-2xl xl:text-3xl"> / 03</span>
              </span>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-[2px] transition-all duration-500 ${
                      i === activeIndex
                        ? "w-10 bg-white"
                        : "w-4 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-20 px-6 py-20">
        {pillarItems.map((item) => (
          <div
            key={`mobile-${item.id}`}
            className="mobile-pillar-card flex flex-col gap-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[rgba(242,241,237,0.1)]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <span className="font-heading text-sm tracking-widest text-[rgba(242,241,237,0.5)]">
              {item.number}
            </span>

            <h3 className="font-heading text-4xl sm:text-5xl font-light text-[var(--brand-bc5)]">
              {item.title}
            </h3>

            <p className="font-body text-sm sm:text-base font-light leading-relaxed text-[rgba(242,241,237,0.75)]">
              {item.description}
            </p>

            <div className="pt-2">
              <Button href={item.ctaHref}>{item.ctaText}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
