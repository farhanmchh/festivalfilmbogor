import React from "react";

function Section1() {
  return (
    <div className="bg-black py-20">
      {/* TITLE */}
      <div className="text-center">
        <h2 className="mb-1 text-[#FEDE88]">Sejarah</h2>
        <h2 className="text-white">Festival Film Bogor</h2>
      </div>

      <div className="mt-24">
        <img
          src="/assets/akar-mengakar-03-grey-2.svg"
          className="w-full -z-1 absolute mt-10"
        />

        {/* Deskripsi */}
        <div className="grid grid-cols-3 justify-items-center px-24">
          <div className="grid justify-items-center place-content-between ">
            <div className="grid justify-items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="w-16 opacity-25"
              />
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>

            <div className="grid justify-items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="w-16 opacity-50"
              />
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>
          </div>

          <img src="/assets/si-rusa-green-2.svg" className="w-[81%] mt-16" />

          <div className="grid justify-items-center place-content-between">
            <div className="grid justify-items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="w-16"
              />
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>

            <div className="grid justify-items-center">
              <img
                src="/assets/mekar-kembang-01-white-1.svg"
                className="w-16 opacity-75"
              />
              <p className="text-white text-xl">Deskripsi 1</p>
            </div>
          </div>
        </div>

        {/* BORDER */}
        <div className="my-36">
          <div className="border border-white w-[93%] mx-auto" />
        </div>

        <div className="text-center mb-[4.69rem]">
          <h2 className="text-white">Apa itu</h2>
          <h2 className="mb-1 text-[#FEDE88]">Festival Film Bogor?</h2>
        </div>

        <div className="text-center">
          <p className="text-white text-xl w-3/4 mx-auto leading-loose">
            Festival Film Bogor adalah ajang kompetisi film nasional yang sudah
            dimulai sejak tahun 2022{" "}
            <b>
              (Dengan pendaftar lebih dari 300 film dari berbagai daerah di
              Indonesia).
            </b>{" "}
            Festival ini diinisiasi oleh Komunitas Film Bogor, Mari Belajar Film
            dan berbagai komunitas film yang ada di Bogor raya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
