import React, { useState } from "react";
import NutritionInfo from "./NutritionInfo";
import SearchResultsList from "./SearchResultsList";

const SearchResults = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (l) => {
    setSelectedItem(l.food);
  };

  return (
    <div>
      <SearchResultsList handleItemClick={handleItemClick} />
      <div className="d-flex w-50">
        {selectedItem && <NutritionInfo selectedItem={selectedItem} />}
      </div>
    </div>
  );
};

export default SearchResults;
