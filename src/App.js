import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ActivityLevelForm from "./components/ActivityLevelForm";

import "./App.scss";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App container-fluid p-2">
      <Nav></Nav>
      <Route path="/signin" component={SignIn} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/activity-level" component={ActivityLevelForm} />
    </div>
  );
}

export default App;
