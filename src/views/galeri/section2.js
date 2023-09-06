import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';
import React from 'react';

export default function Section2() {
  return (
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
          <div className="w-full h-56 border-2 border-black">
            <img src="/images/galeri-1.png" className="w-full h-full" />
          </div>
          <div className="w-full sm:w-2/3 h-56 border-2 border-black bg-white px-7 py-5">
            <h4 className="text-center mb-3">#1 Gratis!</h4>

            <p>
              Bagi para penggemar dan penonton film yang ingin berkunjung FFB,
              acara ini tidak dipungut biaya sama sekali, alias gratis.
            </p>
          </div>
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
            <button className="bg-black px-3 py-2 text-white">
              <ArrowBackRounded />
            </button>
            <button className="bg-black px-3 py-2 text-white">
              <ArrowForwardRounded />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
