import React from "react";
import SideBar from "../Dashboard/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRoute from "../utils/ProtectedRoute";

const DashboardContainer = () => {
  return (
    <div>
      <SideBar />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default DashboardContainer;
