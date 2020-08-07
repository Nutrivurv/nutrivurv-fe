import React from "react";
export const Fat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Total Fat</h3>
      {totalNutrients.FAT ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.FAT.quantity)}
            {totalNutrients.FAT.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const SatFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Saturated Fat</h4>
      {totalNutrients.FASAT ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FASAT.quantity)}
            {totalNutrients.FASAT.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const TransFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Trans Fat</h4>
      {totalNutrients.FATRN ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FATRN.quantity)}
            {totalNutrients.FATRN.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const PolyFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Polyunsaturated Fat</h4>
      {totalNutrients.FAPU ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FAPU.quantity)}
            {totalNutrients.FAPU.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const MonoFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Monounsaturated Fat</h4>
      {totalNutrients.FAPU ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FAPU.quantity)}
            {totalNutrients.FAPU.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
