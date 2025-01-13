import React from "react";

const ExplanationSection = ({ formData, setFormData }) => {
  const handleExplanationChange = (language, value) => {
    setFormData((prevData) => ({
      ...prevData,
      explanation: {
        ...prevData.explanation,
        [language]: value,
      },
    }));
  };

  const handleGenerateExplanation = () => {
    console.log("Generating explanations for all languages...");
    const generatedExplanations = {};
    formData.languages.forEach((language) => {
      generatedExplanations[language] = `This is an auto-generated explanation in ${language}.`;
    });

    setFormData((prevData) => ({
      ...prevData,
      explanation: {
        ...prevData.explanation,
        ...generatedExplanations,
      },
    }));
  };

  return (
    <div className="mt-4 space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Explanations</h3>
      {formData.languages.map((language) => (
        <div key={language} className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Explanation in {language}
          </label>
          <textarea
            value={formData.explanation[language] || ""}
            onChange={(e) => handleExplanationChange(language, e.target.value)}
            className="mt-2 block w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
            placeholder={`Enter an explanation in ${language}`}
          />
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleGenerateExplanation}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Generate Explanation
        </button>
      </div>
    </div>
  );
};

export default ExplanationSection;
