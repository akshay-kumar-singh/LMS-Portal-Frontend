import React, { useState } from "react";

const BlockDiscussionPopup = ({ onClose, onSave }) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Block Discussion
        </h2>
        <p className="text-gray-600 mb-6">
          Do you really want to block this user in discussion?
        </p>
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            id="blockOldDiscussions"
            className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="blockOldDiscussions"
            className="ml-3 text-gray-700 text-sm"
          >
            Block old discussions of this user
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={!isCheckboxChecked}
            className={`px-5 py-2.5 rounded-lg transition ${
              isCheckboxChecked
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-red-300 text-white cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockDiscussionPopup;
