import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ActivityLevelForm from "./components/ActivityLevelForm";
import OnBoarding from "./components/on-boarding/onBoarding";

import "./App.scss";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App container-fluid p-2">
      <Nav></Nav>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/activity-level" component={ActivityLevelForm} />
      <Route exact path="/signup" component={OnBoarding} />
    </div>
  );
}

export default App;
