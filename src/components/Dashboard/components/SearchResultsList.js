import React from "react";
import { useSelector } from "react-redux";

const SearchResultsList = (props) => {
  const { items } = useSelector((state) => state.auth);

  return items.map((list) => (
    <div onClick={() => props.handleItemClick(list)} key={list.foodId}>
      <div className="list-group-item list-group-item-action w-50 d-flex">
        <h5 className="mr-5" style={{ width: "45%" }}>
          {list.food.label}
        </h5>
      </div>
    </div>
  ));
};

export default SearchResultsList;
