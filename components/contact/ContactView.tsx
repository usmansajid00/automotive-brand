"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import { siteMetadata } from "@/data/contentData";
import { contactSchema, ContactFormValues } from "@/validations/contactSchema";
import { CheckCircle, Phone } from "@/constants/createIcons";

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    const parseResult = contactSchema.safeParse(values);
    if (!parseResult.success) return;

    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <div className="min-h-screen bg-[#0c0c0c] text-[var(--brand-bc5)] pt-36 pb-24 px-6 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-12">
          <h1 className="font-heading text-5xl sm:text-7xl font-light tracking-tight mb-4">
            Start Your Project
          </h1>
          <p className="font-body text-base font-light text-[rgba(242,241,237,0.7)] leading-relaxed">
            Tell us about your vehicle and your vision. A Forge bespoke specialist will get in touch with you shortly.
          </p>
        </div>

        <div className="w-full max-w-xl bg-[#141414] p-8 md:p-12 rounded-[2px] border border-[rgba(242,241,237,0.1)] shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-6">
              <CheckCircle size={48} className="text-white/80" />
              <h2 className="font-heading text-3xl font-light text-white">Thank You</h2>
              <p className="font-body text-sm font-light text-[rgba(242,241,237,0.8)]">
                Your inquiry has been received. Our team will review your project and connect with you directly.
              </p>
              <Button href="/">Return Home</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[rgba(242,241,237,0.6)] mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Lord / Lady / Mr / Ms..."
                  {...register("name", { required: true })}
                  className="w-full bg-[#0c0c0c] border border-[rgba(242,241,237,0.15)] px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/50 transition-colors"
                />
                {errors.name && (
                  <span className="text-xs text-red-400 mt-1 block">Name is required</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[rgba(242,241,237,0.6)] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email", { required: true })}
                    className="w-full bg-[#0c0c0c] border border-[rgba(242,241,237,0.15)] px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/50 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 block">Valid email required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[rgba(242,241,237,0.6)] mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+44 ..."
                    {...register("phone", { required: true })}
                    className="w-full bg-[#0c0c0c] border border-[rgba(242,241,237,0.15)] px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/50 transition-colors"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-400 mt-1 block">Phone is required</span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-xs uppercase tracking-widest text-[rgba(242,241,237,0.6)] mb-2">
                  Vehicle Make & Model
                </label>
                <input
                  id="vehicle"
                  type="text"
                  placeholder="e.g. Porsche 992 GT3 RS, Defender 110, G63"
                  {...register("vehicle")}
                  className="w-full bg-[#0c0c0c] border border-[rgba(242,241,237,0.15)] px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[rgba(242,241,237,0.6)] mb-2">
                  Project Vision & Scope
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share your goals for bodystyling, interior retrimming, exhaust, wheels, or full build commissioning..."
                  {...register("message", { required: true })}
                  className="w-full bg-[#0c0c0c] border border-[rgba(242,241,237,0.15)] px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/50 transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-400 mt-1 block">Project vision is required</span>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <Button type="submit">
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-12 text-center text-xs tracking-widest uppercase text-white/40 flex items-center gap-2 justify-center">
          <Phone size={14} />
          <span>Direct Line: </span>
          <a href={siteMetadata.phoneTel} className="text-white hover:underline">
            {siteMetadata.phone}
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
