import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodLogEntries } from "../../../../../state/slices/userinfo";
import JournalNutritionInfo from "../../Nutrition/JournalNutritionInfo";
import { getNutrients } from "../../../../../state/slices/EdamamSlice";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Snack from "./Snack";
import Calendar from "./Calendar";
import moment from "moment";

const FoodJournal = () => {
  const dispatch = useDispatch();
  const { entries, fetchEntriesSuccess } = useSelector((state) => state.user);
  const [favorite, setFavorite] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { items, currentItem, searchNutrientsSuccess } = useSelector(
    (state) => state.edamam
  );

  const handleItemClick = (foodItem) => {
    console.log("clicked item", foodItem);
    const label = foodItem.food_name;
    const foodId = foodItem.edamam_food_id;
    const quantity = parseInt(foodItem.quantity);
    const measure = foodItem.measurement_uri;
    const image = null;
    dispatch(getNutrients(quantity, measure, foodId, label, image, null));
  };

  useEffect(() => {
    dispatch(getFoodLogEntries(moment(startDate).format("YYYY-MM-DD")));
  }, [getFoodLogEntries, startDate]);

  console.log(startDate);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  if (!fetchEntriesSuccess) return null;

  return (
    <div className="w-75" style={{ margin: "0px auto" }}>
      <div className="align-contents-center">
        <Calendar />
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
        <Breakfast
          entries={entries}
          handleItemClick={handleItemClick}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
        />
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Lunch</h5>
          </th>
        </thead>
        <Lunch
          entries={entries}
          handleItemClick={handleItemClick}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
        />
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Dinner</h5>
          </th>
        </thead>
        <Dinner
          entries={entries}
          handleItemClick={handleItemClick}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
        />
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Snack</h5>
          </th>
        </thead>
        <Snack
          entries={entries}
          handleItemClick={handleItemClick}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
        />
      </table>
      <div className="d-flex justify-content-between">
        <p>Total Water:</p>
        <p className="pr-5"> Total Calories:</p>
      </div>
      <div>
        {searchNutrientsSuccess && (
          <JournalNutritionInfo currentItem={currentItem} />
        )}
      </div>
    </div>
  );
};

export default FoodJournal;
