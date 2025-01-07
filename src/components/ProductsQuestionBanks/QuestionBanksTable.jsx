import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash, FaTrashAlt, FaInfoCircle } from "react-icons/fa";

const QuestionBanksTable = ({
  data,
  selectedRows,
  setSelectedRows,
  onEdit,
  onDelete,
  onBulkDelete,
  onDetail,
  searchQuery,
  searchBy,
}) => {
  const filteredData = data.filter((item) => {
    const value = item[searchBy]?.toLowerCase() || ""; 
    return value.includes(searchQuery.toLowerCase()); 
  });

  const handleCheckboxChange = (item) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((row) => row !== item)
        : [...prevSelected, item]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]); 
    } else {
      setSelectedRows(filteredData); 
    }
  };

  const handleBulkDelete = () => {
    onBulkDelete(selectedRows);
  };

  return (
    <div className="overflow-x-auto mt-6">
      <div className="flex justify-end mb-6 mr-4">
        <button
          onClick={() => console.log("Export")}
          className="px-4 py-2 mr-8 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center shadow-md"
        >
          Export
        </button>
        <button
          onClick={handleBulkDelete}
          title="Bulk Delete"
          className={`flex items-center text-red-500 hover:text-red-700 ${
            selectedRows.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedRows.length === 0}
        >
          <FaTrashAlt size={20} />
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="px-4 py-3 text-center">
              <input
                type="checkbox"
                checked={
                  selectedRows.length === filteredData.length &&
                  filteredData.length > 0
                }
                onChange={handleSelectAll}
              />
            </th>
            <th className="px-4 py-3 text-left text-gray-600 font-semibold">
              Exam
            </th>
            <th className="px-4 py-3 text-left text-gray-600 font-semibold">
              Subject
            </th>
            <th className="px-4 py-3 text-left text-gray-600 font-semibold">
              Topic
            </th>
            <th className="px-4 py-3 text-left text-gray-600 font-semibold">
              Questions
            </th>
            <th className="px-4 py-3 text-center text-gray-600 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No data available
              </td>
            </tr>
          ) : (
            filteredData.map((item, index) => (
              <tr
                key={index}
                className={`border-b last:border-none hover:bg-gray-50 ${
                  selectedRows.includes(item) ? "bg-gray-100" : ""
                }`}
              >
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </td>
                <td className="px-4 py-3 text-gray-700">{item.exam}</td>
                <td className="px-4 py-3 text-gray-700">{item.subject}</td>
                <td className="px-4 py-3 text-gray-700">{item.topic}</td>
                <td className="px-4 py-3 text-gray-700">{item.questions}</td>
                <td className="px-4 py-3 text-center space-x-3">
                  <button
                    onClick={() => onDetail(item)}
                    title="Details"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaInfoCircle size={20} />
                  </button>
                  <button
                    onClick={() => onEdit(item)}
                    title="Edit"
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    title="Delete"
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

QuestionBanksTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      exam: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      questions: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedRows: PropTypes.array.isRequired,
  setSelectedRows: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBulkDelete: PropTypes.func.isRequired,
  onDetail: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired, 
  searchBy: PropTypes.string.isRequired, 
};

export default QuestionBanksTable;
