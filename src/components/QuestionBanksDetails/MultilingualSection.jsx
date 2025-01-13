import React from "react";
import Select from "react-select";
import { languageOptions } from "../../constants/languageOptions";

const MultilingualSection = ({ formData, setFormData }) => {
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      multilingual: !prevData.multilingual,
      languages: !prevData.multilingual ? ["English"] : ["English"],
    }));
  };

  const handleSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData((prevData) => ({
      ...prevData,
      languages: [
        "English",
        ...selectedValues.filter((lang) => lang !== "English"),
      ],
    }));
  };

  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        name="multilingual"
        checked={formData.multilingual}
        onChange={handleCheckboxChange}
        className="mr-2"
        aria-label="Enable multilingual support"
      />
      <label className="text-sm font-medium text-gray-700 mr-4">
        Multilingual
      </label>

      {formData.multilingual && (
        <div className="flex items-center space-x-4">
          <Select
            isMulti
            options={languageOptions}
            className="basic-multi-select w-full sm:w-80"
            classNamePrefix="select"
            placeholder="Select Languages"
            value={languageOptions.filter(
              (lang) =>
                formData.languages && formData.languages.includes(lang.value)
            )}
            onChange={handleSelectChange}
          />
        </div>
      )}
    </div>
  );
};

export default MultilingualSection;
