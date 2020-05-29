import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import "./App.scss";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App container-fluid">
      <Nav></Nav>
      <Route path="/landing" component={LandingPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </div>
  );
}

export default App;
