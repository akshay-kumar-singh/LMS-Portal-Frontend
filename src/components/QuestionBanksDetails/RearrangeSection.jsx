import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const RearrangeSection = ({ formData, setFormData }) => {
  const [options, setOptions] = useState(formData.multipleMarkingOptions || [
    { label: "A" },
    { label: "B" },
    { label: "C" },
    { label: "D" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedOptions = [...options];

    if (name.includes("multipleMarking_")) {
      updatedOptions[index].label = value;
    }

    setOptions(updatedOptions);
    setFormData((prevData) => ({
      ...prevData,
      multipleMarkingOptions: updatedOptions,
    }));
  };

  const handleAddMultipleMarkingRow = () => {
    const newOption = { label: String.fromCharCode(65 + options.length) };
    const updatedOptions = [...options, newOption];
    setOptions(updatedOptions);
    setFormData((prevData) => ({
      ...prevData,
      multipleMarkingOptions: updatedOptions,
    }));
  };

  const handleDeleteMultipleMarkingRow = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
    setFormData((prevData) => ({
      ...prevData,
      multipleMarkingOptions: updatedOptions,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg space-y-6">
      <label className="block text-sm font-semibold text-gray-700 mb-4">
        Type Question Here
      </label>
      <input
        type="text"
        name="multipleMarkingQuestion"
        value={formData.multipleMarkingQuestion || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            multipleMarkingQuestion: e.target.value,
          }))
        }
        className="w-full h-40 border border-gray-300 rounded-lg p-4 text-gray-700 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        placeholder="Type question here"
      />

      <label className="block text-sm font-semibold text-gray-700 mb-4">
        Options
      </label>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mt-4 space-x-4">
          <span className="text-lg text-gray-600">=</span>

          {/* Label input (A, B, C, etc.) */}
          <input
            type="text"
            name={`multipleMarking_${index}`}
            value={option.label}
            onChange={(e) => handleInputChange(e, index)}
            className="flex-1 border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            placeholder={option.label}
          />

          {/* Delete icon */}
          <AiOutlineDelete
            className="text-red-500 cursor-pointer hover:text-red-700 transition duration-300 ease-in-out"
            size={20}
            onClick={() => handleDeleteMultipleMarkingRow(index)}
          />
        </div>
      ))}

      <div className="mt-4 text-start">
        <button
          onClick={handleAddMultipleMarkingRow}
          className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300 ease-in-out"
        >
          + Add New Option
        </button>
      </div>
    </div>
  );
};

export default RearrangeSection;
