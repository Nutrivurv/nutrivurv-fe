import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignIn from "./components/SignIn/SignIn";
import OnBoarding from "./components/on-boarding/onBoarding";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App ">
      <Nav></Nav>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={OnBoarding} />
      <Footer></Footer>
    </div>
  );
}

export default App;
