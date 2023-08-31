import { Input } from "@mui/material";
import React from "react";

function Section2() {
  return (
    <div className="bg-[#FEDE88] relative">
      <img
        src="/assets/mekar-kembang-01-green-1-top-left.svg"
        className="absolute w-[13%] md:w-[5%] top-0 left-0"
      />
      <img
        src="/assets/mekar-kembang-01-green-1-top-left.svg"
        className="absolute w-[13%] md:w-[5%] bottom-0 left-0 -rotate-90 "
      />
      <img
        src="/assets/si-rusa-green-3.svg"
        className="absolute h-full right-0 top-0 hidden md:block"
      />

      <div className="px-10 sm:px-16 py-20">
        <p className="font-bold text-2xl sm:text-4xl z-50">
          BARANGKALI INGIN BERTANYA?
        </p>
        <p className="text-lg sm:text-xl my-5 z-10">
          Pertanyaan akan dikirim & dijawab melalui email.
        </p>

        <div className="">
          <input
            placeholder="Nama"
            className="w-full md:w-[21%] outline outline-1 mb-8 md:mb-0 mr-8 p-3"
          />
          <input
            placeholder="Email"
            className="w-full md:w-[21%] outline outline-1 mb-8 p-3"
          />

          <textarea
            placeholder="Tulis Pesanmu..."
            className="w-full md:w-[65%] outline outline-1 p-3 h-36"
          />

          <div className="flex justify-between mt-5 w-full md:w-[65%]">
            <a className="cursor-pointer">
              <div className="bg-black w-fit py-1 px-3 flex gap-2 z-10">
                <img
                  src="/assets/mekar-kembang-01-white-2.svg"
                  className="w-5"
                />
                <p className="text-white font-semibold">Kirim</p>
              </div>
            </a>

            <div className="flex gap-8">
              <a className="cursor-pointer">
                <div className="bg-[#DB4C4C] w-fit py-1 px-3 flex gap-2 z-10">
                  <img src="/assets/instagram-logo.svg" className="w-5" />
                  <p className="text-white font-semibold hidden sm:block">
                    Instagram
                  </p>
                </div>
              </a>

              <a className="cursor-pointer z-10">
                <div className="bg-[#DB4C4C] w-fit py-1 px-3 flex gap-2">
                  <img src="/assets/email-logo.svg" className="w-5" />
                  <p className="text-white font-semibold hidden sm:block">
                    Email
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
