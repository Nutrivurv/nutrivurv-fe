import React, { useState } from "react";
import { data } from "./Data";
import { ReactComponent as Heart } from "../../../assets/HeartOutline.svg";
import { ReactComponent as FullHeart } from "../../../assets/FullHeart.svg";

const FoodJournal = () => {
  const [breakfast, setBreakfast] = useState(data.Breakfast);
  const [lunch, setLunch] = useState(data.Lunch);
  const [dinner, setDinner] = useState(data.Dinner);
  const [favorite, setFavorite] = useState(false);

  const TotalCalories =
    breakfast.reduce((total, meal) => total + meal.calories, 0) +
    lunch.reduce((total, meal) => total + meal.calories, 0) +
    dinner.reduce((total, meal) => total + meal.calories, 0);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="w-50">
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
        {breakfast.map((data) => {
          return (
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
                  {data.food}
                </td>
                <td >{data.fat} g</td>
                <td>{data.protein} g</td>
                <td>{data.carbs} g</td>
                <td>{data.calories}</td>
              </tr>
            </tbody>
          );
        })}
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Lunch</h5>
          </th>
        </thead>
        {lunch.map((data) => {
          return (
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
                  {data.food}
                </td>
                <td>{data.fat} g</td>
                <td>{data.protein} g</td>
                <td>{data.carbs} g</td>
                <td>{data.calories}</td>
              </tr>
            </tbody>
          );
        })}
        <thead>
          <th scope="col">
            <h5 className="font-weight-bold">Dinner</h5>
          </th>
        </thead>
        {dinner.map((data) => {
          return (
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
                  {data.food}
                </td>
                <td>{data.fat} g</td>
                <td>{data.protein} g</td>
                <td>{data.carbs} g</td>
                <td>{data.calories}</td>
              </tr>
            </tbody>
          );
        })}
        <th scope="col">
          <h5 className="font-weight-bold">Snack</h5>
        </th>
      </table>
      <div className="d-flex justify-content-between">
        <p>Total Water:</p>
        <p>Total Calories:{TotalCalories}</p>
      </div>
    </div>
  );
};

export default FoodJournal;
