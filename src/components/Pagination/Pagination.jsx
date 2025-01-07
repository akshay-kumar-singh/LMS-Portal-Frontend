import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white shadow-lg"
        }`}
      >
        <FiChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 text-sm font-semibold ${
            page === currentPage
              ? "bg-blue-500 text-white shadow-lg scale-110"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-500 hover:text-white hover:shadow-lg"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white shadow-lg"
        }`}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
