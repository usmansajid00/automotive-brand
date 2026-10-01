"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { footerData } from "@/data/contentData";
import { useLenisScroll } from "@/hooks/useLenisScroll";

export default function Footer() {
  const { scrollToTop } = useLenisScroll();

  return (
    <footer className="relative w-full bg-[#0c0c0c] text-[var(--brand-bc5)] pt-16 pb-16 border-t border-[rgba(242,241,237,0.08)]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-center">
        <div className="mb-14">
          <Button onClick={scrollToTop} ariaLabel="Back to Top">
            {footerData.backToTop}
          </Button>
        </div>

        <nav aria-label="Footer Navigation" className="w-full mb-10">
          <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 text-xs sm:text-sm uppercase tracking-widest font-body text-[rgba(242,241,237,0.65)]">
            {footerData.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors relative py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full max-w-md h-[1px] bg-[rgba(242,241,237,0.08)] mb-8" />

        <div className="text-center font-body text-xs font-light tracking-wider text-[rgba(242,241,237,0.4)]">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
