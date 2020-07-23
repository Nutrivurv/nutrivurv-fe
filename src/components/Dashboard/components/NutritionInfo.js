import React from "react";
import DropDown from "./DropDown";

const NutritionInfo = (props) => {
  const currentItem = props.currentItem;

  return (
    <div className="d-block">
      <p>Current Item: {JSON.stringify(currentItem)}</p>
      <DropDown currentItem={currentItem} />
      <img alt="food" src={currentItem.image} />
      <h2>{currentItem.label}</h2>
    </div>
  );
};
export default NutritionInfo;
