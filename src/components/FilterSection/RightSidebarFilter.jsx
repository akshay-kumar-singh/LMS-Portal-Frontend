import React, { useState } from "react";
import { FaTimes, FaCaretDown, FaCaretUp } from "react-icons/fa";

const RightSidebarFilter = ({ onClose, selectedFilter, setSelectedFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState({
    dateJoined: false,
    isMember: false,
    lastLogin: false,
    membershipStatus: false,
    courses: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleIsMemberChange = (value) => {
    setSelectedFilter((prev) => ({
      ...prev,
      isMember: {
        yes: value === "yes",
        no: value === "no",
      },
    }));
  };

  const handleMembershipStatusChange = (value) => {
    setSelectedFilter((prev) => ({
      ...prev,
      membershipStatus: value,
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

  const handleReset = () => {
    setSelectedFilter({
      dateJoined: { type: null, dates: { start: "", end: "" } },
      isMember: { yes: false, no: false },
      lastLogin: { type: null, dates: { start: "", end: "" } },
      membershipStatus: "",
      courses: { enrolled: [], notEnrolled: [] },
    });
  };

  const allCourses = ["Mathematics", "Science", "History", "English"];
  const notEnrolledCourses = ["Geography", "Art", "Physics", "Chemistry"];

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg z-20 overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Filter by</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-500 hover:text-gray-700" size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("dateJoined")}
            >
              <label className="text-lg font-medium text-gray-700">
                Date Joined
              </label>
              {isOpen.dateJoined ? (
                <FaCaretUp className="text-gray-500" />
              ) : (
                <FaCaretDown className="text-gray-500" />
              )}
            </div>
            {isOpen.dateJoined && (
              <div className="mt-4">
                <select
                  value={selectedFilter.dateJoined.type || ""}
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
                  <div className="space-y-2">
                    <input
                      type="date"
                      value={selectedFilter.dateJoined.dates.start || ""}
                      onChange={(e) =>
                        handleDateChange("dateJoined", "start", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      value={selectedFilter.dateJoined.dates.end || ""}
                      onChange={(e) =>
                        handleDateChange("dateJoined", "end", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ) : selectedFilter.dateJoined.type ? (
                  <input
                    type="date"
                    value={selectedFilter.dateJoined.dates.start || ""}
                    onChange={(e) =>
                      handleDateChange("dateJoined", "start", e.target.value)
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : null}
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("isMember")}
            >
              <label className="text-lg font-medium text-gray-700">
                Is Member
              </label>
              {isOpen.isMember ? (
                <FaCaretUp className="text-gray-500" />
              ) : (
                <FaCaretDown className="text-gray-500" />
              )}
            </div>
            {isOpen.isMember && (
              <div className="mt-4 space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isMember"
                    value="yes"
                    checked={selectedFilter.isMember.yes}
                    onChange={() => handleIsMemberChange("yes")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isMember"
                    value="no"
                    checked={selectedFilter.isMember.no}
                    onChange={() => handleIsMemberChange("no")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("lastLogin")}
            >
              <label className="text-lg font-medium text-gray-700">
                Last Login
              </label>
              {isOpen.lastLogin ? (
                <FaCaretUp className="text-gray-500" />
              ) : (
                <FaCaretDown className="text-gray-500" />
              )}
            </div>
            {isOpen.lastLogin && (
              <div className="mt-4">
                <select
                  value={selectedFilter.lastLogin.type || ""}
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
                  <div className="space-y-2">
                    <input
                      type="date"
                      value={selectedFilter.lastLogin.dates.start || ""}
                      onChange={(e) =>
                        handleDateChange("lastLogin", "start", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      value={selectedFilter.lastLogin.dates.end || ""}
                      onChange={(e) =>
                        handleDateChange("lastLogin", "end", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ) : selectedFilter.lastLogin.type ? (
                  <input
                    type="date"
                    value={selectedFilter.lastLogin.dates.start || ""}
                    onChange={(e) =>
                      handleDateChange("lastLogin", "start", e.target.value)
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : null}
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("membershipStatus")}
            >
              <label className="text-lg font-medium text-gray-700">
                Membership Status
              </label>
              {isOpen.membershipStatus ? (
                <FaCaretUp className="text-gray-500" />
              ) : (
                <FaCaretDown className="text-gray-500" />
              )}
            </div>
            {isOpen.membershipStatus && (
              <div className="mt-4 space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="membershipStatus"
                    value="active"
                    checked={selectedFilter.membershipStatus === "active"}
                    onChange={() => handleMembershipStatusChange("active")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">Active</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="membershipStatus"
                    value="scheduledForCancellation"
                    checked={
                      selectedFilter.membershipStatus ===
                      "scheduledForCancellation"
                    }
                    onChange={() =>
                      handleMembershipStatusChange("scheduledForCancellation")
                    }
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">
                    Scheduled for Cancellation
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="membershipStatus"
                    value="inactive"
                    checked={selectedFilter.membershipStatus === "inactive"}
                    onChange={() => handleMembershipStatusChange("inactive")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">Inactive</span>
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="border-b pb-4 mt-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("courses")}
          >
            <label className="text-lg font-medium text-gray-700 ">
              Courses
            </label>
            {isOpen.courses ? (
              <FaCaretUp className="text-gray-500" />
            ) : (
              <FaCaretDown className="text-gray-500" />
            )}
          </div>
          {isOpen.courses && (
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <p className="text-gray-700">Enrolled</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={
                    allCourses.length > 0 &&
                    allCourses.every((course) =>
                      selectedFilter.courses?.enrolled?.includes(course)
                    )
                  }
                  onChange={(e) => {
                    setSelectedFilter((prev) => {
                      if (e.target.checked) {
                        return {
                          ...prev,
                          courses: {
                            ...prev.courses,
                            enrolled: [...new Set([...allCourses])],
                          },
                        };
                      } else {
                        return {
                          ...prev,
                          courses: {
                            ...prev.courses,
                            enrolled: [],
                          },
                        };
                      }
                    });
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Select All</span>
              </div>
              <div className="space-y-2">
                {allCourses.map((course) => (
                  <label key={course} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={
                        selectedFilter.courses?.enrolled?.includes(course) ||
                        false
                      }
                      onChange={(e) => {
                        setSelectedFilter((prev) => {
                          const enrolled = prev.courses?.enrolled || [];
                          if (e.target.checked) {
                            return {
                              ...prev,
                              courses: {
                                ...prev.courses,
                                enrolled: [...enrolled, course],
                              },
                            };
                          } else {
                            return {
                              ...prev,
                              courses: {
                                ...prev.courses,
                                enrolled: enrolled.filter((c) => c !== course),
                              },
                            };
                          }
                        });
                      }}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700">{course}</span>
                  </label>
                ))}
              </div>

              <p className="text-gray-700 mt-6">Not Enrolled</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={
                    notEnrolledCourses.length > 0 &&
                    notEnrolledCourses.every((course) =>
                      selectedFilter.courses?.notEnrolled?.includes(course)
                    )
                  }
                  onChange={(e) => {
                    setSelectedFilter((prev) => {
                      if (e.target.checked) {
                        return {
                          ...prev,
                          courses: {
                            ...prev.courses,
                            notEnrolled: [...new Set([...notEnrolledCourses])],
                          },
                        };
                      } else {
                        return {
                          ...prev,
                          courses: {
                            ...prev.courses,
                            notEnrolled: [],
                          },
                        };
                      }
                    });
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Select All</span>
              </div>

              <div className="space-y-2">
                {notEnrolledCourses.map((course) => (
                  <label key={course} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={
                        selectedFilter.courses?.notEnrolled?.includes(course) ||
                        false
                      }
                      onChange={(e) => {
                        setSelectedFilter((prev) => {
                          const notEnrolled = prev.courses?.notEnrolled || [];
                          if (e.target.checked) {
                            return {
                              ...prev,
                              courses: {
                                ...prev.courses,
                                notEnrolled: [...notEnrolled, course],
                              },
                            };
                          } else {
                            return {
                              ...prev,
                              courses: {
                                ...prev.courses,
                                notEnrolled: notEnrolled.filter(
                                  (c) => c !== course
                                ),
                              },
                            };
                          }
                        });
                      }}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700">{course}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Reset
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default RightSidebarFilter;
