import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <ul className="hidden lg:flex space-x-6 text-lg">
      <li className="relative group">
        <div className="cursor-pointer">
          Exam <FaAngleDown className="ml-1 inline-block" />
        </div>
        <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul>
            <li><Link to="/ssc" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">SSC</Link></li>
            <li><Link to="/railway" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Railway</Link></li>
            <li><Link to="/bank" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Bank</Link></li>
          </ul>
        </div>
      </li>

      <li><Link to="/supercoaching" className="hover:text-blue-600 cursor-pointer">Supercoaching</Link></li>

      <li><Link to="/testseries" className="hover:text-blue-600 cursor-pointer">Test Series</Link></li>

      <li className="relative group">
        <div className="cursor-pointer">
          Pass <FaAngleDown className="ml-1 inline-block" />
        </div>
        <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul>
            <li><Link to="/pass" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Pass</Link></li>
            <li><Link to="/pass-pro" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Pass Pro</Link></li>
          </ul>
        </div>
      </li>

      <li className="relative group">
        <div className="cursor-pointer">
          More <FaAngleDown className="ml-1 inline-block" />
        </div>
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul>
            <li><Link to="/free-live-classes" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Free Live Classes</Link></li>
            <li><Link to="/free-quizzes" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Free Quizzes</Link></li>
            <li><Link to="/doubts" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Doubts</Link></li>
            <li><Link to="/my-learning-hub" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">My Learning Hub</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default DesktopNavbar;
