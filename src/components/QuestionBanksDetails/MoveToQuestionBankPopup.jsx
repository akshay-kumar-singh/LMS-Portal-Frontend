import React from "react";

const MoveToQuestionBankPopup = ({
  isVisible,
  onClose,
  onCreateDuplicate,
  onMove,
}) => {
  const [formData, setFormData] = React.useState({
    exam: "",
    subject: "",
    topic: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMove = () => {
    onMove(formData);
    onClose();
  };

  const handleCreateDuplicate = () => {
    onCreateDuplicate(formData);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-12">
      <div className="bg-white w-full max-w-3xl p-6 md:p-10 rounded-lg shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none text-2xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Move to Question Bank
        </h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exam Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Exam
            </label>
            <input
              type="text"
              name="exam"
              value={formData.exam}
              onChange={handleInputChange}
              placeholder="Enter Exam"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Topic Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Topic
            </label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              placeholder="Enter Topic"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={handleCreateDuplicate}
            className="w-full md:w-auto px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            Create Duplicate
          </button>
          <button
            onClick={handleMove}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Move
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveToQuestionBankPopup;
