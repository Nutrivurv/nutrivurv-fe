import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getNutrients } from "../../../state/slices/EdamamSlice";

const DropDown = (props) => {
  var measuresList = props.selectedItemObject.measures;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [label, setlabel] = useState(measuresList[0].label);
  const [uri, setURI] = useState("");

  var foodId = props.selectedItemObject.food.foodId;

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };
  const handleLabelChange = (measure) => {
    setURI(measure.uri);
    setlabel(measure.label);
    console.log("measure.uri", measure.uri);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("foodId", foodId, "uri", uri, "quantity", quantity);
    dispatch(getNutrients(foodId, uri, quantity));
  };

  return (
    <div className="dropdown">
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="quantity input">Quantity</label>
        <input
          className="rounded p-1 w-100 border border-primary"
          type="number"
          id="itemQuantity"
          name="item_quantity"
          placeholder="Enter quantity (number)"
          defaultValue={1}
          onChange={handleChange}
        />

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {measuresList.map((measure) => (
              <Dropdown.Item
                key={measure.uri}
                className="dropdown-item"
                href="#"
                value={measure.label}
                onClick={() => {
                  handleLabelChange(measure);
                }}
              >
                {measure.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button>Update</button>
      </form>
    </div>
  );
};

export default DropDown;
