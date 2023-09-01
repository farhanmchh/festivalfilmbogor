import { Cancel, Circle, FiberManualRecord } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';

export default function DetailModal({ visible = false, data, onClose }) {
  return (
    <Modal open={visible} onClose={onClose}>
      <div className="bg-black border border-white w-full sm:w-fit absolute top-[10%] left-1/2 -translate-x-1/2">
        <div className="bg-[#FEDE88] py-4 relative">
          <button className="absolute top-1 right-1" onClick={onClose}>
            <Cancel className="text-[#DB4C4C]" />
          </button>
          <h4 className="ml-10 mr-14">{data.title}</h4>
        </div>
        <div
          className={`text-white ${
            data.body.length > 4 && 'block sm:grid grid-cols-2'
          }`}
        >
          {data.body.map((body) => (
            <div className="flex mx-10 my-4">
              <span className="self-start mt-2 mr-3" style={{ fontSize: 5 }}>
                ⚪
              </span>
              <p className="self-start">{body.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
