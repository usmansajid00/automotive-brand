"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceItems } from "@/data/contentData";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedService } from "@/redux/slices/projectSlice";
import { ArrowRight } from "@/constants/createIcons";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Services() {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".service-scroll-item");

        items.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              setActiveIndex(index);
              dispatch(setSelectedService(serviceItems[index].id));
            },
            onEnterBack: () => {
              setActiveIndex(index);
              dispatch(setSelectedService(serviceItems[index].id));
            },
          });

          const heading = item.querySelector(".service-heading");
          if (heading) {
            gsap.fromTo(
              heading,
              { opacity: 0.2, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 80%",
                  end: "top 45%",
                  scrub: true,
                },
              }
            );
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const headings = gsap.utils.toArray<HTMLElement>(".service-heading");
        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0.2, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                end: "top 55%",
                scrub: true,
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
    <section
      ref={containerRef}
      className="relative w-full bg-[#0c0c0c] text-[var(--brand-bc5)] py-20 lg:py-0 border-t border-[rgba(242,241,237,0.06)]"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[50%] xl:w-[48%] px-6 sm:px-12 md:px-16 lg:pl-16 xl:pl-24 lg:pr-12 flex flex-col">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className="service-scroll-item min-h-[60vh] lg:min-h-[85vh] flex flex-col justify-center py-12 lg:py-24 border-b border-[rgba(242,241,237,0.08)] lg:border-b-0"
            >
              <div className="mb-4">
                <span className="font-heading text-sm tracking-widest text-[rgba(242,241,237,0.4)]">
                  {service.number}
                </span>
              </div>

              <h3 className="service-heading mb-6 font-heading text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[var(--brand-bc5)] will-change-[opacity,transform]">
                {service.title}
              </h3>

              <p className="mb-8 max-w-lg font-body text-base lg:text-lg font-light leading-relaxed text-[rgba(242,241,237,0.75)]">
                {service.description}
              </p>

              <div>
                <Link
                  href={service.ctaHref}
                  className="group inline-flex items-center gap-3 font-body text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--brand-bc5)] hover:text-white transition-colors"
                >
                  <span className="relative pb-1">
                    {service.ctaText}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight
                    size={14}
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block lg:w-[50%] xl:w-[52%] relative">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="relative h-full w-full">
              {serviceItems.map((service, index) => (
                <div
                  key={`sticky-${service.id}`}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    priority={index === 0}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent w-36 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
