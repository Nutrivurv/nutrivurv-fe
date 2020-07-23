import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  items: [],
  currentItem: {},
  searchError: null,
  searchNutrientsError: null,
  searchStart: false,
  searchSuccess: false,
  searchFail: false,
  searchNutrientsStart: false,
  searchNutrientsSuccess: false,
  searchNutrientFail: false,
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
      state.currentItem = {};
      state.searchNutrientsStart = false;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = false;
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
    callNutrientsStart: (state) => {
      state.searchNutrientsStart = true;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = false;
    },
    callNutrientsSuccess: (state, action) => {
      state.currentItem = {
        ...action.payload.currentItem,
      };
      state.searchNutrientsStart = false;
      state.searchNutrientsSuccess = true;
      state.searchNutrientFail = false;
    },
    callNutrientsFail: (state, action) => {
      state.searchNutrientsError = action.payload;
      state.searchNutrientsStart = false;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = true;
    },
  },
});

export const {
  callItem,
  callItemFail,
  callItemSuccess,
  searchError,
  callNutrientsStart,
  callNutrientsSuccess,
  callNutrientsFail,
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

export const getNutrients = (
  quantity,
  measure,
  foodId,
  label = null,
  image = null,
  measures = null
) => async (dispatch, getState) => {
  dispatch(callNutrientsStart());

  try {
    const response = await axios.post(
      `${edamamAPI}/food-database/v2/nutrients?app_id=${edamamAppID}&app_key=${edamamAppKey}`,
      { ingredients: [{ quantity, measureURI: measure.uri, foodId }] }
    );

    const currentItem = getState().edamam.currentItem;

    dispatch(
      callNutrientsSuccess({
        currentItem: {
          quantity,
          measure,
          foodId,
          label: label ? label : currentItem.label,
          image: image ? image : currentItem.image,
          measures: measures ? measures : currentItem.measures,
          nutrition: response.data,
        },
      })
    );
  } catch (error) {
    dispatch(callNutrientsFail(error.response));
  }
};

export default EdamamSlice.reducer;
