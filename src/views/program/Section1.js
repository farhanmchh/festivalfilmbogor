import React, { useState } from 'react';
import DetailModal from './DetailModal';
import Button from '../../components/button';

const cards = [
  {
    img: '/images/card-img-1.png',
    title: 'Online Talkshow and Podcast',
    body: [
      { text: 'Talkshow Live Instagram' },
      { text: 'Instagram KOL' },
      { text: 'Talkshow Radio' },
      { text: 'Talkshow Promotion' },
    ],
  },
  {
    img: '/images/card-img-2.png',
    title: 'Seminar Discussion',
    body: [
      { text: 'Seminar Produksi Film Pendek Ideal' },
      { text: 'Seminar Post Editing Sound' },
    ],
  },
  {
    img: '/images/card-img-3.png',
    title: 'Eksebisi dan Apresiasi',
    body: [{ text: 'Layar Bogor' }, { text: 'Layar Tanjep' }],
  },
];

export default function Section1() {
  const [detailVisible, setDetailVisible] = useState(false);
  const [detailData, setDetailData] = useState({
    title: null,
    body: [],
  });

  return (
    <>
      <DetailModal
        visible={detailVisible}
        data={detailData}
        onClose={() => setDetailVisible(false)}
      />
      <div className="bg-black z-0">
        <div className="flex justify-center sm:block relative">
          <div className="bg-[#DB4C4C] w-full h-full mix-blend-overlay absolute" />
          <img src="/images/program-1.png" />
          <h3 className="text-xl sm:text-3xl p-3 mx-10 border border-white text-white absolute top-1/3 sm:top-1/2">
            ROADSHOW ACTIVITIES
          </h3>
          <img
            src="/assets/membentang-01-yellow.svg"
            className="w-2/5 hidden sm:block absolute top-0 right-0"
          />
        </div>

        <div className="relative">
          <img
            src="/assets/mengakar-02-white.svg"
            className="absolute opacity-20 top-0 left-0 w-1/2 sm:w-[30%] z-0"
          />
          <img
            src="/assets/mengakar-02-white.svg"
            className="absolute opacity-20 bottom-0 right-0 -scale-x-100 w-1/2 sm:w-[30%] z-0"
          />
          <div className="block sm:flex gap-10 mx-5 sm:mx-10 py-10">
            {cards.map((card) => (
              <div className="w-full sm:w-[18%] bg-black mb-3 z-10">
                <div className="relative">
                  <div className="bg-[#DB4C4C] mix-blend-overlay w-full h-full absolute" />
                  <img src={card.img} />
                </div>
                <div className="p-3 border border-white">
                  <h5 className="text-white font-light mb-7">{card.title}</h5>
                  <Button
                    className="bg-[#FEDE88]"
                    onClick={() => {
                      setDetailData({ title: card.title, body: card.body });
                      setDetailVisible(true);
                    }}
                  >
                    Lihat
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
