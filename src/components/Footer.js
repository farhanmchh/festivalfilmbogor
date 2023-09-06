import { Copyright, Instagram, Mail } from '@mui/icons-material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  return (
    <div className="w-full">
      <div
        className={`${
          location.pathname === '/kontak' ? 'hidden' : 'block'
        } bg-[#DB4C4C] relative py-14 z-0`}
      >
        <img
          src="/assets/kembang-02-black.svg"
          className=" absolute w-1/2 sm:w-1/6 -top-1/3 -z-20 opacity-20"
        />
        <img
          src="/assets/kembang-02-black.svg"
          className=" absolute w-1/2 sm:w-1/6 -bottom-1/3 left-1/3 -z-20 opacity-20"
        />
        <div className="mx-5 sm:mx-20 flex justify-between">
          <div className="">
            <h3 className="text-white mb-5">Ingin berkolaborasi?</h3>
            <p className="text-white font-light mb-5">
              Hubungi kami melalui media sosial.
            </p>

            <div className="flex gap-5 mb-5">
              <Mail className="text-white" />
              <p className="border border-white px-1 text-white rounded-sm">
                festivalfilmbogor@gmail.com
              </p>
            </div>
            <div className="flex gap-5 mb-5">
              <Instagram className="text-white" />
              <p className="border border-white px-1 text-white rounded-sm">
                festivalfilmbogor
              </p>
            </div>
          </div>

          <div className="relative w-1/3 hidden sm:block">
            <img src="/assets/membentang-03-blue.svg" className="w-full" />
            <img
              src="/assets/si-rusa-white.svg"
              className="w-2/5 absolute  left-1/2 top-5 -translate-x-1/2"
            />
          </div>
        </div>
      </div>

      <div className="bg-black relative py-20 z-10">
        <div className="mx-5 sm:mx-20 sm:flex justify-between">
          <div className="flex gap-10 sm:gap-20 mb-20">
            <img src="/assets/logo-white.svg" className="w-1/3 sm:w-1/4" />
            <div className="text-white w-1/2 sm:w-1/6 self-center">
              <h3 style={{ lineHeight: '3rem' }}>
                15 - 17 Desember <span className="font-light">2023</span>
              </h3>
            </div>
          </div>

          <div className="text-white grid grid-cols-5  sm:gap-x-10 gap-y-5 sm:gap-y-0">
            <a href="#" className="col-span-2 ">
              Beranda
            </a>
            <a href="#" className="col-span-2 ">
              Tentang
            </a>
            <a href="#" className="">
              Program
            </a>
            <a href="#" className="col-span-3 text-center ">
              Arsip
            </a>
            <a href="#" className="col-span-2 ">
              kontak
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="flex justify-center gap-1">
          <Copyright fontSize="small" />
          <p className="font-semibold text-sm">FESTIVAL FILM BOGOR</p>
        </div>
      </div>
    </div>
  );
}
