/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ButtonEditPhoto from '../Elements/Button/ButtonEditPhoto';
import InputProfile from '../Elements/InputProfile';

/**
 * Komponen FormProfile
 * 
 * Komponen ini digunakan untuk menampilkan dan mengedit profil pengguna, termasuk avatar,
 * nama, email, dan kata sandi. Selain itu, terdapat opsi untuk menampilkan status langganan premium.
 */
const FormProfile = ({ height, title }) => {
  const [isPremium, setIsPremium] = useState(false);

  // Fungsi untuk mengubah status langganan premium
  const togglePremium = () => {
    setIsPremium(!isPremium);
  };

  return (
    <div className={`flex justify-center bg-[#181A1C] text-white ${height} py-11`}>
      <div className="flex flex-col w-11/12 gap-5">
        <h2 className="text-2xl font-bold text-left pt-3">{title}</h2>

        <div className="relative flex lg:flex-row flex-col space-y-5 items-center justify-between w-full pt-4">
          
          {/* Bagian untuk menampilkan status langganan premium */}
          <div className="relative lg:order-2 order-1 lg:w-[50%] w-[80%] h-full flex flex-col justify-start items-end">
            {isPremium ? (
              <div className="relative flex flex-col justify-center items-center right-0 bg-[#3D4142] lg:w-[80%] w-full h-[193px] rounded-md">
                <div className="w-full h-[60%] flex flex-row justify-center items-center p-5">
                  <div className="flex flex-row justify-around items-start">
                    <Avatar
                      alt="sound"
                      src="/img/icon/speakerlangganan.png"
                      sx={{ width: 78, height: 78 }}
                    />
                    <div className="flex flex-col justify-center items-start gap-2">
                      <h1 className="text-xl">
                        Saat ini anda belum berlangganan
                      </h1>
                      <span className="text-sm">
                        Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] flex flex-row justify-end items-center">
                  <button className="w-[160px] bg-[#2F3334] rounded-full text-white p-2">
                    Mulai Berlangganan
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative flex justify-center items-start right-0 bg-gradient-to-r from-[#5370D4] to-[#192DB7] lg:w-[80%] w-[100%] h-[193px] rounded-md">
                <div className="w-full h-full flex flex-col justify-start items-start p-7 gap-3 overflow-hidden">
                  <button className="w-[81px] h-[37px] bg-[#C1C2C4] rounded-full text-[#0F1E93] p-2 text-center font-semibold">
                    Aktif
                  </button>
                  <span className="text-xl font-bold text-white">
                    Akun Premium Individual✨
                  </span>
                  <span className="text-sm text-white">
                    Saat ini kamu sedang menggunakan akses akun premium
                  </span>
                  <span className="text-sm text-white">
                    Berlaku hingga 31 Desember 2023
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bagian untuk input profil pengguna */}
          <div className="w-[80%] lg:w-[50%] h-full flex flex-col justify-start gap-9 sm:order-1 order-2">
            <div className="w-[287px] h-[140px] flex justify-start">
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="/img/icon/profile.png"
                  sx={{ width: 140, height: 140 }}
                />
                <ButtonEditPhoto togglePremium={togglePremium} />
              </Stack>
            </div>

            {/* Input untuk nama, email, dan kata sandi */}
            <InputProfile type="nama" placeholder="hudayfi said" label="Nama Pengguna" />
            <InputProfile type="email" placeholder="hudayfisaidabdullahi@gmail.com" label="Email" />
            <InputProfile type="password" placeholder="********" label="Kata Sandi" />
          </div>
          
        </div>

        {/* Tombol untuk menyimpan perubahan profil */}
        <button className="order-last bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[106px]">
          Save
        </button>
        
      </div>
    </div>
  );
};

export default FormProfile;
