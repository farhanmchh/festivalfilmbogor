import React from 'react';
import Navbar from '../components/Navbar';
import Content from './Content';
import Footer from '../components/Footer';

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-full w-full">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
