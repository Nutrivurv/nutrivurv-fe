import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// test commit
const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;

const initialState = {
  user: {
    id: 0,
    name: "",
    email: "",
  },
  isAuthenticated: false,
  isAuthenticating: false,
  authError: null,
};

const SignUpSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.authError = null;
      state.isAuthenticating = true;
      state.isAuthenticated = false;
    },
    authSuccess: (state, action) => {
      state.user = action.payload;
      state.authError = null;
      state.isAuthenticating = false;
      state.isAuthenticated = true;
    },
    authFail: (state, action) => {
      state.authError = action.payload;
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    },
  },
});

export const { authStart, authSuccess, authFail } = SignUpSlice.actions;

export const authenticate = (creds, type) => async (dispatch) => {
  dispatch(authStart());

  try {
    const response = await axios.post(
      `${nutrivurvAPI}/api/auth/${type}`,
      creds
    );
    localStorage.setItem("token", response.data.token);
    dispatch(authSuccess(response.data.user));
  } catch (error) {
    dispatch(authFail(error.response.data.message));
  }
};

export default SignUpSlice.reducer;
