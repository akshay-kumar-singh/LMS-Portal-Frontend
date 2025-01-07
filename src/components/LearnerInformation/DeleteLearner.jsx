import React, { useState } from "react";

const DeleteLearner = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className="max-w-[65%] mt-8 mb-6 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-start">
        Delete Learner
      </h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="agreeDelete"
            className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            checked={isChecked} 
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="agreeDelete"
            className="text-lg font-medium text-gray-700"
          >
            I agree to delete learner profile
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
            disabled={!isChecked} 
            style={{
              cursor: isChecked ? "pointer" : "not-allowed", 
              opacity: isChecked ? 1 : 0.4, 
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteLearner;
