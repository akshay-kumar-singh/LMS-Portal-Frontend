import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <DashboardSidebar />

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
