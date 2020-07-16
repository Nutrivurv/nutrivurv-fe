import React, { useState } from "react";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const NutritionInfo = (props) => {
  const { items } = useSelector((state) => state.edamam);
  var selectedItemInList = items.filter(function (item) {
    return item.food.foodId === props.selectedFoodId;
  });
  var selectedItemObject = selectedItemInList[0];

  return (
    <div className="d-block">
      <h5>You clicked an item!</h5>
      <p>Selected Item: {JSON.stringify(props.selectedItem)}</p>
      <DropDown
        items={items}
        selectedItem={props.selectedItem}
        selectedItemObject={selectedItemObject}
      />
      <img src={props.selectedItem.image} />
      <h2>{props.selectedItem.label}</h2>
    </div>
  );
};
export default NutritionInfo;
