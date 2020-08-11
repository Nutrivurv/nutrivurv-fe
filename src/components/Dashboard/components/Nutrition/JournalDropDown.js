import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import { getNutrients } from "../../../../state/slices/EdamamSlice";

const JournalDropDown = (props) => {
  const { measures, foodId, quantity, measure } = props.currentItem;
  const journalItem = props.journalItem;
  console.log("dropdown", measure);
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newMeasure, setNewMeasure] = useState(journalItem.measurement_name);

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
    <div className="dropdown mx-2 px-4">
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="quantity input" className="w-100">
          Quantity
        </label>
        <div className="d-flex justify-content-center align-text-top">
          <div className="d-flex flex-column d-sm-block d-md-flex">
            <div className="mr-2">
              <input
                className="rounded border border-primary p-2"
                type="number"
                id="itemQuantity"
                name="item_quantity"
                placeholder="Enter quantity (number)"
                defaultValue={newQuantity}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex w-100">
              <Dropdown className="w-100">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {newMeasure === journalItem.measurement_name
                    ? journalItem.measurement_name
                    : newMeasure.measurement_name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {measures.map((measure) => (
                    <Dropdown.Item
                      key={measure.measurement_uri}
                      className="dropdown-item"
                      href="#"
                      value={measure.measurement_name}
                      onClick={() => {
                        handleMeasureChange(measure);
                      }}
                    >
                      {measure.measurement_name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="ml-2 button">
            <button className="p-2 rounded border border-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JournalDropDown;
