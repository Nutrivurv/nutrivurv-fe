import React, { useState } from "react";
import NutritionInfo from "./NutritionInfo";
import SearchResultsList from "./SearchResultsList";

const SearchResults = () => {
<<<<<<< HEAD
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
=======
  const { items } = useSelector((state) => state.edamam);

  return items.map((list, i) => (
    <div key={i}>
      <div className="d-flex justify-content-center my-2">
        <h5 className="mr-5" style={{ width: "45%" }}>
          {list.food.label}
        </h5>
        <DropDown list={list} />
>>>>>>> master
      </div>
    </div>
  );
};

export default SearchResults;
