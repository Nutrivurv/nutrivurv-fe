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
import About from "./components/About/About";
import GettingPersonal from "./components/on-boarding/GettingPersonal";
import DietaryPref from "./components/on-boarding/dietaryPref";
import ActivityLevelForm from "./components/on-boarding/ActivityLevelForm";
import BMI from "./components/on-boarding/bmi-calc/BMI";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={OnBoarding} />
      <Route exact path="/about" component={About} />
      <Route exact path="/first" component={GettingPersonal} />
      <Route exact path="/second" component={DietaryPref} />
      <Route exact path="/third" component={ActivityLevelForm} />
      <Route exact path="/fourth" component={BMI} />
      <Footer />
    </div>
  );
}

export default App;
