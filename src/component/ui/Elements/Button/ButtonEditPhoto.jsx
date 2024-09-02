/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const ButtonEditPhoto = ({ togglePremium }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <button 
        className="w-[80%] h-[40px] ring-2 outline outline-[#3254FF] rounded-full bg-transparent text-[#3254FF]" 
        onClick={togglePremium}
      >
        Ubah Photo
      </button>
      <div className="w-full flex justify-center items-center text-gray-500">
        <UploadFileIcon />
        <span className="ml-2">Maksimal 2MB</span>
      </div>
    </div>
  );
}

export default ButtonEditPhoto;
