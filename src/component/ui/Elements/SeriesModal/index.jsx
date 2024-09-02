/* eslint-disable no-unused-vars */
import React from 'react';
import Episode from '../Card/EpisodeCard';
import epsList from '../../../constants/episodeList';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const EpisodeModal = ({ handleClose, open }) => {
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
            
            {/* Header Image Section */}
            <div className="relative w-full h-[554px]">
              <img
                src="/img/thumbnail/PreviewSeries/tn1.png"
                alt="Preview"
                className="w-full h-full object-cover rounded-t-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full" />
            </div>

            {/* Information Section */}
            <div className="relative w-full lg:h-[224px] flex lg:flex-row flex-col space-y-3 justify-start items-center">
              <div className="md:w-[50%] w-full px-10 flex flex-col justify-center items-start">
                <div className="w-full flex justify-start items-center space-x-2 text-[#C1C2C4]">
                  <span className="text-sm">2020</span>
                  <span className="text-sm">10 episodes</span>
                  <div className="w-10 h-10 border-2 border-[#C1C2C4] rounded-full flex justify-center items-center">
                    18+
                  </div>
                </div>
                <p className="text-sm text-[#C1C2C4] mt-2">
                  Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan.
                </p>
              </div>
              <div className="md:w-[50%] w-full px-10 flex flex-col justify-center items-start">
                <div className="w-full text-[#C1C2C4] space-y-2">
                  <div className="flex">
                    <span className="font-semibold w-[35%]">Cast</span>
                    <span className="w-[65%] text-sm">: Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-[35%]">Genre</span>
                    <span className="w-[65%] text-sm">: Komedi, Drama, Olahraga</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-[35%]">Pembuat Film</span>
                    <span className="w-[65%] text-sm">: Brendan Hunt, Joe Kelly, Bill Lawrence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode List Section */}
            <div className="relative w-full flex flex-col justify-start items-center py-5">
              <h3 className="text-xl text-white text-left w-[90%]">Episodes</h3>
              <div className="w-[90%] flex flex-col justify-start items-center space-y-5">
                {epsList.map((item, index) => (
                  <Episode
                    key={index}
                    episode={item.episode}
                    image={item.image}
                    filmname={item.filmname}
                    duration={item.duration}
                    filmdescription={item.filmdescription}
                  />
                ))}
              </div>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EpisodeModal;
