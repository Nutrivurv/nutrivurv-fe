
import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js"


function App() {
  return (
    <div className="App">
      <Route path="/landing" component={LandingPage} />
    </div>
  );
}

export default App;
