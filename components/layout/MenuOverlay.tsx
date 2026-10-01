"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMenuOpen } from "@/redux/slices/navSlice";
import { X, FaLinkedinIn, FaInstagram, FaFacebookF } from "@/constants/createIcons";
import { gsap } from "@/lib/gsap";

const mainNavItems = [
  { label: "BUILDS", href: "/builds" },
  { label: "STOCK", href: "/stock" },
  { label: "CONTACT", href: "/contact" },
];

const legalNavItems = [
  { label: "COOKIES", href: "/cookies" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "TERMS", href: "/terms" },
];

export default function MenuOverlay() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.nav.isMenuOpen);
  const pathname = usePathname();

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const getInitialActive = () => {
    if (pathname?.includes("stock")) return 1;
    if (pathname?.includes("contact")) return 2;
    return 0;
  };

  const activeIdx = hoveredIdx !== null ? hoveredIdx : getInitialActive();

  const handleClose = () => {
    dispatch(setMenuOpen(false));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current, {
        display: isOpen ? "flex" : "none",
        pointerEvents: isOpen ? "auto" : "none",
        autoAlpha: isOpen ? 1 : 0,
      });
      return;
    }

    if (isOpen) {
      gsap.killTweensOf(containerRef.current);
      gsap.set(containerRef.current, {
        display: "flex",
        pointerEvents: "auto",
        clipPath: "inset(0% 0% 100% 0%)",
      });

      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.7,
        ease: "power4.inOut",
      })
        .fromTo(
          topBarRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
          "-=0.25"
        )
        .fromTo(
          listRef.current?.querySelectorAll(".nav-item-text") || [],
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
          "-=0.3"
        );
    } else {
      gsap.killTweensOf(containerRef.current);
      gsap.to(containerRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, { display: "none", pointerEvents: "none" });
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      style={{ display: "none" }}
      className="fixed inset-0 z-[1050] flex flex-col justify-between overflow-hidden bg-[#240306] px-6 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10 select-none text-[var(--brand-bc5)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#250306]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#48080f_0%,#260205_55%,#120102_100%)]" />
        <div className="absolute -top-[20%] -right-[15%] w-[130%] h-[150%] opacity-40 bg-[linear-gradient(125deg,transparent_38%,rgba(0,0,0,0.65)_38.2%,rgba(0,0,0,0.35)_55%,transparent_80%)]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[100%] h-[100%] opacity-35 bg-[linear-gradient(55deg,rgba(0,0,0,0.7)_0%,transparent_50%)]" />
      </div>

      <div
        ref={topBarRef}
        className="relative z-10 grid grid-cols-3 items-center w-full"
      >
        <div className="flex items-center gap-4 sm:gap-6 text-white/90">
          <a
            href="https://linkedin.com/company/forgeautomotive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-opacity p-1"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="https://instagram.com/forgeautomotive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-opacity p-1"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://facebook.com/forgeautomotive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-opacity p-1"
          >
            <FaFacebookF size={16} />
          </a>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            onClick={handleClose}
            aria-label="Forge Automotive Home"
            className="group flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <svg
              width="66"
              height="32"
              viewBox="0 0 78 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-7 sm:h-8 fill-current text-white"
            >
              <defs>
                <clipPath id="_forge_clip_overlay">
                  <rect x="0" y="24" width="78" height="12"></rect>
                </clipPath>
              </defs>
              <g className="icon">
                <path d="M52.6364 20.4918H61.6962C61.745 20.4918 61.7717 20.4348 61.7362 20.3997L42.5779 1.46088C41.628 0.522057 40.3452 0 39.0047 0H32.0179C31.969 0 31.9424 0.0570314 31.9779 0.0921277L38.7028 6.73848C38.7383 6.77358 38.7117 6.83061 38.6629 6.83061H32.0445C30.7039 6.83061 29.4167 7.35706 28.4712 8.29149L16.2243 20.3953C16.1888 20.4304 16.2154 20.4874 16.2643 20.4874H25.324C25.324 20.4874 25.3507 20.4831 25.364 20.4699L29.8384 16.0478C29.8384 16.0478 29.8961 16.0258 29.9183 16.0478L34.3927 20.4699C34.3927 20.4699 34.4148 20.4874 34.4326 20.4874H43.4924C43.5412 20.4874 43.5678 20.4304 43.5323 20.3953L34.5303 11.4984C34.5303 11.4984 34.5081 11.4414 34.5303 11.4194L38.9558 7.04558C38.9558 7.04558 39.0135 7.02364 39.0357 7.04558L52.6187 20.4699C52.6187 20.4699 52.6409 20.4874 52.6586 20.4874L52.6364 20.4918Z" />
              </g>
              <g className="text" clipPath="url(#_forge_clip_overlay)">
                <path d="M10.8797 30.1741L10.8841 31.4639H3.28477V35.8465H0V25.6072H11.1549V26.8926H3.28477V30.1741H10.8797Z" />
                <path d="M27.9118 34.2013C25.8122 36.0702 22.1457 36.2632 19.5045 35.7718C17.2585 35.3551 15.039 34.1706 14.5552 31.7884C14.4087 31.0733 14.4087 30.3538 14.5552 29.6388C15.039 27.2566 17.2673 26.094 19.5045 25.6817C22.1368 25.1991 25.8122 25.3833 27.9118 27.2347C28.6397 27.8752 29.128 28.7087 29.3189 29.6607C29.4609 30.367 29.4565 31.0689 29.3189 31.7752C29.128 32.7272 28.6397 33.5608 27.9162 34.2057L27.9118 34.2013ZM23.1222 34.5084C24.2896 34.2232 25.1952 33.4116 25.6124 32.3105C25.9853 31.3322 25.9986 30.2398 25.6613 29.2527C25.2662 28.0945 24.3296 27.2434 23.1311 26.9495C22.1945 26.7214 21.1957 26.7872 20.2991 27.1338C19.2071 27.5593 18.4081 28.4455 18.1107 29.5686C17.9021 30.3582 17.9154 31.1874 18.1507 31.9683C18.4791 33.0694 19.2915 33.9293 20.379 34.3373C21.249 34.6619 22.1989 34.7277 23.1222 34.4996V34.5084Z" />
                <path d="M42.9818 31.9947L45.6762 35.8465H42.2183L39.7724 32.3369H36.3146V35.8509H33.0298V25.6116H40.6735C41.4992 25.6116 42.2937 25.7169 43.0794 25.9143C44.1891 26.2214 45.2633 26.8399 45.5874 28.0069C45.7782 28.6781 45.7339 29.38 45.4897 30.0293C45.2589 30.5865 44.8772 31.0252 44.3756 31.3586C43.9494 31.6525 43.4833 31.8368 42.9818 31.9947ZM42.1339 28.3886C42.0052 27.827 41.6501 27.3839 41.1441 27.1339C40.8067 26.9672 40.4605 26.9014 40.0743 26.8926H36.3146V31.0515H40.1497C40.9976 31.0208 41.7167 30.5426 42.0185 29.7661C42.1872 29.3274 42.2271 28.8668 42.1339 28.3886Z" />
                <path d="M59.5167 31.49H56.3917V30.1871H62.6416V35.3901C60.9859 35.7805 59.3524 35.9692 57.679 35.9955C56.5826 36.013 55.5172 35.9604 54.4341 35.8025C52.9693 35.5743 51.4113 35.1269 50.2705 34.1661C49.5558 33.5651 49.0586 32.7842 48.8545 31.8717C48.7035 31.2049 48.6902 30.5336 48.8012 29.858C49.0631 28.2699 50.0973 27.1907 51.5267 26.5151C53.7905 25.4491 56.9288 25.3657 59.4012 25.4929L62.3131 25.7605V27.1249C61.3499 26.967 60.4044 26.8749 59.4279 26.8354C57.9497 26.7827 56.5559 26.7783 55.1355 27.2214C53.715 27.6645 52.5165 28.5726 52.2946 30.1125C52.1082 31.4023 52.4855 32.6131 53.533 33.4379C53.9725 33.7844 54.4563 34.0257 54.989 34.2144C55.7125 34.4644 56.4494 34.5785 57.2173 34.6224C57.9897 34.6487 58.7443 34.6311 59.5167 34.5741V31.4856V31.49Z" />
                <path d="M77.6049 31.0997H70.1032L70.0987 34.5611H77.9999V35.8465H66.814V25.6072H77.8712V26.8926H70.0987V29.8143H77.6049V31.0997Z" />
              </g>
            </svg>
          </Link>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close Navigation Menu"
            className="group flex items-center gap-2 sm:gap-3 cursor-pointer text-white/90 hover:text-white transition-colors"
          >
            <span className="font-body text-xs font-semibold tracking-[0.25rem] uppercase">
              CLOSE
            </span>
            <X size={18} className="text-white" />
          </button>
        </div>
      </div>

      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
        <ul
          ref={listRef}
          onMouseLeave={() => setHoveredIdx(null)}
          className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 md:space-y-3"
        >
          {mainNavItems.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <li key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  onClick={handleClose}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`nav-item-text block font-heading font-normal uppercase tracking-normal transition-all duration-300 transform text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.92] select-none ${
                    isSelected
                      ? "text-white opacity-100 scale-[1.02]"
                      : "text-white/20 opacity-25 hover:text-white hover:opacity-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        ref={bottomBarRef}
        className="relative z-10 grid grid-cols-3 items-end w-full pb-2"
      >
        <div className="text-left">
          <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/40">
            COPYRIGHT © 2026
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-5 sm:gap-8 font-heading text-xs sm:text-sm tracking-[0.2em] uppercase text-white/80">
            {legalNavItems.map((legal) => (
              <Link
                key={legal.href}
                href={legal.href}
                onClick={handleClose}
                className="hover:text-white transition-colors"
              >
                {legal.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center">
            <span className="block text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/40 mb-0.5">
              POWERED BY
            </span>
            <span className="font-heading font-bold tracking-widest text-xs sm:text-sm text-white/90">
              WRPD.
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/40">
            MADE BY 12 STUDIO
          </span>
        </div>
      </div>
    </div>
  );
}
