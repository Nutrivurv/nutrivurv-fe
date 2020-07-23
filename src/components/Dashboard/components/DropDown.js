import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getNutrients } from "../../../state/slices/EdamamSlice";

const DropDown = (props) => {
  const { measures, foodId, quantity, measure } = props.currentItem;

  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newMeasure, setNewMeasure] = useState(measure);

  const handleChange = (e) => {
    e.preventDefault();
    setNewQuantity(Number(e.target.value));
  };

  const handleMeasureChange = (newMeasure) => {
    setNewMeasure(newMeasure);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNutrients(newQuantity, newMeasure, foodId));
  };

  return (
    <div className="dropdown">
      <form onSubmit={handleSubmit} className="form-group">
      <label htmlFor="quantity input" className="w-100">Quantity</label>
        <div className="d-flex m-0 p-0">
        <div>
        <input
          className="rounded p-1 w-50 border border-primary"
          type="number"
          id="itemQuantity"
          name="item_quantity"
          placeholder="Enter quantity (number)"
          defaultValue={newQuantity}
          onChange={handleChange}
        />
        </div>
        <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {newMeasure.label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {measures.map((measure) => (
              <Dropdown.Item
                key={measure.uri}
                className="dropdown-item"
                href="#"
                value={measure.label}
                onClick={() => {
                  handleMeasureChange(measure);
                }}
              >
                {measure.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        </div>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default DropDown;
