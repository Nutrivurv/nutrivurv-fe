import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import edamamReducer from "../slices/EdamamSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  edamam: edamamReducer,
});

export default rootReducer;
