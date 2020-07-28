import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./Pagination";

const SearchResultsList = (props) => {
  const { items, currentItem } = useSelector((state) => state.edamam);
  const [itemArr, setItemArr] = useState(items.slice(0, 8));

  return (
    <>
      {itemArr.map((item, i) => (
        <div
          className="list-group p-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.handleItemClick(item);
          }}
          key={i}
        >
          <div
            className={`border-bottom justify-content-center list-group-item-action list-group-item d-flex ${
              item.food.foodId === currentItem.foodId &&
              item.food.label === currentItem.label
                ? "active"
                : ""
            }`}
            style={{ border: "none" }}
          >
            <h6 className="text-center">
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
