import React from "react";
import AdminHomeHeader from "../../components/AdminHomeHeader/AdminHomeHeader";
import AdminHomeReports from "../../components/AdminHomeReports/AdminHomeReports";
import AdminHomeWebinar from "../../components/AdminHomeWebinar/AdminHomeWebinar";

const AdminDashboardHomePage = () => {
  return (
    <>
      <AdminHomeHeader />
      <AdminHomeReports />
      <AdminHomeWebinar />
    </>
  );
};

export default AdminDashboardHomePage;
