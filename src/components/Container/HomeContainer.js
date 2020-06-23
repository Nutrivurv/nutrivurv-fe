import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SignIn from "../SignIn/SignIn";
import OnBoarding from "../on-boarding/onBoarding";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import About from "../About/About";

const HomeContainer = () => {
  return (
    <div>
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={OnBoarding} />
      <Route exact path="/about" component={About} />
      <Footer />
    </div>
  );
};

export default HomeContainer;
