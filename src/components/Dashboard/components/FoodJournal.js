import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as FullHeart } from "../../../assets/FullHeart.svg";
import { ReactComponent as Heart } from "../../../assets/HeartOutline.svg";
import { getFoodLogEntries } from "../../../state/slices/userinfo";
import JournalNutritionInfo from "./JournalNutritionInfo";
import { getNutrients } from "../../../state/slices/EdamamSlice";

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
    dispatch(getFoodLogEntries(entries));
  }, [getFoodLogEntries]);

  console.log(entries);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  if (!fetchEntriesSuccess) return null;

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
        {entries.meals.breakfast &&
          entries.meals.breakfast.map((data) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(data);
                }}
                key={data.id}
              >
                <tbody key={data.id}>
                  <tr>
                    <td scope="row">
                      <span className="mr-2">
                        {favorite ? (
                          <FullHeart onClick={toggleFavorite} />
                        ) : (
                          <Heart onClick={toggleFavorite} />
                        )}
                      </span>
                      {data.food_name}
                    </td>
                    <td>{data.fat_g} g</td>
                    <td>{data.protein_g} g</td>
                    <td>{data.carbs_g} g</td>
                    <td>{data.calories_kcal}</td>
                  </tr>
                </tbody>
              </div>
            );
          })}
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Lunch</h5>
          </th>
        </thead>
        {entries.meals.lunch &&
          entries.meals.lunch.map((data) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(data);
                }}
                key={data.id}
              >
                <tbody key={data.id}>
                  <tr>
                    <td scope="row">
                      <span className="mr-2">
                        {favorite ? (
                          <FullHeart onClick={toggleFavorite} />
                        ) : (
                          <Heart onClick={toggleFavorite} />
                        )}
                      </span>
                      {data.food_name}
                    </td>
                    <td>{data.fat_g} g</td>
                    <td>{data.protein_g} g</td>
                    <td>{data.carbs_g} g</td>
                    <td>{data.calories_kcal}</td>
                  </tr>
                </tbody>
              </div>
            );
          })}
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Dinner</h5>
          </th>
        </thead>
        {entries.meals.dinner &&
          entries.meals.dinner.map((data) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(data);
                }}
                key={data.id}
              >
                <tbody key={data.id}>
                  <tr>
                    <td scope="row">
                      <span className="mr-2">
                        {favorite ? (
                          <FullHeart onClick={toggleFavorite} />
                        ) : (
                          <Heart onClick={toggleFavorite} />
                        )}
                      </span>
                      {data.food_name}
                    </td>
                    <td>{data.fat_g} g</td>
                    <td>{data.protein_g} g</td>
                    <td>{data.carbs_g} g</td>
                    <td>{data.calories_kcal}</td>
                  </tr>
                </tbody>
              </div>
            );
          })}
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Snack</h5>
          </th>
        </thead>
        {entries.meals.snack &&
          entries.meals.snack.map((data) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(data);
                }}
                key={data.id}
              >
                <tbody key={data.id}>
                  <tr>
                    <td scope="row">
                      <span className="mr-2">
                        {favorite ? (
                          <FullHeart onClick={toggleFavorite} />
                        ) : (
                          <Heart onClick={toggleFavorite} />
                        )}
                      </span>
                      {data.food_name}
                    </td>
                    <td>{data.fat_g} g</td>
                    <td>{data.protein_g} g</td>
                    <td>{data.carbs_g} g</td>
                    <td>{data.calories_kcal}</td>
                  </tr>
                </tbody>
              </div>
            );
          })}
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
