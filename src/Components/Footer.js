import React from "react";
import footer__img from "../Assets/footer__img.png";

export default function Footer() {
  return (
    <div className="footer__container">
      <img src={footer__img} alt="footer__img" />
      <div className="footer__container__bar">
        <div className="footer__container__bar__entry"></div>
        <div className="footer__container__bar__entry__active"></div>
        <div className="footer__container__bar__entry"></div>
      </div>
    </div>
  );
}
