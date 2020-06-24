import React from "react";
import SideBar from "../Dashboard/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import { Route } from "react-router-dom";
// import ProtectedRoute from "../utils/ProtectedRoute";

const DashboardContainer = () => {
  return (
    <div>
      <SideBar />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default DashboardContainer;
