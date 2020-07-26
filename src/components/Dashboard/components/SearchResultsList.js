import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./Pagination";

const SearchResultsList = (props) => {
  const { items, currentItem } = useSelector((state) => state.edamam);
  const [itemArr, setItemArr] = useState(items.slice(0, 5));

  return (
    <>
      {itemArr.map((item, i) => (
        <div
          className="list-group"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.handleItemClick(item);
          }}
          key={i}
        >
          <div
            className={`justify-content-center list-group-item-info list-group-item-action list-group-item d-flex ${
              item.food.foodId === currentItem.foodId ? "active" : ""
            }`}
          >
            <h6>
              {item.food.label
                .toLowerCase()
                .split(" ")
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join()
                .replace(/,/g, " ")}
            </h6>
          </div>
        </div>
      ))}
      <Pagination itemArr={itemArr} setItemArr={setItemArr} />
    </>
  );
};

export default SearchResultsList;
