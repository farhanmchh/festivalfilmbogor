import { ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    image: '/images/sample-1.jpg',
  },
  {
    image: '/images/sample-2.jpg',
  },
  {
    image: '/images/sample-3.jpg',
  },
];

export default function Section2() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white relative z-10 py-10">
      <img
        src="/assets/kembang-01-black.svg"
        className="absolute -z-10 opacity-10 w-full sm:w-[60%] -translate-x-1/2 left-1/2"
      />
      <div className="py-10 flex justify-between">
        <div className="mx-5 sm:ml-20 z-10">
          <div className="mb-10 text-center">
            <h3>Yang akan hadir di</h3>
            <h3 className="font-normal">Festival Film Bogor 2023</h3>
          </div>

          <div className="block sm:grid grid-cols-2 gap-10 mb-7 sm:mb-10">
            <div className="text-center w-fit mx-auto mb-5">
              <div className="text-white bg-black rounded-full px-16 sm:px-4 py-4 sm:py-2 font-semibold">
                Online talkshow
              </div>
              <p className="font-medium">Juli - November</p>
            </div>
            <div className="text-center w-fit mx-auto mb-5">
              <div className="text-white bg-black rounded-full px-16 sm:px-4 py-4 sm:py-2 font-semibold">
                Seminar Discussion
              </div>
              <p className="font-medium">Agustus - November</p>
            </div>
            <div className="text-center w-fit mx-auto mb-5">
              <div className="text-white bg-black rounded-full px-16 sm:px-4 py-4 sm:py-2 font-semibold">
                Eksebisi & Apresiasi
              </div>
              <p className="font-medium">Desember</p>
            </div>
            <div className=" text-center w-fit mx-auto mb-5">
              <div className="text-white bg-black rounded-full px-16 sm:px-4 py-4 sm:py-2 font-semibold">
                Awarding Night
              </div>
              <p className="font-medium">Desember</p>
            </div>
          </div>

          <div className="bg-[#2CC293] rounded-full w-fit mx-auto px-12 sm:px-4 py-4 sm:py-2 font-semibold">
            dan masih banyak lagi
          </div>
        </div>
        <div className="z-10 top-10 right-0 hidden sm:block">
          <img src="/assets/mengakar-02-green.svg" style={{ width: '21rem' }} />
        </div>
      </div>

      {/* BORDER */}
      <div className="mb-20">
        <div className="border border-black w-[87%] mx-auto" />
      </div>

      <div className="mx-5 sm:mx-20 sm:flex justify-between">
        <div className="w-full sm:w-2/5">
          <div className="mb-10 text-center sm:text-start">
            <h3>Program</h3>
            <h3 className="font-normal">Festival Film Bogor 2023</h3>
          </div>

          <p className="font-light text-center sm:text-start mb-7">
            Setelah sukses digelar tahun lalu, kali ini festival film bogor{' '}
            <span className="font-semibold">mencoba membawa warna baru</span>{' '}
            untuk rangkaian acara yang nantinya dapat kamu nikmati.
          </p>
        </div>

        <div className="w-full sm:w-2/5 border-2 border-black relative">
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={(step) => setActiveStep(step)}
            enableMouseEvents
          >
            {images.map((each) => (
              <Box
                component="img"
                sx={{
                  height: 200,
                  display: 'block',
                  maxWidth: 700,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={each.image}
              />
            ))}
          </AutoPlaySwipeableViews>
          <div className="absolute bottom-0 right-0 bg-yellow-400 px-3 py-2 border-l-2 border-t-2 border-black">
            <ArrowForwardIos fontSize="10" />
          </div>
        </div>
      </div>
    </div>
  );
}
