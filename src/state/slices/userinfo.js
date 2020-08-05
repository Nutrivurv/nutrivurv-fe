import axios from "axios";
import { axiosWithAuth } from "../../components/utils/auth/axioswithAuth";
import { createSlice } from "@reduxjs/toolkit";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;
const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  user: {},
  journal: {},
  entries: {},
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
    setEntries: (state, action) => {
      state.entries = action.payload;
    },
  },
});

export const { setUser, setJournal, setEntries } = UserSlice.actions;

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

export const addFoodToJournal = (post) => (dispatch) => {
  console.log("post in addFoodtoJournal", post);
  axiosWithAuth()
    .post("https://nutrivurv-be.herokuapp.com/api/log", post)
    .then((response) => console.log(response.data))
    .catch((err) => console.dir(err));
};

export const getFoodLogEntries = () => (dispatch) => {
  axiosWithAuth()
    .get("https://nutrivurv-be.herokuapp.com/api/log/date/2020-08-05")
    .then((response) => {
      console.log(response.data);
      dispatch(setEntries(response.data));
    })
    .catch((err) => console.dir(err));
};
export default UserSlice.reducer;
