import React, { useState } from "react";

const ShowEntriesSection = () => {
  const [entries, setEntries] = useState(10);

  const handleEntriesChange = (e) => {
    setEntries(e.target.value);
  };

  const handleReset = () => {
    setEntries(10); 
  };

  const handleSearch = () => {
    console.log(`Searching with ${entries} entries`);
  };

  return (
    <div className="flex items-center justify-between p-6 shadow-lg ">
      <div className="flex items-center space-x-3">
        <span className="text-gray-800 font-semibold text-lg">Show</span>
        <select
          value={entries}
          onChange={handleEntriesChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-200 ease-in-out hover:border-blue-500"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="text-gray-800 font-semibold text-lg">entries</span>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-transparent text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        >
          Reset
        </button>
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ShowEntriesSection;
