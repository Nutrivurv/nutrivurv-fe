import React from "react";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const NutritionInfo = (props) => {
  const { items, currentItem } = useSelector((state) => state.edamam);
  var selectedItemInList = items.filter(function (item) {
    return item.food.foodId === props.selectedFoodId;
  });
  var selectedItemObject = selectedItemInList[0];

  return (
    <div className="d-block">
      <p>Current Item: {JSON.stringify(currentItem)}</p>
      <DropDown
        items={items}
        selectedItem={props.selectedItem}
        selectedItemObject={selectedItemObject}
      />
      <img alt="food" src={props.selectedItem.image} />
      <h2>{props.selectedItem.label}</h2>
    </div>
  );
};
export default NutritionInfo;
