import { useState } from 'react';
import Logonya from '../../component/UI/Elements/logo';
import { FaUser, FaStar, FaSignOutAlt } from 'react-icons/fa';
import profilelogo from '../../assets/img/icon/profile.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from "react-router-dom";

const DropdownItem = ({ to, icon: Icon, children }) => (
  <Link to={to} className="block px-4 py-2 flex items-center space-x-2 hover:text-blue-500">
    <Icon />
    <span>{children}</span>
  </Link>
);

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="w-full bg-[#181A1C] text-white flex items-center justify-center">
      <header className="w-[95%] bg-[#181A1C] text-white flex items-center justify-between px-5 py-4">
        <div className="flex items-center space-x-5 md:space-x-11">
          <Logonya />
          <button onClick={toggleNav} className="focus:outline-none md:hidden">
            {navOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
          <nav className={`md:flex space-x-2 sm:space-x-11 ${navOpen ? 'block' : 'hidden'}`}>
            <Link to="/series" className="hover:underline">Series</Link>
            <Link to="/films" className="hover:underline">Film</Link>
            <Link to="/daftarsaya" className="hover:underline">Daftar Saya</Link>
          </nav>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
            <img src={profilelogo} alt="Profile" className="w-8 h-8 rounded-full" />
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded-md shadow-lg py-2 z-10">
              <DropdownItem to="/profile" icon={FaUser}>Profil Saya</DropdownItem>
              <DropdownItem to="/subscribe" icon={FaStar}>Ubah Premium</DropdownItem>
              <DropdownItem to="/login" icon={FaSignOutAlt}>Keluar</DropdownItem>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
