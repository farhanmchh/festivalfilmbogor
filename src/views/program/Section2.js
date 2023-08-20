import React from 'react';

export default function Section2() {
  return (
    <div className="bg-black z-0">
      <div className="relative">
        <div className="bg-[#2EAAE8] w-full h-full mix-blend-overlay absolute" />
        <img src="/images/program-2.png" className="" />
        <h3 className="p-3 mx-10 border border-white text-white absolute top-1/2">
          FESTIVAL ACTIVITIES
        </h3>
        <img
          src="/assets/membentang-01-green.svg"
          className="w-2/5 absolute top-0 right-0 "
        />
      </div>

      <div className="relative">
        <img
          src="/assets/mengakar-02-white.svg"
          className="absolute opacity-20 top-0 left-0 w-[30%] z-0"
        />
        <img
          src="/assets/mengakar-02-white.svg"
          className="absolute opacity-20 top-0 right-0 -scale-x-100 w-[30%] z-0"
        />
        <div className="flex gap-10 mx-10 py-10">
          <div className="w-[18%] bg-black z-10">
            <div className="relative">
              <div className="bg-[#2EAAE8] mix-blend-overlay w-full h-full absolute" />
              <img src="/images/card-img-2.png" />
            </div>
            <div className="p-3 border border-white">
              <h5 className="text-white font-light mb-7">
                Online Talkshow and Podcast
              </h5>
              <button className="bg-[#FEDE88] font-semibold flex gap-1 px-2 py-1">
                <img
                  src="/assets/kembang-01-black.svg"
                  className="w-5 self-center"
                />
                Lihat
              </button>
            </div>
          </div>
          <div className="w-[18%] bg-black z-10">
            <div className="relative">
              <div className="bg-[#2EAAE8] mix-blend-overlay w-full h-full absolute" />
              <img src="/images/card-img-3.png" />
            </div>
            <div className="p-3 border border-white">
              <h5 className="text-white font-light mb-7">
                Seminar Discussion #1
              </h5>
              <button className="bg-[#FEDE88] font-semibold flex gap-1 px-2 py-1">
                <img
                  src="/assets/kembang-01-black.svg"
                  className="w-5 self-center"
                />
                Lihat
              </button>
            </div>
          </div>
          <div className="w-[18%] bg-black z-10">
            <div className="relative">
              <div className="bg-[#2EAAE8] mix-blend-overlay w-full h-full absolute" />
              <img src="/images/card-img-3.png" />
            </div>
            <div className="p-3 border border-white">
              <h5 className="text-white font-light mb-7">
                Eksebisi dan Apresiasi #1
              </h5>
              <button className="bg-[#FEDE88] font-semibold flex gap-1 px-2 py-1">
                <img
                  src="/assets/kembang-01-black.svg"
                  className="w-5 self-center"
                />
                Lihat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
