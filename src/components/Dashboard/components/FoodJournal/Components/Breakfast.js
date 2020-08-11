import React from "react";
import { ReactComponent as FullHeart } from "../../../../../assets/FullHeart.svg";
import { ReactComponent as Heart } from "../../../../../assets/HeartOutline.svg";
import { deleteFoodLogEntries } from "../../../../../state/slices/userinfo";
import { useDispatch } from "react-redux";

const Breakfast = (props) => {
  const dispatch = useDispatch();

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
              <td>{data.id}</td>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteFoodLogEntries(data.id));
                }}
              ></button>
            </tr>
          );
        })}
    </tbody>
  );
};

export default Breakfast;
