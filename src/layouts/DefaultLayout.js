import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Content from './Content';
import Footer from '../components/Footer';
import { ArrowUpwardRounded } from '@mui/icons-material';

export default function DefaultLayout() {
  const [showToTopButton, setShowToTopButton] = useState(false);
  window.addEventListener('scroll', () => {
    setShowToTopButton(window.scrollY > 300);
  });

  return (
    <div className="flex flex-col min-h-full w-full relative">
      <Navbar />
      <Content />
      <Footer />
      <div
        className={`w-14 h-14 bg-white border-2 border-black rounded-full flex justify-center fixed bottom-7 right-5 z-20 cursor-pointer duration-200 ${
          showToTopButton ? 'scale-100' : 'scale-0'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpwardRounded className="self-center" fontSize="large" />
      </div>
    </div>
  );
}
