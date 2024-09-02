import { useState, useEffect } from 'react';
import Logo from '../../component/UI/Elements/logo';
import { IoIosArrowForward } from "react-icons/io";

const GenreList = ({ genres }) => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-white">
    {genres.map((column, columnIndex) => (
      <div key={columnIndex} className="space-y-1">
        {column.map((genre, index) => (
          <div key={index} className="text-gray-300">
            <a href={`/#genre/${genre}`}>{genre}</a>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const BantuanList = ({ bantuan }) => (
  <div className="grid grid-cols-1 gap-4 text-white">
    {bantuan.map((item, index) => (
      <div key={index} className="text-gray-300">
        <a href={`/#bantuan/${item}`}>{item}</a>
      </div>
    ))}
  </div>
);

const Footer = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showBantuan, setShowBantuan] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  const genres = [
    ["Aksi", "Anak-anak", "Anime", "Britania"],
    ["Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama"],
    ["Komedi", "Petualangan", "Perang", "Romantis"],
    ["Sains & Alam", "Thriller"],
  ];

  const bantuan = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

  return (
    <footer className="bg-[#181A1C] py-8 w-full flex justify-center items-center border-t-[1px] border-[#E7E3FC]">
      <div className="relative w-[90%] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="text-white flex flex-col justify-center items-start gap-4">
          <Logo height="h-[50px]" width="w-[50px]" />
          <span className="text-sm text-[#C1C2C4]">@2023 Chill All Rights Reserved.</span>
        </div>

        {isMobile ? (
          <div className="flex flex-col justify-start items-start gap-4 w-full">
            <div className="cursor-pointer w-full flex justify-between" onClick={() => setShowGenre(!showGenre)}>
              <span className="text-white">Genre</span>
              <IoIosArrowForward className="text-white" />
            </div>
            {showGenre && <GenreList genres={genres} />}
            
            <div className="cursor-pointer w-full flex justify-between" onClick={() => setShowBantuan(!showBantuan)}>
              <span className="text-white">Bantuan</span>
              <IoIosArrowForward className="text-white" />
            </div>
            {showBantuan && <BantuanList bantuan={bantuan} />}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-white w-full lg:w-auto">
            <div className="flex flex-col justify-start items-start gap-4 lg:w-[75%]">
              <span className="text-white text-sm font-bold">Genre</span>
              <GenreList genres={genres} />
            </div>
            <div className="flex flex-col justify-start items-start gap-4 lg:w-[20%]">
              <span className="text-white text-sm font-bold">Bantuan</span>
              <BantuanList bantuan={bantuan} />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
