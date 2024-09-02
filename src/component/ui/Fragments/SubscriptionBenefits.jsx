/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import FourKIcon from '@mui/icons-material/FourK';
import DevicesIcon from '@mui/icons-material/Devices';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

/**
 * Komponen SubscriptionBenefits
 * 
 * Komponen ini digunakan untuk menampilkan daftar manfaat berlangganan. Setiap manfaat
 * ditampilkan dengan ikon yang relevan dan deskripsi singkat.
 */
const SubscriptionBenefits = ({ height }) => {
  return (
    <div className={`bg-[#181A1C] text-white p-6 ${height} space-y-4`}>
      {/* Judul bagian manfaat berlangganan */}
      <h2 className="text-center text-xl font-semibold mb-9">Kenapa Harus Berlangganan?</h2>

      {/* Grid untuk menampilkan ikon dan deskripsi manfaat berlangganan */}
      <div className="grid md:grid-cols-3 grid-cols-2 gap-[72px]">
        
        {/* Manfaat: Download Konten Pilihan */}
        <div className="flex flex-col items-center gap-6">
          <DownloadIcon />
          <p className="text-center">Download Konten Pilihan</p>
        </div>

        {/* Manfaat: Tidak Ada Iklan */}
        <div className="flex flex-col items-center gap-6">
          <DoNotTouchIcon />
          <p className="text-center">Tidak Ada Iklan</p>
        </div>

        {/* Manfaat: Tonton Semua Konten */}
        <div className="flex flex-col items-center gap-6">
          <GroupWorkIcon />
          <p className="text-center">Tonton Semua Konten</p>
        </div>

        {/* Manfaat: Kualitas Maksimal Sampai Dengan 4K */}
        <div className="flex flex-col items-center gap-6">
          <FourKIcon />
          <p className="text-center">Kualitas Maksimal Sampai Dengan 4K</p>
        </div>

        {/* Manfaat: Tonton di Berbagai Perangkat */}
        <div className="flex flex-col items-center gap-6">
          <DevicesIcon />
          <p className="text-center">Tonton di TV, Tablet, Mobile, dan Laptop</p>
        </div>

        {/* Manfaat: Subtitle Untuk Konten Pilihan */}
        <div className="flex flex-col items-center gap-6">
          <SubtitlesIcon />
          <p className="text-center">Subtitle Untuk Konten Pilihan</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBenefits;
