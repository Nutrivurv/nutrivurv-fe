import React, { useState } from "react";
import NutritionInfo from "./NutritionInfo";
import SearchResultsList from "./SearchResultsList";

const SearchResults = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFoodId, setSelectedFoodId] = useState(0);

  const handleItemClick = (l) => {
    setSelectedItem(l.food);
    setSelectedFoodId(l.food.foodId);
  };

  return (
    <div>
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
