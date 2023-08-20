import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export default function Index() {
  return (
    <div>
      <div className="bg-white flex justify-center py-20 relative overflow-hidden">
        <img
          src="/assets/kembang-02-black.svg"
          className="absolute w-1/3 opacity-10 -top-28 -left-64"
        />
        <img
          src="/assets/kembang-02-black.svg"
          className="absolute w-1/3 opacity-10 -top-28 -right-64"
        />
        <h3 className="font-normal">
          <span className="font-bold">PROGRAM</span> Festival Film Bogor 2023
        </h3>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
