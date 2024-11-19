import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import DashboardSubSidebar from '../DashboardSubSidebar/DashboardSubSidebar';
import {
  FaHome,
  FaBox,
  FaUsers,
  FaComments,
  FaChartBar,
  FaUser,
  FaFolder,
  FaGlobe,
  FaBullhorn,
  FaPuzzlePiece,
  FaCog
} from 'react-icons/fa';

const DashboardSidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section)); // Toggle the section
  };

  const handleSubSidebarLinkClick = () => {
    setActiveSection(null); // Close the sub-sidebar when a link is clicked
  };

  return (
    <div className="flex">
      {/* Main Sidebar */}
      <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col p-4 shadow-lg">
        {/* Institute Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src={Logo} alt="Institute Logo" className="w-14 h-14 rounded-full border-2 border-gray-400" />
        </div>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin/dashboard/home" className="flex items-center hover:bg-gray-600 p-3 rounded-lg transition-colors duration-200">
            <FaHome className="mr-3 text-teal-400" /> <span className="font-medium">Home</span>
          </Link>
          <div>
            <div
              onClick={() => handleToggleSection('products')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaBox className="mr-3 text-yellow-400" /> <span className="font-medium">Products</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('membership')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaUsers className="mr-3 text-purple-400" /> <span className="font-medium">Membership</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('community')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaComments className="mr-3 text-blue-400" /> <span className="font-medium">Community</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('reports')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaChartBar className="mr-3 text-green-400" /> <span className="font-medium">Reports</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('user')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaUser className="mr-3 text-red-400" /> <span className="font-medium">User</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('assetLibrary')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaFolder className="mr-3 text-orange-400" /> <span className="font-medium">Asset Library</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('websiteApps')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaGlobe className="mr-3 text-indigo-400" /> <span className="font-medium">Website & Apps</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('marketing')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaBullhorn className="mr-3 text-pink-400" /> <span className="font-medium">Marketing</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('integration')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaPuzzlePiece className="mr-3 text-cyan-400" /> <span className="font-medium">Integration</span>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleToggleSection('settings')}
              className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <FaCog className="mr-3 text-cyan-400" /> <span className="font-medium">Settings</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Sub Sidebar */}
      {activeSection && <DashboardSubSidebar section={activeSection} onLinkClick={handleSubSidebarLinkClick} />}
    </div>
  );
};

export default DashboardSidebar;
