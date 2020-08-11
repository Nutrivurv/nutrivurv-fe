import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const Budget = ({ totals, user, size, pH}) => {
  const total = Math.round(totals);
  console.log("total", total, "user", user, "size", size,);
  const data = [
    ["Budget", "Amount"],
    ["Daily Total", total],
    ["Remaining Budget", user - total],
  ];
  const options = {
    pieHole: pH,
    is3D: false,
    legend: {
      position: "none",
    },
    chartArea: {
      width: size,
      height: size,
    },
    backgroundColor: "none",
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width={250}
        height={300}
        data={data}
        options={options}
      />
    </div>
  );
};
