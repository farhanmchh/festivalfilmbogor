import { Modal } from '@mui/material';
import React, { useState } from 'react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImagePreview from './imagePreview';

const contents = [
  { images: ['/images/galeri-1.png', '/images/galeri-1.png'] },
  { images: ['/images/galeri-2.png', '/images/galeri-2.png'] },
  { images: ['/images/galeri-1.png', '/images/galeri-1.png'] },
  { images: ['/images/galeri-2.png', '/images/galeri-2.png'] },
];

export default function Section1() {
  const [imagePreview, setImagePreview] = useState(null);
  return (
    <>
      <ImagePreview
        image={imagePreview}
        onClose={() => setImagePreview(null)}
      />
      <div className="relative">
        <img
          src="/assets/membentang-02-black.svg"
          className="absolute top-64 -z-10 opacity-20 w-full"
        />
        <div className="pt-16 pb-10 sm:w-[75%] mx-5 sm:mx-auto z-0">
          <div className="text-center sm:flex justify-center gap-2 mb-7">
            <h1 className="text-4xl text-[#DB4C4C]">PESONA</h1>
            <h3 className="self-center">Festival Film Bogor</h3>
          </div>

          <Swiper
            className="sm:grid grid-cols-2 gap-y-7 gap-x-10"
            modules={[Navigation, Scrollbar, Autoplay]}
            spaceBetween={10}
            slidesPerView={window.innerWidth < 768 ? 1 : 2}
            scrollbar={{
              draggable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {contents.map((content) => (
              <SwiperSlide className="mb-7">
                {content.images.map((image) => (
                  <div
                    className="border-2 border-black mb-3"
                    onClick={() => setImagePreview(image)}
                  >
                    <img src={image} />
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="flex my-7">
            <div className="h-3 w-1/2 bg-[#DB4C4C]" />
            <div className="h-3 w-1/2 bg-black" />
          </div> */}
        </div>
      </div>
    </>
  );
}
