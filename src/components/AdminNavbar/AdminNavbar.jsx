import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout successful!', {
      position: "top-center",
      autoClose: 3000,
    });
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex justify-between items-center text-white shadow-lg fixed w-full top-0 left-0 z-20">
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-extrabold tracking-wide">Admin Dashboard</h1>
      </div>

      <ul className="flex items-center space-x-8">
        <li>
          <Link
            to="/admin/dashboard/home"
            className="flex items-center space-x-2 text-lg font-medium transition-colors duration-300 hover:text-pink-300"
          >
            <FaHome size={22} />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to="/user"
            className="flex items-center space-x-2 text-lg font-medium transition-colors duration-300 hover:text-pink-300"
          >
            <FaUserAlt size={22} />
            <span className="hidden md:inline">User Page</span>
          </Link>
        </li>

        <li className="flex items-center space-x-6">
          <FaUserCircle size={30} className="text-white hidden md:inline" />
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
