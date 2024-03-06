import React from "react";
import "./screen.css";
import LeftSide from "../leftside/LeftSide";
import RightSide from "../rightside/RightSide";

export default function Screen() {
  return (
    <div className="screen">
      <p>
        CryptoCurrencies <span>Bitcoins</span>
      </p>
      <div className="screen-cont">
        <LeftSide></LeftSide>
        <section className="screen-right">
          <RightSide></RightSide>
        </section>
      </div>
    </div>
  );
}
