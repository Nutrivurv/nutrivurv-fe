import React from "react";
import { Route } from "react-router-dom";
import SideBar from "../Dashboard/SideBar";

const DashboardContainer = () => {
  return (
    <div>
      <SideBar />
      <Route exact path="/dashboard" />
    </div>
  );
};

export default DashboardContainer;
