import React from "react";

const NextBttn = ({ handleSubmit, nextStep }) => {
  const onSubmit = (data) => {
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

export default NextBttn;
