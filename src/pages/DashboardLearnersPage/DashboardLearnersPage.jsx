import React, { useState } from "react";
import { BsThreeDotsVertical, BsCloudUpload} from "react-icons/bs"; 
import { BiSolidFileExport } from "react-icons/bi";
import SearchSection from "../../components/SearchSection/SearchSection";
import FilterSection from "../../components/FilterSection/FilterSection";
import LearnersTable from "../../components/LearnersTable/LearnersTable";
import Pagination from "../../components/Pagination/Pagination";
import learnersData from "../../../src/constants/LearnersData";

const DashboardLearnersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [learners, setLearners] = useState(learnersData);
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = learners.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const searchOptions = ["name", "phone", "email"];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Learners</h2>
          <p className="text-gray-500">
            Manage your learning community.&nbsp;
            <a href="/learn-more" className="text-blue-500 underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleAddClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            + Add
          </button>

          <div className="relative">
            <BsThreeDotsVertical
              onClick={toggleDropdown}
              className="text-gray-600 cursor-pointer"
              size={24}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <BsCloudUpload className="text-blue-500 mr-3" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Import Learner Data</p>
                    <p className="text-sm text-gray-600">
                      Add learners by uploading a spreadsheet file.
                    </p>
                  </div>
                </div>

                <div className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer">
                  <BiSolidFileExport className="text-blue-500 mr-3" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Export Learner Data</p>
                    <p className="text-sm text-gray-600">
                      Download data as a spreadsheet file.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <SearchSection searchOptions={searchOptions} />

      <FilterSection />

      <LearnersTable data={currentUsers} />

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(learners.length / usersPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DashboardLearnersPage;
