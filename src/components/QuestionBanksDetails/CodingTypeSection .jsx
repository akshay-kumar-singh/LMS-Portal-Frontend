import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; 

const CodingTypeSection = ({ formData, setFormData }) => {
  const [testCases, setTestCases] = useState(formData.testCases || [
    { input: "", output: "" },
    { input: "", output: "" },
    { input: "", output: "" },
    { input: "", output: "" },
  ]);

  const handleAddTestCase = () => {
    setTestCases([...testCases, { input: "", output: "" }]);
  };

  const handleTestCaseChange = (index, field, value) => {
    const updatedTestCases = [...testCases];
    updatedTestCases[index][field] = value;
    setTestCases(updatedTestCases);

    setFormData((prevData) => ({
      ...prevData,
      testCases: updatedTestCases,
    }));
  };

  const handleDeleteTestCase = (index) => {
    const updatedTestCases = testCases.filter((_, i) => i !== index);
    setTestCases(updatedTestCases);

    setFormData((prevData) => ({
      ...prevData,
      testCases: updatedTestCases,
    }));
  };

  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Problem Statement</h3>
      <textarea
        value={formData.problemStatement || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            problemStatement: e.target.value,
          }))
        }
        className="block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
        placeholder="Type problem statement here"
        rows={5}
      />
      <h4 className="text-md font-semibold text-gray-600">
        Add Test Cases to Auto Check Solutions
      </h4>
      {testCases.map((testCase, index) => (
        <div key={index} className="flex items-center space-x-4 mb-2">
          {/* Equal sign on the left side of the input */}
          <span className="text-xl font-semibold">=</span>
          
          <textarea
            value={testCase.input}
            onChange={(e) =>
              handleTestCaseChange(index, "input", e.target.value)
            }
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
            placeholder="Add formatted data for input"
            rows={2}
          />
          <textarea
            value={testCase.output}
            onChange={(e) =>
              handleTestCaseChange(index, "output", e.target.value)
            }
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
            placeholder="Add formatted data for output"
            rows={2}
          />
          <button
            type="button"
            onClick={() => handleDeleteTestCase(index)}
            className="text-red-500 hover:text-red-700"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={handleAddTestCase}
        className="text-blue-500 font-semibold hover:underline mt-2"
      >
        + Add New
      </button>
    </div>
  );
};

export default CodingTypeSection;
