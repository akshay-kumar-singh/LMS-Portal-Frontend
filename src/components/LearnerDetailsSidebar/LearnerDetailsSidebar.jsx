import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInfoCircle,
  FaBook,
  FaVideo,
  FaShoppingCart,
  FaTelegram,
  FaHistory,
  FaWallet,
  FaArrowLeft,
  FaBars,
} from "react-icons/fa";

const LearnerDetailsSidebar = ({ learner, onSectionChange }) => {
  const [activeSection, setActiveSection] = useState("Information");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  const sections = [
    { name: "Information", icon: <FaInfoCircle /> },
    { name: "Courses", icon: <FaBook /> },
    { name: "Webinar", icon: <FaVideo /> },
    { name: "Digital Products", icon: <FaShoppingCart /> },
    { name: "Telegram Communities", icon: <FaTelegram /> },
    { name: "Purchase History", icon: <FaHistory /> },
    { name: "My Wallet", icon: <FaWallet /> },
  ];

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    onSectionChange(sectionName);
    if (isMobile) {
      setIsSidebarOpen(false); 
    }
  };

  const generateAvatar = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Hamburger Icon for small screens (less than 1024px) */}
      {isMobile && (
        <div
          className="lg:hidden p-4 cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars className="text-xl text-gray-700" />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-72 bg-gray-200 h-full shadow-lg flex flex-col border-r border-gray-300 overflow-hidden fixed lg:relative transition-transform duration-300 top-0 left-0 z-50`}
      >
        <div className="flex flex-col items-center py-6 bg-gradient-to-b from-indigo-500 to-indigo-400 text-white">
          <div className="w-16 h-16 bg-white text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold shadow-md">
            {generateAvatar(learner.name)}
          </div>
          <h2 className="mt-4 text-lg font-semibold">{learner.name}</h2>
          <p className="text-sm mt-2">{learner.email}</p>
          <p className="text-xs mt-2 ">
            Created: {learner.joinedOn}
          </p>
        </div>

        <div className="border-b border-gray-400 my-4"></div>

        <div
          className="px-6 py-4 flex items-center space-x-4 text-gray-700 font-medium hover:bg-indigo-200 cursor-pointer transition-all duration-200 rounded-lg"
          onClick={() => navigate("/admin/dashboard/user/learners")}
        >
          <FaArrowLeft className="text-indigo-600 text-xl" />
          <span className="text-base">Back to Learners</span>
        </div>

        <ul className="flex flex-col">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`px-6 py-4 flex items-center space-x-4 text-gray-700 font-medium hover:bg-indigo-200 cursor-pointer transition-all duration-200 rounded-lg ${
                activeSection === section.name
                  ? "bg-indigo-200 text-indigo-700"
                  : ""
              }`}
              onClick={() => handleSectionClick(section.name)}
            >
              <div className="text-indigo-600 text-xl">{section.icon}</div>
              <span className="text-base">{section.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default LearnerDetailsSidebar;
