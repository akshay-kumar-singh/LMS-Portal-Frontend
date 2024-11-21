import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserNavbar = () => {
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
    <nav className="bg-blue-700 shadow-md p-4 flex justify-between items-center text-white">
      <h1 className="text-3xl font-bold tracking-wide">User Dashboard</h1>
      <ul className="flex space-x-6 items-center">
        <li className="hover:text-blue-300 cursor-pointer transition">Courses</li>
        <li className="hover:text-blue-300 cursor-pointer transition">Profile</li>
        <li className="hover:text-blue-300 cursor-pointer transition">Settings</li>
        <li className="flex items-center space-x-2">
          <FaUserCircle size={30} className="text-white" />
          <span
            onClick={handleLogout}
            className="cursor-pointer hover:text-red-300 transition"
          >
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
