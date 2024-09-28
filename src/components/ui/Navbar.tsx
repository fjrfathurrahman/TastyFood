"use client";

import { LinksEl } from "../common";
import { BoxFlex, MainContainer, SectionLayout } from "../containers";
import { dIcons, dNavigation } from "@/lib/data/data";
import { FlexProps } from "@/lib/types/types";
import useBreakpoints from "@/lib/hook/useMediaQuery";
import { usePathname } from "next/navigation";
import * as React from "react";

export const Navigation = (props: FlexProps): JSX.Element => {
  const { isLessThanSmall, isSmall } = useBreakpoints();

  if (isSmall || isLessThanSmall) {
    return (
      <NavbarMobile data={dNavigation.menu}>
        <NavbarMobile.Header />
      </NavbarMobile>
    );
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
              <LinksEl key={item.name} text={item.name} url={item.url} className={`${pathName === item.url ? "underline decoration-wavy" : null } lg:text-xl`}
              />
            ))}
          </BoxFlex>
        </BoxFlex>
      </MainContainer>
    </SectionLayout>
  );
};

export const NavbarMobile = ({children, data}: {data? : { name: string; icon: React.ReactNode; url: string; }[], children?: React.ReactNode}): JSX.Element => {  
  const pathName = usePathname();
 
  return (
    <>
      {children}

      <MainContainer className="fixed bottom-6 right-0 left-0 z-50 w-full" paddingY="py-4">
        <BoxFlex className="w-[260px] sm:w-3/5 md:w-[27%] px-8 py-3.5 mx-auto rounded-2xl bg-white/70 backdrop-blur shadow-md" align="items-center" justify="justify-between">
          {data && data.slice(0, 5).map((item) => (
            <LinksEl
              key={item.name}
              className={`text-[24px] sm:text-3xl hover:scale-110 transition-all duration-500 ${pathName === item.url ? "text-blue-500" : null }`}
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


const NavbarMobileHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[999] shadow-sm bg-white/70 backdrop-blur">
      <MainContainer paddingY="py-8">
        <LinksEl
          className="*:text-2xl font-bold uppercase"
          text="Tasty Food"
          url="/"
          icon={dIcons.food}
          variant="withIcon"
        />
      </MainContainer>
    </div>
  );
};

NavbarMobile.Header = NavbarMobileHeader;
