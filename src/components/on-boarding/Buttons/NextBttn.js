import React from "react";
import { connect } from "react-redux";
import {signUp} from '../../../State/Slices/slices'
import Axios from "axios";
import { data } from "jquery";

var jwt_decode = require('jwt-decode');

// const mapDispatch = {signUp}

const NextBttn = ({ handleSubmit, nextStep, history}) => {

  // const onSubmit = (data) => {
  //   console.log(data);
  //   const {username, email, password} = data;
  //   Axios
  //     .post(`https://nutrivurv-be.herokuapp.com/api/auth/register`,{name: username, email: email, password: password})
  //     .then(res=>{
  //       console.log(res.data);
  //       // history.push('/dashboard');
  //     })
  //     .catch(err => console.log('your username or password are incorrect'))
  //   nextStep()
  // }
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    nextStep();
  };

  return (
    <>
      <button
        data-cy="submit"
        type="submit"
        className="btn-primary rounded p-2 w-100 border border-primary"
        onClick={handleSubmit(onSubmit)}
      >
        Continue
      </button>
    </>
  );
};

export default connect(
  null,
  // mapDispatch,
) (NextBttn);
