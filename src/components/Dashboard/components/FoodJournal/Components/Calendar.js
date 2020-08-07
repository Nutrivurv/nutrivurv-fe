import React, { useState } from "react";
import moment from "moment";

const Calendar = (props) => {
  const [date, setDate] = useState(1);
  const [fwdDate, setFwdDate] = useState(0);

  let backDateArray = [];
  let forwardDateArray = [];

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

  const forwardDate = () => {
    let a = moment();
    let b = moment(props.startDate);
    for (let m = b; m.isBefore(a); m.add(1, "day")) {
      forwardDateArray.push(m.format("YYYY-MM-DD"));
    }
    for (let i = 0; i < forwardDateArray.length; i++) {
      if (date > i) {
        setDate(date - 1);
        props.setStartDate(forwardDateArray[1]);
      }
    }
    if (fwdDate === forwardDateArray.length) {
      setFwdDate(0);
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
      <button onClick={forwardDate} type="hover"></button>
    </div>
  );
};

export default Calendar;
