import React from "react";
import { useSearch } from "../../context/SearchContext";

const SearchSection = ({ searchOptions }) => {
  const { searchBy, searchQuery, handleSearchQueryChange, handleSearchCategoryChange } = useSearch();

  const handleInputChange = (e) => {
    handleSearchQueryChange(e.target.value);
  };

  const handleDropdownChange = (e) => {
    handleSearchCategoryChange(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-gray-700 font-semibold mb-4 text-center md:text-left">Search Learners</h3>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <select
          value={searchBy}
          onChange={handleDropdownChange}
          className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          {searchOptions.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchBy}`}
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full md:flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
};

export default SearchSection;
