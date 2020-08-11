import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../../components/utils/auth/axioswithAuth";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;
const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  user: {},
  journal: {},
  entries: {},
  deleteEntries: false,
  fetchEntriesStart: false,
  fetchEntriesSuccess: false,
  fetchEntriesFail: false,
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
      state.fetchEntriesSuccess = true;
    },
    setDeleteStart: (state) => {
      state.fetchEntriesStart = true;
      state.deleteEntries = false;
    },
    setDeleteSuccess: (state) => {
      state.fetchEntriesStart = false;
      state.deleteEntries = true;
    },
    setDeleteFailure: (state) => {
      state.fetchEntriesStart = false;
      state.deleteEntries = false;
    },
  },
});

export const {
  setUser,
  setJournal,
  setEntries,
  setDeleteStart,
  setDeleteSuccess,
  setDeleteFailure,
} = UserSlice.actions;

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
    .post(`${nutrivurvAPI}/api/log`, post)
    .then((response) => console.log(response.data))
    .catch((err) => console.dir(err));
};

export const getFoodLogEntries = (date) => (dispatch) => {
  axiosWithAuth()
    .get(`${nutrivurvAPI}/api/log/date/${date}`)
    .then((response) => {
      console.log(response.data);
      dispatch(setEntries(response.data));
    })
    .catch((err) => console.dir(err));
};

export const deleteFoodLogEntries = (id) => (dispatch) => {
  dispatch(setDeleteStart());
  axiosWithAuth()
    .delete(`${nutrivurvAPI}/api/log/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch(setDeleteSuccess(response.data));
    })
    .catch((err) => console.dir(err), dispatch(setDeleteFailure()));
};

export default UserSlice.reducer;
