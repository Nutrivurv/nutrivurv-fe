import React, { useState } from "react";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SignIn from "../SignIn/SignIn";
import OnBoarding from "../on-boarding/onBoarding";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import About from "../About/About";

const HomeContainer = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div>
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup">
        <OnBoarding
          nextStep={nextStep}
          prevStep={prevStep}
          setStep={setStep}
          step={step}
        />
      </Route>
      <Route exact path="/about" component={About} />
      <Footer />
    </div>
  );
};

export default HomeContainer;
