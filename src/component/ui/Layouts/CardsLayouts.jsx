/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/**
 * Komponen CardsLayouts
 * 
 * Komponen ini digunakan untuk menampilkan layout kartu yang dapat digeser menggunakan Swiper.js.
 * Judul, konten (anak), tinggi kontainer, dan jumlah kartu yang ditampilkan dapat disesuaikan
 * melalui props.
 * 
 * @param {string} title - Judul yang ditampilkan di atas komponen.
 * @param {React.ReactNode} children - Kartu-kartu atau elemen lain yang ditampilkan di dalam slider.
 * @param {string} height - Tinggi dari kontainer utama.
 * @param {number} amount - Jumlah kartu yang ingin ditampilkan dalam satu tampilan swiper.
 */
const CardsLayouts = ({ title, children, height, amount }) => {
  return (
    <div className={`flex justify-center bg-[#181A1C] text-white ${height} py-11`}>
      
      {/* Kontainer utama yang membungkus seluruh komponen */}
      <div className="flex flex-col w-11/12">
        {/* Judul layout */}
        <h2 className="text-2xl font-bold text-left pt-3">{title}</h2>
        
        {/* Kontainer untuk slider dan navigasi */}
        <div className="relative flex flex-row items-center justify-between h-[80%] pt-4">
          <div className="overflow-y-visible overflow-x-clip h-full min-w-0">
            
            {/* Swiper untuk menampilkan kartu-kartu */}
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: amount - 3,
                  spaceBetween: 15,
                },
                600: {
                  slidesPerView: amount - 2,
                  spaceBetween: 15,
                },
                900: {
                  slidesPerView: amount - 1,
                  spaceBetween: 15,
                },
                1300: {
                  slidesPerView: amount,
                  spaceBetween: 15,
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation]}
              className="flex justify-center gap-2 h-full"
            >
              {children}  {/* Menampilkan konten yang dikirimkan sebagai anak (children) */}
              
              {/* Tombol navigasi kiri (previous) */}
              <div className="swiper-button-prev relative flex items-center justify-center invisible sm:visible">
                <FaArrowLeft className="absolute z-100 text-white" />
              </div>
              
              {/* Tombol navigasi kanan (next) */}
              <div className="swiper-button-next relative flex items-center justify-center invisible sm:visible">
                <FaArrowRight className="absolute z-100 text-white" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsLayouts;
