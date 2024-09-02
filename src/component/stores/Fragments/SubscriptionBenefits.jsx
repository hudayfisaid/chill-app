/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import  DownloadIcon  from '@mui/icons-material/Download';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import FourKIcon from '@mui/icons-material/FourK';
import DevicesIcon from '@mui/icons-material/Devices';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

const SubscriptionBenefits = ({height}) => {
  return (
    <div className={`bg-[#181A1C] text-white p-6 md:h-[467px] h-[567px] space-y-4`}>
      <h2 className="text-center text-xl font-semibold mb-9">Kenapa Harus Berlangganan?</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-[72px]">
        <div className="flex flex-col items-center gap-6">
          <DownloadIcon/>
          <p className="text-center">Download Konten Pilihan</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <DoNotTouchIcon/>
          <p className="text-center">Tidak Ada Iklan</p>
        </div>
        <div className="flex flex-col items-center gap-6">
        <GroupWorkIcon/>
          <p className="text-center">Tonton Semua Konten</p>
        </div>
        <div className="flex flex-col items-center gap-6">
        <FourKIcon/>
          <p className="text-center">Kualitas Maksimal Sampai Dengan 4K</p>
        </div>
        <div className="flex flex-col items-center gap-6">
        <DevicesIcon/>
          <p className="text-center">Tonton di TV, Tablet, Mobile, dan Laptop</p>
        </div>
        <div className="flex flex-col items-center gap-6">
       <SubtitlesIcon/>
          <p className="text-center">Subtitle Untuk Konten Pilihan</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBenefits;
