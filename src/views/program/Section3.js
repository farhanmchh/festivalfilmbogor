import { DateRange, LocationOn, Send, SendRounded } from '@mui/icons-material';
import React from 'react';

export default function Section3() {
  return (
    <div className="bg-black py-10">
      <div className="mx-5 sm:mx-10 sm:flex gap-28 text-white">
        <div className="mb-7">
          <div className="flex gap-2 mb-3">
            <DateRange />
            <h5>Date</h5>
          </div>

          <p className="mb-2">
            <span className="text-[#FEDE88] font-medium">Roadshow:</span> Juli -
            Desember 2023
          </p>
          <p className="mb-2">
            <span className="text-[#FEDE88] font-medium">Festival:</span> 15 -
            17 Desember 2023
          </p>
        </div>

        <div className="mb-7">
          <div className="flex gap-2 mb-3">
            <LocationOn />
            <h5>Location</h5>
          </div>

          <div className="mb-2 sm:flex gap-2 ">
            <span className="text-[#FEDE88] font-medium self-center">
              15 - 16 Desember:
            </span>
            <div className="flex gap-3">
              <p className="self-center">Bogor Creative Center</p>
              <button
                className="border border-white flex px-3 relative w-24 duration-300 hover:scale-105"
                onClick={() =>
                  window.open('https://goo.gl/maps/qv47oN2dksnE7ezG8')
                }
              >
                <span className="text-sm">Lokasi</span>
                <SendRounded
                  fontSize="small"
                  className="-rotate-45 text-[#2CC293] absolute top-0 right-2"
                />
              </button>
            </div>
          </div>
          <div className="mb-2 sm:flex gap-2 ">
            <span className="text-[#FEDE88] font-medium self-center">
              17 Desember:
            </span>
            <div className="flex gap-3">
              <p className="self-center">Amaris Hotel</p>
              <button
                className="border border-white flex px-3 relative w-24 duration-300 hover:scale-105"
                onClick={() =>
                  window.open('https://goo.gl/maps/DpW1BjdFQ1asCk9E8')
                }
              >
                <span className="text-sm">Lokasi</span>
                <SendRounded
                  fontSize="small"
                  className="-rotate-45 text-[#2CC293] absolute top-0 right-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
