import React from "react";
import Hero from "./Hero";
import Approach from "./Approach";
import Pillars from "./Pillars";
import Statement from "./Statement";
import Services from "./Services";
import Ordinary from "./Ordinary";
import BuildsTeaser from "./BuildsTeaser";
import StockTeaser from "./StockTeaser";
import FinalCTA from "./FinalCTA";
import Footer from "@/components/layout/Footer";

export default function HomeView() {
  return (
    <>
      <Hero />
      <Approach />
      <Pillars />
      <Statement />
      <Services />
      <Ordinary />
      <BuildsTeaser />
      <StockTeaser />
      <FinalCTA />
      <Footer />
    </>
  );
}
