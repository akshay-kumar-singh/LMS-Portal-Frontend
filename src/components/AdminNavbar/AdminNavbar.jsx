import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex justify-between items-center text-white shadow-xl fixed w-full top-0 left-0 z-10">
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-extrabold tracking-wider">Admin Dashboard</h1>
      </div>

      <ul className="flex space-x-10">
        <li>
          <Link
            to="/admin/dashboard/home"
            className="flex items-center space-x-2 text-lg text-white transition-colors duration-300  hover:text-pink-300 cursor-pointer"
          >
            <FaHome size={22} />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            className="flex items-center space-x-2 text-lg text-white transition-colors duration-300 hover:text-pink-300 cursor-pointer"
          >
            <FaUserAlt size={22} />
            <span className="hidden md:inline">User Page</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 cursor-pointer"
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
