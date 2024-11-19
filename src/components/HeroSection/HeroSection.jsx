import React, { useState } from "react";
import Hero from "../../assets/hero.svg";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import SignupLoginPopup from "../SignupLoginPopup/SignupLoginPopup";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleExploreClick = () => {
    setIsPopupOpen(true); 
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to LearnOscale
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          One Destination for Complete Exam Preparation
        </p>
        <div className="text-gray-600 mb-6 flex items-center space-x-2 text-lg">
          <span>Learn</span>
          <span className="text-green-600">&gt;</span>
          <span>Practice</span>
          <span className="text-green-600">&gt;</span>
          <span>Improve</span>
          <span className="text-green-600">&gt;</span>
          <span>Succeed</span>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          Start your preparation for selections!
        </p>
        <div className="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <button
            className="flex items-center justify-center bg-green-600 text-white px-6 py-3 h-16 rounded-lg shadow-md hover:bg-gray-700 transition-colors text-md font-medium w-full sm:w-auto"
            onClick={handleExploreClick}
          >
            Explore
          </button>
          <a
            href="https://play.google.com"
            className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 h-16 rounded-lg shadow-md hover:bg-gray-700 transition-colors text-md font-medium w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay className="text-white text-2xl mr-2" />
            <span>Get it on Google Play</span>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 h-16 rounded-lg shadow-md hover:bg-gray-700 transition-colors text-md font-medium w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple className="text-white text-2xl mr-2" />
            <span>Download on the App Store</span>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 overflow-hidden">
        <img
          src={Hero}
          alt="Hero"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <SignupLoginPopup isOpen={isPopupOpen} closePopup={closePopup} />
    </section>
  );
};

export default HeroSection;
