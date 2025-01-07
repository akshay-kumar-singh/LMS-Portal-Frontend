import React from "react";

const LoginDetails = () => {
  return (
    <div className="max-w-[65%] mt-8 mb-6 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-start">
        Login Details
      </h2>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-700">Number of Logins</span>
          <span className="text-lg font-semibold text-gray-900">3</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-700">Login Device Reset Count</span>
          <span className="text-lg font-semibold text-gray-900">0</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-700">Last Login Date</span>
          <span className="text-lg font-semibold text-gray-900 ml-2">
            2024/10/01 13:36:28 (OnePlus CPH2467 34 3.21.0)
          </span>
        </div>

        <div>
          <span className="block  text-xl font-medium text-gray-700 mb-4">Last 2 Logins</span>
          <div className="text-lg text-gray-900">
            <span className="block">
              <i className="material-icons text-indigo-500 mr-2">desktop_windows</i>
              3 time(s)
            </span>
            <span className="block mt-2">Last login: 2024/10/01 13:36:28</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
