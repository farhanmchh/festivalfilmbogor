import { Modal } from '@mui/material';
import React from 'react';

export default function ImagePreview({ image, onClose }) {
  return (
    <Modal open={image} onClose={onClose} className="relative">
      <img
        src={image}
        className="mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </Modal>
  );
}
