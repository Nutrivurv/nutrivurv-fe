import React from "react";
import { ReactComponent as LandingImage }from "../../assets/Splash.svg"
import { Link } from "react-router-dom"; 

const Marketing = () => {

  return(
    <div className="marketing" style={{height: "110vh"}}>
      <section className=" ml-lg-5">
        <div className="ml-5 ">
          <h2 className="row-8 ml-5">
            Tracking your calories <br/>
            just got easier.
          </h2>
          <p className="row-8 ml-5">
            Nutrivurv is an easy to use <br/>
            motivating food and nutrition <br/>
            tracking app.
          </p>
          <Link type="button" to="/signup" >
            <button className="btn btn-primary ml-5 btn-primary">Sign Up</button>
            </Link>
        </div>
        <figure className="row px-0 ml-5">
            <LandingImage width="300px"/>
        </figure>
      </section>
    </div>
  )
}

export default Marketing