import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex justify-between items-center text-white shadow-lg fixed w-full top-0 left-0 z-20">
      {/* Left Section: Title */}
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-extrabold tracking-wide">Admin Dashboard</h1>
      </div>

      {/* Right Section: Navigation Links */}
      <ul className="flex items-center space-x-8">
        {/* Dashboard Link */}
        <li>
          <Link
            to="/admin/dashboard/home"
            className="flex items-center space-x-2 text-lg font-medium transition-colors duration-300 hover:text-pink-300"
          >
            <FaHome size={22} />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>

        {/* User Page Link */}
        <li>
          <Link
            to="/user"
            className="flex items-center space-x-2 text-lg font-medium transition-colors duration-300 hover:text-pink-300"
          >
            <FaUserAlt size={22} />
            <span className="hidden md:inline">User Page</span>
          </Link>
        </li>

        {/* Profile and Logout */}
        <li className="flex items-center space-x-6">
          {/* Profile Icon */}
          <FaUserCircle size={30} className="text-white hidden md:inline" />
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
          >
            <FaSignOutAlt size={22} />
            <span className="hidden md:inline">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
