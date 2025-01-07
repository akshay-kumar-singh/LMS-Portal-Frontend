import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaUsers,
  FaProductHunt,
  FaChartLine,
  FaRegImages,
  FaRegWindowMaximize,
  FaBullhorn,
  FaCogs,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";

const DashboardSubSidebar = ({ section, onLinkClick }) => {
  const renderLinks = () => {
    switch (section) {
      case "products":
        return (
          <>
            <Link
              to="/admin/dashboard/products/courses"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaProductHunt className="mr-2 text-blue-500" /> Courses
            </Link>
            <Link
              to="/admin/dashboard/products/packages"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaProductHunt className="mr-2 text-green-500" /> Packages
            </Link>
          </>
        );
      case "membership":
        return (
          <>
            <Link
              to="/admin/dashboard/membership/active"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaUsers className="mr-2 text-yellow-500" /> Active Members
            </Link>
            <Link
              to="/admin/dashboard/membership/expired"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaUsers className="mr-2 text-red-500" /> Expired Memberships
            </Link>
          </>
        );
      case "community":
        return (
          <>
            <Link
              to="/admin/dashboard/community/forums"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaBriefcase className="mr-2 text-purple-500" /> Forums
            </Link>
            <Link
              to="/admin/dashboard/community/groups"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaHandshake className="mr-2 text-teal-500" /> Groups
            </Link>
          </>
        );
      case "reports":
        return (
          <>
            <Link
              to="/admin/dashboard/reports/overview"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaChartLine className="mr-2 text-indigo-500" /> Overview
            </Link>
            <Link
              to="/admin/dashboard/reports/analytics"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaChartLine className="mr-2 text-pink-500" /> Analytics
            </Link>
          </>
        );
      case "user":
        return (
          <>
            <Link
              to="/admin/dashboard/user/learners"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaUser className="mr-2 text-blue-400" /> Learners
            </Link>
            <Link
              to="/admin/dashboard/user/admins"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaUser className="mr-2 text-green-400" /> Admins
            </Link>
            <Link
              to="/admin/dashboard/user/instructors"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaUser className="mr-2 text-yellow-400" /> Instructors
            </Link>
            <Link
              to="/admin/dashboard/user/affiliates"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaUser className="mr-2 text-yellow-400" /> Affiliates
            </Link>

            {/* User Tools Subheading */}
            <h5 className="text-gray-300 font-medium mt-6 mb-4">Tenant Onboarding</h5>
            <hr className="border-gray-600 my-2" />
            <Link
              to="/admin/dashboard/tenant-onboarding/tenants"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaChartLine className="mr-2 text-purple-400" /> Tenants
            </Link>
            <Link
              to="/admin/dashboard/tenant-onboarding/plans"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaCogs className="mr-2 text-red-400" /> Plans
            </Link>
          </>
        );
      case "assetLibrary":
        return (
          <>
            <Link
              to="/admin/dashboard/asset-library/images"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaRegImages className="mr-2 text-pink-400" /> Images
            </Link>
            <Link
              to="/admin/dashboard/asset-library/videos"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaRegWindowMaximize className="mr-2 text-teal-400" /> Videos
            </Link>
          </>
        );
      case "websiteApps":
        return (
          <>
            <Link
              to="/admin/dashboard/website-apps/themes"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaRegWindowMaximize className="mr-2 text-orange-400" /> Themes
            </Link>
            <Link
              to="/admin/dashboard/website-apps/plugins"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaRegWindowMaximize className="mr-2 text-blue-400" /> Plugins
            </Link>
          </>
        );
      case "marketing":
        return (
          <>
            <Link
              to="/admin/dashboard/marketing/campaigns"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaBullhorn className="mr-2 text-yellow-600" /> Campaigns
            </Link>
            <Link
              to="/admin/dashboard/marketing/email"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaBullhorn className="mr-2 text-red-600" /> Email Marketing
            </Link>
          </>
        );
      case "integration":
        return (
          <>
            <Link
              to="/admin/dashboard/integration/api"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaCogs className="mr-2 text-indigo-600" /> API Integrations
            </Link>
            <Link
              to="/admin/dashboard/integration/webhooks"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaCogs className="mr-2 text-purple-600" /> Webhooks
            </Link>
          </>
        );
      case "settings":
        return (
          <>
            <Link
              to="/admin/dashboard/settings/payments"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaCogs className="mr-2 text-blue-600" /> Payments
            </Link>
            <Link
              to="/admin/dashboard/settings/security"
              onClick={() => onLinkClick()}
              className="flex items-center text-gray-400 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:text-white mb-2"
            >
              <FaCogs className="mr-2 text-red-600" /> Security
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 shadow-lg">
      <h4 className="text-gray-300 font-medium mb-4">
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </h4>
      <hr className="border-gray-600 my-2" />
      {renderLinks()}
    </div>
  );
};

export default DashboardSubSidebar;
