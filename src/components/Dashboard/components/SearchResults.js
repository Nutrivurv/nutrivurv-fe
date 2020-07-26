import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNutrients, searchFood } from "../../../state/slices/EdamamSlice";
import NutritionInfo from "./NutritionInfo";
import SearchResultsList from "./SearchResultsList";

const SearchResults = () => {
  const [active, setActive] = useState(false);
  const { searchNutrientsSuccess, currentItem } = useSelector(
    (state) => state.edamam
  );

  const dispatch = useDispatch();

  const handleItemClick = (foodItem) => {
    const { label, foodId, image } = foodItem.food;
    const measures = foodItem.measures;
    const defaultMeasure = measures[0];
    const defaultQuantity = 1;
    dispatch(
      getNutrients(
        defaultQuantity,
        defaultMeasure,
        foodId,
        label,
        image,
        measures
      )
    );
  };

  return (
    <div className="d-flex justify-content-between">
      <div
        className="mt-5"
        style={{ width: "30vw", position: "relative", left: "5%" }}
      >
        <SearchResultsList active={active} handleItemClick={handleItemClick} />
      </div>
      <div className="w-50">
        {searchNutrientsSuccess && <NutritionInfo currentItem={currentItem} />}
      </div>
    </div>
  );
};

export default SearchResults;
