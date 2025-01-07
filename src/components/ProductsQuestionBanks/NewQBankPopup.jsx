import React, { useState } from "react";

const NewQBankPopup = ({ onClose }) => {
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");

  const handleAdd = () => {
    console.log({ exam, subject, topic });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-lg p-8 rounded-lg shadow-2xl transform transition-transform scale-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create New Question Bank
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Exam</label>
            <input
              type="text"
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              placeholder="Enter exam name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              placeholder="Enter subject name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              placeholder="Enter topic name"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition transform hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQBankPopup;
