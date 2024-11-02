"use client";

import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SwiperComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        clickable: true,
        type: "fraction",
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="max-w-screen-lg rounded-2xl"
    >
      {children}
    </Swiper>
  );
};
