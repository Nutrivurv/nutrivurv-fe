import React, { useState } from "react";
import NutritionInfo from "./NutritionInfo";
import SearchResultsList from "./SearchResultsList";
import { useDispatch } from "react-redux";
import { getNutrients } from "../../../state/slices/EdamamSlice";

const SearchResults = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFoodId, setSelectedFoodId] = useState(0);
  const dispatch = useDispatch();

  const handleItemClick = (l) => {
    const quantityInput = document.getElementById("quantity");
    if (quantityInput !== null) {
      quantityInput.reset();
    }
    setSelectedItem(l.food);
    setSelectedFoodId(l.food.foodId);
    dispatch(getNutrients(l.food.foodId, l.food.uri, 1));
  };

  return (
    <div
      style={{
        position: "relative",
        left: "10%",
      }}
    >
      <SearchResultsList handleItemClick={handleItemClick} />
      <div className="d-flex w-50">
        {selectedItem && (
          <NutritionInfo
            selectedItem={selectedItem}
            selectedFoodId={selectedFoodId}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
