import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const LearnersTable = ({ data }) => {
  const { searchBy, searchQuery } = useSearch();
  const navigate = useNavigate();
  const headers = ["Name", "Phone", "Role", "Last Login", "Joined On", "Details"];

  const generateAvatar = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  const filteredData = data.filter((user) => {
    return user[searchBy] && user[searchBy].toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDetailsClick = (id) => {
    navigate(`/user/${id}`);
  };
  

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-sm font-semibold tracking-wide shadow-md">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 border-b text-center"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-all duration-150`}
              >
                <td className="px-6 py-4 flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {generateAvatar(user.name)}
                  </div>
                  <span className="text-gray-800 font-medium">{user.name}</span>
                </td>
                <td className="px-6 py-4 text-center text-gray-700">{user.phone}</td>
                <td className="px-6 py-4 text-center text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === "Student"
                        ? "bg-green-100 text-green-700"
                        : user.role === "Instructor"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-center text-gray-700">{user.lastLogin}</td>
                <td className="px-6 py-4 text-center text-gray-700">{user.joinedOn}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center h-full">
                    <BsBoxArrowInUpRight
                      size={20}
                      className="text-blue-500 cursor-pointer hover:text-blue-700 transition-all duration-150"
                      onClick={() => handleDetailsClick(index)} // Pass the index as id
                      />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnersTable;
