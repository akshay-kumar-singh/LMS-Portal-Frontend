import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import DashboardSubSidebar from "../DashboardSubSidebar/DashboardSubSidebar";
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
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const DashboardSidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();

  const handleToggleSection = (section) => {
    if (section === "home") {
      navigate("/admin/dashboard/home");
    } else {
      setActiveSection((prev) => (prev === section ? null : section));
    }
  };

  const handleSubSidebarLinkClick = () => {
    setActiveSection(null);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="flex">
      <div
        className={`${
          isSidebarExpanded ? "w-64" : "w-18"
        } h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col p-4 shadow-lg transition-all duration-300`}
      >
        <div className="flex items-center justify-center mb-8">
          <img
            src={Logo}
            alt="Institute Logo"
            className={`${
              isSidebarExpanded ? "w-14 h-14" : "w-10 h-10"
            } rounded-full border-2 border-gray-400`}
          />
        </div>

        <nav className="flex flex-col space-y-2">
          {[
            { name: "Home", icon: FaHome, section: "home" },
            { name: "Products", icon: FaBox, section: "products" },
            { name: "Membership", icon: FaUsers, section: "membership" },
            { name: "Community", icon: FaComments, section: "community" },
            { name: "Reports", icon: FaChartBar, section: "reports" },
            { name: "User", icon: FaUser, section: "user" },
            { name: "Asset Library", icon: FaFolder, section: "assetLibrary" },
            { name: "Website & Apps", icon: FaGlobe, section: "websiteApps" },
            { name: "Marketing", icon: FaBullhorn, section: "marketing" },
            { name: "Integration", icon: FaPuzzlePiece, section: "integration"},
            { name: "Settings", icon: FaCog, section: "settings" },
          ].map(({ name, icon: Icon, section }) => (
            <div key={section}>
              <div
                onClick={() =>
                  isSidebarExpanded
                    ? handleToggleSection(section)
                    : toggleSidebar()
                }
                className="flex items-center hover:bg-gray-600 p-3 rounded-lg cursor-pointer transition-colors duration-200"
              >
                <Icon
                  className="text-teal-400"
                  style={{ fontSize: "1.25rem" }}
                />
                {isSidebarExpanded && (
                  <span className="ml-3 font-medium">{name}</span>
                )}
              </div>
            </div>
          ))}
        </nav>

        <button
          onClick={toggleSidebar}
          className="mt-auto bg-gray-600 hover:bg-gray-500 p-2 rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          {isSidebarExpanded ? (
            <FaChevronLeft className="text-white" />
          ) : (
            <FaChevronRight className="text-white" />
          )}
        </button>
      </div>

      {activeSection && (
        <DashboardSubSidebar
          section={activeSection}
          onLinkClick={handleSubSidebarLinkClick}
        />
      )}
    </div>
  );
};

export default DashboardSidebar;
