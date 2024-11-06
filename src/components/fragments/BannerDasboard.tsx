"use client";

import Burger from "@/app/public/design/Burger.webp";
import Donat from "@/app/public/design/Donat.webp";
import Drink from "@/app/public/design/Drink.webp";
import Image from "next/image";
import Breakpoints from "@/lib/utils/Breakpoints";
import { Box } from "@/components/layout";
import { motion } from "framer-motion";
import { imageVariants } from "@/resource/Variants";

export const BannerDasboard = () => {
  const { isLessThanSmall, isSmall, isMedium, isLarge, isXLarge } = Breakpoints();

  return (
    <Box className="relative z-50">
      <div className="w-full h-36 sm:h-44 md:h-52 bg-gradient-to-tr from-blue-900 to-primary rounded-xl" />
      <div className="absolute top-0 left-4 h-36 sm:h-44 md:h-52 flex flex-col justify-center text-white">
        <span className="text-xl sm:text-3xl lg:text-4xl font-bold">
          Hi, Admin 👋
        </span>
        <small>Siapkah Anda untuk mengatur Dashboard Anda?</small>
      </div>

      {isLessThanSmall ? null : isSmall || isMedium || isLarge || isXLarge ? AnimationImages() : null}
    </Box>
  );
};

const AnimationImages = () => {
  return (
    <>
      <div className=" absolute top-0 left-0 right-0 md:right-14 z-50">
        <motion.div
          className="absolute top-8 right-12 z-40"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={imageVariants}
        >
          <Image src={Burger} alt="Image" className="w-32 h-32" priority />
        </motion.div>

        <motion.div
          className="absolute top-6 right-28 z-30"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={imageVariants}
        >
          <Image src={Donat} alt="Image" className="w-32 h-32" priority />
        </motion.div>

        <motion.div
          className="absolute top-6 -right-4 z-30"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={imageVariants}
        >
          <Image
            src={Drink}
            alt="Image"
            className="w-32 h-32 rotate-[20deg] "
            priority
          />
        </motion.div>
      </div>
    </>
  );
};
