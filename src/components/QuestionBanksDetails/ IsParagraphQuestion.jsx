import React from "react";

const IsParagraphQuestion = ({ formData, setFormData }) => {
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isParagraphQuestion: !prevData.isParagraphQuestion,
    }));
  };

  const handleParagraphChange = (language, value) => {
    setFormData((prevData) => ({
      ...prevData,
      paragraphText: {
        ...prevData.paragraphText,
        [language]: value,
      },
    }));
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="isParagraphQuestion"
          checked={formData.isParagraphQuestion}
          onChange={handleCheckboxChange}
          className="mr-2"
          aria-label="Is Paragraph Question"
        />
        <label className="text-sm font-medium text-gray-700">
          Is Paragraph Question
        </label>
      </div>

      {formData.isParagraphQuestion && (
        <div className="mt-4 space-y-6">
          {formData.languages.map((language) => (
            <div key={language} className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Paragraph in {language}
              </label>
              <textarea
                value={formData.paragraphText[language] || ""}
                onChange={(e) =>
                  handleParagraphChange(language, e.target.value)
                }
                className="mt-2 block w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
                placeholder={`Enter paragraph text in ${language}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IsParagraphQuestion;
