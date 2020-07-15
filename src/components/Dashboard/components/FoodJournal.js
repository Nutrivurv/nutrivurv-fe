import React, { useState } from "react";
import { Breakfast, Lunch, Dinner } from "./Data";
import { ReactComponent as Heart } from "../../../assets/HeartOutline.svg";
import { ReactComponent as FullHeart } from "../../../assets/FullHeart.svg";

const FoodJournal = () => {
  const [breakfast, setBreakfast] = useState(Breakfast);
  const [lunch, setLunch] = useState(Lunch);
  const [dinner, setDinner] = useState(Dinner);
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div>
      <table className="table-borderless table w-50 border-none">
        <thead>
          <tr>
            <th scope="col">Breakfast</th>
            <th scope="col">Fat</th>
            <th scope="col">Protein</th>
            <th scope="col">Carbs</th>
            <th scope="col">Calories</th>
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
                <td>{data.fat}</td>
                <td>{data.protein}</td>
                <td>{data.carbs}</td>
                <td>{data.calories}</td>
              </tr>
            </tbody>
          );
        })}
        <thead>
          <th scope="col">Lunch</th>
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
                <td>{data.fat}</td>
                <td>{data.protein}</td>
                <td>{data.carbs}</td>
                <td>{data.calories}</td>
              </tr>
            </tbody>
          );
        })}
        <thead>
          <th scope="col">Dinner</th>
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
                <td>{data.fat}</td>
                <td>{data.protein}</td>
                <td>{data.carbs}</td>
                <td>{data.calories}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default FoodJournal;
