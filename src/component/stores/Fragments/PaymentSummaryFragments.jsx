/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PaketCard from '../Elements/Card/PaketCard';
import { useParams } from 'react-router-dom';

const PaymentSummary = () => {
      const [selectedMethod, setSelectedMethod] = useState('creditCard');
      const [codeVoucer, setCodeVoucer] = useState('Masukkan kode voucher');
      const {id} = useParams();
  return (

    // MAAF KAK , AGAK BERANTAKAN PAGE YANG INI GAK BUT COMPONENT ELEMENTNYA
    <div className="flex flex-col items-center bg-[#181A1C] text-white p-6 space-y-6">
    
      <div className=" w-[95%] p-6">
        <h2 className="text-xl font-bold mb-4">Ringkasan Pembayaran</h2>
        <div className="flex flex-col lg:flex-row gap-9 justify-between items-center lg:items-start">
            <PaketCard tipenya = {id}  />
            <div className="w-[80%] bg-gray-800 px-6 py-2 rounded-r-lg space-y-6">
                <h3 className="text-lg font-bold mb-4">Metode Pembayaran</h3>
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0  lg:h-[48px] h-[112px]">
                    <div className="lg:w-[49%] w-full h-[45%] lg:h-full rounded-lg border border-white p-4 cursor-pointer flex items-center justify-start space-x-2"
                     onClick={() => setSelectedMethod('creditCard')}
                     >
                        <input   
                            type="radio"
                            name="paymentMethod"
                            value="creditCard"
                            checked={selectedMethod === 'creditCard'}
                            onChange={() => setSelectedMethod('creditCard')} 
                            className='mr-2'
                          />
                            <img src="/img/icon/visa.png" alt="Visa" className="w-6 h-4" />
                            <img src="/img/icon/mastercard.png" alt="MasterCard" className="w-6 h-4" />
                            <img src="/img/icon/bb.png" alt="Amex" className="w-6 h-4" />
                            <img src="/img/icon/express.png" alt="BCA" className="w-6 h-4" />
                            <span className="ml-2">Kartu Debit/Kredit</span>
                    </div>
                    <div className="lg:w-[49%] w-full h-[45%] lg:h-full rounded-lg border border-white p-4 cursor-pointer flex items-center justify-start"
                     onClick={() => setSelectedMethod('bcaVirtualAccount')}>
                         <input 
                            type="radio"
                            name="paymentMethod"
                            value="bcaVirtualAccount"
                            checked={selectedMethod === 'bcaVirtualAccount'}
                            onChange={() => setSelectedMethod('bcaVirtualAccount')} 
                             className='mr-2'
                         />
                           <img src="/img/icon/bca.png" alt="BCA" className="w-4 h-4" />
                           <span className="ml-2">BCA Virtual Account</span>
                    </div>
                </div>
                
              
                <h3 className="text-lg font-bold mb-4">Kode Voucher (Jika ada)</h3>
                <div className="w-full flex justify-between items-center space-x-4 h-[46px]">
                  <div className="lg:w-[80%] w-[60%] h-full rounded-lg border border-white cursor-pointer flex items-center justify-start space-x-2">
                          <input   
                              type="textbox"
                              name="kodevoucher"
                              value= {codeVoucer}
                              onChange={(e) => setCodeVoucer(e.target.value)} 
                              className='text-[#6C717A] bg-transparent w-full h-full px-4 border-none outline-none'
                            />
                  </div>
                  
                  <button className="lg:w-[20%] w-[40%]  h-[42px] bg-[#2F3334] rounded-full transition-transform duration-300 hover:scale-105 ">Gunakan</button> 
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                <h3 className="text-lg font-bold ">Ringkasan Transaksi</h3>
                <div className="lg:w-[50%] w-full flex flex-col justify-start items-start">
                  <div className="w-full flex flex-row justify-between items-center ">
                    <span className='font-thin text-[#C1C2C4]'>Paket Premium Individual</span>
                    <span>Rp49,000</span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center ">
                   <span className='font-thin text-[#C1C2C4]'>Biaya Admin</span>
                    <span>Rp3,000</span>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center ">
                   <span className='font-thin text-[#C1C2C4]'>Total Pembayaran</span>
                    <span>Rp52,000</span>
                  </div>
               </div>
                </div>
                
                <button className="mt-4 w-[94px] bg-[#09147A] py-2 rounded-lg font-semibold transition-transform duration-300 hover:scale-105">
                Bayar
                </button>
            </div>
        </div>
      </div>

     
    </div>
  )
}

export default PaymentSummary;

