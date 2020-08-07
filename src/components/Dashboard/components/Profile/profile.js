import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Email from "./Email";
import Name from "./Name";
import Gender from "./Gender";
import WeightGoals from "./WeightGoals";
import Height from "./Height";
import Weight from "./weight";
import WeeklyLoss from "./WeeklyLoss";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [users, setUser] = useState();
  function handleChange(e) {
    setUser({ ...users, [e.currentTarget.name]: e.currentTarget.value });
  }
  return (
    <div className="profile">
      <h1>Edit Your Profile</h1>
      <div>
        <div className="d-flex justify-content-center">
          <Name
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <Email
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
        </div>
        <div className="d-flex">
          <Gender
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <WeightGoals
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <Height
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Weight
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <WeeklyLoss
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
