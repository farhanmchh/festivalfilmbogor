import { DateRange, LocationOn, Send, SendRounded } from '@mui/icons-material';
import React from 'react';

export default function Section3() {
  return (
    <div className="bg-black py-10">
      <div className="mx-10 flex gap-28 text-white">
        <div>
          <div className="flex gap-2 mb-5">
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

        <div>
          <div className="flex gap-2 mb-5">
            <LocationOn />
            <h5>Location</h5>
          </div>

          <div className="mb-2 flex gap-2 ">
            <span className="text-[#FEDE88] font-medium self-center">
              15 - 16 Desember:
            </span>
            <p className="self-center">Bogor Creative Center</p>
            <a
              href="#"
              className="border border-white flex px-3 py-1 relative w-24"
            >
              <span className="text-sm">Lokasi</span>
              <SendRounded
                fontSize="small"
                className="-rotate-45 text-[#2CC293] absolute top-0 right-2"
              />
            </a>
          </div>
          <div className="mb-2 flex gap-2 ">
            <span className="text-[#FEDE88] font-medium self-center">
              17 Desember:
            </span>
            <p className="self-center">Amaris Hotel</p>
            <a
              href="#"
              className="border border-white flex px-3 py-1 relative w-24"
            >
              <span className="text-sm">Lokasi</span>
              <SendRounded
                fontSize="small"
                className="-rotate-45 text-[#2CC293] absolute top-0 right-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
