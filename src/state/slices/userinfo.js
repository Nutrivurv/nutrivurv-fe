import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;
const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  user: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = UserSlice.actions;

export const User = () => (dispatch) => {
    try{
        const response = await axios.get(`${nutrivurvAPI}/api/`);
        console.log(response.data);
    }catch (err) {
        console.log(err,`error`);
    }
};
