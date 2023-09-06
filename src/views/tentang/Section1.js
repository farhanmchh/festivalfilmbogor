import React from 'react';

function Section1() {
  return (
    <div className="bg-black py-20 relative">
      {/* TITLE */}
      <div className="text-center mb-32">
        <h2 className="mb-1 text-[#FEDE88] text-3xl sm:text-4xl">Sejarah</h2>
        <h2 className="text-white text-3xl sm:text-4xl">Festival Film Bogor</h2>
      </div>

      <div className="">
        <img
          src="/assets/akar-mengakar-03-grey-2.svg"
          className="w-full -z-1 absolute mt-10"
        />

        {/* Deskripsi */}
        <div className="sm:grid grid-cols-2 grid-flow-row gap-y-10 gap-x-20 relative">
          <img
            src="/assets/si-rusa-green.svg"
            className="w-[20%] absolute -top-28 sm:top-20 left-1/2 -translate-x-1/2 opacity-100"
          />

          {/* Deskripsi 1 */}
          <div className="w-[80%] sm:w-[60%] mx-auto mb-10">
            <div className="mx-auto mb-10 relative w-16 flex items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="opacity-25 absolute"
              />
              <p className="text-white text-2xl font-bold mx-auto">1</p>
            </div>
            <p className="text-white text-lg text-center">
              pertemuan pegiat film di bogor pada{' '}
              <span className="text-[#FEDE88] font-semibold">Agustus 2020</span>
              . Membahas{' '}
              <span className="text-[#FEDE88] font-semibold">
                perkembangan dan pemetaan
              </span>{' '}
              film di wilayah Bogor dan juga FFB.
            </p>
          </div>

          {/* Deskripsi 2 */}
          <div className="w-[80%] sm:w-[60%] mx-auto mb-10 order-3">
            <div className="mx-auto mb-10 relative w-16 flex items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="opacity-50 absolute"
              />
              <p className="text-white text-2xl font-bold mx-auto">2</p>
            </div>
            <p className="text-white text-lg text-center">
              Bertemu lagi di{' '}
              <span className="text-[#FEDE88] font-semibold">Oktober 2022</span>
              , berkumpul dan membulatkan tekad untuk merealisasikan{' '}
              <span className="text-[#FEDE88] font-semibold">
                Festival Film Bogor
              </span>
            </p>
          </div>

          {/* Deskripsi 3 */}
          <div className="w-[80%] sm:w-[60%] mx-auto mb-10 order-last">
            <div className="mx-auto mb-10 relative w-16 flex items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="opacity-75 absolute"
              />
              <p className="text-2xl font-bold mx-auto z-10">3</p>
            </div>
            <p className="text-white text-lg text-center">
              Perdana Festival Film Bogor hadir pada{' '}
              <span className="text-[#FEDE88] font-semibold">
                akhir tahun 2022
              </span>{' '}
              dengan tema "Berkarya dan Berbudaya".{' '}
              <span className="text-[#FEDE88] font-semibold">
                300 lebih film terdaftar
              </span>{' '}
              pada 3 kategori yang dibuka.
            </p>
          </div>

          {/* Deskripsi 4 */}
          <div className="w-[80%] sm:w-[60%] mx-auto mb-10">
            <div className="mx-auto mb-10 relative w-16 flex items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="absolute"
              />
              <p className="text-2xl font-bold mx-auto z-10">4</p>
            </div>
            <p className="text-white text-lg text-center">
              Tahun 2023,{' '}
              <span className="text-[#FEDE88] font-semibold">FFB kembali</span>{' '}
              dengan tema "Mekar dan Mengakar". Dengan puncak acara pada tanggal{' '}
              <span className="text-[#FEDE88] font-semibold">
                15,16,17 Desember 2023
              </span>
            </p>
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
