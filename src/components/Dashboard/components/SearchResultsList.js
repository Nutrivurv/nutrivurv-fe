import React from "react";
import { useSelector } from "react-redux";

const SearchResultsList = (props) => {
  const { items } = useSelector((state) => state.edamam);

  return items.map((item, i) => (
    <div onClick={() => props.handleItemClick(item)} key={i} className="mr-2">
      <div className="list-group-item list-group-item-action d-flex">
        <h5>
          {item.food.label}
        </h5>
      </div>
    </div>
  ));
};

export default SearchResultsList;
