import React from "react";
import { Route } from "react-router-dom";
import Journal from "./components/Journal";
import Logout from "./components/Logout";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

const Dashboard = () => {
  return (
    <div className="wrapper flex-row">
      <SideBar />
      <div className="dashboard mt-4 wrapper flex-column">
        <Logout />
        <Route exact path="/dashboard" component={Journal} />
        <Route path="/dashboard/food-search" component={SearchBar} />
      </div>
    </div>
  );
};

export default Dashboard;
