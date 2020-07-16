import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = (props) => {
  const [label, setLabel] = useState("Serving Size");
  const handleLabelChange = (measure) => {
    setLabel(measure.label);
  };
  var measuresList = props.selectedItemObject.measures;

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
