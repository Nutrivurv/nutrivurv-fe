import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFoodLogEntries,
  editFoodJournal,
} from "../../../../../state/slices/userinfo";
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
  const [journalItem, setJournalItem] = useState();
  const { items, currentItem, searchNutrientsSuccess } = useSelector(
    (state) => state.edamam
  );
  const [mealType, setNewMealType] = useState(currentItem.meal_type);
  const [newMeasure, setNewMeasure] = useState();
  const [newEntries, setNewEntries] = useState(entries);
  const handleItemClick = (foodItem) => {
    setJournalItem(foodItem);
    setNewMealType(foodItem.meal_type);
    setNewMeasure(foodItem.all_measurements);
    setNewEntries(entries);
    const {
      quantity,
      edamam_food_id,
      measurement_name,
      food_name,
      measurement_uri,
      all_measurements,
      measures,
      image_url,
    } = foodItem;
    console.log("food item", foodItem);
    dispatch(
      getNutrients(
        Number(quantity),
        measurement_name,
        edamam_food_id,
        food_name,
        image_url,
        all_measurements
      )
    );
  };

  useEffect(() => {
    dispatch(getFoodLogEntries(moment(startDate).format("YYYY-MM-DD")));
  }, [getFoodLogEntries, startDate]);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  if (!fetchEntriesSuccess) return null;

  return (
    <div className="w-75" style={{ margin: "0px auto" }}>
      <div className="d-flex justify">
        <Calendar startDate={startDate} setStartDate={setStartDate} />
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
          entries={newEntries}
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
          entries={newEntries}
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
          entries={newEntries}
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
          entries={newEntries}
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
          <JournalNutritionInfo
            mealType={mealType}
            setNewMealType={setNewMealType}
            journalItem={journalItem}
            currentItem={currentItem}
            newMeasure={newMeasure}
            setNewMeasure={setNewMeasure}
          />
        )}
      </div>
    </div>
  );
};

export default FoodJournal;
