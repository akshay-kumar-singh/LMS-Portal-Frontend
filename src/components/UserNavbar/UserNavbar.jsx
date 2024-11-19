import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <ul className="flex space-x-4">
        <li>Courses</li>
        <li>Profile</li>
        <li>Settings</li>
        <li onClick={handleLogout} className="cursor-pointer">Logout</li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
