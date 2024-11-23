import React from 'react';
import { FaArrowRight, FaArrowDown, FaArrowUp, FaChartLine, FaUserPlus } from 'react-icons/fa';

const AdminHomeReports = () => {
  const signUpPercentage = -14; 
  const paidUsersPercentage = 8; 
  const totalRevenuePercentage = 5; 
  
  const getArrowAndColor = (percentage) => {
    if (percentage < 0) {
      return {
        arrow: <FaArrowDown className="mr-1" />,
        color: 'text-red-500', // Red color for negative percentage
      };
    } else {
      return {
        arrow: <FaArrowUp className="mr-1" />,
        color: 'text-green-500', // Green color for positive percentage
      };
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-700">In the last 30 days</h2>
        <div className="flex items-center cursor-pointer">
          <span className="text-blue-500 hover:text-blue-700">View Reports</span>
          <FaArrowRight className="ml-2 text-blue-500 hover:text-blue-700" />
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Sign Up Container */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-black flex flex-col items-center justify-between overflow-hidden transition-all hover:shadow-lg">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Sign Up</h3>
            <FaUserPlus className="text-3xl text-gray-700" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">101</p>
          <p className="text-sm flex items-center">
            {getArrowAndColor(signUpPercentage).arrow}
            <span className={getArrowAndColor(signUpPercentage).color}>
              {Math.abs(signUpPercentage)}%
            </span>
          </p>
        </div>

        {/* Paid Users Container */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-black flex flex-col items-center justify-between overflow-hidden transition-all hover:shadow-lg">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Paid Users</h3>
            <FaChartLine className="text-3xl text-gray-700" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">34</p>
          <p className="text-sm flex items-center">
            {getArrowAndColor(paidUsersPercentage).arrow}
            <span className={getArrowAndColor(paidUsersPercentage).color}>
              {Math.abs(paidUsersPercentage)}%
            </span>
          </p>
        </div>

        {/* Total Revenue Container */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-black flex flex-col items-center justify-between overflow-hidden transition-all hover:shadow-lg">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
            <FaChartLine className="text-3xl text-gray-700" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">$25,000</p>
          <p className="text-sm flex items-center">
            {getArrowAndColor(totalRevenuePercentage).arrow}
            <span className={getArrowAndColor(totalRevenuePercentage).color}>
              {Math.abs(totalRevenuePercentage)}%
            </span>
          </p>
        </div>

        {/* Revenue Section Text Container */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-black flex flex-col items-center justify-between overflow-hidden transition-all hover:shadow-lg">
          <p className="text-xl font-semibold text-gray-800 mb-2">Revenue Section</p>
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Of your total revenue comes via Graphy Assist.{' '}
              <a href="/" className="text-blue-500 hover:text-blue-700">
                Learn more
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHomeReports;
