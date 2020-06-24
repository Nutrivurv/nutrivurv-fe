import React from "react";

const BackBttn = ({ prevStep }) => {
  return (
    <button
      onClick={() => prevStep()}
      className="mt-3 btn-secondary rounded p-2 w-100"
    >
      Back
    </button>
  );
};

export default BackBttn;
