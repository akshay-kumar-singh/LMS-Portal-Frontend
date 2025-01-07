import React, { useState } from "react";
import BlockDiscussionPopup from "./BlockDiscussionPopup";
import DeactivateUserPopup from "./DeactivateUserPopup";

const Header = () => {
  const [isBlockPopupOpen, setIsBlockPopupOpen] = useState(false);
  const [isDeactivatePopupOpen, setIsDeactivatePopupOpen] = useState(false);

  const handleBlockDiscussionClick = () => {
    setIsBlockPopupOpen(true);
  };

  const handleDeactivateClick = () => {
    setIsDeactivatePopupOpen(true);
  };

  const handleCloseBlockPopup = () => {
    setIsBlockPopupOpen(false);
  };

  const handleCloseDeactivatePopup = () => {
    setIsDeactivatePopupOpen(false);
  };

  const handleSaveBlockPopup = () => {
    console.log("User blocked in discussion.");
    setIsBlockPopupOpen(false);
  };

  const handleSaveDeactivatePopup = () => {
    console.log("User deactivated.");
    setIsDeactivatePopupOpen(false);
  };

  return (
    <div className="max-w-[65%] mb-6 mx-auto">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-2xl font-medium">Learner Information</h1>

        <div className="mt-4 sm:mt-4 space-x-4 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
          <button
            onClick={handleBlockDiscussionClick}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          >
            Block Discussion
          </button>
          <button
            onClick={handleDeactivateClick}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Deactivate
          </button>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-300"></div>

      {isBlockPopupOpen && (
        <BlockDiscussionPopup
          onClose={handleCloseBlockPopup}
          onSave={handleSaveBlockPopup}
        />
      )}

      {isDeactivatePopupOpen && (
        <DeactivateUserPopup
          onClose={handleCloseDeactivatePopup}
          onSave={handleSaveDeactivatePopup}
        />
      )}
    </div>
  );
};

export default Header;
