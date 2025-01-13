import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import QuestionTypeConfig from "../../config/QuestionTypeConfig";
import QuestionFormSections from "./QuestionFormSections";
import MultilingualSection from "./MultilingualSection";
import IsObservationQuestion from "./IsObservationQuestion";
import IsParagraphQuestion from "./ IsParagraphQuestion";
import Questions from "./Questions";
import OptionsSection from "./OptionsSection";
import BooleanOptionsSection from "./BooleanOptionsSection";
import HintSection from "./HintSection";
import ExplanationSection from "./ExplanationSection";
import ReferenceAndSupportMediaSection from "./ReferenceAndSupportMediaSection";
import IntegerAnswer from "./IntegerAnswer";
import TypingParaSection from "./TypingParaSection";
import CodingTypeSection from "./CodingTypeSection ";
import MultipleMarkingTypeSection from "./MultipleMarkingTypeSection";
import RearrangeSection from "./RearrangeSection";
import MatchingSection from "./MatchingSection";
import FillInTheBlanksSection from "./FillInTheBlanksSection";

const NewQuestionPopup = ({ isVisible, onClose }) => {
  const initialFormData = {
    type: "Single Correct Option",
    difficulty: "Medium",
    tags: "",
    multilingual: false,
    languages: ["English"],
    isObservation: false,
    observationDetails: {
      English: "",
    },
    isParagraphQuestion: false,
    paragraphText: {
      English: "",
    },
    questions: {
      English: "",
    },
    options: [
      { text: { English: "" }, isSelected: false },
      { text: { English: "" }, isSelected: false },
      { text: { English: "" }, isSelected: false },
      { text: { English: "" }, isSelected: false },
    ],
    hint: {
      English: "",
    },
    explanation: {
      English: "",
    },
    reference_years: [],
    supportMedia: [],
    booleanAnswer: "",
    integerAnswer: "",
    matchingQuestion: "",
    matchingOptions: [
      { column1: "", column2: [""] },
      { column1: "", column2: [""] },
      { column1: "", column2: [""] },
      { column1: "", column2: [""] },
    ],
    fillInTheBlanksText: "",
    blankSpaceCounter: 0,
    fillInTheBlanksOptions: [], 
  };

  const [formData, setFormData] = useState(initialFormData);
  const currentConfig = QuestionTypeConfig[formData.type] || {};

  const updateOptions = (newOptions) => {
    setFormData((prev) => ({
      ...prev,
      options: Array.isArray(newOptions) ? newOptions : [],
    }));
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
    setFormData(initialFormData);
    onClose();
  };

  const handleSaveAndAddMore = () => {
    console.log("Saving data:", formData);
    setFormData(initialFormData);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[80%] max-h-[90%] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => {
            setFormData(initialFormData);
            onClose();
          }}
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">New Question</h2>
        <div className="space-y-4">
          <QuestionFormSections formData={formData} setFormData={setFormData} />

          {currentConfig.sections?.includes("MultilingualSection") && (
            <MultilingualSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentConfig.sections?.includes("IsObservationQuestion") && (
            <IsObservationQuestion
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentConfig.sections?.includes("IsParagraphQuestion") && (
            <IsParagraphQuestion
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentConfig.sections?.includes("Questions") && (
            <Questions formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("IntegerAnswer") && (
            <IntegerAnswer formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("TypingParaSection") && (
            <TypingParaSection formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("CodingTypeSection") && (
            <CodingTypeSection formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("MultipleMarkingTypeSection") && (
            <MultipleMarkingTypeSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentConfig.sections?.includes("RearrangeSection") && (
            <RearrangeSection formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("MatchingSection") && (
            <MatchingSection formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("FillInTheBlanksSection") && (
            <FillInTheBlanksSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentConfig.sections?.includes("OptionsSection") && (
            <OptionsSection
              options={formData.options}
              setOptions={updateOptions}
              optionsType={currentConfig.optionsType}
              languages={formData.languages}
            />
          )}

          {currentConfig.sections?.includes("BooleanOptionsSection") && (
            <BooleanOptionsSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentConfig.sections?.includes("HintSection") && (
            <HintSection formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes("ExplanationSection") && (
            <ExplanationSection formData={formData} setFormData={setFormData} />
          )}

          {currentConfig.sections?.includes(
            "ReferenceAndSupportMediaSection"
          ) && (
            <ReferenceAndSupportMediaSection
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleSave}
          >
            Save & Close
          </button>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleSaveAndAddMore}
          >
            Save & Add More Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuestionPopup;
