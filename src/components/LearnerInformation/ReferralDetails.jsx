import React from "react";

const ReferralDetails = () => {
  return (
    <div className="max-w-[65%] mt-8 mb-6 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-start">
        Referral Details
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">SOURCE</span>
          <span className="text-md font-medium text-gray-800">NA</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">Refer Code</span>
          <span className="text-md font-medium text-gray-800">NPJAAS</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">
            Referral Code Used while signup
          </span>
          <span className="text-md font-medium text-gray-800">-</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700">
            Total Referred Learners
          </span>
          <span className="text-md font-medium text-gray-800">0</span>
        </div>
      </div>
    </div>
  );
};

export default ReferralDetails;
