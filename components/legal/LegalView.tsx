import React from "react";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";

interface LegalViewProps {
  title: string;
  description: string;
}

export default function LegalView({ title, description }: LegalViewProps) {
  return (
    <>
      <div className="min-h-[85vh] bg-[#0c0c0c] text-[var(--brand-bc5)] pt-36 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-5xl font-light mb-6 tracking-tight">
          {title}
        </h1>
        <p className="max-w-xl font-body text-sm md:text-base font-light text-[rgba(242,241,237,0.7)] mb-10 leading-relaxed">
          {description}
        </p>
        <Button href="/">Return Home</Button>
      </div>
      <Footer />
    </>
  );
}
