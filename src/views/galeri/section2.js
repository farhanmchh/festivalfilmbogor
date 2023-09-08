import React, { useState } from 'react';
import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImagePreview from './imagePreview';

const contents = [
  {
    img: '/images/galeri-1.png',
    title: 'Gratis!',
    description:
      'Bagi para penggemar dan penonton film yang ingin berkunjung FFB, acara ini tidak dipungut biaya sama sekali, alias gratis.',
  },
  {
    img: '/images/galeri-2.png',
    title: 'Murah!',
    description:
      'Bagi para penggemar dan penonton film yang ingin berkunjung FFB, acara ini tidak dipungut biaya sama sekali, alias gratis.',
  },
  {
    img: '/images/galeri-1.png',
    title: 'Meriah!',
    description:
      'Bagi para penggemar dan penonton film yang ingin berkunjung FFB, acara ini tidak dipungut biaya sama sekali, alias gratis.',
  },
  {
    img: '/images/galeri-2.png',
    title: 'Menarik!',
    description:
      'Bagi para penggemar dan penonton film yang ingin berkunjung FFB, acara ini tidak dipungut biaya sama sekali, alias gratis.',
  },
];

export default function Section2() {
  const [imagePreview, setImagePreview] = useState(null);
  return (
    <>
      <ImagePreview
        image={imagePreview}
        onClose={() => setImagePreview(null)}
      />
      <div className="bg-[#DB4C4C] py-20 relative overflow-hidden z-0">
        <img
          src="/assets/membentang-01-black.svg"
          className="w-full absolute top-0 sm:-top-44 opacity-30 -z-10"
        />
        <img
          src="/assets/kembang-02-yellow.svg"
          className="w-20 absolute bottom-0 right-0"
        />
        <img
          src="/assets/kembang-02-yellow.svg"
          className="w-20 absolute bottom-0 left-0 rotate-90"
        />
        <img
          src="/assets/kembang-02-yellow.svg"
          className="w-20 absolute top-0 left-0 rotate-180"
        />
        <img
          src="/assets/kembang-02-yellow.svg"
          className="w-20 absolute top-0 right-0 -rotate-90"
        />

        <h3 className="text-center text-white mb-5">
          <span className="text-[#FEDE88]">Fakta Unik</span> FFB!
        </h3>
        <div className="w-[80%] lg:w-[60%] mx-auto">
          <div className="sm:flex justify-center mb-3">
            <Swiper
              className="w-full h-56 border-2 border-black overflow-hidden"
              modules={[Autoplay, Navigation]}
              navigation={{ nextEl: '#nextBtn', prevEl: '#prevBtn' }}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {contents.map((content) => (
                <SwiperSlide>
                  <img
                    src={content.img}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="w-full sm:w-2/3 h-56 border-2 border-black bg-white "
              modules={[Autoplay, Navigation]}
              navigation={{ nextEl: '#nextBtn', prevEl: '#prevBtn' }}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {contents.map((content, index) => (
                <SwiperSlide className="px-7 py-5">
                  <h4 className="text-center mb-3">
                    #{index + 1} {content.title}
                  </h4>

                  <p>{content.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="text-white text-sm font-light border border-white px-2 py-0.5 mr-2">
                #FUNFACT
              </span>
              <span className="text-white text-sm font-light border border-white px-2 py-0.5 ">
                #FFB
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-black px-3 py-2 text-white" id="prevBtn">
                <ArrowBackRounded />
              </button>
              <button className="bg-black px-3 py-2 text-white" id="nextBtn">
                <ArrowForwardRounded />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
