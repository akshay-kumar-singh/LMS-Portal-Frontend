import React from "react";

const LearnerMyWallet = () => {
  return (
    <div className="max-w-[80%] mb-6 mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Wallet</h2>

      <div className="mb-6">
        <span className="text-xl text-gray-600">Balance</span>
        <div className="mt-4">
          <div className="w-60 p-4 text-3xl font-bold text-blue-600 bg-blue-100 rounded-lg inline-flex items-center justify-center">
            0 Coins
          </div>
        </div>
      </div>

      <div className="mb-6">
        <span className="text-xl text-gray-600">Transactions</span>
      </div>

      <div className="mb-6 flex items-center space-x-4">
        <span className="text-lg text-gray-600">Show</span>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-indigo-500 transition">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span className="text-lg text-gray-600">entries</span>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
                DATE
              </th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
                MESSAGE
              </th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
                EXPIRES ON
              </th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
                AMOUNT
              </th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
                BALANCE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="5"
                className="px-6 py-4 text-center text-lg text-gray-600"
              >
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-lg text-gray-600">
          Showing 0 to 0 of 0 entries
        </span>
        <div>
          <button className="px-6 py-3 sm:mb-2 text-lg bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200">
            Previous
          </button>
          <button className="px-6 py-3 text-lg bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200 ml-4">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnerMyWallet;
