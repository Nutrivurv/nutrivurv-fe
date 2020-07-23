import React from "react";
import { useSelector } from "react-redux";

const SearchResultsList = (props) => {
  const { items } = useSelector((state) => state.edamam);

  return items.map((item, i) => (
    <div onClick={() => props.handleItemClick(item)} key={i}>
      <div className="list-group-item list-group-item-action w-50 d-flex">
        <h5 className="mr-5" style={{ width: "45%" }}>
          {item.food.label}
        </h5>
      </div>
    </div>
  ));
};

export default SearchResultsList;
