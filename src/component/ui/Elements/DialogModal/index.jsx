import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const DialogModal = ({ openConfirm, onClose, handleAgreConfirm, title, image, modalTitle, top10, neweps }) => {
  return (
    <Dialog
      open={openConfirm}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* Dialog Title */}
      <DialogTitle id="alert-dialog-title" className="bg-[#181A1C]">
        {modalTitle}
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent className="flex justify-center items-center bg-[#181A1C]">
        <div className="relative group rounded-md w-[95px] h-[143px] sm:w-[200px] sm:h-[300px] transition-transform duration-300 hover:scale-110">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />

          {/* Conditional Labels */}
          {top10 && (
            <span className="absolute top-0 right-2 p-2 w-6 sm:w-8 sm:h-18 rounded-md text-center bg-[#B71F1D] text-white text-[6px] sm:text-xs font-bold">
              Top 10
            </span>
          )}
          {neweps && (
            <span className="absolute top-1 sm:top-3 left-1 sm:left-3 p-2 w-auto h-auto rounded-xl text-center bg-[#0F1E93] text-white text-[6px] sm:text-xs font-bold">
              Episode Baru
            </span>
          )}
        </div>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions className="bg-[#181A1C] flex justify-center">
        <Button variant="contained" onClick={onClose}>
          Batal
        </Button>
        <Button variant="contained" onClick={handleAgreConfirm} autoFocus>
          Oke!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
