"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SectionLayout } from "@/components/containers/SectionLayout";
import { MainContainer } from "@/components/containers/MainContainer";
import { ImageEl } from "@/components/common";
import { dImages } from "@/lib/data/data";

export const SwiperImage = (): JSX.Element => {
  return (
    <>
      <SectionLayout bg="bg-gray-200">
        <MainContainer>
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {dImages.about.map((item, index) => (
              <SwiperSlide key={index}>
                <ImageEl src={item.image} rounded="rounded-3xl" />
              </SwiperSlide>
            ))}
          </Swiper>
        </MainContainer>
      </SectionLayout>
    </>
  );
};
