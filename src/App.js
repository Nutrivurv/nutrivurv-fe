import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React, { useState } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignIn from "./components/SignIn/SignIn";
import OnBoarding from "./components/on-boarding/onBoarding";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import About from "./components/About/About";

function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="App">
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
}

export default App;
