import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const OptionsSection = ({
  options,
  setOptions,
  optionsType = "radio",
  languages,
}) => {
  const safeOptions = Array.isArray(options) ? options : [];

  const handleOptionChange = (index, language, value) => {
    const updatedOptions = [...safeOptions];
    if (!updatedOptions[index].text) {
      updatedOptions[index].text = {};
    }
    updatedOptions[index].text[language] = value;
    setOptions(updatedOptions);
  };

  const handleOptionSelect = (index) => {
    if (optionsType === "radio") {
      setOptions(
        safeOptions.map((option, i) => ({
          ...option,
          isSelected: i === index,
        }))
      );
    } else if (optionsType === "checkbox") {
      const updatedOptions = [...safeOptions];
      updatedOptions[index].isSelected = !updatedOptions[index].isSelected;
      setOptions(updatedOptions);
    }
  };

  const addOption = () => {
    setOptions([...safeOptions, { text: { English: "" }, isSelected: false }]);
  };

  const removeOption = (index) => {
    if (safeOptions.length > 1) {
      setOptions(safeOptions.filter((_, i) => i !== index));
    } else {
      alert("At least one option is required.");
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Options</h3>
      <div className="space-y-4">
        {safeOptions.map((option, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 shadow-sm space-y-4 flex items-center"
          >
            <div className="flex items-center space-x-2">
              <input
                type={optionsType}
                name={optionsType === "radio" ? "correctOption" : undefined}
                checked={option.isSelected}
                onChange={() => handleOptionSelect(index)}
                className="w-5 h-5 mr-4 text-blue-600 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 space-y-2 w-full">
              {languages.map((language) => (
                <div key={language}>
                  <textarea
                    id={`option-${index}-${language}`}
                    className="mt-2 block w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
                    placeholder={`Enter Option ${index + 1} for ${language}`}
                    value={option.text?.[language] || ""}
                    onChange={(e) =>
                      handleOptionChange(index, language, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>

            {safeOptions.length > 2 && (
              <button
                className="text-red-500 hover:text-red-700 ml-2"
                onClick={() => removeOption(index)}
              >
                <AiOutlineClose size={20} />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={addOption}
      >
        <AiOutlinePlus size={20} className="mr-2" />
        Add Option
      </button>
    </div>
  );
};

export default OptionsSection;
