import React from 'react';

export default function Section1() {
  return (
    <div className="bg-black">
      <div className="py-10 flex justify-between gap-10 relative overflow-hidden">
        <img
          src="/assets/logo-badge-white.svg"
          className="absolute sm:static top-20 left-10 opacity-40 sm:opacity-100 w-1/2 sm:w-1/4 sm:ml-10"
        />
        <div className="self-center ml-5 sm:ml-0">
          <h2 className="text-white mb-3">Festival Film Bogor 2023</h2>
          <p className="text-white font-extralight">Mekar dan Mengakar</p>
        </div>
        <img
          src="/assets/membentang-01-white.svg"
          className="absolute sm:static -right-44 top-16 opacity-40 sm:opacity-100 w-2/3 "
        />
      </div>

      {/* BORDER */}
      <div className="my-10">
        <div className="border border-white w-[93%] mx-auto" />
      </div>

      <div className=" py-10 pb-20">
        <div className="flex justify-between gap-10 mb-10 relative">
          <img
            src="/assets/membentang-02-white.svg"
            className="absolute sm:static top-9 opacity-50 sm:opacity-100 w-40 sm:w-1/4 rotate-180 z-0"
          />
          <div className="text-center mx-auto z-10">
            <h3 className="text-white font-light mb-1">Apa itu</h3>
            <h3 className="text-[#FEDE88]">Festival Film Bogor?</h3>
          </div>
          <img
            src="/assets/membentang-02-white.svg"
            className="absolute sm:static top-9 right-0 opacity-50 sm:opacity-100 w-40 sm:w-1/4 "
          />
        </div>

        <p className="text-center text-white w-3/4 mx-auto leading-8">
          Festival Film Bogor adalah ajang kompetisi film nasional yang sudah
          dimulai sejak tahun 2022 (
          <span className="font-semibold">
            Dengan pendaftar lebih dari 300 film dari berbagai daerah di
            Indonesia
          </span>
          ). Festival ini diinisiasi oleh Komunitas Film Bogor, Mari Belajar
          Film dan berbagai komunitas film yang ada di Bogor raya.
        </p>
      </div>
    </div>
  );
}
