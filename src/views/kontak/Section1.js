import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";

const initData = [
  {
    id: 1,
    title: "Apa saja isi acara FFB 2023?",
    open: 0,
    content:
      "FFB 2023 memiliki ragam acara yang disuguhkan untuk para sineas. Misal : Roadshow, Film Submission & Screening, Seminar, dan Awarding Night.",
  },
  {
    id: 2,
    title: "Bagaimana cara submit film?",
    open: 0,
    content:
      "FFB 2023 memiliki ragam acara yang disuguhkan untuk para sineas. Misal : Roadshow, Film Submission & Screening, Seminar, dan Awarding Night.",
  },
  {
    id: 3,
    title: "Kapan & dimana FFB 2023?",
    open: 0,
    content:
      "FFB 2023 memiliki ragam acara yang disuguhkan untuk para sineas. Misal : Roadshow, Film Submission & Screening, Seminar, dan Awarding Night.",
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
                  <p className="text-xl sm:text-3xl font-semibold">
                    {each.title}
                  </p>
                  {each.open ? (
                    <ExpandLess fontSize="large" />
                  ) : (
                    <ExpandMore fontSize="large" />
                  )}
                </div>

                {/* Content */}
                {each.open ? (
                  <p
                    className="mt-8 text-md leading-loose"
                    style={{
                      animation: each.open
                        ? "in-from-top 0.3s"
                        : "out-to-top 0.3s",
                    }}
                  >
                    {each.content}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Section1;
