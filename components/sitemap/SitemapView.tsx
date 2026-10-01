import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import { footerData } from "@/data/contentData";

export default function SitemapView() {
  return (
    <>
      <div className="min-h-[85vh] bg-[#0c0c0c] text-[var(--brand-bc5)] pt-36 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-5xl font-light mb-8 tracking-tight">Sitemap</h1>
        <ul className="flex flex-col gap-4 font-body text-base text-[rgba(242,241,237,0.7)] mb-12">
          {footerData.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/">Return Home</Button>
      </div>
      <Footer />
    </>
  );
}
