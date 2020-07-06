// import moment from "moment";
import React, { useState } from "react";
import { Route } from "react-router-dom";
// import SignIn from "../../../../components/SignIn/SignIn";
// import history from "../../../../history";
import SignUp from "../SignUp";
import ActivityLevel from "./components/ActivityLevel";
import GettingPersonal from "./components/GettingPersonal";
import GettingStarted from "./components/GettingStarted";
import WeightGoals from "./components/WeightGoals";
import BMI from "./components/bmi-calc/BMI";

const Onboarding = ({ match }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    target_weight: "",
    activity_level: "",
    standard: "true",
    height_ft: "",
    height_in: "",
    height_cm: "",
    weight_lbs: "",
    weight_kg: "",
    net_weekly_change_kg: "",
    date_of_birth: "",
  });

  console.log(
    "\n\n***********************************************************"
  );
  console.log("***********************************************************");
  console.log("user.date_of_birth        :", user.date_of_birth);
  console.log("user.gender               :", user.gender);
  console.log("user.activity_level       :", user.activity_level);
  console.log("user.standard             :", user.standard);
  console.log("user.height_ft            :", user.height_ft);
  console.log("user.height_in            :", user.height_in);
  console.log("user.height_cm ***        :", user.height_cm);
  console.log("user.weight_lbs           :", user.weight_lbs);
  console.log("user.weight_kg ***        :", user.weight_kg);
  console.log("user.target_weight        :", user.target_weight);
  console.log("user.net_weekly_change_kg :", user.net_weekly_change_kg);
  console.log("user.name            :", user.name);
  console.log("user.email                :", user.email);
  console.log("user.password             :", user.password);

  function handleChange(e) {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  }

  return (
    <div>
      <Route
        exact
        path={`${match.url}`}
        render={(props) => (
          <GettingStarted {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/getting-personal`}
        render={(props) => (
          <GettingPersonal {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/activity-level`}
        render={(props) => (
          <ActivityLevel {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/bmi`}
        render={(props) => (
          <BMI
            {...props}
            handleChange={handleChange}
            user={user}
            setUser={setUser}
          />
        )}
      />
      <Route
        path={`${match.url}/weight-goals`}
        render={(props) => (
          <WeightGoals {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/register`}
        render={(props) => (
          <SignUp {...props} handleChange={handleChange} user={user} />
        )}
      />
    </div>
  );
};

export default Onboarding;
