import React, { useState } from "react";
import moment from "moment";

const Calendar = (props) => {
  const [date, setDate] = useState(1);

  let backDateArray = [];

  const backDate = () => {
    let a = moment();
    let b = moment("2010-08-07");
    for (let m = a; m.isAfter(b); m.subtract(1, "day")) {
      backDateArray.push(m.format("YYYY-MM-DD"));
    }

    for (let i = 0; i < backDateArray.length; i++) {
      if (date === i) {
        console.log(date);
        setDate(date + 1);
        props.setStartDate(backDateArray[i]);
      }
    }
  };

  return (
    <div>
      <button onClick={backDate} value={props.startDate} type="hover"></button>
      <input
        className=""
        type="date"
        value={moment(props.startDate).format("YYYY-MM-DD")}
        onChange={(e) => props.setStartDate(e.target.value)}
      />
      {/* <button onClick={} type="hover"></button> */}
    </div>
  );
};

export default Calendar;
