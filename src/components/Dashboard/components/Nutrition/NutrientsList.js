import React from "react";
export const Chol = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Cholesterol</h3>
      {totalNutrients.CHOLE ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.CHOLE.quantity)}
            {totalNutrients.CHOLE.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Sodium = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Sodium</h3>
      {totalNutrients.NA ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.NA.quantity)}
            {totalNutrients.NA.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Carbs = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Total Carbohydrate</h3>
      {totalNutrients.CHOCDF ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.CHOCDF.quantity)}
            {totalNutrients.CHOCDF.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Fiber = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Dietary Fiber</h4>
      {totalNutrients.FIBTG ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FIBTG.quantity)}
            {totalNutrients.FIBTG.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Sugar = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Sugar</h4>
      {totalNutrients.SUGAR ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.SUGAR.quantity)}
            {totalNutrients.SUGAR.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
