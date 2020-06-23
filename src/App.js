import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import HomeContainer from "./components/Container/HomeContainer";
import DashboardContainer from "./components/Container/DashboardContainer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
