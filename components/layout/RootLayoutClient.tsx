"use client";

import React from "react";
import ReduxProvider from "@/redux/Provider";
import Header from "./Header";
import { useLenisScroll } from "@/hooks/useLenisScroll";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenisScroll();

  return (
    <ReduxProvider>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </ReduxProvider>
  );
}
