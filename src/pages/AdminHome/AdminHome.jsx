import React from 'react';

const AdminHome = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Home</h1>
      <p className="text-gray-600 mb-4">
        Welcome to the Admin Dashboard! Here you can manage and oversee all aspects of your organization's operations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-500">
            Get a snapshot of the latest metrics and KPIs.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-500">
            Check out the recent actions and updates.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-500">
            Manage user roles, permissions, and access.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-gray-500">
            Access detailed reports and analytics.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-500">
            Customize your dashboard and system preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
