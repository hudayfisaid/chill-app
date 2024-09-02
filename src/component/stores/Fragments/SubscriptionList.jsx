/* eslint-disable no-unused-vars */
import React from 'react'
import PaketCard from '../Elements/Card/PaketCard';
const SubscriptionList = () => {
  return (
    <div className='w-full h-auto bg-[#22282A] flex flex-col justify-center items-center gap-5 p-10' >
     <div className='flex flex-col w-full justify-center items-center '>
        <h1 className='text-white text-3xl font-bold'>Pilih Paketmu</h1>
        <p className='text-white text-lg'>Temukan paket sesuai kebutuhanmu!</p>
     </div>
     <div className='group flex lg:flex-row flex-col w-[70%] justify-evenly items-center gap-5 '>
      <PaketCard tipenya = "Individual" />
      <PaketCard tipenya = "Berdua" />
      <PaketCard tipenya = "Keluarga" />

     </div>
    </div>
  )
}

export default SubscriptionList
