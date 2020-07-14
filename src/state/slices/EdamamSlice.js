import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  items: [],
  searchError: null,
  isFetching: false,
};

const EdamamSlice = createSlice({
  name: "edamam",
  initialState,
  reducers: {
    callItem: (state, action) => {
      state.isFetching = true;
      state.searchError = "";
    },
    callItemSuccess: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
      state.searchError = "";
    },
    callItemFail: (state, action) => {
      state.searchError = action.payload;
    },
  },
});

export const {
  callItem,
  callItemFail,
  callItemSuccess,
  searchError,
} = EdamamSlice.actions;

export const searchFood = (search) => async (dispatch) => {
  dispatch(callItem());
  try {
    const response = await axios.get(
      `${edamamAPI}/food-database/v2/parser?app_id=${edamamAppID}&app_key=${edamamAppKey}&ingr=${search}`
    );
    dispatch(callItemSuccess(response.data.hints));
  } catch (error) {
    dispatch(callItemFail(error.response));
  }
};

export default EdamamSlice.reducer;
