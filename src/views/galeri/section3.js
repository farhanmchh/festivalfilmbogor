import React, { useEffect, useState } from 'react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import ImagePreview from './imagePreview';

const merchandises = [
  {
    title: 'T-Shirt',
    variant: '(Hitam)',
    img: '/images/merchandise-1.png',
    url: 'https://wa.me/p/6470057076420612/6285770558706',
  },
  {
    title: 'T-Shirt',
    variant: '(Putih)',
    img: '/images/merchandise-2.png',
    url: 'https://wa.me/p/9672212966183385/6285770558706',
  },
  {
    title: 'Accesories',
    variant: null,
    img: '/images/merchandise-3.png',
    url: 'https://wa.me/p/7432837243398087/6285770558706',
  },
  {
    title: 'Sticker Pack',
    variant: '',
    img: '/images/merchandise-4.png',
    url: 'https://wa.me/p/9692435810827506/6285770558706',
  },
  {
    title: 'Totebag',
    variant: '',
    img: '/images/merchandise-5.png',
    url: 'https://wa.me/p/6610535082373145/6285770558706',
  },
];

const bundlings = [
  {
    price: 125,
    detail: [
      { items: ['Baseball Cap', 'Keychain', 'Sticker Pack'] },
      { items: ['Totebag', 'Keychain', 'Sticker Pack'] },
    ],
  },
  {
    price: 150,
    detail: [
      { items: ['T-Shirt', 'Keychain', 'Sticker Pack'] },
      { items: ['Totebag', 'Tumbler', 'Sticker Pack'] },
      { items: ['Baseball Cap', 'Tumbler', 'Sticker Pack'] },
    ],
  },
  {
    price: 175,
    detail: [
      { items: ['T-Shirt', 'Keychain', 'Sticker Pack'] },
      { items: ['T-Shirt', 'Totebag', 'Sticker Pack'] },
    ],
  },
  {
    price: 200,
    detail: [
      { items: ['T-Shirt', 'Baseball Cap', 'Sticker Pack'] },
      { items: ['Baseball Cap', 'Tumbler', 'Keychain & Sticker Pack'] },
    ],
  },
];

export default function Section3() {
  const [isMobile, setIsMobile] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <>
      <ImagePreview
        image={imagePreview}
        onClose={() => setImagePreview(null)}
      />
      <div className="bg-[#2EAAE8] py-10 sm:py-20 relative overflow-hidden z-0">
        <img
          src="/assets/kembang-01-black.svg"
          className="absolute w-full opacity-20 -z-10"
        />
        <img
          src="/assets/kembang-01-black.svg"
          className="absolute w-full opacity-20 top-1/2 sm:hidden -z-10"
        />
        <img
          src="/assets/mengakar-01-white.svg"
          className="w-[20%] sm:w-[15%] absolute opacity-30 sm:opacity-100 top-7 right-0 "
        />
        <img
          src="/assets/mengakar-01-white-flip.svg"
          className="w-[20%] sm:w-[15%] absolute opacity-30 sm:opacity-100 top-7"
        />

        <img
          src="/assets/kembang-02-yellow.svg"
          className="w-[20%] lg:w-auto absolute opacity-70 sm:opacity-100 bottom-0 left-0 rotate-90 -z-10"
        />
        <img
          src="/assets/kembang-02-yellow.svg"
          className="w-[20%] lg:w-auto absolute opacity-70 sm:opacity-100 bottom-0 right-0 -z-10"
        />
        <div className="w-[50%] mx-auto mb-10 flex justify-center gap-5">
          <div className="text-[#FEDE88] self-center">
            <h3>Official</h3>
            <h3>Merchandise</h3>
          </div>
          <img src="/assets/logo-horizontal-white.svg" className="w-1/2" />
        </div>

        <Swiper
          className="w-[90%] sm:flex justify-center mx-auto mb-14"
          modules={[Navigation, Scrollbar, Autoplay]}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={10}
          navigation
          scrollbar={{
            draggable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {merchandises.map((merchandise) => (
            <SwiperSlide className="md:w-[30%] mb-10">
              <img
                src={merchandise.img}
                className="border-2 border-black mb-3"
                onClick={() => setImagePreview(merchandise.img)}
              />
              <h5 className="text-white mb-3">
                {merchandise.title}{' '}
                <span className="font-normal">{merchandise.variant}</span>
              </h5>
              <Button
                className="bg-[#FEDE88]"
                onClick={() => {
                  isMobile
                    ? window.open(merchandise.url)
                    : window.open('https://wa.me/6285770558706');
                }}
              >
                Pesan
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="flex my-7 mb-14 w-[90%] sm:w-[75%] mx-auto">
          <div className="h-3 w-1/2 bg-white" />
          <div className="h-3 w-1/2 bg-black" />
        </div> */}

        <div className="sm:w-[90%] md:w-[70%] mx-5 sm:mx-auto mb-5 sm:mb-10">
          <div className="text-center">
            <h3 className="inline text-white px-2 py-1 border border-white">
              BUNDLING PRICE
            </h3>
            <p className="font-semibold text-[#FEDE88] my-5">
              SPECIAL CASHBACK 50K{' '}
              <span className="block sm:inline font-normal text-white">
                Minimal Belanja 450K
              </span>
            </p>
          </div>
          <div className="sm:grid grid-cols-2 gap-5 ">
            {bundlings.map((bundling, index) => (
              <div className="p-5 bg-white mb-5">
                <h6 className="inline text-white bg-[#2CC293] p-1">
                  Bundling #{index + 1}
                </h6>
                <h4 className="text-[#DB4C4C] my-2">{`${bundling.price}K`}</h4>

                <div className="flex gap-5">
                  {bundling.detail.map((detail, indexDetail) => (
                    <div>
                      <p className="font-semibold">
                        Option {indexDetail + 1} :
                      </p>
                      <ul>
                        {detail.items.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[90%] sm:w-1/2 mx-auto block sm:flex justify-between">
          <div className="flex justify-center gap-3 mb-5 sm:mb-0">
            <img src="/assets/whatsapp.svg" className="w-10" />
            <div className="leading-3 text-white">
              <h5 className="text-lg md:text-xl">Katalog WhatsApp</h5>
              <p>Official Merchandise</p>
            </div>
          </div>
          <div className="flex justify-center self-center ">
            <Button
              dark={false}
              className="bg-[#2CC293] text-white border border-white"
              onClick={() => {
                isMobile
                  ? window.open(
                      'https://www.whatsapp.com/catalog/6285770558706/?app_absent=0'
                    )
                  : window.open('https://wa.me/6285770558706');
              }}
            >
              Kunjungi
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
