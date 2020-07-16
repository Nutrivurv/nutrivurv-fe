import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { searchFood } from "../../../state/slices/EdamamSlice";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const {
    searchError,
    searchStart,
    searchSuccess,
    searchFail,
    items,
  } = useSelector((state) => state.edamam);

  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = () => {
    dispatch(searchFood(encodeURIComponent(search)));
  };

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="row d-flex justify-content-center mt-5">
      <h3 className="p-4">Add Food to your Daily Log</h3>
      <form
        className="col-12 d-flex pl-5 justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Search a Food Item"
          value={search}
          onChange={handleChanges}
          className="col-5 mx-3 form-control form-control-lg"
        />
        <button type="submit" className="col-2 btn btn-primary">
          Search
        </button>
      </form>
      <div className="flex-column align-items-center w-100">
        <h3 className="pt-4 d-flex justify-content-center">Results</h3>
        {searchStart && (
          <div className="loading d-flex justify-content-center">
            <h4>Searching...</h4>
          </div>
        )}
        {searchSuccess && <SearchResults />}
        {searchFail && <h4>An error occurred. Please try again later.</h4>}
      </div>
    </div>
  );
};

export default SearchBar;
