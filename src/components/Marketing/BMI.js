import React, {useState} from 'react';

const BMI = () => {

  const [bttn, setBttn] = useState(true)

  return(
    <section>
      <div>
        <h3>Calculate your BMI</h3>
        <div className="p-1 mb-2 bg-warning"></div>
      </div>
      <div>
        <div>
          <h4>BMI Categories:</h4>
          <p>Underweight = 18.5</p>
          <p>Normal Weight = 18.5 - 24.9</p>
          <p>Overweight = 25 - 29.9</p>
          <p>Obese = BMI of 30 or greater</p>
        </div>
        <div>
          <h4>Enter Height & Weight</h4>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button 
            type="button" 
            onClick={() => setBttn(!bttn)} 
            className={`btn ${ bttn === true ? "btn-primary" : "btn-outline-primary"}`}
            >
              Standard
            </button>
            <button 
            type="button" 
            onClick={() => setBttn(!bttn)} 
            className={`btn ${ bttn === false ? "btn-primary" : "btn-outline-primary"}`}
            >
              Metric
            </button>
          </div>
          {
              bttn === true ? (
                <h1>Standard</h1>
              ) : (
                <h1>Metric</h1>
              )
            }
          <h5>Your BMI: </h5>
        </div>
      </div>
    </section>
  )
}

export default BMI