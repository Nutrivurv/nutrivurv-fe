import React from "react";
import DropDown from "./DropDown";

const NutritionInfo = (props) => {
  const currentItem = props.currentItem;
  var nutrition = currentItem.nutrition;
  var totalNutrients = nutrition.totalNutrients;
  console.log("total nutrients", totalNutrients);
  var totalDaily = nutrition.totalDaily;

  return (
    <div className="mr-4 pr-4">
      <div className="card nutrition border-primary mb-3 mt-5">
        <div className="card-header-light">
          <h4>Nutrition Information</h4>
        </div>
        <div className="card-body justify-content-center mx-2">
          <div className="d-flex justify-content-center">
            <div className="mx-2 px-2 justify-content-center">
              <h2 className="d-flex justify-content-center card-title font-weight-bold">
                {currentItem.label.charAt(0).toUpperCase() +
                  currentItem.label.slice(1)}
              </h2>
              <div className="d-flex justify-content-center">
                <img
                  alt="food-picture"
                  src={currentItem.image}
                  className="w-50 rounded-circle img-responsive d-sm-none d-md-block"
                />
              </div>
              <DropDown currentItem={currentItem} />
            </div>
          </div>
          <h3 className="font-weight-bold d-sm-none d-md-block">
            Health Labels
          </h3>
          <div className="d-flex flex-wrap border-bottom border-primary py-2 d-sm-none d-md-flex">
            {nutrition.healthLabels.map((label) => (
              <div className="p-1 font-weight-bold" key={currentItem.foodId}>
                <span className="badge badge-primary">
                  {label.split("_").join(" ")}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pb-2">
            <h3 className="font-weight-bold">Nutrition Facts</h3>
          </div>
          <div className="pb-2">
            <h4>Amount Per Serving</h4>
          </div>
          <div className="d-block d-sm-block d-md-flex justify-content-between mx-1 px-2">
            <div>
              <h3 className="font-weight-bold">Calories</h3>
            </div>
            <div className="d-block d-sm-block d-md-none text-left">
              <h3>{nutrition.calories}</h3>
              <p>%Daily Value *</p>
            </div>
            <div className="d-none d-md-block text-right">
              <h3>{nutrition.calories}</h3>
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
      <button className="btn-primary rounded p-2 border border-primary">
        Back to Journal
      </button>
    </div>
  );
};
export default NutritionInfo;
