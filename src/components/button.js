import React from 'react';

export default function Button({ children, onClick, className, dark = true }) {
  return (
    <button
      className={`font-semibold flex gap-1 px-4 py-1 duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {dark ? (
        <img src="/assets/kembang-02-black.svg" className="w-5 self-center" />
      ) : (
        <img src="/assets/kembang-02-white.svg" className="w-5 self-center" />
      )}
      {children}
    </button>
  );
}
