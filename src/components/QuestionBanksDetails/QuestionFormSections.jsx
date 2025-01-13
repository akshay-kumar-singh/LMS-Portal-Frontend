import React from "react";

const QuestionFormSections = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      tags: value,
    }));
  };

  return (
    <div className="space-y-6 w-[95%]">
      <div className="flex space-x-6">
        <div className="w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Q. Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
          >
            <option value="Single Correct Option">Single Correct Option</option>
            <option value="Multiple Correct Options">
              Multiple Correct Options
            </option>
            <option value="Boolean Type">Boolean Type</option>
            <option value="Subjective Type">Subjective Type</option>
            <option value="Integer Type">Integer Type</option>
            <option value="Typing Para Type">Typing Para Type</option>
            <option value="Coding Type">Coding Type</option>
            <option value="Labelling Type">Labelling Type</option>
            <option value="Fill in the blanks Type">
              Fill in the blanks Type
            </option>
            <option value="Re-arrange Type">Re-arrange Type</option>
            <option value="Hotspot Type">Hotspot Type</option>
            <option value="Matching Type">Matching Type</option>
            <option value="Multiple Marking Type">Multiple Marking Type</option>
          </select>
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleTagsChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
            placeholder="Enter tags separated by commas"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionFormSections;
