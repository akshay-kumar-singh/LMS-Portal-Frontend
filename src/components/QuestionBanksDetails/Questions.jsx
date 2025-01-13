import React from "react";

const Questions = ({ formData, setFormData }) => {
  const handleInputChange = (language, value) => {
    setFormData((prevData) => ({
      ...prevData,
      questions: {
        ...prevData.questions,
        [language]: value,
      },
    }));
  };

  return (
    <div className="mt-4 space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Questions</h3>
      {formData.languages.map((language) => (
        <div key={language} className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Question in {language}
          </label>
          <textarea
            value={formData.questions[language] || ""}
            onChange={(e) => handleInputChange(language, e.target.value)}
            className="mt-2 block w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
            placeholder={`Enter your question in ${language}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;
