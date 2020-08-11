import React, { useState } from "react";
import { ReactComponent as FullHeart } from "../../../../../assets/FullHeart.svg";
import { ReactComponent as Heart } from "../../../../../assets/HeartOutline.svg";
import { deleteFoodLogEntries } from "../../../../../state/slices/userinfo";
import { useDispatch } from "react-redux";
import { ReactComponent as TrashCan } from "../../../../../assets/Trash-can.svg";
import { Button, Modal } from "react-bootstrap";

const Lunch = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tbody>
      {props.entries.meals.lunch &&
        props.entries.meals.lunch.map((data) => {
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
              <TrashCan className="mt-2" onClick={handleShow} />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Are you sure you want to delete this item?
                  </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteFoodLogEntries(data.id));
                      handleClose();
                    }}
                  >
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
            </tr>
          );
        })}
    </tbody>
  );
};

export default Lunch;
