import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/landing" component={LandingPage} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
