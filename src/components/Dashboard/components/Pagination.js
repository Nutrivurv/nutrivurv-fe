import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFood, Next } from "../../../state/slices/EdamamSlice";
import Pagination from "react-bootstrap/Pagination";

const ItemPagination = ({ itemArr, setItemArr }) => {
  const { items, pagination, pageArr } = useSelector((state) => state.edamam);
  const [number, setNumber] = useState(1);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  return (
    <Pagination className="justify-content-center mt-3">
      <Pagination.Item
        active={number === pageArr[0]}
        onClick={(e) => {
          setNumber(pageArr[0]);
          setItemArr(items.slice(0, 5));
          console.log(pageArr[0]);
        }}
      >
        {pageArr[0]}
      </Pagination.Item>
      <Pagination.Item
        active={number === pageArr[1]}
        onClick={(e) => {
          setNumber(pageArr[1]);
          setItemArr(items.slice(5, 10));
        }}
      >
        {pageArr[1]}
      </Pagination.Item>
      <Pagination.Item
        active={number === pageArr[2]}
        onClick={(e) => {
          setNumber(pageArr[2]);
          setItemArr(items.slice(10, 15));
        }}
      >
        {pageArr[2]}
      </Pagination.Item>
      <Pagination.Item
        active={number === pageArr[3]}
        onClick={(e) => {
          setNumber(pageArr[3]);
          setItemArr(items.slice(15, 20));
        }}
      >
        {pageArr[3]}
      </Pagination.Item>
      <Pagination.Ellipsis
        onClick={() => {
          setActive(!active);
          dispatch(searchFood(null, pagination.next.href));
          dispatch(Next(Array.from(pageArr, (x) => 4 + x)));
        }}
      />
    </Pagination>
  );
};

export default ItemPagination;
