import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SupportingFileLinkPopup = ({ isVisible, onClose, onInsert }) => {
  const [tempLinks, setTempLinks] = useState("");
  const [tempFiles, setTempFiles] = useState([]);
  const [error, setError] = useState(""); 

  const handleLinkChange = (e) => {
    setTempLinks(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validTypes = ["image", "audio", "video", "application/pdf"]; 

    const validFiles = selectedFiles.filter((file) => {
      const fileType = file.type.split("/")[0];
      return validTypes.includes(fileType) || file.type === "application/pdf"; // explicitly check for PDFs
    });

    if (validFiles.length !== selectedFiles.length) {
      setError("Some files were not added due to invalid types.");
    } else {
      setError(""); 
    }

    setTempFiles((prevFiles) => [...prevFiles, ...validFiles]); 
  };

  const handleFileRemove = (fileToRemove) => {
    setTempFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const handleInsert = () => {
    const links = tempLinks.trim() ? tempLinks.split(",").map((link) => link.trim()) : [];
    onInsert({ links, files: tempFiles });
    setTempLinks("");
    setTempFiles([]);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl transform transition-transform duration-300 scale-95 hover:scale-100"
        role="dialog"
        aria-labelledby="insert-popup-title"
        style={{ animation: "fadeIn 0.3s ease-out" }}
      >
        <h4 id="insert-popup-title" className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Insert Supporting File & Link
        </h4>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Links</label>
          <input
            type="text"
            placeholder="Insert links, comma-separated"
            value={tempLinks}
            onChange={handleLinkChange}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            aria-label="Supporting Links"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Files</label>
          <input
            type="file"
            multiple
            accept="audio/*,video/*,image/*,application/pdf"
            onChange={handleFileChange}
            className="w-full cursor-pointer text-gray-600 rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            aria-label="Supporting Files"
          />
        </div>

        {tempFiles.length > 0 && (
          <div className="mb-6">
            <h5 className="text-lg font-medium text-gray-700 mb-2">Selected Files</h5>
            <ul className="list-disc pl-5 space-y-2">
              {tempFiles.map((file, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600">
                  <span>{file.name}</span>
                  <AiOutlineCloseCircle
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleFileRemove(file)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex justify-end space-x-6">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleInsert}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportingFileLinkPopup;
