"use client";

import header from "../../../assets/header.png";
import { SectionLayout } from "../containers/SectionLayout";
import { ImageEl } from "../common";
import { MainContainer } from "../containers/MainContainer";
import { usePathname } from "next/navigation";

export const Header = (): JSX.Element => {
  const pathName = usePathname();

  return (
    <SectionLayout>
      <div className=" absolute top-0 left-0 right-0 z-50">
        <MainContainer paddingY="py-32">
          <h1 className="text-white uppercase text-2xl sm:text-3xl font-bold">{pathName.slice(1)} KAMI</h1>
        </MainContainer>
      </div>
      <ImageEl src={header} className="h-52 sm:h-56 lg:h-72 brightness-75" rounded="rounded-none" />
    </SectionLayout>
  );
};
