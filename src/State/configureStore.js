import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {rootReducer} from './Slices/slices';


export const store = configureStore({
    reducer: rootReducer,
})