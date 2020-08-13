import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNutrients } from "../../../../../state/slices/EdamamSlice";
import { getFoodLogEntries } from "../../../../../state/slices/userinfo";
import { deleteFoodLogEntries } from "../../../../../state/slices/userinfo";
import JournalNutritionInfo from "../../Nutrition/JournalNutritionInfo";
import Calendar from "./Calendar";
import MealEntries from "./MealEntries";

const FoodJournal = () => {
  const dispatch = useDispatch();
  const {
    entries,
    fetchEntriesSuccess,
    deleteEntries,
    fetchEntriesLoad,
  } = useSelector((state) => state.user);
  const [favorite, setFavorite] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [journalItem, setJournalItem] = useState();
  const { items, currentItem, searchNutrientsSuccess } = useSelector(
    (state) => state.edamam
  );
  const [mealType, setNewMealType] = useState(currentItem.meal_type);
  const [newMeasure, setNewMeasure] = useState();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [entryIdForDeletion, setEntryIdForDeletion] = useState(null);

  const handleClose = () => setShowDeleteModal(false);
  const handleShow = (entry) => {
    setShowDeleteModal(true);
    setEntryIdForDeletion(entry);
  };

  const handleItemClick = (foodItem) => {
    setJournalItem(foodItem);
    setNewMealType(foodItem.meal_type);
    setNewMeasure(foodItem.measurement_name);
    const {
      quantity,
      edamam_food_id,
      measurement_name,
      food_name,
      measures,
      image_url,
    } = foodItem;
    dispatch(
      getNutrients(
        Number(quantity),
        measurement_name,
        edamam_food_id,
        food_name,
        image_url,
        measures
      )
    );
  };

  useEffect(() => {
    dispatch(getFoodLogEntries(moment(startDate).format("YYYY-MM-DD")));
  }, [getFoodLogEntries, startDate, deleteEntries]);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  if (!fetchEntriesSuccess) return null;

  return (
    <div className="w-75" style={{ margin: "0px auto" }}>
      {fetchEntriesLoad ? (
        <div className="mt-5 flex-column loading d-flex align-items-center">
          <h4 className="mt-5">Updating Your Journal...</h4>
          <div className="mt-5 loader"></div>
        </div>
      ) : (
        <>
          <div className="d-flex justify">
            <Calendar startDate={startDate} setStartDate={setStartDate} />
          </div>
          <table className="table-borderless table border-none">
            <thead>
              <tr>
                <th scope="col">
                  <h5 className="font-weight-bold">Breakfast</h5>
                </th>
                <th scope="col">
                  {" "}
                  <h5 className="font-weight-bold">Fat</h5>
                </th>
                <th scope="col">
                  {" "}
                  <h5 className="font-weight-bold">Protein</h5>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <h5 className="font-weight-bold">Carbs</h5>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <h5 className="font-weight-bold">Calories</h5>{" "}
                </th>
              </tr>
            </thead>
            <MealEntries
              entries={entries.meals.breakfast}
              handleItemClick={handleItemClick}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
              handleShow={handleShow}
              date={startDate}
            />
            <thead>
              <th scope="col">
                <h5 className="font-weight-bold">Lunch</h5>
              </th>
            </thead>
            <MealEntries
              entries={entries.meals.lunch}
              handleItemClick={handleItemClick}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
              handleShow={handleShow}
              date={startDate}
            />
            <thead>
              <th scope="col">
                <h5 className="font-weight-bold">Dinner</h5>
              </th>
            </thead>
            <MealEntries
              entries={entries.meals.dinner}
              handleItemClick={handleItemClick}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
              handleShow={handleShow}
              date={startDate}
            />
            <thead>
              <th scope="col">
                <h5 className="font-weight-bold">Snack</h5>
              </th>
            </thead>
            <MealEntries
              entries={entries.meals.snack}
              handleItemClick={handleItemClick}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
              handleShow={handleShow}
              date={startDate}
            />
          </table>
          <div className="d-flex justify-content-between">
            <p>Total Water:</p>
            <p className="pr-5"> Total Calories:</p>
          </div>
          <Modal
            className="d-flex align-items-center"
            show={showDeleteModal}
            onHide={handleClose}
          >
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
                  dispatch(deleteFoodLogEntries(entryIdForDeletion));
                  handleClose();
                }}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          <div>
            {searchNutrientsSuccess && (
              <JournalNutritionInfo
                startDate={startDate}
                mealType={mealType}
                setNewMealType={setNewMealType}
                journalItem={journalItem}
                currentItem={currentItem}
                newMeasure={newMeasure}
                setNewMeasure={setNewMeasure}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FoodJournal;
