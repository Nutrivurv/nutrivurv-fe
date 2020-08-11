import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const Budget = ({ totals, user, type, size }) => {
  const total = Math.round(totals);
  console.log("total", total, "user", user);
  const data = [
    ["Task", "Hours per Day"],
    ["Daily Total", total],
    ["Remaining Budget", user - total],
  ];
  const options = {
    title: type,
    pieHole: 0.5,
    is3D: false,
    legend: {
      position: 'none'
    },
  };

  return (
    <div className="Calorie_budget">
      <Chart
        chartType="PieChart"
        width={250}
        height={size}
        data={data}
        options={options}
      />
    </div>
  );
};