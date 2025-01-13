import React from "react";

const FillInTheBlanksSection = ({ formData, setFormData }) => {
  const handleInputChange = (e, optionIndex) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      fillInTheBlanksOptions: prevState.fillInTheBlanksOptions.map(
        (option, index) =>
          index === optionIndex ? { ...option, [name]: value } : option
      ),
    }));
  };

  const handleAddBlankSpace = () => {
    const input = document.getElementById("fillInTheBlanksInput");
    const cursorPosition = input.selectionStart;
    const newText =
      formData.fillInTheBlanksText.slice(0, cursorPosition) +
      ` ______ ` +
      formData.fillInTheBlanksText.slice(cursorPosition);

    setFormData((prevState) => ({
      ...prevState,
      fillInTheBlanksText: newText,
      blankSpaceCounter: prevState.blankSpaceCounter + 1,
      fillInTheBlanksOptions: [
        ...prevState.fillInTheBlanksOptions,
        {
          id: prevState.blankSpaceCounter,
          type: "text",
          placeholder: "Type answer which use in blank in sequence by comma separated",
          isRange: false,
          isDropdown: false,
        },
      ],
    }));
  };

  const handleBlanksCheckboxChange = (id, checkboxType) => {
    setFormData((prevState) => ({
      ...prevState,
      fillInTheBlanksOptions: prevState.fillInTheBlanksOptions.map((option) =>
        option.id === id
          ? { ...option, [checkboxType]: !option[checkboxType] }
          : option
      ),
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      const input = e.target;
      const cursorPosition = input.selectionStart;
      const text = formData.fillInTheBlanksText;

      const beforeCursor = text.slice(0, cursorPosition);
      const afterCursor = text.slice(cursorPosition);

      const placeholderRegex = / ______ $/;

      if (placeholderRegex.test(beforeCursor)) {
        e.preventDefault();

        setFormData((prevState) => ({
          ...prevState,
          fillInTheBlanksText: beforeCursor.replace(placeholderRegex, "") + afterCursor,
          fillInTheBlanksOptions: prevState.fillInTheBlanksOptions.slice(0, -1),
        }));
      }
    }
  };

  const renderOptionInput = (option, optionIndex) => {
    if (option.isRange) {
      return (
        <div className="flex gap-2">
          <input
            type="text"
            name="minValue"
            placeholder="Min Value"
            value={option.minValue || ""}
            onChange={(e) => handleInputChange(e, optionIndex)}
            className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="maxValue"
            placeholder="Max Value"
            value={option.maxValue || ""}
            onChange={(e) => handleInputChange(e, optionIndex)}
            className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      );
    }

    if (option.isDropdown) {
      return (
        <>
          <input
            type="text"
            name="value"
            placeholder="Insert answer and dropdown options like - 'Answer: option1,option2' | 'Answer2: option1,option2'"
            value={option.value || ""}
            onChange={(e) => handleInputChange(e, optionIndex)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Separate all the possible answers with dropdown by "|". For example,
            'Answer: option1,option2' | 'Answer2: option1,option2'.
          </p>
        </>
      );
    }

    return (
      <>
        <input
          type="text"
          name="value"
          placeholder={option.placeholder}
          value={option.value || ""}
          onChange={(e) => handleInputChange(e, optionIndex)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Separate all the possible answers by "|". For example, if both 'Madhya Pradesh'
          and 'MP' are correct, write it as 'Madhya Pradesh | MP'.
        </p>
      </>
    );
  };

  return (
    <div className="w-[95%]">
      <label className="block text-sm font-medium text-gray-700 mb-4">
        Type fill in the blanks question
      </label>

      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={handleAddBlankSpace}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Blank Space
        </button>
      </div>

      <textarea
        id="fillInTheBlanksInput"
        name="fillInTheBlanksText"
        value={formData.fillInTheBlanksText}
        onChange={(e) =>
          setFormData({ ...formData, fillInTheBlanksText: e.target.value })
        }
        onKeyDown={handleKeyDown}
        placeholder="Type fill in the blanks question"
        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
        rows="4"
      />

      {formData.fillInTheBlanksOptions.length > 0 && (
        <div className="mt-6">
          {formData.fillInTheBlanksOptions.map((option, optionIndex) => (
            <div key={option.id} className="flex items-center gap-4 mb-4">
              <span className="text-lg font-semibold">=</span>
              <div className="flex-grow">{renderOptionInput(option, optionIndex)}</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600"
                    checked={option.isRange}
                    onChange={() =>
                      handleBlanksCheckboxChange(option.id, "isRange")
                    }
                  />
                  <span>Range</span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600"
                    checked={option.isDropdown}
                    onChange={() =>
                      handleBlanksCheckboxChange(option.id, "isDropdown")
                    }
                  />
                  <span>Dropdown</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FillInTheBlanksSection;
