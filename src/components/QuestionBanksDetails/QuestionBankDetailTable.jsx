import React, { useState } from "react";
import {
  FaInfoCircle,
  FaTrash,
  FaFileExport,
  FaTrashAlt,
  FaRegEdit,
} from "react-icons/fa";
import { MdDriveFileMove } from "react-icons/md";
import MoveToQuestionBankPopup from "./MoveToQuestionBankPopup";
import GenerateLookalikePopup from "./GenerateLookalikePopup";

const QuestionBankDetailTable = ({
  data,
  onDetails,
  onDelete,
  onBulkDelete,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isGeneratePopupVisible, setIsGeneratePopupVisible] = useState(false);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

  const toggleExpandRow = (id) => {
    setExpandedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((rowId) => rowId !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelect = (id) => {
    setSelectedQuestions((prev) => {
      if (prev.includes(id)) {
        return prev.filter((qId) => qId !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectAll = () => {
    if (isSelectAllChecked) {
      setSelectedQuestions([]);
    } else {
      const allQuestionIds = data.map((question) => question.id);
      setSelectedQuestions(allQuestionIds);
    }
    setIsSelectAllChecked(!isSelectAllChecked);
  };

  const handleBulkDelete = () => {
    onBulkDelete(selectedQuestions);
    setSelectedQuestions([]);
    setIsSelectAllChecked(false);
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleOpenGeneratePopup = () => {
    setIsGeneratePopupVisible(true);
  };

  const handleCloseGeneratePopup = () => {
    setIsGeneratePopupVisible(false);
  };

  const handleMove = (formData) => {
    console.log("Move Questions:", selectedQuestions, formData);
  };

  const handleCreateDuplicate = (formData) => {
    console.log("Create Duplicate Questions:", selectedQuestions, formData);
  };

  const handleGenerateLookalike = (numberOfQuestions) => {
    console.log("Generate Lookalike Questions:", numberOfQuestions);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleDateString("en-US", dateOptions);
    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

    return (
      <>
        <div>{formattedDate}</div>
        <div className="text-sm text-gray-500">{formattedTime}</div>
      </>
    );
  };

  return (
    <div className="overflow-x-auto mt-10">
      <div className="flex justify-end items-center mb-4 space-x-4">
        {selectedQuestions.length > 0 && (
          <>
            <button
              onClick={handleOpenGeneratePopup}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Generate Lookalike Qs
            </button>
            <button
              onClick={handleOpenPopup}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Move to Qs Bank
            </button>
          </>
        )}

        <button
          onClick={() => console.log("Export")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
        >
          <FaFileExport className="mr-2" />
          Export
        </button>

        <button
          onClick={handleBulkDelete}
          className="flex items-center p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
          title="Bulk Delete"
          disabled={selectedQuestions.length === 0}
        >
          <FaTrashAlt size={12} />
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="px-4 py-2 text-center text-gray-600">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={isSelectAllChecked}
              />
            </th>
            <th className="px-4 py-2 text-left text-gray-600">Question Text</th>
            <th className="px-4 py-2 text-left text-gray-600">Used In</th>
            <th className="px-4 py-2 text-left text-gray-600">Created</th>
            <th className="px-4 py-2 text-left text-gray-600">Last Updated</th>
            <th className="px-4 py-2 text-center text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500 italic">
                No data available
              </td>
            </tr>
          ) : (
            data.map((question) => (
              <tr
                key={question.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    onChange={() => handleSelect(question.id)}
                    checked={selectedQuestions.includes(question.id)}
                  />
                </td>

                <td className="px-4 py-2">
                  <div>
                    {!expandedRows.includes(question.id) ? (
                      <>
                        <p className="text-sm text-gray-700">
                          {question.textHindi.split(" ").slice(0, 6).join(" ")}
                          ...
                        </p>
                        <p className="text-sm text-gray-500">
                          {question.textEnglish
                            .split(" ")
                            .slice(0, 6)
                            .join(" ")}
                          ...
                        </p>
                        <button
                          onClick={() => toggleExpandRow(question.id)}
                          className="text-blue-500 text-sm hover:underline"
                        >
                          See More
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-medium">
                          {question.fullTextHindi}
                        </p>
                        <p className="text-sm text-gray-600">
                          {question.fullTextEnglish}
                        </p>
                        <button
                          onClick={() => toggleExpandRow(question.id)}
                          className="text-blue-500 text-sm hover:underline"
                        >
                          See Less
                        </button>
                      </>
                    )}
                  </div>

                  <div className="mt-2 lg:grid-cols-3 flex flex-wrap gap-3">
                    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {question.qType}
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {question.defLevel}
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {question.lang}
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {question.reference}
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {question.tags.join(", ")}
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      AI Gen: {question.aiGen ? "Yes" : "No"}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    {question.usedIn.map((mock, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                      >
                        {mock}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 ml-4 text-sm text-gray-600">
                    {question.usedIn.length}
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div>
                    <div className="text-sm">
                      {formatDate(question.createdOn)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {question.createdBy}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div>
                    <div className="text-sm">
                      {formatDate(question.lastUpdated)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {question.updatedBy}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-2 text-center flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => onDetails(question)}
                    title="Details"
                    className="text-blue-500 hover:text-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded-full p-2"
                    aria-label="Details"
                  >
                    <FaInfoCircle size={20} />
                  </button>

                  <button
                    onClick={() => onDelete(question)}
                    title="Delete"
                    className="text-red-500 hover:text-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none rounded-full p-2"
                    aria-label="Delete"
                  >
                    <FaTrash size={20} />
                  </button>

                  <button
                    title="Move to Other Q. Bank"
                    className="text-green-500 hover:text-green-700 focus:ring-2 focus:ring-green-300 focus:outline-none rounded-full p-2"
                    aria-label="Move"
                  >
                    <MdDriveFileMove size={20} />
                  </button>

                  <button
                    title="Edit"
                    className="text-yellow-600 hover:text-yellow-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-full p-2"
                    aria-label="Edit"
                  >
                    <FaRegEdit size={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <MoveToQuestionBankPopup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        onMove={handleMove}
        onCreateDuplicate={handleCreateDuplicate}
      />

      <GenerateLookalikePopup
        isVisible={isGeneratePopupVisible}
        onClose={handleCloseGeneratePopup}
        onGenerate={handleGenerateLookalike}
      />
    </div>
  );
};

export default QuestionBankDetailTable;
