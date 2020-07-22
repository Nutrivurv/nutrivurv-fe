import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  items: [],
  currentItem: {},
  searchError: null,
  searchStart: false,
  searchSuccess: false,
  searchFail: false,
};

const EdamamSlice = createSlice({
  name: "edamam",
  initialState,
  reducers: {
    callItem: (state, action) => {
      state.searchStart = true;
      state.searchSuccess = false;
      state.searchFail = false;
      state.searchError = "";
    },
    callItemSuccess: (state, action) => {
      state.items = action.payload;
      state.searchStart = false;
      state.searchSuccess = true;
      state.searchFail = false;
      state.searchError = "";
    },
    callItemFail: (state, action) => {
      state.searchError = action.payload;
      state.searchStart = false;
      state.searchSuccess = false;
      state.searchFail = true;
    },
    callNutrients: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const {
  callItem,
  callItemFail,
  callItemSuccess,
  searchError,
  callNutrients,
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

export const getNutrients = (id, uri, quantity) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${edamamAPI}/food-database/v2/nutrients?app_id=${edamamAppID}&app_key=${edamamAppKey}`,
      { ingredients: [{ quantity: quantity, measureURI: uri, foodId: id }] }
    );
    console.log(response.data);
    dispatch(callNutrients(response.data));
  } catch (error) {
    dispatch(callItemFail(error.response));
  }
};

export default EdamamSlice.reducer;
