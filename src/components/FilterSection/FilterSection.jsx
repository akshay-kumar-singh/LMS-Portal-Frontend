import React, { useState, useEffect, useRef } from "react";
import { BsPlus } from "react-icons/bs";
import { FaCalendarAlt, FaCheckCircle, FaCaretDown } from "react-icons/fa";
import RightSidebarFilter from "./RightSidebarFilter";
const FilterSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    dateJoined: false,
    isMember: false,
    lastLogin: false,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dropdownRefs = useRef({});

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => {
      const newState = { dateJoined: false, isMember: false, lastLogin: false };
      return { ...newState, [key]: !prev[key] };
    });
  };

  const handleOutsideClick = (event) => {
    const clickedInsideDropdown = Object.keys(dropdownRefs.current).some(
      (key) => dropdownRefs.current[key]?.contains(event.target)
    );
    if (!clickedInsideDropdown) {
      setDropdownOpen({ dateJoined: false, isMember: false, lastLogin: false });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [selectedFilter, setSelectedFilter] = useState({
    dateJoined: { type: null, dates: { start: "", end: "" } },
    isMember: { yes: false, no: false },
    lastLogin: { type: null, dates: { start: "", end: "" } },
  });

  const toggleIsMemberOption = (option) => {
    setSelectedFilter((prev) => ({
      ...prev,
      isMember: {
        ...prev.isMember,
        [option]: !prev.isMember[option],
      },
    }));
  };

  const handleDateTypeChange = (key, value) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        type: value,
      },
    }));
  };

  const handleDateChange = (key, dateType, value) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        dates: {
          ...prev[key].dates,
          [dateType]: value,
        },
      },
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap items-center space-x-6 space-y-4 md:space-y-0">
        <span className="text-gray-700 font-semibold">Filter by:</span>

        <div
          className="relative w-full md:w-auto"
          ref={(el) => (dropdownRefs.current.dateJoined = el)}
        >
          <button
            onClick={() => toggleDropdown("dateJoined")}
            className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-800 border rounded-lg shadow focus:outline-none hover:bg-gray-200 flex items-center justify-between"
          >
            <FaCalendarAlt className="mr-2" /> Date Joined
            <FaCaretDown className="ml-auto text-gray-600" />
          </button>
          {dropdownOpen.dateJoined && (
            <div className="absolute top-full left-0 mt-2 w-full md:w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <div className="p-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Select Type:
                </label>
                <select
                  onChange={(e) =>
                    handleDateTypeChange("dateJoined", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                >
                  <option value="">Select</option>
                  <option value="on">On</option>
                  <option value="before">Before</option>
                  <option value="after">After</option>
                  <option value="between">Between</option>
                </select>

                {selectedFilter.dateJoined.type === "between" ? (
                  <>
                    <input
                      type="date"
                      onChange={(e) =>
                        handleDateChange("dateJoined", "start", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg mb-2"
                    />
                    <input
                      type="date"
                      onChange={(e) =>
                        handleDateChange("dateJoined", "end", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </>
                ) : selectedFilter.dateJoined.type ? (
                  <input
                    type="date"
                    onChange={(e) =>
                      handleDateChange("dateJoined", "start", e.target.value)
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : null}
              </div>
            </div>
          )}
        </div>

        <div
          className="relative w-full md:w-auto"
          ref={(el) => (dropdownRefs.current.isMember = el)}
        >
          <button
            onClick={() => toggleDropdown("isMember")}
            className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-800 border rounded-lg shadow focus:outline-none hover:bg-gray-200 flex items-center justify-between"
          >
            <FaCheckCircle className="mr-2" /> Is Member
            <FaCaretDown className="ml-auto text-gray-600" />
          </button>
          {dropdownOpen.isMember && (
            <div className="absolute top-full left-0 mt-2 w-full md:w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <div className="p-4">
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedFilter.isMember.yes}
                    onChange={() => toggleIsMemberOption("yes")}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilter.isMember.no}
                    onChange={() => toggleIsMemberOption("no")}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative w-full md:w-auto"
          ref={(el) => (dropdownRefs.current.lastLogin = el)}
        >
          <button
            onClick={() => toggleDropdown("lastLogin")}
            className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-800 border rounded-lg shadow focus:outline-none hover:bg-gray-200 flex items-center justify-between"
          >
            <FaCalendarAlt className="mr-2" /> Last Login
            <FaCaretDown className="ml-auto text-gray-600" />
          </button>
          {dropdownOpen.lastLogin && (
            <div className="absolute top-full left-0 mt-2 w-full md:w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <div className="p-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Select Type:
                </label>
                <select
                  onChange={(e) =>
                    handleDateTypeChange("lastLogin", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                >
                  <option value="">Select</option>
                  <option value="on">On</option>
                  <option value="before">Before</option>
                  <option value="after">After</option>
                  <option value="between">Between</option>
                </select>

                {selectedFilter.lastLogin.type === "between" ? (
                  <>
                    <input
                      type="date"
                      onChange={(e) =>
                        handleDateChange("lastLogin", "start", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg mb-2"
                    />
                    <input
                      type="date"
                      onChange={(e) =>
                        handleDateChange("lastLogin", "end", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </>
                ) : selectedFilter.lastLogin.type ? (
                  <input
                    type="date"
                    onChange={(e) =>
                      handleDateChange("lastLogin", "start", e.target.value)
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : null}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-lg shadow hover:bg-blue-600 w-full md:w-auto"
        >
          <BsPlus className="mr-2" size={20} /> More
        </button>
      </div>
      {isSidebarOpen && (
        <RightSidebarFilter
          onClose={() => setIsSidebarOpen(false)}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      )}
    </div>
  );
};

export default FilterSection;
