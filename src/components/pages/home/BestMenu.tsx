"use client";

import { Layout } from "@/components/layout";
import { Image, Link } from "@nextui-org/react";
import { SwiperComponent } from "@/components/fragments/Swiper";
import { SwiperSlide } from "swiper/react";
import { Title } from "@/components/common";
import { MenuBest } from "@/resource";
import Breakpoints from "@/lib/utils/Breakpoints";

export const BestMenu = () => {
  const { isSmall, isLessThanSmall, isMedium, isLarge, isXLarge } =
    Breakpoints();

  return (
    <Layout.Section>
      <div className="bgMenu pb-36 pt-32">
        {isSmall || isLessThanSmall || isMedium ? <MenuMobile /> : isLarge || isXLarge ? <MenuDesktop /> : null}
      </div>
    </Layout.Section>
  );
};

const MenuMobile = () => {
  return (
    <Layout.Container sizing={"h-max"} spacing={["px-4", "sm:px-16", "md:px-28"]}>
      <Title text="MENU TERBAIK" className="text-white text-center mb-6" center />

      <SwiperComponent>
        {MenuBest.map((item) => (
          <SwiperSlide key={item.title} className="w-full h-max py-4 space-y-4 shadow-md bg-white rounded-2xl">
            <div className="flex justify-center">
              <Image src={item.image} alt="image" width={200} height={200} />
            </div>
            <div className="lg:py-28 px-4 sm:px-8 space-y-2.5">
              <h4 className="line-clamp-2">{item.title}</h4>
              <small className="line-clamp-5">{item.description}</small>

              <Link href="#" color="primary">Pesan Sekarang</Link>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Layout.Container>
  );
};

const MenuDesktop = () => {
  return (
    <Layout.Container sizing={"h-max"} spacing={["px-4"]}>
      <Title text="MENU TERBAIK" className="text-white text-center mb-6" center />

      <div className="grid grid-cols-4 gap-4">
        {MenuBest.map((item) => (
          <div key={item.title} className="w-full h-[470px] py-4 space-y-4 shadow-md bg-white rounded-2xl">
            <div className="flex justify-center">
              <Image src={item.image} alt="image" width={200} height={200} />
            </div>
            <div className="px-4 space-y-2.5">
              <h4 className="line-clamp-2">{item.title}</h4>
              <small className="line-clamp-5">{item.description}</small>

              <Link href="#" color="primary">Pesan Sekarang</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout.Container>
  );
};