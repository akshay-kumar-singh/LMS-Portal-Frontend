import React from 'react';

const AdminHome = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-teal-400 to-indigo-600 min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-white mb-4 text-center w-full md:text-5xl lg:text-6xl">
        Welcome to the Admin Dashboard!
      </h2>
      
      <p className="text-lg text-white opacity-90 mb-6 text-center max-w-4xl">
        As an admin, you have full control to manage and improve the platform. Start exploring your options below and make a difference!
      </p>

      <div className="bg-white text-gray-900 p-8 rounded-xl shadow-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-700">You're in Control!</h3>
        <p className="text-lg text-gray-600">
          Manage users, create new courses, and generate insightful reports. Your journey starts here. 
          You have the power to shape this platform!
        </p>
      </div>

      <div className="mt-8 border-t-4 border-white w-1/3 mb-8"></div>

      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <p className="text-lg font-semibold text-indigo-300">
          Keep up the great work! You're helping make this platform better for everyone, every day.
        </p>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <p className="text-lg font-semibold text-indigo-300">
          Your leadership and dedication are truly inspiring. Keep pushing forward!
        </p>
      </div>
    </div>
  );
};

export default AdminHome;
