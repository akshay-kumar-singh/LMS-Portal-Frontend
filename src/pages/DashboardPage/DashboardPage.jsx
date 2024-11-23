import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />

      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
