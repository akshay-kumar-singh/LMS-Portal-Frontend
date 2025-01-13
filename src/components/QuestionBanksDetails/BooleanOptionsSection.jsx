// components/BooleanOptionsSection.js
import React from "react";

const BooleanOptionsSection = ({ formData, setFormData }) => {
  const handleOptionChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      booleanAnswer: value, // Store the selected answer in formData
    }));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Boolean Options</h3>
      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="booleanAnswer"
            value="true"
            checked={formData.booleanAnswer === "true"}
            onChange={() => handleOptionChange("true")}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
          />
          <span>True</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="booleanAnswer"
            value="false"
            checked={formData.booleanAnswer === "false"}
            onChange={() => handleOptionChange("false")}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
          />
          <span>False</span>
        </label>
      </div>
    </div>
  );
};

export default BooleanOptionsSection;
