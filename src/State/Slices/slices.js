const { createSlice, combineReducers } = require("@reduxjs/toolkit");

const SignUpSlice = createSlice({
  name: "signUp",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {},
});

const LogInSlice = createSlice({
  name: "signUp",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {},
});

export const rootReducer = combineReducers({
  SignUpSlice,
  LogInSlice,
});
