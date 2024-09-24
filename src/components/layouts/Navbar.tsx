"use client";

import { MainContainer } from "../containers/MainContainer";
import { SectionLayout } from "../containers/SectionLayout";
import { BoxFlex, LinksEl } from "../common";
import { dIcons, dNavigation } from "@/lib/data/data";
import * as React from "react";
import { usePathname } from "next/navigation";
import useBreakpoints from "@/lib/hook/useMediaQuery";

export const Navigation = (): JSX.Element => {
  const {isLarge, isLessThanSmall} = useBreakpoints();

  if (isLarge || isLessThanSmall) {
    return <NavbarMobile />;
  } else {
    return <NavbarDesktop />;
  }

};

const NavbarDesktop = (): JSX.Element => {
  const pathName = usePathname();

  return (
    <SectionLayout className="absolute top-0 z-50 w-full">
      <MainContainer paddingY="py-6">
        <BoxFlex align="items-center" justify="justify-between" className="xl:justify-start xl:gap-16">
          <LinksEl
            className="min-w-max *:text-2xl xl:*:text-3xl *:font-bold uppercase"
            text="Tasty Food"
            url="/"
            icon={dIcons.food}
            variant="withIcon"
          />
          <BoxFlex gap="gap-6">
            {dNavigation.menu.slice(0, 5).map((item) => (
              <LinksEl key={item.name} text={item.name} url={item.url} className={`${pathName === item.url ? "underline decoration-wavy" : ""} lg:text-xl`} />
            ))}
          </BoxFlex>
        </BoxFlex>
      </MainContainer>
    </SectionLayout>
  );
};

const NavbarMobile = (): JSX.Element => {
  return (
    <>
      <MainContainer
        className="fixed top-0 z-50 w-full border-b shadow-sm bg-white/50 backdrop-blur"
        paddingY="py-6"
      >
        <LinksEl
          className="*:text-2xl *:font-bold uppercase"
          text="Tasty Food"
          url="/"
          icon={dIcons.food}
          variant="withIcon"
        />
      </MainContainer>

      <MainContainer
        className="fixed bottom-6 z-50 w-full"
        paddingY="py-4"
      >
        <BoxFlex
          className="w-[280px] sm:w-1/2 px-6 py-3.5 mx-auto rounded-2xl bg-white/50 border-t backdrop-blur shadow-md"
          align="items-center"
          justify="justify-between"
        >
          {dNavigation.menu.slice(0, 5).map((item) => (
            <LinksEl
              key={item.name}
              className="text-[26px] hover:scale-110 transition-all duration-500"
              variant="Icon"
              icon={item.icon}
              url={item.url}
            />
          ))}
        </BoxFlex>
      </MainContainer>
    </>
  );
};
