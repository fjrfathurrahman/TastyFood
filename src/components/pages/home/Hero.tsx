'use client';

import { Box, Layout } from "@/components/layout";
import { Button } from "@/components/common";
import ListAnimation from "@/components/animations/ListAnimation";
import Image from "next/image";
import Breakpoints from "@/lib/utils/Breakpoints";
import hero from "@/app/public/hero.png"

export const Hero = () => {
  const { isXLarge, isLarge } = Breakpoints();

  return (
    <Layout.Section bg="bg-zinc-100">
      <Layout.Container spacing={['py-36']}>
        <Box className="grid lg:grid-cols-2">
          <ListAnimation direction="vertical">
            <div className="h-0.5 bg-black w-32"  />
            <div>
              <h1 className="font-extralight">
                HEALTHY <span className="font-bold block">TASTY FOOD</span>
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              delectus libero doloremque, cumque ducimus ex dolorum beatae, ipsa
              itaque quis atque, quidem blanditiis inventore neque earum cum!
              Est debitis atque perferendis, natus velit ducimus vero a ullam
              adipisci nobis illo fuga unde amet.
            </p>
            <Button>TENTANG KAMI</Button>
          </ListAnimation>

          {isLarge || isXLarge ? (
            <div className="block absolute z-50 top-0 xl:-top-36 translate-x-3/4 xl:translate-x-[110%]">
              <Image src={hero} alt="image" width={700} height={700} quality={50}
              />
            </div>
          ) : null}
        </Box>
      </Layout.Container>
    </Layout.Section>
  );
};
