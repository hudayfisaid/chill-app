/* eslint-disable no-unused-vars */
import React from 'react';
import PaketCard from '../Elements/Card/PaketCard';

/**
 * Komponen SubscriptionList
 * 
 * Komponen ini digunakan untuk menampilkan daftar paket langganan yang tersedia.
 * Pengguna dapat memilih paket yang sesuai dengan kebutuhan mereka dari beberapa
 * opsi yang disediakan.
 */
const SubscriptionList = () => {
  return (
    <div className="w-full h-auto bg-[#22282A] flex flex-col justify-center items-center gap-5 p-10">
      
      {/* Header yang menampilkan judul dan deskripsi singkat */}
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-white text-3xl font-bold">Pilih Paketmu</h1>
        <p className="text-white text-lg">Temukan paket sesuai kebutuhanmu!</p>
      </div>

      {/* Grid untuk menampilkan paket langganan */}
      <div className="group flex lg:flex-row flex-col w-[70%] justify-evenly items-center gap-5">
        <PaketCard tipenya="Individual" />  {/* Paket Individual */}
        <PaketCard tipenya="Berdua" />      {/* Paket Berdua */}
        <PaketCard tipenya="Keluarga" />    {/* Paket Keluarga */}
      </div>

    </div>
  );
};

export default SubscriptionList;
