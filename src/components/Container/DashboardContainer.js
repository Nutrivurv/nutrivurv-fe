import React from "react";
import { Route } from "react-router-dom";
import SideBar from "../Dashboard/SideBar";
import Dashboard from "../Dashboard/Dashboard";

const DashboardContainer = () => {
  return (
    <div>
      <SideBar />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default DashboardContainer;
