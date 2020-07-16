import React from "react";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const SearchResults = () => {
  const { items } = useSelector((state) => state.edamam);

  return items.map((list, i) => (
    <div key={i}>
      <div className="d-flex justify-content-center my-2">
        <h5 className="mr-5" style={{ width: "45%" }}>
          {list.food.label}
        </h5>
        <DropDown list={list} />
      </div>
    </div>
  ));
};

export default SearchResults;
