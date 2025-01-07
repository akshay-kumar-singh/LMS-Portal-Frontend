import React, { useState } from "react";
import {
  FaUpload,
  FaEye,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
  FaRegEdit,
} from "react-icons/fa";
import ImportQuestionData from "../../constants/ImportQuestionData";

const ImportQuestionsPopup = ({ isVisible, onClose }) => {
  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);

    setQuestions(ImportQuestionData);
  };

  const handleCancel = () => {
    setUploadedFile(null);
    setQuestions([]);
    onClose();
  };

  const handleInsert = () => {
    alert("Questions inserted successfully!");
    onClose();
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestion((prev) => (prev === questionId ? null : questionId));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[700px] relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex items-center space-x-8">
            <div
              className={`flex items-center h-12 space-x-4 px-4 py-2 rounded-lg shadow-md ${
                step === 1
                  ? "bg-blue-100 text-blue-500 shadow-blue-300"
                  : "bg-gray-100 text-gray-500 shadow-none"
              }`}
            >
              <span className="text-sm font-bold">Step 1</span>
              <span className="flex items-center text-sm">
                <FaUpload
                  className={`mr-2 ${
                    step === 1 ? "text-blue-500" : "text-gray-500"
                  }`}
                />
                Add File
              </span>
            </div>

            <div
              className={`flex items-center h-12 space-x-4 px-4 py-2 rounded-lg shadow-md ${
                step === 2
                  ? "bg-blue-100 text-blue-500 shadow-blue-300"
                  : "bg-gray-100 text-gray-500 shadow-none"
              }`}
            >
              <span className="text-sm font-bold">Step 2</span>
              <span className="flex items-center text-sm">
                <FaEye
                  className={`mr-2 ${
                    step === 2 ? "text-blue-500" : "text-gray-500"
                  }`}
                />
                Review & Insert
              </span>
            </div>
          </div>
        </div>

        {step === 1 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Upload Your File
            </h3>

            <div className="flex justify-between items-center mb-4">
              <input
                type="file"
                onChange={handleFileUpload}
                className="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-xs text-gray-700 mb-6">
              Upload a .Docx file Containing Questions
              <span className="ml-4 text-blue-500 font-medium text-sm">
                Sample file
              </span>
            </p>

            <div className="p-6 border border-gray-300 bg-slate-100 rounded shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-blue-500 mr-2" />
                <p className="text-blue-500 font-semibold text-lg">
                  Guidelines for uploading files
                </p>
              </div>

              <p className="text-gray-700 text-sm mb-4">
                1. Download Sample Question file .
              </p>
              <p className="text-gray-700 text-sm mb-4">
                2. Add the question in the same format as shown in the sample
                questions .
              </p>
            </div>
            <div className="flex justify-start">
              <button
                onClick={() => setStep(2)}
                disabled={!uploadedFile}
                className={`px-4 py-2 rounded ${
                  uploadedFile
                    ? "bg-green-500 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Upload
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="h-[calc(100vh-340px)] overflow-y-auto">
            <h3 className="text-xl font-extrabold text-gray-800 mb-4">
              Total questions to insert:{" "}
              <span className="text-blue-600">{questions.length}</span>
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Please review the following questions that are to be inserted.
              <span className="block mt-1">
                In case you find any discrepancies, kindly check that the file
                you have uploaded is in accordance with the format recommended
                by us.
              </span>
            </p>

            <div className="flex justify-start space-x-4 mb-6">
              <button
                onClick={handleInsert}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Insert Questions
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>

            <ul className="space-y-4">
              {questions.map((q, index) => (
                <li key={q.id} className="border p-4 rounded-md shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-blue-500">
                      {`Question ${index + 1} (Q Id.: ${q.id})`}
                    </span>
                    <button
                      title="Edit"
                      onClick={() => alert(`Edit Question ${q.id}`)}
                      className="text-yellow-500 hover:text-yellow-700"
                      aria-label={`Edit Question ${q.id}`}
                    >
                      <FaRegEdit size={20} />
                    </button>
                  </div>

                  <div className="flex items-start">
                    <div
                      onClick={() => toggleQuestion(q.id)}
                      className="cursor-pointer mt-1 mr-4"
                    >
                      {expandedQuestion === q.id ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-800 mb-2">{q.question}</p>

                      {expandedQuestion === q.id && (
                        <div className="mt-2">
                          <ul className="space-y-2">
                            {q.options.map((option, idx) => (
                              <li
                                key={idx}
                                className="flex items-center border border-gray-300 rounded-lg px-4 py-4 shadow-sm hover:bg-blue-50 transition"
                              >
                                <input
                                  type="radio"
                                  name={`question-${q.id}`}
                                  value={option}
                                  checked={option === q.correctAnswer}
                                  readOnly
                                  className="mr-2"
                                />
                                <span className="text-gray-700">{option}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-600">
                              Hint:
                            </p>
                            <p className="text-sm text-gray-700">{q.hint}</p>
                          </div>
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-600">
                              Explanation:
                            </p>
                            <p className="text-sm text-gray-700">
                              {q.explanation}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-start space-x-4 mt-6">
              <button
                onClick={handleInsert}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Insert Questions
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportQuestionsPopup;
