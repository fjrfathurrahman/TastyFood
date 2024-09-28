"use client";

import { BoxFlex } from "@/components/containers";
import { NavbarMobile } from "@/components/ui/Navbar";
import { dNavigation } from "@/lib/data/data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="absolute top-0 left-0 right-0 w-screen h-screen bg-gray-300/15" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 0%), radial-gradient(circle, rgba(0,0,0,0.7) 5%, transparent 0%)", backgroundSize: "35px 35px",}}>
      <BoxFlex className="w-full sm:w-[968px] mx-auto p-6" direction="flex-col">
        {children}
      </BoxFlex>
      <NavbarMobile data={dNavigation.menuDashboard} />
    </html>
  );
}
