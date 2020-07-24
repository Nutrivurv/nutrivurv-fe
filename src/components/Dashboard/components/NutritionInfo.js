import React from "react";
import DropDown from "./DropDown";

const NutritionInfo = (props) => {
  const currentItem = props.currentItem;
  var nutrition = currentItem.nutrition;
  var totalNutrients = nutrition.totalNutrients;
  console.log("total nutrients", totalNutrients);
  var totalDaily = nutrition.totalDaily;

  return (
    <div>
      <div className="card border-primary mb-3">
        <div className="card-header">
          <p>Nutrition Information</p>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <div>
              <h2 className="card-title font-weight-bold">
                {currentItem.label.charAt(0).toUpperCase() +
                  currentItem.label.slice(1)}
              </h2>
              <DropDown currentItem={currentItem} />
            </div>
            <div>
              <img
                alt="food-picture"
                src={currentItem.image}
                className="rounded-circle"
              />
            </div>
          </div>
          <h3 className="font-weight-bold">Health Labels</h3>
          <div className="d-flex flex-wrap border-bottom border-primary py-2">
            {nutrition.healthLabels.map((label) => (
              <div className="p-1 font-weight-bold">
                <span className="badge badge-primary">
                  {label.split("_").join(" ")}
                </span>
              </div>
            ))}
          </div>
          <h3 className="font-weight-bold">Nutrition Facts</h3>
          <h4>Amount Per Serving</h4>
          <div className="d-flex justify-content-between mx-1 px-2">
            <div>
              <h4 className="font-weight-bold">Calories</h4>
            </div>
            <div className="text-right">
              <h5>{nutrition.calories}</h5>
              <p>%Daily Value *</p>
            </div>
          </div>
          <div className="px-2 mx-1">
            <div className="d-flex justify-content-between">
              <h4>Total Fat</h4>

              {totalNutrients.FAT ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.FAT.quantity)}
                    {totalNutrients.FAT.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.FAT.quantity)}
                    {totalDaily.FAT.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Sodium</h4>
              {totalNutrients.NA ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.NA.quantity)}
                    {totalNutrients.NA.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.NA.quantity)}
                    {totalDaily.NA.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Total Carbohydrate</h4>
              {totalNutrients.CHOCDF ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.CHOCDF.quantity)}
                    {totalNutrients.CHOCDF.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.CHOCDF.quantity)}
                    {totalDaily.CHOCDF.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Cholesterol</h4>
              {totalNutrients.CHOLE ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.CHOLE.quantity)}
                    {totalNutrients.CHOLE.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.CHOLE.quantity)}
                    {totalDaily.CHOLE.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Sugar</h4>
              {totalNutrients.SUGAR ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.SUGAR.quantity)}
                    {totalNutrients.SUGAR.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Protein</h4>
              {totalNutrients.PROCNT ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.PROCNT.quantity)}
                    {totalNutrients.PROCNT.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Vitamin D</h4>
              {totalNutrients.VITD ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.VITD.quantity)}
                    {totalNutrients.VITD.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.VITD.quantity)}
                    {totalDaily.VITD.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Calcium</h4>
              {totalNutrients.CA ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.CA.quantity)}
                    {totalNutrients.CA.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.CA.quantity)}
                    {totalDaily.CA.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Iron</h4>
              {totalNutrients.FE ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.FE.quantity)}
                    {totalNutrients.FE.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.FE.quantity)}
                    {totalDaily.FE.unit}
                  </h5>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <h4>Potassium</h4>
              {totalNutrients.K ? (
                <div className="text-right">
                  <h5>
                    {Math.round(totalNutrients.K.quantity)}
                    {totalNutrients.K.unit}
                  </h5>
                  <h5>
                    {Math.round(totalDaily.K.quantity)}
                    {totalDaily.K.unit}
                  </h5>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <button className="btn-primary rounded px-2 py-1 border border-primary">
        Back to Journal
      </button>
    </div>
  );
};
export default NutritionInfo;
