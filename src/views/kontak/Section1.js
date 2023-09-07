import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';

const initData = [
  {
    id: 1,
    title:
      'Festival Film Bogor 2023 itu khusus untuk peserta daerah Bogor atau untuk umum?',
    open: false,
    contents: [
      'Festival Film Bogor terbuka untuk umum ya, jadi seluruh filmmaker di Indonesia boleh ikutan!',
    ],
  },
  {
    id: 2,
    title:
      'Rangkaian acara Festival Film Bogor 2023 tuh ada apa aja sih kak? dan mulainya kapan?',
    open: false,
    contents: [
      'Wah, banyak banget! rangkaian acara FFB 2023 dimulai dari roadshow bulanan "Road To FFB 2023" (Juli - November) yang terdiri dari program Layar Bogor (screening & discussion) dan workshop.',
      'Informasi soal jadwal roadshow bisa pantengin Instagram kita ya! Nah, acara inti kita adalah tanggal 15,16 dan 17 Desember 2023.',
      'Disana akan ada screening & discussion film-film official selection, seminar & workshop, art & stage performanse, showcase & awarding, dan masih banyak lagi!',
    ],
  },
  {
    id: 3,
    title:
      'Pendaftaran Kompetisi umum itu untuk film daerah mana aja kak? pendaftarannya kapan?',
    open: false,
    contents: [
      'Open Submission untuk sesi kompetisi dibuka mulai tanggal 2 Agustus sampai 2 November 2023, dan pastinya terbuka untuk seluruh filmmaker di Indonesia!',
    ],
  },
  {
    id: 3,
    title: 'Acaranya berbayar gak kak?',
    open: false,
    contents: [
      'Seluruh rangkaian acara kita FREE! Jadi, mari ramaikan Festival Film Bogor 2023',
    ],
  },
];

function Section1() {
  const [expandData, setExpandData] = useState(initData);

  const handleClick = async (idx) => {
    const updatedData = [...expandData];
    updatedData[idx] = { ...updatedData[idx], open: !updatedData[idx].open };

    setExpandData(updatedData);
  };

  return (
    <div className="bg-[#2EAAE8] relative">
      <div className="bg-[#2CC293] text-center py-10 relative flex justify-between">
        <img
          src="/assets/mengakar-02-yellow-left.svg"
          className="absolute sm:static w-[20%] sm:w-[15%] opacity-70 sm:opacity-100"
        />
        <div className="h-full my-auto z-10">
          <p className="text-2xl sm:text-5xl font-semibold text-white mx-auto">
            FREQUENTLY ASKED QUESTIONS
          </p>
        </div>
        <img
          src="/assets/mengakar-02-yellow-right.svg"
          className="absolute sm:static w-[20%] sm:w-[15%] right-0 opacity-70 sm:opacity-100"
        />
      </div>

      <div className="py-16 relative">
        <img
          src="/assets/membentang-02-green.svg"
          className="absolute top-52 sm:top-10"
        />

        {expandData.map((each, idx) => (
          <a className="cursor-pointer" onClick={() => handleClick(idx)}>
            <div className="pb-8 flex justify-center">
              <div className="bg-white border-2 border-gray-500 w-[80%] sm:w-[70%] p-5 z-10">
                <div className="justify-between flex">
                  <p className="text-xl font-semibold">{each.title}</p>
                  {each.open ? (
                    <ExpandLess fontSize="large" />
                  ) : (
                    <ExpandMore fontSize="large" />
                  )}
                </div>

                {/* Content */}
                {each.contents.map((content) => {
                  if (each.open) {
                    return (
                      <p
                        className="mt-8 text-md leading-loose"
                        style={{
                          animation: each.open
                            ? 'in-from-top 0.3s'
                            : 'out-to-top 0.3s',
                        }}
                      >
                        {content}
                      </p>
                    );
                  } else {
                    return '';
                  }
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Section1;
