import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const organizes = [
  { img: '/images/organized-1.png' },
  { img: '/images/organized-2.png' },
];

const supports = [
  { img: '/images/supported-1.png' },
  { img: '/images/supported-2.png' },
  { img: '/images/supported-3.png' },
  { img: '/images/supported-4.png' },
  { img: '/images/supported-5.png' },
  { img: '/images/supported-6.png' },
  { img: '/images/supported-7.png' },
];

export default function Section3() {
  return (
    <div className="bg-[#DB4C4C] sm:flex justify-around gap-5 py-20 relative z-0">
      <img
        src="/assets/membentang-02-green.svg"
        className="absolute top-10 -z-10"
      />
      <img
        src="/assets/membentang-02-green.svg"
        className="absolute top-1/2 -z-10 sm:hidden"
      />
      <div className="text-center mb-10 ">
        <h4 className="inline bg-[#2EAAE8] border border-white text-white px-3 py-1">
          Organized By
        </h4>
        <Swiper
          className="flex w-48"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
        >
          {organizes.map((organize) => (
            <SwiperSlide className="mx-auto my-5">
              <img src={organize.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center">
        <h4 className="inline bg-[#2EAAE8] border border-white text-white px-3 py-1">
          Supported By
        </h4>
        <Swiper
          className="flex w-48"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
        >
          {supports.map((support) => (
            <SwiperSlide className=" mx-auto my-5">
              <img src={support.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
