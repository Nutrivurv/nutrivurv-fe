import React from "react";
import { ReactComponent as FullHeart } from "../../../../../assets/FullHeart.svg";
import { ReactComponent as Heart } from "../../../../../assets/HeartOutline.svg";

const Breakfast = (props) => {
  return (
    <tbody>
      {props.entries.meals.breakfast &&
        props.entries.meals.breakfast.map((data) => {
          return (
            <tr
              onClick={(e) => {
                e.preventDefault();
                props.handleItemClick(data);
              }}
              key={data.id}
            >
              <td scope="row">
                <span className="mr-2">
                  {props.favorite ? (
                    <FullHeart onClick={props.toggleFavorite} />
                  ) : (
                    <Heart onClick={props.toggleFavorite} />
                  )}
                </span>
                {data.food_name}
              </td>
              <td>{data.fat_g} g</td>
              <td>{data.protein_g} g</td>
              <td>{data.carbs_g} g</td>
              <td>{data.calories_kcal}</td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default Breakfast;
