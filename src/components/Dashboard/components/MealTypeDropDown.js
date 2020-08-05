import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { addFoodToJournal } from "../../../state/slices/userinfo";
import moment from "moment";

const MealTypeDropDown = (props) => {
  const { foodId, measure, label, quantity, nutrition } = props.currentItem;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mealType, setNewMealType] = useState("Breakfast");

  const handleMealTypeChange = (meal) => {
    setNewMealType(meal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      user_id: user.id,
      date: moment().format("YYYY-MM-DD"),
      meal_type: mealType.toLowerCase(),
      edamam_food_id: foodId,
      measurement_uri: measure.uri,
      measurement_name: measure.label.toLowerCase(),
      food_name: label,
      quantity: quantity,
      calories_kcal: Math.round(
        nutrition.totalNutrients["ENERC_KCAL"]["quantity"]
      ),
      fat_g: Math.round(100 * nutrition.totalNutrients.FAT.quantity) / 100,
      carbs_g: Math.round(100 * nutrition.totalNutrients.CHOCDF.quantity) / 100,
      protein_g:
        Math.round(100 * nutrition.totalNutrients.PROCNT.quantity) / 100,
    };

    dispatch(addFoodToJournal(post));
  };

  const mealTypeList = ["Breakfast", "Lunch", "Dinner", "Snack"];

  return (
    <div className="dropdown mx-2 px-4">
      <form onSubmit={handleSubmit} className="form-group">
        {/* <label htmlFor="meal type input" className="w-100">
          Select Meal Type
        </label> */}
        <div className="d-flex justify-content-center align-text-top">
          <div className="d-flex flex-column d-sm-block d-md-flex">
            <div className="d-flex w-100">
              <Dropdown className="w-100">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {mealType}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {mealTypeList.map((meal) => (
                    <Dropdown.Item
                      key={meal}
                      className="dropdown-item"
                      href="#"
                      value={meal}
                      onClick={() => {
                        handleMealTypeChange(meal);
                      }}
                    >
                      {meal}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="ml-2 button">
            <button className="btn-primary rounded p-2 border border-primary">
              Log Food
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MealTypeDropDown;
