import React from "react";

const UTMDetails = () => {
  return (
    <div className="max-w-[65%] mt-8 mb-6 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-start">
        UTM Details
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">UTM SOURCE</span>
          <span className="text-md font-medium text-gray-800">NA</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">Utm Medium</span>
          <span className="text-md font-medium text-gray-800">NA</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">Utm Campaign</span>
          <span className="text-md font-medium text-gray-800">NA</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">Utm Term</span>
          <span className="text-md font-medium text-gray-800">NA</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">Utm Content</span>
          <span className="text-md font-medium text-gray-800">NA</span>
        </div>
      </div>
    </div>
  );
};

export default UTMDetails;
