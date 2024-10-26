"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Layout } from "@/components/layout";

const images = [
  "https://dummyimage.com/1200x400/000/fff",
  "https://dummyimage.com/1200x400/000/fff",
  "https://dummyimage.com/1200x400/000/fff",
  "https://dummyimage.com/1200x400/000/fff",
];

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
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-72 sm:h-80 lg:h-full">
              <Image
                src={src}
                alt="image"
                className="w-full h-full object-cover brightness-75 hover:brightness-100"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="bg-black/10 backdrop-blur text-black mt-4 w-max px-8 mx-auto text-center shadow-lg rounded-xl">
          <div className="swiper-pagination"/>
        </div>
      </Swiper>
    </Layout.Container>
  );
};
