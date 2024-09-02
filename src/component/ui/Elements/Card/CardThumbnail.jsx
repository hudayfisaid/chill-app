/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Button } from '@mui/material';
import DialogModal from '../DialogModal';
import useDaftarSayaStore from '../../../stores/daftarsaya/useDaftarSayaStore';

const CardThumbnail = ({ id, image, top10, neweps, title, ignore }) => {
  const removeDaftarSaya = useDaftarSayaStore((state) => state.removeDaftarSaya);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  return (
    <div>
      {/* Example of where the CardThumbnail content would go */}
      <img src={image} alt={title} />
      <Button onClick={handleOpenConfirm}>Remove</Button>
      <DialogModal open={openConfirm} onClose={() => setOpenConfirm(false)}>
        {/* Dialog content here */}
      </DialogModal>
    </div>
  );
};

export default CardThumbnail;

    