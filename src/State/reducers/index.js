import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../Slices/slices';

export default combineReducers({
    auth: authReducer
});