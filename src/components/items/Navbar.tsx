"use client";

import { MainContainer } from "../containers/MainContainer";
import { SectionLayout } from "../containers/SectionLayout";
import { BoxFlex, LinksEl } from "../common";
import { dIcons, dNavigation } from "@/lib/data/data";
import { usePathname } from "next/navigation";
import { FlexProps } from "@/lib/types/types";
import useBreakpoints from "@/lib/hook/useMediaQuery";
import * as React from "react";

export const Navigation = (props: FlexProps): JSX.Element => {
  const { isLessThanSmall, isSmall  } = useBreakpoints();

  if (isSmall || isLessThanSmall) {
    return <NavbarMobile />;
  } else {
    return <NavbarDesktop {...props} />;
  }
};


const NavbarDesktop = (props: FlexProps): JSX.Element => {
  const pathName = usePathname();

  return (
    <SectionLayout className="absolute top-0 z-50 w-full">
      <MainContainer paddingY="py-8">
        <BoxFlex align="items-center" {...props}>
          <LinksEl
            className="min-w-max *:text-2xl xl:*:text-3xl *:font-bold uppercase"
            text="Tasty Food"
            url="/"
            icon={dIcons.food}
            variant="withIcon"
          />
          <BoxFlex gap="gap-8">
            {dNavigation.menu.slice(0, 5).map((item) => (
              <LinksEl
                key={item.name}
                text={item.name}
                url={item.url}
                className={`${ pathName === item.url ? "underline decoration-wavy" : null} lg:text-xl`}
              />
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
        paddingY="py-4"
      >
        <LinksEl
          className="*:text-2xl *:font-bold uppercase"
          text="Tasty Food"
          url="/"
          icon={dIcons.food}
          variant="withIcon"
        />
      </MainContainer>

      <MainContainer className="fixed bottom-8 z-50 w-full" paddingY="py-4">
        <BoxFlex
          className="w-[280px] sm:w-1/2 px-8 py-3.5 mx-auto rounded-2xl bg-white/50 border-t backdrop-blur shadow-md"
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
