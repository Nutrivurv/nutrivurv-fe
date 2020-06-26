import axios from "axios";

const { createSlice, combineReducers } = require("@reduxjs/toolkit");

const SignUpSlice = createSlice({
  name: "auth",
  initialState: {
    user:{
      name:'',
      email:'',
      password:'',
    },
    token:{},
    isFetchingLogin: false,

  },
  reducers: {
    signUp(state, action){
      return{
        ...state,
        token: action.payload
      }
    },
    login(state, action){
      return{
        ...state,
        isFetchingLogin: true
      }
    },
}})

export const {signUp, login} = SignUpSlice.actions;

export default SignUpSlice.reducer


// export const rootReducer = combineReducers({
//   SignUpSlice
// });
