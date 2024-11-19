import React from "react";
import { Link } from "react-router-dom";

const DashboardCourses = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-lg font-semibold mb-2">Course 1</h2>
          <p className="text-gray-600 mb-4">Brief description of Course 1.</p>
          <Link
            to="/admin/products/courses/1"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-lg font-semibold mb-2">Course 2</h2>
          <p className="text-gray-600 mb-4">Brief description of Course 2.</p>
          <Link
            to="/admin/products/courses/2"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-lg font-semibold mb-2">Course 3</h2>
          <p className="text-gray-600 mb-4">Brief description of Course 3.</p>
          <Link
            to="/admin/products/courses/3"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        {/* Additional course items can be added here */}
      </div>
    </div>
  );
};

export default DashboardCourses;
