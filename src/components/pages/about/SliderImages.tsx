"use client";

import { SwiperSlide } from "swiper/react";
import { Image } from "@nextui-org/react";
import { Layout } from "@/components/layout";
import { Images } from "@/resource";
import { SwiperComponent } from "@/components/fragments/Swiper";

export const SliderImages = () => {
  return (
    <Layout.Section bg="bg-zinc-100">
      <Layout.Container
        className="relative w-full mx-auto rounded-xl"
        sizing={"h-max"}
      >
        <SwiperComponent>
          {Images.slider.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-80">
                <Image
                  src={src.src.src}
                  alt="image"
                  className="w-full h-full object-cover origin-center object-center brightness-75 hover:brightness-100"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </Layout.Container>
    </Layout.Section>
  );
};
