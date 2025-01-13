import React from "react";

const IsObservationQuestion = ({ formData, setFormData }) => {
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isObservation: !prevData.isObservation,
    }));
  };

  const handleObservationChange = (language, value) => {
    setFormData((prevData) => ({
      ...prevData,
      observationDetails: {
        ...prevData.observationDetails,
        [language]: value,
      },
    }));
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="isObservation"
          checked={formData.isObservation}
          onChange={handleCheckboxChange}
          className="mr-2"
          aria-label="Is Observation Question"
        />
        <label className="text-sm font-medium text-gray-700">
          Is Observation Question
        </label>
      </div>

      {formData.isObservation && (
        <div className="mt-4 space-y-6">
          {formData.languages.map((language) => (
            <div key={language} className="space-y-2">
              <label
                htmlFor={`observation-${language}`}
                className="text-sm font-medium text-gray-700"
              >
                Observation Details in {language}
              </label>
              <textarea
                id={`observation-${language}`}
                value={formData.observationDetails[language] || ""}
                onChange={(e) =>
                  handleObservationChange(language, e.target.value)
                }
                className="mt-2 block w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-indigo-500"
                placeholder={`Enter observation details in ${language}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IsObservationQuestion;
