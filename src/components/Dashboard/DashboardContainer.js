import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
// import ProtectedRoute from "../utils/ProtectedRoute";

const DashboardContainer = () => {
  return (
    <div className="wrapper flex-row">
      <SideBar />
      <div className="dashboard mt-4 wrapper flex-column">
        <Route exact path="/dashboard" component={Dashboard} />
        <SearchBar />
      </div>
    </div>
  );
};

export default DashboardContainer;
