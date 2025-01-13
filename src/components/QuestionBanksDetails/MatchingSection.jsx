import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const MatchingSection = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [, rowIndex, colIndex] = name.split("_");

    setFormData((prev) => {
      const newOptions = [...prev.matchingOptions];
      if (colIndex !== undefined) {
        newOptions[rowIndex].column2[colIndex] = value;
      } else {
        newOptions[rowIndex].column1 = value;
      }
      return { ...prev, matchingOptions: newOptions };
    });
  };

  const handleAddColumn2 = (rowIndex) => {
    const updatedOptions = [...formData.matchingOptions];
    updatedOptions[rowIndex].column2.push("");
    setFormData({
      ...formData,
      matchingOptions: updatedOptions,
    });
  };

  const handleAddNewRow = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      matchingOptions: [
        ...formData.matchingOptions,
        { column1: "", column2: [""] },
      ],
    });
  };

  const handleDeleteRow = (rowIndex) => {
    const updatedOptions = formData.matchingOptions.filter(
      (_, index) => index !== rowIndex
    );
    setFormData({
      ...formData,
      matchingOptions: updatedOptions,
    });
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        Type Question Here
      </label>
      <input
        type="text"
        name="matchingQuestion"
        value={formData.matchingQuestion || ""}
        onChange={handleInputChange}
        className="mt-1 block w-[95%] h-40 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
        placeholder="Type question here"
      />

      <label className="block text-sm font-medium text-gray-700 mt-6">
        Options
      </label>
      {formData.matchingOptions.map((option, rowIndex) => (
        <div key={rowIndex} className="flex items-center mt-4 space-x-4 flex-wrap">
          <span className="text-lg text-gray-600">=</span>

          <input
            type="text"
            name={`column1_${rowIndex}`}
            value={option.column1 || ""}
            onChange={handleInputChange}
            className="flex-1 min-w-[150px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
            placeholder={`Column 1 Option ${rowIndex + 1}`}
          />

          <div className="flex items-center space-x-2 flex-wrap">
            {option.column2.map((col, colIndex) => (
              <div key={colIndex} className="flex items-center space-x-2">
                <input
                  type="text"
                  name={`column2_${rowIndex}_${colIndex}`}
                  value={col || ""}
                  onChange={handleInputChange}
                  className="flex-1 min-w-[150px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Column 2 Right Match"
                />
              </div>
            ))}
            <button
              type="button"
              className="text-indigo-500 hover:underline"
              onClick={() => handleAddColumn2(rowIndex)}
            >
              Add
            </button>
          </div>

          <AiOutlineDelete
            className="text-red-500 cursor-pointer"
            size={20}
            onClick={() => handleDeleteRow(rowIndex)}
            />
        </div>
      ))}

      <div className="mt-4">
        <button
          onClick={handleAddNewRow}
          className="text-indigo-500 hover:underline"
        >
          + Add New Option
        </button>
      </div>
    </div>
  );
};

export default MatchingSection;
