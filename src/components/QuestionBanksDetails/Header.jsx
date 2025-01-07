import React, { useState } from "react";
import ImportQuestionsPopup from "./ImportQuestionsPopup";

const Header = ({ questionBank }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {questionBank.exam}
          </h1>
          <span className="text-xl text-gray-600">
            / {questionBank.subject} / {questionBank.topic}
          </span>
          <span className="text-lg text-gray-500">
            ({questionBank.questions} questions)
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
            onClick={showPopup}
          >
            Import Question
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out"
            onClick={() => console.log("New Question")}
          >
            New Question
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center space-x-6">
        <p className="text-lg text-gray-700 font-medium">
          Manage learner assessments and questions.
        </p>
        <p className="text-blue-600 hover:underline cursor-pointer font-medium">
          Learn more
        </p>
      </div>
      <ImportQuestionsPopup isVisible={isPopupVisible} onClose={hidePopup} />
    </div>
  );
};

export default Header;
