import React from "react";
import { ReactComponent as FullHeart } from "../../../../../assets/FullHeart.svg";
import { ReactComponent as Heart } from "../../../../../assets/HeartOutline.svg";

const Dinner = (props) => {
  return (
    <div>
      {props.entries.meals.dinner &&
        props.entries.meals.dinner.map((data) => {
          return (
            <tbody
              onClick={(e) => {
                e.preventDefault();
                props.handleItemClick(data);
              }}
              key={data.id}
            >
              <tr>
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
            </tbody>
          );
        })}
    </div>
  );
};

export default Dinner;
