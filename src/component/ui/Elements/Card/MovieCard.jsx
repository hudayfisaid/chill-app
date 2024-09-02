/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaStar, FaPlay, FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import formatwaktu from '../../../../utils/formatwaktu';
import useDaftarSayaStore from '../../../stores/daftarsaya/useDaftarSayaStore';
import { useNavigate, useLocation } from 'react-router-dom';
import SeriesModal from '../SeriesModal';
import FilmmModal from '../FilmModal';
import DialogModal from '../DialogModal';

const MovieCard = (props) => {
  const { style, index, type, title, image, rating, eps, duration, progress, totaleps, category, label, top10, neweps } = props;
  
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  
  const pathSegment = location.pathname.split('/')[1];
  const addDaftarSaya = useDaftarSayaStore(state => state.addDaftarSaya);

  const handleHover = (hover) => {
    setOpen(false);
    setIsHovered(hover);
  };

  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    setIsHovered(false);
  };

  const handleAddToDaftarSaya = () => {
    addDaftarSaya(title, image, top10, neweps);
    handleCloseConfirm();
  };

  const handlePlay = () => navigate(`/videoplayer`);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <DialogModal 
        openConfirm={openConfirm} 
        onClose={handleCloseConfirm} 
        handleAgreConfirm={handleAddToDaftarSaya} 
        title={title} 
        image={image} 
        modalTitle={`Tambahkan ${title} ke Daftar Kamu?`}
      />

      {pathSegment === "films" || pathSegment === "" ? (
        <FilmmModal open={open} handleClose={handleCloseModal} title={title} image={image} />
      ) : (
        <SeriesModal open={open} handleClose={handleCloseModal} title={title} image={image} />
      )}

      <div className={`h-full object-cover transition-transform duration-300 ${style === "box-panjang" ? (isHovered ? 'scale-[120%] translate-y-[-60%]' : '') : (isHovered ? 'scale-[110%] translate-y-[-50%]' : '')} ${index === 0 && isHovered && 'translate-x-[5%]'}`}>
        <div className={`relative w-full h-full transition-transform origin-bottom duration-300 ${style === "box-panjang" && isHovered && 'w-full scale-y-[65%]'}`}>
          {label && (
            <span className={`absolute top-3 left-3 p-2 w-auto h-18 rounded-xl text-center text-white text-xs font-bold ${label === "Top 10" ? 'bg-[#B71F1D]' : label === "new Episode" ? 'bg-[#0F1E93]' : 'bg-[#B7A207]'}`}>
              {label}
            </span>
          )}
          <img src={image} alt={title} className={`object-cover w-full h-full rounded-md ${style === "box-panjang" && isHovered && 'rounded-b-none'}`} />
        </div>

        {style === "box" && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 p-2 flex items-end justify-between">
            <h2 className={`text-white text-lg font-bold transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>{title}</h2>
            <div className={`flex items-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
              <FaStar className="mr-1" />
              <span className="text-white">{rating}</span>
            </div>
          </div>
        )}

        <div className={`flex items-center justify-center rounded-b-md z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full h-[180px] transition-opacity duration-300 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-[95%]">
            <div className="w-full h-[55px] flex items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-4">
                <div
                  className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-neutral-300"
                  onClick={handlePlay}
                >
                  <FaPlay className="text-black w-4 h-4" />
                </div>
                <div
                  className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 border rounded-full flex items-center justify-center transition hover:bg-gray-300"
                  onClick={handleOpenConfirm}
                >
                  <FaCheck className="text-white" />
                </div>
              </div>
              <div
                className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 border rounded-full flex items-center justify-center transition hover:bg-gray-300"
                onClick={handleOpenModal}
              >
                <IoIosArrowDown className="text-white" />
              </div>
            </div>
            <div className="w-full pt-4">
              {type !== 'movie' && style !== "box-panjang" && (
                <p className="text-white text-sm pb-3">{`"${eps}"`}</p>
              )}
              <div className="flex items-center gap-3 justify-start pb-3">
                {style === "box-panjang" ? (
                  <>
                    <span className="bg-gray-700 text-white py-1 px-2 rounded-full border border-gray-700">13+</span>
                    <p>{totaleps} Episode</p>
                  </>
                ) : (
                  <>
                    <div className="w-[80%] bg-gray-400 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: progress }}></div>
                    </div>
                    <p className="text-white text-xs">{formatwaktu(duration)}</p>
                  </>
                )}
              </div>
              <div className="flex flex-wrap gap-1 justify-between w-full">
                {category.map((cat, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-white py-1 px-2 text-xs">{cat}</span>
                    {idx < category.length - 1 && <span className="text-white py-1 px-2 text-xs">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
