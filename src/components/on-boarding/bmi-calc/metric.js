import React from "react";

const Metric = ({ bmi, setBmi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    calc(bmi);
  };

  const handleChanges = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
  };

  const calc = (bmi) => {
    let meters = Number(bmi.cm) / 100;
    let height = meters * meters;
    console.log(height);
    console.log(meters);
    const userBmi = Math.ceil(Number(bmi.kg) / height);
    return setBmi({ ...bmi, total: userBmi });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row my-3">
          <input
            className="form-control form-control-sm col-md-2 my-2 ml-3 mr-1"
            type="text"
            label="Your Height"
            name="cm"
            placeholder="cm"
            value={bmi.cm}
            onChange={handleChanges}
          ></input>
          <input
            className="form-control form-control-sm col-md-2 my-2 mx-1"
            type="text"
            label="Your Height"
            name="kg"
            placeholder="kg"
            value={bmi.kg}
            onChange={handleChanges}
          ></input>
        </div>
        <button className="btn btn-outline-info mb-3" type="submit">
          Calculate
        </button>
        <h5>
          Your BMI: <span className="text-info">{bmi.total}</span>
        </h5>
      </form>
    </>
  );
};

export default Metric;
