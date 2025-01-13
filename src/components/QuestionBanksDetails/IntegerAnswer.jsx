import React from "react";

const IntegerAnswer = ({ formData, setFormData }) => {
  const handleInputChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      integerAnswer: value,
    }));
  };

  return (
    <div className="mt-4 space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Integer Answer</h3>
      <input
        type="number"
        value={formData.integerAnswer || ""}
        onChange={(e) => handleInputChange(e.target.value)}
        className="block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
        placeholder="Enter an integer"
      />
    </div>
  );
};

export default IntegerAnswer;
