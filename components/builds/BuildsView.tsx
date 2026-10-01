"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import { buildsPageHero, buildsList } from "@/data/contentData";
import { ArrowRight } from "@/constants/createIcons";
import { gsap, useGSAP } from "@/lib/gsap";

export default function BuildsView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" }
        );
      }

      const cards = gsap.utils.toArray<HTMLElement>(".build-card");
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
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0c0c0c] text-[var(--brand-bc5)]">
      <section className="relative w-full pt-36 sm:pt-44 pb-20 md:pb-28 px-6 sm:px-12 md:px-16 border-b border-[rgba(242,241,237,0.08)]">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-body text-xs font-semibold tracking-[0.25rem] uppercase text-white/50 mb-4">
            {buildsPageHero.subheading}
          </span>
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl font-light tracking-tight text-white mb-6">
            {buildsPageHero.heading}
          </h1>
          <p className="max-w-2xl font-body text-base sm:text-lg font-light leading-relaxed text-[rgba(242,241,237,0.75)]">
            {buildsPageHero.description}
          </p>
        </div>
      </section>

      <section className="w-full px-6 sm:px-12 md:px-16 py-8 border-b border-[rgba(242,241,237,0.06)] flex items-center justify-between text-xs tracking-widest uppercase text-white/40">
        <span>Curated Archive</span>
        <span>{buildsList.length} Commissioned Builds</span>
      </section>

      <section className="w-full px-6 sm:px-12 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {buildsList.map((build) => (
            <article
              key={build.id}
              className="build-card group flex flex-col bg-[#141414] border border-[rgba(242,241,237,0.08)] hover:border-[rgba(242,241,237,0.25)] transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0c0c]">
                <Image
                  src={build.image.src}
                  alt={build.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 font-mono text-[11px] tracking-widest uppercase px-2.5 py-1 bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
                  {build.code}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-light text-white mb-3 group-hover:text-white/80 transition-colors">
                    {build.name}
                  </h2>
                  <p className="font-body text-xs sm:text-sm font-light text-[rgba(242,241,237,0.7)] leading-relaxed mb-6">
                    {build.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(242,241,237,0.08)] flex items-center justify-between">
                  <Link
                    href={`/contact?build=${build.id}`}
                    className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
                  >
                    <span>View Build</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#110103] border-t border-[rgba(242,241,237,0.08)] py-24 md:py-32 px-6 sm:px-12 md:px-16 text-center flex flex-col items-center">
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-light text-white max-w-3xl mb-8 leading-tight">
          Bespoke vehicles built on distinction, desire, and identity. Not simply to be modified.
        </h2>
        <Button href="/contact">Start Your Project</Button>
      </section>

      <Footer />
    </div>
  );
}
