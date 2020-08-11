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
  items: {},
  fetchEntriesStart: false,
  fetchEntriesSuccess: false,
  fetchEntriesFail: false,
  editEntriesStart: false,
  editEntriesSuccess: false,
  editEntriesFail: false,
  editError: null,
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
    setEntriesStart: (state, action) => {
      state.fetchEntriesStart = true;
      state.fetchEntriesSuccess = false;
      state.fetchEntriesFail = false;
    },
    setEntries: (state, action) => {
      state.entries = action.payload;
      state.fetchEntriesSuccess = true;
      state.fetchEntriesStart = false;
      state.fetchEntriesFail = false;
    },
    setEntriesFail: (state, action) => {
      state.fetchEntriesStart = false;
      state.fetchEntriesSuccess = false;
      state.fetchEntriesFail = true;
    },
    editJournalStart: (state, action) => {
      state.editEntriesSuccess = true;
      state.editEntriesFail = false;
      state.editEntriesStart = true;
    },
    editJournalFail: (state, action) => {
      state.editError = action.payload;
      state.editEntriesSuccess = false;
      state.editEntriesFail = true;
      state.editEntriesStart = false;
    },
    editJournalSuccess: (state, action) => {
      state.items = action.payload;
      state.editEntriesSuccess = true;
      state.editEntriesFail = false;
      state.editEntriesStart = false;
    },
  },
});

export const {
  setUser,
  setJournal,
  setEntries,
  editJournalStart,
  editJournalFail,
  editJournalSuccess,
  setEntriesStart,
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

export const editFoodJournal = (id, put) => (dispatch) => {
  console.log("post in editFoodJournal", put);
  dispatch(editJournalStart());
  axiosWithAuth()
    .put(`https://nutrivurv-be.herokuapp.com/api/log/${id}`, put)
    .then((response) => {
      dispatch(editJournalSuccess(response.data));
      console.log("edit journal response", response);
    })
    .catch((err) => {
      console.dir(err);
      dispatch(editJournalFail(err.response.data.message));
    });
};

export const getFoodLogEntries = (date) => (dispatch) => {
  dispatch(setEntriesStart());
  axiosWithAuth()
    .get(`${nutrivurvAPI}/api/log/date/${date}`)
    .then((response) => {
      console.log("get response", response);
      dispatch(setEntries(response.data));
    })
    .catch((err) => console.dir(err));
};
export default UserSlice.reducer;
