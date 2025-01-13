import React from "react";

const HintSection = ({ formData, setFormData }) => {
  const handleHintChange = (language, value) => {
    setFormData((prevData) => ({
      ...prevData,
      hint: {
        ...prevData.hint,
        [language]: value,
      },
    }));
  };

  const handleGenerateHint = () => {
    console.log("Generating hints for all languages...");
    const generatedHints = {};
    formData.languages.forEach((language) => {
      generatedHints[language] = `This is an auto-generated hint in ${language}.`;
    });

    setFormData((prevData) => ({
      ...prevData,
      hint: {
        ...prevData.hint,
        ...generatedHints,
      },
    }));
  };

  return (
    <div className="mt-4 space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Hints</h3>
      {formData.languages.map((language) => (
        <div key={language} className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Hint in {language}
          </label>
          <textarea
            value={formData.hint[language] || ""}
            onChange={(e) => handleHintChange(language, e.target.value)}
            className="mt-2 block w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
            placeholder={`Enter a hint in ${language}`}
          />
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleGenerateHint}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Generate Hint
        </button>
      </div>
    </div>
  );
};

export default HintSection;
