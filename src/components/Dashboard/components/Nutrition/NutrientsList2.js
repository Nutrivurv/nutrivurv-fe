import React from "react";
export const Protein = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Protein</h3>
      {totalNutrients.PROCNT ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.PROCNT.quantity)}
            {totalNutrients.PROCNT.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const VitaD = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Vitamin D</h3>
      {totalNutrients.VITD ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.VITD.quantity)}
            {totalNutrients.VITD.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Calcium = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Calcium</h3>
      {totalNutrients.CA ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.CA.quantity)}
            {totalNutrients.CA.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Potassium = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Potassium</h3>
      {totalNutrients.K ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.K.quantity)}
            {totalNutrients.K.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Iron = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Iron</h3>
      {totalNutrients.FE ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.FE.quantity)}
            {totalNutrients.FE.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
