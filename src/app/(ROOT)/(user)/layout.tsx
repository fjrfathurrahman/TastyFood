"use client";

import { Banner } from "@/components/fragments/Banner";
import { Footer, Navigation } from "@/components/layout";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const color = pathName === "/" ? "#000000" : "#ffffff";

  return (
    <section>
      <ProgressBar
        height="5px"
        color={color}
        options={{ showSpinner: false }}
        stopDelay={1000}
        delay={300}
        shallowRouting
      />
      <Banner />
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
