import React from "react";
import ringforbuilding from "../Assets/ringforbuilding.png";

export default function LoadingScreen() {
  return (
    <div className="loading__container">
      <img
        src={ringforbuilding}
        alt="ringforbuilding"
        className="loading__container__img"
      />
    </div>
  );
}
