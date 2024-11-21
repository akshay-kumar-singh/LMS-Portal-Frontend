import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AdminHome from "./pages/AdminHome/AdminHome";
import DashboardCourses from "./pages/DashboardCourses/DashboardCourses";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Protected Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="products/courses" element={<DashboardCourses />} />
          </Route>
        </Route>

        {/* Protected User Routes */}
        <Route element={<PrivateRoute allowedRoles={["user", "admin"]} />}>
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
