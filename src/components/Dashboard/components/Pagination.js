import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Next, searchFood } from "../../../state/slices/EdamamSlice";

const ItemPagination = ({ itemArr, setItemArr }) => {
  const { items, pagination, pageArr, prevPage } = useSelector(
    (state) => state.edamam
  );
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const arr = [1, 2, 3, 6];
  return (
    <Pagination
      id="pagination"
      bg="light"
      className="justify-content-center mt-3"
    >
      <Pagination.Ellipsis
        id="backPage"
        disabled={arr[0] === pageArr[0]}
        onClick={() => {
          dispatch(searchFood(null, prevPage[0]));
          console.log(pagination);
          dispatch(Next(Array.from(pageArr, (x) => x - 3)));
        }}
      />
      <Pagination.Item
        id="1stPage"
        bg="light"
        active={number === pageArr[0]}
        onClick={(e) => {
          setItemArr(items.slice(0, 8));
          setNumber(pageArr[0]);
        }}
      >
        {pageArr[0]}
      </Pagination.Item>
      <Pagination.Item
        id="2ndPage"
        active={number === pageArr[1]}
        onClick={(e) => {
          setNumber(pageArr[1]);
          setItemArr(items.slice(8, 16));
        }}
      >
        {pageArr[1]}
      </Pagination.Item>
      <Pagination.Item
        id="3rdPage"
        active={number === pageArr[2]}
        onClick={(e) => {
          setNumber(pageArr[2]);
          setItemArr(items.slice(16, 21));
        }}
      >
        {pageArr[2]}
      </Pagination.Item>
      <Pagination.Ellipsis
        id="nextPage"
        disabled={arr[3] === pageArr[2]}
        onClick={() => {
          dispatch(searchFood(null, pagination.next.href));
          dispatch(Next(Array.from(pageArr, (x) => 3 + x)));
        }}
      />
    </Pagination>
  );
};

export default ItemPagination;
