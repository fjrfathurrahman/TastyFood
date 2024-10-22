"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Header } from "@/components/fragments/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="lg:w-[768px] mx-auto px-6 lg:px-0 pb-24">
     
      <ProgressBar
        height="5px"
        color="#00A0F0"
        options={{ showSpinner: false }}
        shallowRouting
      />

      <Header/>

      {children}
    </section>
  );
}
