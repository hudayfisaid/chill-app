import { useState } from 'react';

const GenreDropdown = ({ genres }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('Genre');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left bg-[#22282A]">
      <button
        type="button"
        className="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-[#22282A] text-sm font-medium text-white focus:outline-none"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        {selectedGenre}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 w-[392px] h-[252px] rounded-md shadow-lg bg-[#22282A] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 flex flex-wrap justify-center items-center" role="none">
            {genres.map((genre) => (
              <button
                key={genre}
                className="px-4 py-2 text-sm w-[50%] text-left"
                role="menuitem"
                onClick={() => handleGenreSelect(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreDropdown;
