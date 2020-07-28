import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;
const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  user: {},
  journal: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setJournal: (state, action) => {
      state.journal = action.payload;
    },
  },
});

export const { setUser, setJournal } = UserSlice.actions;

export const Journal = (id, day) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${nutrivurvAPI}/api/journal/${id}/${day} `
    );
    console.log(response.data);
    dispatch(setJournal(response.data));
  } catch (err) {
    console.log(err, `error`);
  }
};

export default UserSlice.reducer;
