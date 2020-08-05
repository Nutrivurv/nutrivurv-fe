import React, { useState, useEffect } from "react";
import { ReactComponent as Heart } from "../../../assets/HeartOutline.svg";
import { ReactComponent as FullHeart } from "../../../assets/FullHeart.svg";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { getFoodLogEntries } from "../../../state/slices/userinfo";

const FoodJournal = () => {
  const dispatch = useDispatch();
  const { entries } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getFoodLogEntries(entries));
  }, [getFoodLogEntries]);
  console.log(entries);

  const [favorite, setFavorite] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  // const TotalCalories =
  // breakfast.reduce((total, meal) => total + meal.calories, 0) +
  // lunch.reduce((total, meal) => total + meal.calories, 0) +
  // dinner.reduce((total, meal) => total + meal.calories, 0);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="w-75" style={{ margin: "0px auto" }}>
      <div className="text-center my-3">
        <DatePicker
          className="text-center border-0"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>
      <table className="table-borderless table border-none">
        <thead>
          <tr>
            <th scope="col">
              <h5 className="font-weight-bold">Breakfast</h5>
            </th>
            <th scope="col">
              {" "}
              <h5 className="font-weight-bold">Fat</h5>
            </th>
            <th scope="col">
              {" "}
              <h5 className="font-weight-bold">Protein</h5>{" "}
            </th>
            <th scope="col">
              {" "}
              <h5 className="font-weight-bold">Carbs</h5>{" "}
            </th>
            <th scope="col">
              {" "}
              <h5 className="font-weight-bold">Calories</h5>{" "}
            </th>
          </tr>
        </thead>
        <th scope="col">
          <h5 className="font-weight-bold">Snack</h5>
        </th>
      </table>
      <div className="d-flex justify-content-between">
        <p>Total Water:</p>
        <p className="pr-5"> Total Calories:</p>
      </div>
    </div>
  );
};

export default FoodJournal;
