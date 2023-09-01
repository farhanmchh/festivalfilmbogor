import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export default function Index() {
  return (
    <div>
      <div className=" bg-white flex justify-center py-16 relative overflow-hidden">
        <img
          src="/assets/kembang-02-black.svg"
          className="absolute w-3/4 sm:w-1/3 opacity-10 -top-36 sm:-top-28 -left-40 sm:-left-64"
        />
        <img
          src="/assets/kembang-02-black.svg"
          className="absolute w-3/4 sm:w-1/3 opacity-10 top-32 sm:-top-28 -right-40 sm:-right-64"
        />
        <h3 className="mx-5 font-normal text-center">
          <span className="font-bold block sm:inline">PROGRAM</span> Festival
          Film Bogor 2023
        </h3>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
