import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AdminDashboardHomePage from "./pages/AdminDashboardHomePage/AdminDashboardHomePage";
import DashboardCourses from "./pages/DashboardCourses/DashboardCourses";
import DashboardLearnersPage from "./pages/DashboardLearnersPage/DashboardLearnersPage";
import LearnerDetailsPage from "./pages/LearnerDetailsPage/LearnerDetailsPage";
import LearnerInformationPage from "./pages/LearnerInformationPage/LearnerInformationPage";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<HomePage />} />

          {/* Protected Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/dashboard" element={<DashboardPage />}>
              <Route path="home" element={<AdminDashboardHomePage />} />
              <Route path="products/courses" element={<DashboardCourses />} />
              <Route path="user/learners" element={<DashboardLearnersPage />} />
            </Route>
            <Route path="/user/:id" element={<LearnerDetailsPage />} />
            <Route path="/information" element={<LearnerInformationPage />} />
          </Route>

          {/* Protected User Routes */}
          <Route element={<PrivateRoute allowedRoles={["user", "admin"]} />}>
            <Route path="/user" element={<UserPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </SearchProvider>
  );
}

export default App;
