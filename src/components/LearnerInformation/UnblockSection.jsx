import React from "react";

const UnblockSection = () => {
  return (
    <div className="max-w-[65%] mt-8 mb-6 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-start">
        Unblock Learner on iOS
      </h2>
      <p className="text-gray-600 mb-6">
        Learner's accounts are blocked if they try to take more than 3 screenshots in the iOS app.
        On every screenshot taken, they are presented with the warning of account blockage. You can
        click on the below button to unblock the account.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Screenshots Taken
          </label>
          <input
            type="text"
            value="0"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-100"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          >
            Unblock Learner
          </button>
        </div>
      </form>
    </div>
  );
};

export default UnblockSection;
