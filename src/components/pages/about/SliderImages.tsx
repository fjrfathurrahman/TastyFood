"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Layout } from "@/components/layout";
import { Images } from "@/resource";

export const SliderImages = () => {
  return (
    <Layout.Container className="relative w-full mx-auto rounded-xl" sizing={"h-max"}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
        pagination={{ clickable: true, type: "fraction", el: ".swiper-pagination" }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="max-w-screen-lg rounded-xl"
      >
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

      </Swiper>
    </Layout.Container>
  );
};
