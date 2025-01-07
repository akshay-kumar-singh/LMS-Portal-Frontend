import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewQBankPopup from "./NewQBankPopup";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNewQBankClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="max-w-[90%] mx-auto mt-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Question Banks
          </h1>
          <p className="text-gray-600 mt-1">
            Manage all your question banks in one place.{" "}
            <Link to="/learn-more" className="text-blue-600 hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <button
          onClick={handleNewQBankClick}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + New QBank
        </button>
      </div>
      {isPopupOpen && <NewQBankPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Header;
