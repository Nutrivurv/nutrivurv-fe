import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignIn from "./components/SignIn/SignIn";
import OnBoarding from "./components/on-boarding/onBoarding";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import About from "./components/About/About";
import { Provider } from "react-redux";
import { store } from './State/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={OnBoarding} />
        </Switch>
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
