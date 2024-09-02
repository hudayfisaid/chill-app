/* eslint-disable no-unused-vars */
import React from 'react';
import DaftarSayaFragments from '../../Fragments/DaftarSayaFragments';
import CardThumbnail from '../../Elements/Card/CardThumbnail';
import filmDetails from '../../../constants/filmDetails';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const MovieModal = ({ handleClose, open }) => {
  return (
    <div className="relative bg-[#181A1C] w-full flex justify-center items-center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        keepMounted
        className="overflow-scroll flex justify-center items-start rounded-md"
      >
        <Fade in={open}>
          <div className="absolute flex-col justify-center items-start space-y-4 bg-[#181A1C] lg:w-[50%] w-[90%] rounded-md">
            {/* Image Section */}
            <div className="relative w-full h-[554px]">
              <img
                src="/img/thumbnail/PreviewSeries/tn1.png"
                alt="Movie Thumbnail"
                className="w-full h-full object-cover rounded-t-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full" />
            </div>

            {/* Details Section */}
            <div className="relative w-full lg:h-[224px] flex flex-col space-y-3 justify-start items-center">
              <div className="w-full px-10 flex lg:flex-row flex-col justify-between lg:justify-center items-start">
                {/* Left Column: Description */}
                <div className="md:w-[50%] w-full flex flex-col justify-center items-start">
                  <div className="w-full flex justify-start items-center space-x-2 text-[#C1C2C4]">
                    <span className="text-sm">2023</span>
                    <span className="text-sm">2j 29m</span>
                    <div className="w-[47px] h-[22px] text-sm border-2 border-[#C1C2C4] rounded-md flex justify-center items-center">
                      PG-13
                    </div>
                  </div>
                  <div className="w-full text-[#C1C2C4]">
                    <p className="text-sm">
                      Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertahankan alam semesta dan salah satu dari mereka - sebuah misi yang bisa berarti akhir dari Penjaga jika tidak berhasil.
                    </p>
                  </div>
                </div>

                {/* Right Column: Cast and Genre */}
                <div className="md:w-[50%] w-full flex flex-col justify-center items-start">
                  <div className="w-full text-[#C1C2C4] space-y-2">
                    <div className="flex">
                      <span className="font-semibold w-[35%]">Cast</span>
                      <span className="w-[65%] text-sm">: Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain lain</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold w-[35%]">Genre</span>
                      <span className="w-[65%] text-sm">: Aksi, Petualangan, Komedi</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold w-[35%]">Pembuat Film</span>
                      <span className="w-[65%] text-sm">: James Gunn</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Similar Recommendations Section */}
              <DaftarSayaFragments title="Rekomendasi Serupa">
                {filmDetails.map((movie, index) => (
                  <CardThumbnail key={index} {...movie} ignore={true} />
                ))}
              </DaftarSayaFragments>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MovieModal;
