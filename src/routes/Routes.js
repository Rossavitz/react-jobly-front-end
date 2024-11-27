import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompaniesList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import Homepage from "../homepage/Homepage";
import JobList from "../jobs/JobList";
import Login from "../auth/Login";
import SignupForm from "../auth/Signup";
import Profile from "../Profile";
import ProtectedRoute from "./ProtectedRoutes";

function RoutesList({ signup, login }) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login login={login} />} />
        <Route exact path="/signup" element={<SignupForm signup={signup} />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/companies" element={<CompaniesList />} />
          <Route exact path="/companies/:handle" element={<CompanyDetail />} />
          <Route exact path="/jobs" element={<JobList />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
