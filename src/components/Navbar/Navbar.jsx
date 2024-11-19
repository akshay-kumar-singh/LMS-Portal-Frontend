import React, { useState } from "react";
import { FaSearch, FaGlobe, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import SignupLoginPopup from "../SignupLoginPopup/SignupLoginPopup";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleGetStartedClick = () => {
    setIsPopupOpen(true); 
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="bg-green-500 shadow-md py-4 px-6 flex justify-between items-center relative">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Institute Logo" className="h-8 w-8" />
        <div className="text-2xl font-bold text-pink-600">LearnOscale</div>
      </div>

      <DesktopNavbar />

      <div className="relative hidden lg:block">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1 pr-10 focus:outline-none focus:border-blue-600"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="relative hidden lg:block group">
        <FaGlobe className="text-gray-500 cursor-pointer" />
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul className="text-sm">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              English
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Hindi
            </li>
          </ul>
        </div>
      </div>

      <button
        className="hidden lg:block bg-blue-600  hover:bg-blue-900 text-white px-4 py-2 rounded"
        onClick={handleGetStartedClick}
      >
        Get Started
      </button>

      <div className="lg:hidden">
        <FaBars
          className="text-gray-500 cursor-pointer"
          onClick={handleMenuToggle}
        />
      </div>

      <MobileNavbar menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />
      <SignupLoginPopup isOpen={isPopupOpen} closePopup={closePopup} />
    </nav>
  );
};

export default Navbar;
