
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import "./App.scss";
import "bootswatch/dist/flatly/bootstrap.min.css";
import Nav from "./components/nav/nav";


function App() {
  
  return (
    <div className="App container-fluid">
      <Route path="/landing" component={LandingPage} />
    </div>
  );
}

export default App;
