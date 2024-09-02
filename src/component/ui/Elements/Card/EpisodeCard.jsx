/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Button } from '@mui/material';
import DialogModal from '../DialogModal';
import useDaftarSayaStore from '../../../stores/daftarsaya/useDaftarSayaStore';

const CardThumbnail = ({ id, image, top10, neweps, title, ignore }) => {
  const removeDaftarSaya = useDaftarSayaStore((state) => state.removeDaftarSaya);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => setOpenConfirm(true);

  const handleCloseConfirm = () => setOpenConfirm(false);

  const handleRemove = () => {
    removeDaftarSaya(id);
    handleCloseConfirm();
  };

  return (
    <div className="card-thumbnail">
      <img src={image} alt={title} className="thumbnail-image" />
      <Button onClick={handleOpenConfirm} className="remove-button">
        Remove
      </Button>
      <DialogModal open={openConfirm} onClose={handleCloseConfirm}>
        <div className="modal-content">
          <p>Are you sure you want to remove {title} from your list?</p>
          <Button onClick={handleRemove} className="confirm-remove-button">
            Yes, Remove
          </Button>
          <Button onClick={handleCloseConfirm} className="cancel-button">
            Cancel
          </Button>
        </div>
      </DialogModal>
    </div>
  );
};

export default CardThumbnail;
