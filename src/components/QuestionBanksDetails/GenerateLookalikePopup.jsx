import React, { useState } from "react";

const GenerateLookalikePopup = ({ isVisible, onClose, onGenerate }) => {
  const [formData, setFormData] = useState({
    numberOfQuestions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenerate = () => {
    onGenerate(formData.numberOfQuestions);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-8">
      <div
        className="bg-white w-full max-w-2xl p-12 rounded-2xl shadow-2xl relative"
        style={{ minHeight: "400px" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Generate Lookalike Questions
        </h2>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="text-lg font-medium text-gray-600">
              Number of Questions generate each type
            </label>
            <input
              type="number"
              name="numberOfQuestions"
              value={formData.numberOfQuestions}
              onChange={handleInputChange}
              placeholder="Enter"
              className="w-40 px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring focus:ring-blue-400 focus:outline-none text-center text-lg"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={handleGenerate}
            className="px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateLookalikePopup;
