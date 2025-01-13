import React from "react";

const TypingParaSection = ({ formData, setFormData }) => {
  const handleInputChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      typingParagraph: value,
    }));
  };

  const totalCharacters = formData.typingParagraph?.length || 0;
  const totalWords = formData.typingParagraph
    ? formData.typingParagraph.trim().split(/\s+/).length
    : 0;

  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Paragraph for Typing</h3>
      <textarea
        value={formData.typingParagraph || ""}
        onChange={(e) => handleInputChange(e.target.value)}
        className="block w-full h-72 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
        placeholder="Enter the paragraph for typing"
        rows={5}
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>Total characters in paragraph: {totalCharacters}</span>
        <span>Total words in paragraph: {totalWords}</span>
      </div>
    </div>
  );
};

export default TypingParaSection;
