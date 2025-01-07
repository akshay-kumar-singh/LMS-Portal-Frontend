import React from "react";

const AdditionalDetails = ({ coursesEnrolled }) => {
  return (
    <div className=" max-w-[65%] mt-8 mb-6 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-start">
        Additional Details
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm mb-2 font-medium text-gray-700 " htmlFor="userSegment">
            User Segment
          </label>
          <select
            id="userSegment"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="Free">Free</option>
            <option value="Trial">Trial</option>
            <option value="Paid">Paid</option>
            <option value="Returning">Returning</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="leadStatus">
            Lead Status
          </label>
          <select
            id="leadStatus"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="Open">Open</option>
            <option value="Follow up">Follow up</option>
            <option value="Converted">Converted</option>
            <option value="Not Interested">Not Interested</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="userNotes">
            User Notes
          </label>
          <textarea
            id="userNotes"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter any additional notes here..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetails;
