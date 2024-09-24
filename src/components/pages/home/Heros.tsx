"use client";

import { BoxFlex, BoxGrid, ButtonEl } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { SectionLayout } from "@/components/containers/SectionLayout";
import { dImages } from "@/lib/data/data";
import useBreakpoints from "@/lib/hook/useMediaQuery";
import Image from "next/image";

export const HerosSection = (): JSX.Element => {
  const { isLarge, isXLarge } = useBreakpoints();

  return (
    <SectionLayout bg="bg-gray-200">
      <MainContainer paddingY="py-32">
        <BoxGrid className="lg:grid-cols-2">
          <BoxFlex direction="flex-col">
            <div className="w-1/3 lg:w-1/5 h-1 bg-black" />
            <div className="text-5xl sm:text-6xl lg:text-7xl uppercase font-light select-none">
              <h1>healthy</h1>
              <h1 className="font-bold">tasty food</h1>
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <ButtonEl text="LIHAT TENTANG KAMI" variant="primary" />
          </BoxFlex>

          {isLarge || isXLarge ? (
            <div className="hidden lg:block absolute top-0 xl:-top-36 translate-x-3/4 xl:translate-x-[110%] ">
              <Image
                src={dImages.hero}
                alt="hero"
                width={700}
                height={700}
                quality={30}
              />
            </div>
          ) : null}
        </BoxGrid>
      </MainContainer>
    </SectionLayout>
  );
};
