import React from 'react';

function Section2() {
  const visi = [
    {
      id: 1,
      content:
        'Mengembangkan potensi kreatif di kalangan sineas baru di Indonesia.',
    },
    {
      id: 2,
      content: 'Membuka peluang kepada sineas independen ke industri kreatif.',
    },
    {
      id: 3,
      content: 'Membuat wadah untuk insan kreatif.',
    },
    {
      id: 4,
      content: 'Meningkatkan budaya menonton film di Kota Bogor.',
    },
  ];

  const misi = [
    {
      id: 1,
      content:
        'Menjadi wadah bagi pertumbuhan sineas-sineas baru, khususnya di Kota Bogor.',
    },
    {
      id: 2,
      content: 'Memperkenalkan film-film Bogor kepada masyarakat luas.',
    },
    {
      id: 3,
      content:
        'Menjadikan acara ini sebagai wadah berkumpulnya para sineas dan bertukar pikiran.',
    },
    {
      id: 4,
      content: 'Membuat gerakan anak muda mulai membuat film.',
    },
    {
      id: 5,
      content: 'Mengapresiasi karya film-film sineas.',
    },
    {
      id: 6,
      content: 'Memperkenalkan budaya di Kota Bogor.',
    },
  ];

  return (
    <div className="bg-[#FEDE88] relative">
      <div className="h-full absolute flex items-center">
        <img src="/assets/mekar-kembang-01-black-1.svg" className="" />
      </div>
      <img
        src="/assets/membentang-04-blue.svg"
        className="absolute right-0 w-[20%] sm:w-[10%]"
      />
      <div className="h-full absolute flex items-center -z-0">
        <img
          src="/assets/membentang-05-blue.svg"
          className="w-[80%] mt-52 md:mt-0 hidden sm:block"
        />
      </div>
      <img
        src="/assets/mekar-kembang-01-green-1-right.svg"
        className="absolute w-[20%] sm:w-[10%] right-0 bottom-0"
      />
      <img
        src="/assets/mekar-kembang-01-green-1-left.svg"
        className="absolute w-[20%] sm:w-[10%] left-0 bottom-0"
      />

      {/* Visi Misi */}
      <div className="grid md:grid-cols-2 pt-24 pb-28">
        <div className="px-10 sm:px-28 z-10">
          <div className="bg-white flex justify-self-center py-3 px-14 w-fit rounded-full border-2 border-black mb-10 sm:mb-16 mx-auto">
            <p className="text-4xl font-bold">Visi</p>
          </div>

          <ul className="list-disc list-outside text-justify">
            {visi.map((e) => (
              <li className="mb-7 text-xl sm:text-2xl font-medium">
                {e.content}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-10 sm:px-24 z-10 pt-20 md:pt-0">
          <div className="bg-white flex justify-self-center py-3 px-14 w-fit rounded-full border-2 border-black mb-10 sm:mb-16 mx-auto">
            <p className="text-4xl font-bold">Misi</p>
          </div>

          <ul className="list-disc list-outside text-justify">
            {misi.map((e) => (
              <li className="mb-7 text-xl sm:text-2xl font-medium">
                {e.content}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mekar dan mengakar */}
      <div className="text-center pb-24 z-10">
        <p className="text-3xl sm:text-6xl font-semibold mb-4 z-20 px-4">
          MEKAR DAN MENGAKAR
        </p>
        <p className="text-xl sm:text-2xl mb-20 z-20">
          Tema Festival Film Bogor 2023
        </p>

        <div className="grid justify-items-center md:flex md:justify-center gap-12">
          <div className="grid justify-items-center md:w-[35%] w-[80%]">
            <div className="bg-[#FEDE88] border-4 border-black px-8 py-4 w-fit z-10">
              <p className="text-2xl sm:text-4xl font-semibold">MEKAR</p>
            </div>
            <div className="bg-black p-5 z-10">
              <p className="text-white text-xl leading-loose text-left">
                melambangkan sebuah proses perkembangan insan perfilman Bogor
                Raya.
              </p>
            </div>
          </div>
          <div className="grid justify-items-center md:w-[35%] w-[80%]">
            <div className="bg-[#2CC293] border-4 border-black px-8 py-4 w-fit z-10">
              <p className="text-2xl sm:text-4xl font-semibold">MENGAKAR</p>
            </div>
            <div className="bg-black p-5 z-10">
              <p className="text-white text-xl leading-loose text-left">
                melambangkan asal-muasal proses perkembangan bisa semakin mekar
                dan hidup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
