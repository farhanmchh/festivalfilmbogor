import React from 'react';

function Section1() {
  return (
    <div className="bg-black py-20 relative">
      {/* TITLE */}
      <div className="text-center">
        <h2 className="mb-1 text-[#FEDE88] text-3xl sm:text-4xl">Sejarah</h2>
        <h2 className="text-white text-3xl sm:text-4xl">Festival Film Bogor</h2>
      </div>

      <div className="mt-24">
        <img
          src="/assets/akar-mengakar-03-grey-2.svg"
          className="w-full -z-1 absolute mt-10"
        />

        {/* Deskripsi */}
        <div className=" justify-items-center px-0 sm:px-24 grid grid-cols-2 sm:grid-cols-3">
          <div className="grid justify-items-center place-content-between pt-8 gap-y-24 z-10">
            <div className="grid justify-items-center">
              <div className="mb-14 relative w-16 flex items-center">
                <img
                  src="/assets/mekar-kembang-01-white-1.svg"
                  className="opacity-25 absolute"
                />
                <p className="text-white text-2xl font-bold mx-auto">1</p>
              </div>
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>

            <div className="grid justify-items-center">
              <div className="mb-14 relative w-16 flex items-center">
                <img
                  src="/assets/mekar-kembang-01-white-1.svg"
                  className="opacity-50 absolute"
                />
                <p className="text-white text-2xl font-bold mx-auto">2</p>
              </div>
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>
          </div>

          <img
            src="/assets/si-rusa-green-2.svg"
            className="my-auto w-[50%] sm:w-full absolute opacity-40 sm:opacity-100 sm:relative mt-16"
          />

          <div className="grid justify-items-center place-content-between pt-8 z-10">
            <div className="grid justify-items-center">
              <div className="mb-14 relative w-16 flex items-center">
                <img
                  src="/assets/mekar-kembang-01-white-1.svg"
                  className="absolute"
                />
                <p className="text-2xl font-bold mx-auto z-10">4</p>
              </div>
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>

            <div className="grid justify-items-center">
              <div className="mb-14 relative w-16 flex items-center">
                <img
                  src="/assets/mekar-kembang-01-white-1.svg"
                  className="opacity-75 absolute"
                />
                <p className="text-2xl font-bold mx-auto z-10">3</p>
              </div>
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>
          </div>
        </div>

        {/* BORDER */}
        <div className="my-20">
          <div className="border border-white w-[93%] mx-auto" />
        </div>

        <div className="text-center mb-10 px-5">
          <h3 className="text-white">Apa itu</h3>
          <h3 className="mb-1 text-[#FEDE88]">Festival Film Bogor?</h3>
        </div>

        <div className="text-center">
          <p className="text-white w-3/4 mx-auto leading-loose">
            Festival Film Bogor adalah ajang kompetisi film nasional yang sudah
            dimulai sejak tahun 2022{' '}
            <b>
              (Dengan pendaftar lebih dari 300 film dari berbagai daerah di
              Indonesia).
            </b>{' '}
            Festival ini diinisiasi oleh Komunitas Film Bogor, Mari Belajar Film
            dan berbagai komunitas film yang ada di Bogor raya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
