import React, { useState } from "react";
import Select from "react-select";
import SupportingFileLinkPopup from "./SupportingFileLinkPopup";

const referenceOptions = [
  { value: "2020", label: "2020" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
];

const ReferenceAndSupportMediaSection = ({ formData, setFormData }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleReferenceChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    updateFormData("reference_years", selectedValues);
  };

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleRemoveMedia = (index) => {
    const updatedSupportMedia = formData.supportMedia.filter(
      (_, i) => i !== index
    );
    updateFormData("supportMedia", updatedSupportMedia);
  };

  const getSelectedReferenceYears = () => {
    return referenceOptions.filter((option) =>
      formData.reference_years.includes(option.value)
    );
  };

  const handleAddSupportingMedia = () => {
    setIsPopupVisible(true);
  };

  const handleInsertMedia = (data) => {
    const { links, files } = data;
    const updatedMedia = [
      ...formData.supportMedia,
      ...links.map((link) => ({ type: "link", value: link })),
      ...files.map((file) => ({ type: "file", value: file })),
    ];
    updateFormData("supportMedia", updatedMedia);
    setIsPopupVisible(false);
  };

  return (
    <div className="flex items-start justify-between w-full space-x-4 mb-4">
      <ReferenceSelector
        referenceOptions={referenceOptions}
        selectedReferenceYears={getSelectedReferenceYears()}
        onReferenceChange={handleReferenceChange}
      />

      <SupportingMediaSection
        supportMedia={formData.supportMedia}
        onAddSupportingMedia={handleAddSupportingMedia}
        onRemoveMedia={handleRemoveMedia}
      />

      <SupportingFileLinkPopup
        isVisible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        onInsert={handleInsertMedia}
      />
    </div>
  );
};

const ReferenceSelector = ({
  referenceOptions,
  selectedReferenceYears,
  onReferenceChange,
}) => (
  <div className="w-1/2">
    <label className="block text-sm font-medium text-gray-700">Reference</label>
    <Select
      isMulti
      name="reference_years"
      options={referenceOptions}
      className="mt-2"
      classNamePrefix="select"
      placeholder="Select Reference Year(s)"
      value={selectedReferenceYears}
      onChange={onReferenceChange}
    />
  </div>
);

const SupportingMediaSection = ({
  supportMedia,
  onAddSupportingMedia,
  onRemoveMedia,
}) => (
  <div className="w-1/3">
    <h4 className="font-medium mb-2">Supporting File & Links</h4>
    <button
      type="button"
      onClick={onAddSupportingMedia}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      + Insert
    </button>

    <div className="mt-4">
      {supportMedia.map((media, index) => (
        <div key={index} className="flex items-center space-x-2">
          {media.type === "link" ? (
            <a
              href={media.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {`Link ${index + 1}`}
            </a>
          ) : (
            <p>{media.value.name}</p>
          )}
          <button
            type="button"
            onClick={() => onRemoveMedia(index)}
            className="text-red-500"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ReferenceAndSupportMediaSection;
