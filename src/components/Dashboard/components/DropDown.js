import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNutrients } from "../../../state/slices/EdamamSlice";

const DropDown = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [label, setlabel] = useState("Serving Size");
  const [uri, setURI] = useState("Serving Size");
  const handleLabelChange = (measure) => {
    setURI(measure.uri);
    setlabel(measure.label);
  };
  var measuresList = props.selectedItemObject.measures;
  var foodId = props.selectedItemObject.food.foodId;

  const onSubmit = () => {
    dispatch(getNutrients(foodId, uri, quantity));
  };

  return (
    <div className="dropdown">
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
    </div>
  );
};

export default DropDown;
