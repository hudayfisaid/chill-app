import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';

const PaketCard = ({ tipenya }) => {
  const navigate = useNavigate();

  const getPricing = () => {
    switch (tipenya) {
      case "Individual":
        return "Mulai dari Rp49,990/bulan";
      case "Berdua":
        return "Mulai dari Rp79,990/bulan";
      default:
        return "Mulai dari Rp159,990/bulan";
    }
  };

  const getAccountInfo = () => {
    switch (tipenya) {
      case "Individual":
        return "1 Akun";
      case "Berdua":
        return "2 Akun";
      default:
        return "5-7 Akun";
    }
  };

  const getQuality = () => {
    switch (tipenya) {
      case "Individual":
        return "Kualitas 720p";
      case "Berdua":
        return "Kualitas 1080p";
      default:
        return "Kualitas 4K";
    }
  };

  return (
    <div className='bg-gradient-to-r from-[#5370D4] to-[#192DB7] w-[236px] h-[400px] rounded-md flex flex-col justify-start items-center transition-transform duration-300 hover:scale-110'>
      <div className='flex flex-col justify-start items-start p-4 w-[95%] gap-5'>
        <button className='text-white text-xl rounded-full bg-[#3D4142] px-5 h-[40px]'>{tipenya}</button>
        <div className='flex flex-col justify-start items-start w-full'>
          <p className='text-white text-sm font-sm text-left w-full'>{getPricing()}</p>
          <p className='text-white text-sm'>{getAccountInfo()}</p>
        </div>
        <div className='flex flex-col justify-start items-start w-full pb-4'>
          <div className='flex flex-row justify-start items-start w-full gap-2'>
            <CheckIcon className='text-white' />
            <p className='text-white text-sm'>Tidak ada iklan</p>
          </div>
          <div className='flex flex-row justify-start items-start w-full gap-2'>
            <CheckIcon className='text-white' />
            <p className='text-white text-sm'>{getQuality()}</p>
          </div>
          <div className='flex flex-row justify-start items-start w-full gap-2'>
            <CheckIcon className='text-white' />
            <p className='text-white text-sm'>Download konten pilihan</p>
          </div>
        </div>
        <div className='h-[1px] w-full bg-white opacity-10 rounded-full'></div>
        <div className='flex flex-col justify-start items-start w-full gap-2 pt-4'>
          <button
            className='text-[#0F1E93] font-bold text-xl rounded-full bg-white px-2 w-full h-[40px]'
            onClick={() => navigate(`/payment/${tipenya}`)}
          >
            Langganan
          </button>
          <p className='text-white text-sm font-sm text-center w-full'>Syarat dan Ketentuan Berlaku</p>
        </div>
      </div>
    </div>
  );
};

export default PaketCard;
