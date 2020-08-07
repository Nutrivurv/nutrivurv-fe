import React from "react";

const Calendar = () => {
    return (
        <div>
            <button onClick={} value={startDate} type="hover"></button>
        <input
          className=""
          type="date"
          value={moment(startDate).format("YYYY-MM-DD")}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <button onClick={} type="hover"></button>

        </div>
    )

};

export default Calendar;